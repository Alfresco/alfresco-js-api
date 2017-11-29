/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var VersionMock = require('../test/mockObjects/mockAlfrescoApi').Version;
var expect = require('chai').expect;

describe('Versions', function () {

    var nodeId = '74cd8a96-8a21-47e5-9b3b-a1b3e296787d';
    var versionId = '1.0';

    beforeEach(function () {
        var alfrescoJsApi = new AlfrescoApi({ hostEcm: 'http://127.0.0.1:8080' });

        this.versionsApi = alfrescoJsApi.core.versionsApi;
        this.versionMock = new VersionMock();
    });

    it('should get version history', function (done) {
        this.versionMock.get200Response(nodeId);

        this.versionsApi.listVersionHistory(nodeId).then(function (data) {
            var entries = data.list.entries;
            expect(entries.length).to.be.equal(2);
            expect(entries[0].entry.id).to.be.equal('2.0');
            expect(entries[1].entry.id).to.be.equal('1.0');
            done();
        });
    });

    it('should revert a version', function (done) {
        this.versionMock.post201Response(nodeId, versionId);

        this.versionsApi.revertVersion(nodeId, versionId).then(function (data) {
            expect(data.entry.id).to.be.equal('3.0');
            done();
        }, function () {
        });
    });
});
