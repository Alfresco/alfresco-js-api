/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { VersionsApi } from '../../src/api/content-rest-api';
let VersionMock = require('../../test/mockObjects/mockAlfrescoApi').Version;
let expect = require('chai').expect;

describe('Versions', () => {
    const nodeId = '74cd8a96-8a21-47e5-9b3b-a1b3e296787d';
    const versionId = '1.0';

    let versionsApi: VersionsApi;
    let versionMock: any;

    beforeEach(() => {
        const alfrescoJsApi = new AlfrescoApi({ hostEcm: 'http://127.0.0.1:8080' });

        versionsApi = new VersionsApi(alfrescoJsApi);
        versionMock = new VersionMock();
    });

    it('should get version history', (done) => {
        versionMock.get200Response(nodeId);

        versionsApi.listVersionHistory(nodeId).then((data) => {
            let entries = data.list.entries;
            expect(entries.length).to.be.equal(2);
            expect(entries[0].entry.id).to.be.equal('2.0');
            expect(entries[1].entry.id).to.be.equal('1.0');
            done();
        });
    });

    it('should revert a version', (done) => {
        versionMock.post201Response(nodeId, versionId);

        versionsApi.revertVersion(nodeId, versionId, { majorVersion: true, comment: ''}).then(
            (data) => {
                expect(data.entry.id).to.be.equal('3.0');
                done();
            }
        );
    });
});
