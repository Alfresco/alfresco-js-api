/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '@alfresco/js-api';
let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
let TagMock = require('../../test/mockObjects/mockAlfrescoApi').Tag;
let expect = require('chai').expect;

describe('Tags', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.tagMock = new TagMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('tags', function (done) {
        this.tagMock.get200Response();

        this.alfrescoJsApi.core.tagsApi.getTags().then(function (data) {
            expect(data.list.pagination.count).to.be.equal(2);
            expect(data.list.entries[0].entry.tag).to.be.equal('tag-test-1');
            expect(data.list.entries[1].entry.tag).to.be.equal('tag-test-2');
            done();
        }, function () {
        });
    });

    it('Tags 401', function (done) {
        this.tagMock.get401Response();

        this.alfrescoJsApi.core.tagsApi.getTags().then(function () {
        }, function () {
            done();
        });
    });

});
