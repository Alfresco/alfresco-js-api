/*global describe, it, beforeEach, assert */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';

let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
let FindNodesMock = require('../../test/mockObjects/mockAlfrescoApi').FindNodes;
let expect = require('chai').expect;

describe('Queries', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.nodesMock = new FindNodesMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(function () {
            done();
        });
    });

    describe('nodes', function () {

        let searchTerm = 'test';

        it('should throw exception if no search term is provided', function () {
            let badCall = () => {
                this.alfrescoJsApi.core.queriesApi.findNodes();
            };
            expect(badCall).to.throw(`Missing param 'term'`);
        });

        it('should invoke error handler on a server error', function (done) {
            this.nodesMock.get401Response();

            this.alfrescoJsApi.core.queriesApi.findNodes(searchTerm).then(function () {
            },                                                            function () {
                done();
            });
        });

        it('should return query results', function (done) {
            this.nodesMock.get200Response();

            this.alfrescoJsApi.core.queriesApi.findNodes(searchTerm).then(function (data: any) {
                expect(data.list.pagination.count).to.be.equal(2);
                expect(data.list.entries[0].entry.name).to.be.equal('coins1.JPG');
                expect(data.list.entries[1].entry.name).to.be.equal('coins2.JPG');
                done();
            },                                                            function () {
            });
        });

    });

});
