'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');
var Emitter = require('event-emitter');

class BpmAuth extends AlfrescoApiClient {

    /**
     * @param {Object} config
     *
     *      config = {
     *        host:       // alfrescoHost Your share server IP or DNS name
     *        hostActiviti: // hostActiviti Your activiti server IP or DNS name
     *        contextRoot: // contextRoot default value alfresco
     *        username:   // Username to login
     *        password:   // Password to login
     *        ticket:     // Ticket if you already have a ticket you can pass only the ticket and skip the login, in this case you don't need username and password
     *    };
     */
    constructor(config) {
        super();
        this.basePath = config.hostActiviti + '/activiti-app';   //Activiti Call
        this.authentications.basicAuth.username = config.username;
        this.authentications.basicAuth.password = config.password;
        Emitter.call(this);
    }

    /**
     * login Activiti API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login() {

        var postBody = {}, pathParams = {}, queryParams = {};

        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        };
        var formParams = {
            j_username: this.authentications.basicAuth.username,
            j_password: this.authentications.basicAuth.password,
            _spring_security_remember_me: true,
            submit: 'Login'
        };

        var authNames = [];
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];

        return this.callApi(
            '/app/authentication', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts
        );
    }

}

Emitter(BpmAuth.prototype); // jshint ignore:line
module.exports = BpmAuth;
