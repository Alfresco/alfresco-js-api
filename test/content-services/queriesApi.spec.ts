/*global describe, it, beforeEach, assert */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { QueriesApi } from '../../src/api/content-rest-api';

let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
let FindNodesMock = require('../../test/mockObjects/mockAlfrescoApi').FindNodes;
let expect = require('chai').expect;

describe('Queries', () => {
    let authResponseMock: any;
    let nodesMock: any;
    let queriesApi: QueriesApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        nodesMock = new FindNodesMock();

        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        queriesApi = new QueriesApi(alfrescoJsApi);
    });

    describe('nodes', () => {

        const searchTerm = 'test';

        it('should throw exception if no search term is provided', () => {
            let badCall = () => {
                queriesApi.findNodes(null);
            };
            expect(badCall).to.throw(`Missing param 'term'`);
        });

        it('should invoke error handler on a server error', (done) => {
            nodesMock.get401Response();

            queriesApi.findNodes(searchTerm).then(
                () => {},
                () => {
                    done();
                }
            );
        });

        it('should return query results', (done) => {
            nodesMock.get200Response();

            queriesApi.findNodes(searchTerm).then(
                (data) => {
                    expect(data.list.pagination.count).to.be.equal(2);
                    expect(data.list.entries[0].entry.name).to.be.equal('coins1.JPG');
                    expect(data.list.entries[1].entry.name).to.be.equal('coins2.JPG');
                    done();
                }
            );
        });
    });
});
