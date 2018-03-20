'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');

class BpmClient extends AlfrescoApiClient {

    /**
     * @param {Object} config
     */
    constructor(config) {
        super();

        this.className = 'BpmClient';

        this.config = config;

        this.changeHost();
    }

    changeHost() {
        this.host = this.config.hostBpm;
        this.basePath = this.config.hostBpm + '/' + this.config.contextRootBpm;
    }

    /**
     * set the authentications
     *
     * @param {Object} authentications
     * */
    setAuthentications(authentications) {
        this.authentications = authentications;
    }

}

module.exports = BpmClient;
