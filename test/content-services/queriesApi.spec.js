/*global describe, it, beforeEach, assert */

var AlfrescoApi = require('../../main');
var AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
var FindNodesMock = require('../../test/mockObjects/mockAlfrescoApi').FindNodes;
var expect = require('chai').expect;

describe('Queries', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.nodesMock = new FindNodesMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(function() {
            done();
        });
    });

    describe('nodes', function () {

        var searchTerm = 'test';

        it('should throw exception if no search term is provided', function() {
            var badCall = function () {
                this.alfrescoJsApi.core.queriesApi.findNodes();
            }.bind(this);
            expect(badCall).to.throw('Missing the required parameter \'term\' when calling findNodes');
        });

        it('should invoke error handler on a server error', function (done) {
            this.nodesMock.get401Response();

            this.alfrescoJsApi.core.queriesApi.findNodes(searchTerm).then(function () {
            }, function () {
                done();
            });
        });

        it('should return query results', function (done) {
            this.nodesMock.get200Response();

            this.alfrescoJsApi.core.queriesApi.findNodes(searchTerm).then(function (data) {
                expect(data.list.pagination.count).to.be.equal(2);
                expect(data.list.entries[0].entry.name).to.be.equal('coins1.JPG');
                expect(data.list.entries[1].entry.name).to.be.equal('coins2.JPG');
                done();
            }, function () {
                assert.fail('promise rejected');
            });
        });

    });

});
