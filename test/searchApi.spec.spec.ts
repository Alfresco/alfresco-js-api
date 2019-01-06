/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '@alfresco/js-api';
let AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
let SearchMock = require('../test/mockObjects/mockAlfrescoApi').Search;
let expect = require('chai').expect;

describe('Search', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.searchMock = new SearchMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('should search works', function (done) {
        this.searchMock.get200Response();

        this.alfrescoJsApi.search.searchApi.search({
            'query': {
                'query': 'select * from cmis:folder',
                'language': 'cmis'
            }
        }).then(function (data) {
            expect(data.list.entries[0].entry.name).to.be.equal('user');
            done();
        },      function (error) {
            console.error(error);
        });
    });

});
