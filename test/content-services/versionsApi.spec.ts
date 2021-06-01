/*global describe, it, beforeEach */

import { AlfrescoApi } from '../../src/alfrescoApi';
import { VersionsApi } from '../../src/api/content-rest-api';
import { AuthResponseMock } from '../../test/mockObjects';

let VersionMock = require('../../test/mockObjects/mockAlfrescoApi').Version;
let expect = require('chai').expect;

describe('Versions', function () {

    let nodeId = '74cd8a96-8a21-47e5-9b3b-a1b3e296787d';
    let versionId = '1.0';
    let renditionId = 'pdf';

    let authResponseMock: AuthResponseMock;
    let versionMock: any;
    let versionsApi: VersionsApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        versionMock = new VersionMock();
        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
                                                  hostEcm
                                              });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        versionsApi = new VersionsApi(alfrescoJsApi);
    });

    it("should list all node's version renditions", function (done) {
        versionMock.get200ResponseVersionRenditions(nodeId, versionId);

        versionsApi.listVersionRenditions(nodeId, versionId).then(function (data: any) {
            let entries = data.list.entries;
            expect(entries.length).to.be.equal(6);
            expect(data.list.entries[0].entry.id).to.be.equal('avatar');
            done();
        },                                                        (err: any) => {
            throw new Error(err);
        });
    });

    it("should create rendition for a node's versionId", function (done) {
        versionMock.create200VersionRendition(nodeId, versionId);

        versionsApi.createVersionRendition(nodeId, versionId, {id: 'pdf'}).then(function () {
            done();
        },                                                                      (err: any) => {
            throw new Error(err);
        });
    });

    it("should get a node's version rendition", function (done) {
        versionMock.get200VersionRendition(nodeId, versionId, renditionId);

        versionsApi.getVersionRendition(nodeId, versionId, renditionId).then(function (data: any) {
            expect(data.entry.id).to.be.equal('pdf');
            done();
        },                                                                   (err: any) => {
            throw new Error(err);
        });
    });

    it('should get version history', function (done) {
        versionMock.get200Response(nodeId);

        versionsApi.listVersionHistory(nodeId).then(function (data: any) {
            let entries = data.list.entries;
            expect(entries.length).to.be.equal(2);
            expect(entries[0].entry.id).to.be.equal('2.0');
            expect(entries[1].entry.id).to.be.equal('1.0');
            done();
        });
    });

    it('should revert a version', function (done) {
        versionMock.post201Response(nodeId, versionId);

        versionsApi.revertVersion(nodeId, versionId, {majorVersion: true, comment: ''}).then(function (data: any) {
            expect(data.entry.id).to.be.equal('3.0');
            done();
        },                                                                                   function () {
        });
    });
});
