/*global describe, it */

import { AlfrescoApiClient, DateAlfresco } from '@alfresco/js-api';

let expect = require('chai').expect;

describe('Alfresco Core API Client', function () {

    describe('type conversion', function () {

        let client = new AlfrescoApiClient();

        it('should create a request with response type blob', function () {

            let bodyParam = null;

            let queryParams = {};
            let headerParams = {};
            let formParams = {};

            let contentTypes = ['application/json'];
            let accepts = ['application/json'];
            let responseType = 'blob';
            let url = '/fake-api/enterprise/process-instances/';
            let httpMethod = 'GET';

            let response = client.buildRequest(httpMethod, url, queryParams, headerParams, formParams, bodyParam,
                contentTypes, accepts, responseType, null, null);

            expect(response.url).equal('/fake-api/enterprise/process-instances/');
            expect(response.header.Accept).equal('application/json');
            expect(response.header['Content-Type']).equal('application/json');
            expect(response._responseType).equal('blob');
        });

        it('should return strings as a string', function () {
            let testData = 'Example String';
            expect(client.convertToType(testData, 'String')).equal(testData);
        });

        it('should return null strings as null', function () {
            expect(client.convertToType(null, 'String')).to.be.equal(null);
        });

        it('should return undefined strings as undefined', function () {
            expect(client.convertToType(undefined, 'String')).to.be.equal(undefined);
        });

        it('should return dates as a date instance', function () {
            let testData = '2015-11-17T03:33:17Z';
            expect(client.convertToType(testData, 'Date')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should return null dates as null', function () {
            expect(client.convertToType(null, 'Date')).to.be.equal(null);
        });

        it('should return undefined dates as null', function () {
            expect(client.convertToType(undefined, 'Date')).to.be.equal(null);
        });

        it('should return empty-string dates as null', function () {
            expect(client.convertToType('', 'Date')).to.be.equal(null);
        });

    });

    describe('date parsing', function () {

        let client = new AlfrescoApiClient();

        it('should convert dates falling in GMT without a timezone', function () {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates falling in BST without a timezone', function () {
            expect(DateAlfresco.parseDate('2015-10-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 9, 17, 3, 33, 17)));
        });

        it('should convert dates with a UTC Zulu-time timezone', function () {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17Z')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates with a UTC zero-offset timezone', function () {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+0000')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates with a positive offset timezone', function () {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+0200')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

        it('should convert dates with a negative offset timezone', function () {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17-0200')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 5, 33, 17)));
        });

        it('should convert dates with a part-hour offset', function () {
            expect(DateAlfresco.parseDate('2015-11-17T03:23:17-0930')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 12, 53, 17)));
        });

        it('should convert dates with a timezone HH:MM separator', function () {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+02:00')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

        it('should convert dates with a timezone with hours only', function () {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+02')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

    });

});
