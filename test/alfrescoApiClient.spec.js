/*global describe, it */

var ApiClient = require('../src/alfresco-core-rest-api/src/ApiClient');
var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-datetime'));

describe('Alfresco Core API Client', function () {

    it('should convert dates falling in GMT without a timezone', function () {
        expect(ApiClient.parseDate('2015-11-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
    });

    it('should convert dates falling in BST without a timezone', function () {
        expect(ApiClient.parseDate('2015-10-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 9, 17, 3, 33, 17)));
    });

    it('should convert dates with a UTC timezone', function () {
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

});
