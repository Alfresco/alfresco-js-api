'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');

class EcmClient extends AlfrescoApiClient {

    /**
     * @param {Object} config
     */
    constructor(config, servicePath) {
        super();

        this.config = config;
        this.servicePath = servicePath;

        this.changeHost();
    }

    changeHost() {
        this.host = this.config.hostEcm;

        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + this.servicePath;
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
