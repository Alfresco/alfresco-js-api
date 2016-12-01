'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');

class BpmClient extends AlfrescoApiClient {

    /**
     * @param {String} host
     */
    constructor(host) {
        super();

        this.host = host;

        this.changeHost(host);
    }

    /**
     * Change the Host
     *
     * @param {String} host
     * */
    changeHost(host) {
        this.basePath = host + '/activiti-app';
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
