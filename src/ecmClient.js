'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');

class EcmClient extends AlfrescoApiClient {

    /**
     * @param {String} host
     * @param {String} contextRoot
     */
    constructor(host, contextRoot) {
        super();

        this.host = host;
        this.contextRoot = contextRoot;

        this.changeHost(host);
    }

    /**
     * set the Authentication
     *
     * @param {String} authentications
     * */
    changeHost(host) {
        this.hostEcm = host;
        this.basePath = host + '/' + this.contextRoot + '/api/-default-/public/alfresco/versions/1';
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
