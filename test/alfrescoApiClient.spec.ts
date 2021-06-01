/*global describe, it */
import { AlfrescoApiClient, AlfrescoApiCompatibility as AlfrescoApi, FormValueRepresentation } from '../index';
import { DateAlfresco } from  '../index';
import { EcmAuthMock } from '../test/mockObjects';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-datetime'));

describe('Alfresco Core API Client', () => {

    describe('type conversion', () => {

        const client = new AlfrescoApiClient();

        it('should create a request with response type blob', () => {

            let bodyParam = null;

            let queryParams = {};
            let headerParams = {};
            let formParams = {};

            let contentTypes = ['application/json'];
            let accepts = ['application/json'];
            let responseType = 'blob';
            let url = '/fake-api/enterprise/process-instances/';
            let httpMethod = 'GET';

            const response = client.buildRequest(httpMethod, url, queryParams, headerParams, formParams, bodyParam,
                                               contentTypes, accepts, responseType, null, null);

            expect(response.url).equal('/fake-api/enterprise/process-instances/');
            expect(response.header.Accept).equal('application/json');
            expect(response.header['Content-Type']).equal('application/json');
            expect(response._responseType).equal('blob');
        });

        it('should return the username after login', function (done) {
            this.authResponseEcmMock = new EcmAuthMock('http://127.0.0.1:8080');

            this.authResponseEcmMock.get201Response();

            this.alfrescoJsApi = new AlfrescoApi({
                hostEcm: this.hostEcm
            });

            this.alfrescoJsApi.login('admin', 'admin').then(() => {
                expect(this.alfrescoJsApi.getEcmUsername()).to.be.equal('admin');
                done();
            });
        });
    });

    describe('date parsing', () => {

        it('should convert dates falling in GMT without a timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates falling in BST without a timezone', () => {
            expect(DateAlfresco.parseDate('2015-10-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 9, 17, 3, 33, 17)));
        });

        it('should convert dates with a UTC Zulu-time timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17Z')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates with a UTC zero-offset timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+0000')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates with a positive offset timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+0200')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

        it('should convert dates with a negative offset timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17-0200')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 5, 33, 17)));
        });

        it('should convert dates with a part-hour offset', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:23:17-0930')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 12, 53, 17)));
        });

        it('should convert dates with a timezone HH:MM separator', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+02:00')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

        it('should convert dates with a timezone with hours only', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+02')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

    });

    describe('Deserializes', () => {

        it('should the deserializer return an array of object when the response is an array', () => {
            const client = new AlfrescoApiClient();
            const data = {
                body: [
                    {
                        id: '1',
                        name: 'test1'
                    },
                    {
                        id: '2',
                        name: 'test2'
                    }
                ]
            };
            const result = client.deserialize(data, FormValueRepresentation);
            const isArray = Array.isArray(result);
            const isObject = (result[0] instanceof (FormValueRepresentation));
            expect(isArray).to.equal(true);
            expect(isObject).to.equal(true);
        });
    });

});
