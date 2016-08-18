'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');
var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index');
var AlfrescoActivitiApi = require('./alfresco-activiti-rest-api/src/index');
var AlfrescoMock = require('../test/mockObjects/mockAlfrescoApi.js');
var AlfrescoContent = require('./alfrescoContent');
var AlfrescoNode = require('./alfrescoNode');
var AlfrescoUpload = require('./alfrescoUpload');
var AlfrescoWebScriptApi = require('./alfrescoWebScript');
var Emitter = require('event-emitter');
var EcmAuth = require('./ecmAuth');
var BpmAuth = require('./bpmAuth');
var _ = require('lodash');

class AlfrescoApi {
    /**
     * @param {Object} config
     *
     *      config = {
     *        host:       // alfrescoHost Your share server IP or DNS name
     *        hostActiviti: // hostActiviti Your activiti server IP or DNS name
     *        contextRoot: // contextRoot default value alfresco
     *        provider:   // ECM BPM ALL
     *        ticket:     // Ticket if you already have a ticket you can pass only the ticket and skip the login, in this case you don't need username and password
     *    };
     */
    constructor(config) {
        this.config = {
            host: config.host || 'http://127.0.0.1:8080',
            hostActiviti: config.hostActiviti || 'http://127.0.0.1:9999',
            contextRoot: config.contextRoot || 'alfresco',
            provider: config.provider || 'ECM',
            ticket: config.ticket
        };

        this.bpmAuth = new BpmAuth(this.config);
        this.ecmAuth = new EcmAuth(this.config);

        if (config.ticket) {
            this.initObjects();
        }

        Emitter.call(this);
    }

    initObjects() {
        if (this.config.provider === 'BPM' || this.config.provider === 'ALL') {
            AlfrescoActivitiApi.ApiClient.instance = this.bpmAuth.getClient();
            this.activiti = {};
            this.activitiStore = AlfrescoActivitiApi;
            this._instantiateObjects(this.activitiStore, this.activiti);
        }

        if (this.config.provider === 'ECM' || this.config.provider === 'ALL') {
            AlfrescoCoreRestApi.ApiClient.instance = this.ecmAuth.getClient();
            this.core = {};
            this.coreStore = AlfrescoCoreRestApi;
            this._instantiateObjects(this.coreStore, this.core);

            this.nodes = this.node = new AlfrescoNode();
            this.content = new AlfrescoContent(this.ecmAuth);
            this.upload = new AlfrescoUpload();
            this.webScript = new AlfrescoWebScriptApi();
        }
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
     * return an Alfresco API Client
     *
     * @returns {ApiClient} Alfresco API Client
     * */
    getClient() {
        return this.ecmAuth.getClient();
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
            bpmPromise.then(()=> {
                this.initObjects();
            });

            return bpmPromise;
        } else if (this._isEcmConfiguration()) {
            var ecmPromise = this.ecmAuth.login(username, password);
            ecmPromise.then((data)=> {
                this.initObjects();
                this.config.ticket = data;
            });

            return ecmPromise;

        } else if (this._isEcmBpmConfiguration()) {
            var bpmEcmPromise = this._loginBPMECM(username, password);
            bpmEcmPromise.then((data)=> {
                this.initObjects();
                this.config.ticket = data[0];
            });

            return bpmEcmPromise;
        }
    }

    /**
     * login Alfresco API
     *
     * @param  {String} ticket // alfresco ticket
     *
     * @returns {Promise} A promise that returns { authentication ticket} if resolved and {error} if rejected.
     * */
    loginTicket(ticket) {
        this.config.ticket = ticket;
        var promiseValidate = this.ecmAuth.validateTicket();

        promiseValidate.then(()=> {
            this.initObjects();
        });

        return promiseValidate;
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
            ecmPromise.then((data)=> {
                this.config.ticket = undefined;
            });

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
     * @param {String} Ticket
     * */
    setTicket(ticket) {
        return this.ecmAuth.setTicket(ticket);
    }

    /**
     * Get the current Ticket
     *
     * @returns {String} Ticket
     * */
    getTicket() {
        return this.ecmAuth.getTicket();
    }

    _isBpmConfiguration() {
        return this.config.provider && this.config.provider.toUpperCase() === 'BPM';
    }

    _isEcmConfiguration() {
        return this.config.provider && this.config.provider.toUpperCase() === 'ECM';
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
module.exports.Mock = AlfrescoMock;
