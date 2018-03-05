'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');
var Emitter = require('event-emitter');

class oauth2Auth extends AlfrescoApiClient {

    /**
     * @param {Object} config
     */
    constructor(config) {
        super();
        this.config = config;

        if (this.config.oauth2) {
            if (this.config.oauth2.host === undefined || this.config.oauth2.host === null) {
                throw 'Missing the required oauth2 host parameter';
            }

            if (this.config.oauth2.clientId === undefined || this.config.oauth2.clientId === null) {
                throw 'Missing the required oauth2 clientId parameter';
            }

            if (this.config.oauth2.secret === undefined || this.config.oauth2.secret === null) {
                throw 'Missing the required oauth2 secret parameter';
            }

            this.basePath = this.config.oauth2.host; //Auth Call

            this.authentications = {
                'basicAuth': {type: 'oauth2', accessToken: ''}
            };

            if (this.config.accessToken) {
                this.setTicket(this.config.accessToken);
            }
        }

        Emitter.call(this);
    }

    /**
     * login Alfresco API
     * @param  {String} username:   // Username to login
     * @param  {String} password:   // Password to login
     *
     * @returns {Promise} A promise that returns {new authentication token} if resolved and {error} if rejected.
     * */
    login(username, password) {
        var postBody = {}, pathParams = {}, queryParams = {}, formParams = {};

        var auth = 'Basic ' + new Buffer(this.config.oauth2.clientId + ':' + this.config.oauth2.secret).toString('base64');

        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': auth
        };

        formParams = {
            username: username,
            password: password,
            grant_type: 'password',
            client_id: this.config.oauth2.clientId
        };

        var authNames = [];
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];

        var url = this.config.oauth2.authPath || '/oauth/token';
        this.promise = new Promise((resolve, reject) => {
            this.callApi(
                url, 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, {}
            ).then(
                (data) => {
                    this.setToken(data.access_token, data.refresh_token);
                    resolve(data);
                },
                (error) => {
                    if (error.error.status === 401) {
                        this.promise.emit('unauthorized');
                    }
                    this.promise.emit('error');
                    reject(error.error);
                });
        });

        Emitter(this.promise); // jshint ignore:line

        return this.promise;
    }

    /**
     * Refresh the  Token
     *
     * */
    refreshToken() {
        var postBody = {}, pathParams = {}, queryParams = {}, formParams = {};

        var auth = 'Basic ' + new Buffer(this.config.oauth2.clientId + ':' + this.config.oauth2.secret).toString('base64');

        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
            'Authorization': auth
        };

        queryParams = {
            refresh_token: this.authentications.basicAuth.refreshToken,
            grant_type: 'refresh_token'
        };

        var authNames = [];
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];

        this.promise = new Promise((resolve, reject) => {
            this.callApi(
                '/oauth/token', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, {}
            ).then(
                (data) => {
                    this.setToken(data.access_token, data.refresh_token);
                    resolve(data);
                },
                (error) => {
                    if (error.error.status === 401) {
                        this.promise.emit('unauthorized');
                    }
                    this.promise.emit('error');
                    reject(error.error);
                });
        });

        Emitter(this.promise); // jshint ignore:line

        return this.promise;
    }

    /**
     * Set the current Token
     *
     * @param {String} Token
     * @param {String} refreshToken
     * */
    setToken(token, refreshToken) {
        this.authentications.basicAuth.accessToken = token;
        this.authentications.basicAuth.refreshToken = refreshToken;
        this.authentications.basicAuth.password = null;
        this.token = token;
    }

    /**
     * Get the current Token
     *
     * */
    getToken() {
        return this.token;
    }

    /**
     * return the Authentication
     *
     * @returns {Object} authentications
     * */
    getAuthentication() {
        return this.authentications;
    }

    /**
     * Change the Host
     *
     * @param {String} host
     * */
    changeHost(host) {
        this.config.hostOauth2 = host;
    }

    /**
     * If the client is logged in retun true
     *
     * @returns {Boolean} is logged in
     */
    isLoggedIn() {
        return !!this.authentications.basicAuth.accessToken;
    }
}

Emitter(oauth2Auth.prototype); // jshint ignore:line
module.exports = oauth2Auth;
