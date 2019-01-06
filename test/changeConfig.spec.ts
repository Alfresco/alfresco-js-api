/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../src/alfrescoApiCompatibility';
let expect = require('chai').expect;
let AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;

describe('Change config', function () {
    beforeEach(function (done) {
        this.config = {
            hostBpm: 'http://127.0.0.1:9999',
            hostEcm: 'http://127.0.0.1:8080',
            provider: 'ALL'
        };

        this.authResponseBpmMock = new AuthBpmMock(this.config.hostBpm);
        this.authResponseMock = new AuthResponseMock(this.config.hostEcm);

        this.authResponseMock.get201Response();
        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi(this.config);

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

    });

    describe('Change hosts', function () {

        it('Change host Ecm', function () {
            expect(this.alfrescoJsApi.contentClient.basePath).to.be.equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');

            this.alfrescoJsApi.changeEcmHost('http://differenTserverEcm:9898');

            expect(this.alfrescoJsApi.contentClient.basePath).to.be.equal('http://differenTserverEcm:9898/alfresco/api/-default-/public/alfresco/versions/1');
        });

        it('Change host bpm', function () {
            expect(this.alfrescoJsApi.processClient.basePath).to.be.equal('http://127.0.0.1:9999/activiti-app');

            this.alfrescoJsApi.changeBpmHost('http://differenTserverBpm:2222');

            expect(this.alfrescoJsApi.processClient.basePath).to.be.equal('http://differenTserverBpm:2222/activiti-app');
        });

        it('Change host ecm bpm', function () {
            expect(this.alfrescoJsApi.contentClient.basePath).to.be.equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');
            expect(this.alfrescoJsApi.processClient.basePath).to.be.equal('http://127.0.0.1:9999/activiti-app');

            this.alfrescoJsApi.changeEcmHost('http://differenTserverEcm:9898');
            this.alfrescoJsApi.changeBpmHost('http://differenTserverBpm:2222');

            expect(this.alfrescoJsApi.contentClient.basePath).to.be.equal('http://differenTserverEcm:9898/alfresco/api/-default-/public/alfresco/versions/1');
            expect(this.alfrescoJsApi.processClient.basePath).to.be.equal('http://differenTserverBpm:2222/activiti-app');
        });
    });

});
