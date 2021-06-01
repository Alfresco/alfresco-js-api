/*global describe, it, beforeEach */
import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { VersionsApi } from '../../src/api/content-rest-api';
import { AuthResponseMock, VersionMock } from '../../test/mockObjects';

describe('Versions', () => {
    const nodeId = '74cd8a96-8a21-47e5-9b3b-a1b3e296787d';
    const versionId = '1.0';
    const renditionId = 'pdf';

    let authResponseMock: AuthResponseMock;
    let versionMock: VersionMock;
    let versionsApi: VersionsApi;

    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        versionMock = new VersionMock();
        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({ hostEcm });
        await alfrescoJsApi.login('admin', 'admin');

        versionsApi = new VersionsApi(alfrescoJsApi);
    });

    it("should list all node's version renditions", (done) => {
        versionMock.get200ResponseVersionRenditions(nodeId, versionId);

        versionsApi.listVersionRenditions(nodeId, versionId).then(
            (data) => {
                const entries = data.list.entries;
                expect(entries.length).to.be.equal(6);
                expect(data.list.entries[0].entry.id).to.be.equal('avatar');
                done();
            },
            (err: any) => {
                throw new Error(err);
            }
        );
    });

    it("should create rendition for a node's versionId", (done) => {
        versionMock.create200VersionRendition(nodeId, versionId);

        versionsApi.createVersionRendition(nodeId, versionId, {id: 'pdf'}).then(
            () => {
                done();
            },
            (err: any) => {
                throw new Error(err);
            }
        );
    });

    it("should get a node's version rendition", (done) => {
        versionMock.get200VersionRendition(nodeId, versionId, renditionId);

        versionsApi.getVersionRendition(nodeId, versionId, renditionId).then(
            (data) => {
                expect(data.entry.id).to.be.equal('pdf');
                done();
            },
            (err: any) => {
                throw new Error(err);
            }
        );
    });

    it('should get version history', (done) => {
        versionMock.get200Response(nodeId);

        versionsApi.listVersionHistory(nodeId).then((data) => {
            const entries = data.list.entries;
            expect(entries.length).to.be.equal(2);
            expect(entries[0].entry.id).to.be.equal('2.0');
            expect(entries[1].entry.id).to.be.equal('1.0');
            done();
        });
    });

    it('should revert a version', (done) => {
        versionMock.post201Response(nodeId, versionId);

        versionsApi.revertVersion(nodeId, versionId, {majorVersion: true, comment: ''}).then(
            (data) => {
                expect(data.entry.id).to.be.equal('3.0');
                done();
            }
        );
    });
});
