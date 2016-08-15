/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var TagMock = require('../test/mockObjects/mockAlfrescoApi').Tag;
var expect = require('chai').expect;

describe('Tags', function () {

    beforeEach(function (done) {
        this.host = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.host);
        this.tagMock = new TagMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin',
            password: 'admin',
            host: this.host
        });

        this.alfrescoJsApi.login().then(() => {
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
        }, function (error) {
            console.error(error);
            done();
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
