/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var expect = require('chai').expect;

describe('Governance client test', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://rmdemo.alfresco.com:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);

        // this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it.only('should getRepositoryInformation works', function (done) {
        this.authResponseMock.rec();
        // GsCore: AlfrescoApi.GsCore;
        // GsClassification: AlfrescoApi.GsClassification;

        this.alfrescoJsApi.gsCore.gsSitesApi.deleteRMSite().then(function () {
            this.authResponseMock.play();
            done();
        }, function (error) {
            this.authResponseMock.play();
            expect(error);
            console.error(error);
        });

    });

});
