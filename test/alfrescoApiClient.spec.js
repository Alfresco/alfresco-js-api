/*global describe, it */

import { AlfrescoApiCompatibility } from 'alfresco-js-api';

var ApiClient = require('alfresco-js-api');
var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-datetime'));

describe('Alfresco Core API Client', function () {

    describe('type conversion', function() {

        var client = new ApiClient();

        it('should create a request with response type blob', function() {

            var bodyParam = null;

            var queryParams = {
            };
            var headerParams = {
            };
            var formParams = {
            };

            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var responseType = 'blob';
            var url = '/fake-api/enterprise/process-instances/';
            var httpMethod = 'GET';

            var response = client.buildRequest(httpMethod, url, queryParams, headerParams, formParams, bodyParam,
                contentTypes, accepts, responseType, null);

            expect(response.url).equal('/fake-api/enterprise/process-instances/');
            expect(response.header.Accept).equal('application/json');
            expect(response.header['Content-Type']).equal('application/json');
            expect(response._responseType).equal('blob');
        });

        it('should return strings as a string', function() {
            var testData = 'Example String';
            expect(ApiClient.convertToType(testData, 'String')).equal(testData);
        });

        it('should return null strings as null', function() {
            expect(ApiClient.convertToType(null, 'String')).to.be.equal(null);
        });

        it('should return undefined strings as undefined', function() {
            expect(ApiClient.convertToType(undefined, 'String')).to.be.equal(undefined);
        });

        it('should return dates as a date instance', function() {
            var testData = '2015-11-17T03:33:17Z';
            expect(ApiClient.convertToType(testData, 'Date')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should return null dates as null', function() {
            expect(ApiClient.convertToType(null, 'Date')).to.be.equal(null);
        });

        it('should return undefined dates as null', function() {
            expect(ApiClient.convertToType(undefined, 'Date')).to.be.equal(null);
        });

        it('should return empty-string dates as null', function() {
            expect(ApiClient.convertToType('', 'Date')).to.be.equal(null);
        });

    });

    describe('date parsing', function() {

        it('should convert dates falling in GMT without a timezone', function () {
            expect(ApiClient.parseDate('2015-11-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates falling in BST without a timezone', function () {
            expect(ApiClient.parseDate('2015-10-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 9, 17, 3, 33, 17)));
        });

        it('should convert dates with a UTC Zulu-time timezone', function () {
            expect(ApiClient.parseDate('2015-11-17T03:33:17Z')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates with a UTC zero-offset timezone', function () {
            expect(ApiClient.parseDate('2015-11-17T03:33:17+0000')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates with a positive offset timezone', function () {
            expect(ApiClient.parseDate('2015-11-17T03:33:17+0200')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

        it('should convert dates with a negative offset timezone', function () {
            expect(ApiClient.parseDate('2015-11-17T03:33:17-0200')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 5, 33, 17)));
        });

        it('should convert dates with a part-hour offset', function () {
            expect(ApiClient.parseDate('2015-11-17T03:23:17-0930')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 12, 53, 17)));
        });

        it('should convert dates with a timezone HH:MM separator', function () {
            expect(ApiClient.parseDate('2015-11-17T03:33:17+02:00')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

        it('should convert dates with a timezone with hours only', function () {
            expect(ApiClient.parseDate('2015-11-17T03:33:17+02')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

    });

});
