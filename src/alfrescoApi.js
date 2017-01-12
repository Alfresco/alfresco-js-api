'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');
var AlfrescoPrivateRestApi = require('./alfresco-private-rest-api/src/index.js');
var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index');
var AlfrescoActivitiApi = require('./alfresco-activiti-rest-api/src/index');
var AlfrescoContent = require('./alfrescoContent');
var AlfrescoNode = require('./alfrescoNode');
var AlfrescoUpload = require('./alfrescoUpload');
var Emitter = require('event-emitter');
var EcmAuth = require('./ecmAuth');
var BpmAuth = require('./bpmAuth');
var EcmClient = require('./ecmClient');
var BpmClient = require('./bpmClient');
var EcmPrivateClient = require('./ecmPrivateClient');
var _ = require('lodash');

class AlfrescoApi {
    /**
     * @param {Object} config
     *
     *      config = {
     *        hostEcm:       // hostEcm Your share server IP or DNS name
     *        hostBpm: // hostBpm Your activiti server IP or DNS name
     *        contextRoot: // contextRoot default value alfresco
     *        contextRootBpm: // contextRoot activiti default value activiti-app
     *        provider:   // ECM BPM ALL OAUTH, default ECM
     *        ticketEcm:     // Ticket if you already have a ECM ticket you can pass only the ticket and skip the login, in this case you don't need username and password
     *        ticketBpm:     // Ticket if you already have a BPM ticket you can pass only the ticket and skip the login, in this case you don't need username and password
     *        disableCsrf:   // To disable CSRF Token to be submitted. Only for Activiti call, by default is false.
     *    };
     */
    constructor(config) {

        if (!config) {
            config = {};
        }

        this.config = {
            hostEcm: config.hostEcm || 'http://127.0.0.1:8080',
            hostBpm: config.hostBpm || 'http://127.0.0.1:9999',
            contextRoot: config.contextRoot || 'alfresco',
            contextRootBpm: config.contextRootBpm || 'activiti-app',
            provider: config.provider || 'ECM',
            ticketEcm: config.ticketEcm,
            ticketBpm: config.ticketBpm,
            accessToken: config.accessToken,
            disableCsrf: config.disableCsrf || false
        };

        this.bpmAuth = new BpmAuth(this.config);
        this.ecmAuth = new EcmAuth(this.config);

        this.ecmPrivateClient = new EcmPrivateClient(this.config);
        this.ecmClient = new EcmClient(this.config);
        this.bpmClient = new BpmClient(this.config);
        this.setAuthenticationClientECMBPM(this.ecmAuth.getAuthentication(), this.bpmAuth.getAuthentication());

        this.initObjects();

        Emitter.call(this);
    }

    changeCsrfConfig(disableCsrf) {
        this.config.disableCsrf = disableCsrf;
        this.bpmAuth.changeCsrfConfig(disableCsrf);
    }

    changeEcmHost(hostEcm) {
        this.config.hostEcm = hostEcm;
        this.ecmAuth.changeHost();
        this.ecmClient.changeHost();
    }

    changeBpmHost(hostBpm) {
        this.config.hostBpm = hostBpm;
        this.bpmAuth.changeHost();
        this.bpmClient.changeHost();
    }

    initObjects() {
        //BPM
        AlfrescoActivitiApi.ApiClient.instance = this.bpmClient;
        this.activiti = {};
        this.activitiStore = AlfrescoActivitiApi;
        this._instantiateObjects(this.activitiStore, this.activiti);

        //ECM
        AlfrescoCoreRestApi.ApiClient.instance = this.ecmClient;
        this.core = {};
        this.coreStore = AlfrescoCoreRestApi;
        this._instantiateObjects(this.coreStore, this.core);

        //ECM-Private
        AlfrescoPrivateRestApi.ApiClient.instance = this.ecmPrivateClient;
        this.corePrivateStore = AlfrescoPrivateRestApi;
        this._instantiateObjects(this.corePrivateStore, this.core);

        this.nodes = this.node = new AlfrescoNode();
        this.content = new AlfrescoContent(this.ecmAuth, this.ecmClient);
        this.upload = new AlfrescoUpload();
        this.webScript = this.core.webscriptApi;
    }

    _instantiateObjects(module, moduleCopy) {
        var classArray = Object.keys(module);

        classArray.forEach((currentClass)=> {
            moduleCopy[currentClass] = module[currentClass];
            var obj = this._stringToObject(currentClass, module);
            var nameObj = _.lowerFirst(currentClass);
            moduleCopy[nameObj] = obj;
        });
    }

    _stringToObject(nameClass, module) {
        try {
            if (typeof module[nameClass] === 'function') {
                return new module[nameClass]();
            }
        } catch (error) {
            console.log(nameClass + '  ' + error);
        }
    }

