/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility } from '@alfresco/js-api';
let AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
let DiscoveryMock = require('../test/mockObjects/mockAlfrescoApi').Discovery;
let expect = require('chai').expect;

describe('Discovery', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.discoveryMock = new DiscoveryMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApiCompatibility({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('should getRepositoryInformation works', function (done) {
        this.discoveryMock.get200Response();

        this.alfrescoJsApi.discovery.discoveryApi.getRepositoryInformation().then(function (data) {
            expect(data.entry.repository.edition).to.be.equal('Enterprise');
            done();
        }, function (error) {
            console.error(error);
        });

    });

});
