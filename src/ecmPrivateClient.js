'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');

class EcmClient extends AlfrescoApiClient {

    /**
     * @param {String} host
     * @param {String} contextRoot
     * @param {Object} config
     */
    constructor(host, contextRoot, config) {
        super();

        this.host = host;
        this.contextRoot = contextRoot;
        this.config = config;

        this.changeHost(host);
    }

    /**
     * set the Authentication
     *
     * @param {String} authentications
     * */
    changeHost(host) {
        this.basePath = host + '/' + this.contextRoot + '/api/-default-/private/alfresco/versions/1';
    }

    /**
     * set the Authentications
     *
     * @param {Object} authentications
     * */
    setAuthentications(authentications) {
        this.authentications = authentications;
    }

}

module.exports = EcmClient;
