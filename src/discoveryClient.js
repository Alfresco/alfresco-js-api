'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');

class DiscoveryClient extends AlfrescoApiClient {

    /**
     * @param {Object} config
     */
    constructor(config) {
        super();

        this.config = config;

        this.changeHost();
    }

    changeHost() {
        this.host = this.config.hostEcm;
        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api';
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

module.exports = DiscoveryClient;
