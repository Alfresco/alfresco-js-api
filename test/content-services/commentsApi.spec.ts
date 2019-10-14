/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
let CommentMock = require('../../test/mockObjects/mockAlfrescoApi').Comment;
let expect = require('chai').expect;

describe('Comments', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.commentMock = new CommentMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('should add a comment', function (done) {
        this.commentMock.post201Response();

        this.alfrescoJsApi.core.commentsApi.addComment('74cd8a96-8a21-47e5-9b3b-a1b3e296787d', [
            {
                'content': 'This is a comment'
            },
            {
                'content': 'This is another comment'
            }
        ]).then(function (data: any) {
            expect(data.list.entries[0].entry.content).to.be.equal('This is a comment');
            done();
        },      function () {
        });
    });

    it('should get a comment', function (done) {
        this.commentMock.get200Response();

        this.alfrescoJsApi.core.commentsApi.getComments('74cd8a96-8a21-47e5-9b3b-a1b3e296787d').then(function (data: any) {
            expect(data.list.entries[0].entry.content).to.be.equal('This is another comment');
            done();
        },                                                                                           function () {
        });
    });

});
