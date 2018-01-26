/*global describe, it, beforeEach */

var AlfrescoApi = require('../../main');
var expect = require('chai').expect;
var AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
var FiltersMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.UserFilters;

describe('Activiti User Filter Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.filtersMock = new FiltersMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get filter user', function (done) {
        this.filtersMock.get200getUserTaskFilters();

        var opts = {
            'appId': 1 // Integer | appId
        };

        this.alfrescoJsApi.activiti.userFiltersApi.getUserTaskFilters(opts).then((data)=> {
            expect(data.data[0].name).equal('Involved Tasks');
            done();
        });
    });
});
