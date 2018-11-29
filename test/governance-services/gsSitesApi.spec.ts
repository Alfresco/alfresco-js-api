/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from 'alfresco-js-api';
let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
let GsSitesApiMock = require('../../test/mockObjects/mockAlfrescoApi').GsSitesApi;
let expect = require('chai').expect;

describe('Governance API test', function () {

    beforeEach(function () {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.gsSitesApiMock = new GsSitesApiMock(this.hostEcm);

        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });
    });

    it('should getRMSite return the RM site', function (done) {
        this.gsSitesApiMock.get200Response();

        this.alfrescoJsApi.gsCore.gsSitesApi.getRMSite().then((data)=> {
            expect(data.entry.description).to.be.equal('Records Management Description Test');
            done();
        });

    });

});