    /**
     * login Alfresco API
     * @param  {String} username:   // Username to login
     * @param  {String} password:   // Password to login
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login(username, password) {
        if (this._isBpmConfiguration()) {
            var bpmPromise = this.bpmAuth.login(username, password);

            bpmPromise.then((ticketBpm)=> {
                this.config.ticketBpm = ticketBpm;
            },()=> {});

            return bpmPromise;
        } else if (this._isEcmConfiguration()) {
            var ecmPromise = this.ecmAuth.login(username, password);

            ecmPromise.then((ticketEcm)=> {
                this.setAuthenticationClientECMBPM(this.ecmAuth.getAuthentication(), null);

                this.config.ticketEcm = ticketEcm;
            },()=> {});

            return ecmPromise;

        } else if (this._isEcmBpmConfiguration()) {
            var bpmEcmPromise = this._loginBPMECM(username, password);

            bpmEcmPromise.then((data)=> {
                this.config.ticketEcm = data[0];
                this.config.ticketBpm = data[1];
            },()=> {});

            return bpmEcmPromise;
        }
    }

    setAuthenticationClientECMBPM(authECM, authBPM) {
        this.ecmClient.setAuthentications(authECM);
        this.ecmPrivateClient.setAuthentications(authECM);
        this.bpmClient.setAuthentications(authBPM);
    }

    /**
     * login Tickets
     *
     * @param  {String} ticketEcm // alfresco ticket
     * @param  {String} ticketBpm // alfresco ticket
     *
     * @returns {Promise} A promise that returns { authentication ticket} if resolved and {error} if rejected.
     * */
    loginTicket(ticketEcm, ticketBpm) {
        this.config.ticketEcm = ticketEcm;
        this.config.ticketBpm = ticketBpm;

        return this.ecmAuth.validateTicket();
    }

    _loginBPMECM(username, password) {
        var ecmPromise = this.ecmAuth.login(username, password);
        var bpmPromise = this.bpmAuth.login(username, password);

        this.promise = new Promise((resolve, reject) => {
            Promise.all([ecmPromise, bpmPromise]).then(
                (data) => {
                    this.promise.emit('success');
                    resolve(data);
                },
                (error) => {
                    if (error.status === 401) {
                        this.promise.emit('unauthorized');
                    }
                    this.promise.emit('error');
                    reject(error);
                });
        });

        Emitter(this.promise); // jshint ignore:line

        return this.promise;
    }

    /**
     * logout Alfresco API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    logout() {
        if (this.config.provider && this.config.provider.toUpperCase() === 'BPM') {
            return this.bpmAuth.logout();
        } else if (this.config.provider && this.config.provider.toUpperCase() === 'ECM') {
            var ecmPromise = this.ecmAuth.logout();
            ecmPromise.then(()=> {
                this.config.ticket = undefined;
            },()=> {});

            return ecmPromise;
        } else if (this.config.provider && this.config.provider.toUpperCase() === 'ALL') {
            return this._logoutBPMECM();
        }
    }

    _logoutBPMECM() {
        var ecmPromise = this.ecmAuth.logout();
        var bpmPromise = this.bpmAuth.logout();

        this.promise = new Promise((resolve, reject) => {
            Promise.all([ecmPromise, bpmPromise]).then(
                (data) => {
                    this.config.ticket = undefined;
                    this.promise.emit('logout');
                    resolve('logout');
                },
                (error) => {
                    if (error.status === 401) {
                        this.promise.emit('unauthorized');
                    }
                    this.promise.emit('error');
                    reject(error);
                });
        });

        Emitter(this.promise); // jshint ignore:line

        return this.promise;
    }

    /**
     * If the client is logged in retun true
     *
     * @returns {Boolean} is logged in
     */
    isLoggedIn() {
        if (this.config.provider && this.config.provider.toUpperCase() === 'BPM') {
            return this.bpmAuth.isLoggedIn();
        } else if (this.config.provider && this.config.provider.toUpperCase() === 'ECM') {
            return this.ecmAuth.isLoggedIn();
        } else if (this.config.provider && this.config.provider.toUpperCase() === 'ALL') {
            return this.ecmAuth.isLoggedIn() && this.bpmAuth.isLoggedIn();
        }
    }

    /**
     * Set the current Ticket
     *
     * @param {String} ticketEcm
     * @param {String} TicketBpm
     * */
    setTicket(ticketEcm, TicketBpm) {
        this.ecmAuth.setTicket(ticketEcm);
        this.bpmAuth.setTicket(TicketBpm);
    }

    /**
     * Get the current Ticket for the Bpm
     *
     * @returns {String} Ticket
     * */
    getTicketBpm() {
        return this.bpmAuth.getTicket();
    }

    /**
     * Get the current Ticket for the Ecm
     *
     * @returns {String} Ticket
     * */
    getTicketEcm() {
        return this.ecmAuth.getTicket();
    }

    /**
     * Get the current Ticket for the Ecm and BPM
     *
     * @returns {Array} Ticket
     * */
    getTicket() {
        return [this.ecmAuth.getTicket(), this.bpmAuth.getTicket()];
    }

    _isBpmConfiguration() {
        return this.config.provider && this.config.provider.toUpperCase() === 'BPM';
    }

    _isEcmConfiguration() {
        return this.config.provider && this.config.provider.toUpperCase() === 'ECM';
    }

    _isOauthConfiguration() {
        return this.config.provider && this.config.provider.toUpperCase() === 'OAUTH';
    }

    _isEcmBpmConfiguration() {
        return this.config.provider && this.config.provider.toUpperCase() === 'ALL';
    }

}

Emitter(AlfrescoApi.prototype); // jshint ignore:line
module.exports = AlfrescoApi;

module.exports.Activiti = AlfrescoActivitiApi;
module.exports.Core = AlfrescoCoreRestApi;
module.exports.Auth = AlfrescoAuthRestApi;
