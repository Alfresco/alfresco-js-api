/*global describe, it, beforeEach */

import { AlfrescoApi } from '../../src/alfrescoApi';
import { CommentsApi } from '../../src/api/content-rest-api';

const AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
const CommentMock = require('../../test/mockObjects/mockAlfrescoApi').Comment;
const expect = require('chai').expect;

describe('Comments', () => {

    let authResponseMock: any;
    let commentMock: any;
    let commentsApi: CommentsApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        commentMock = new CommentMock();

        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        commentsApi = new CommentsApi(alfrescoJsApi);

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('should add a comment', (done) => {
        commentMock.post201Response();

        commentsApi.createComment(
            '74cd8a96-8a21-47e5-9b3b-a1b3e296787d',
            {
                'content': 'This is a comment'
            }
        ).then((data) => {
            expect(data.entry.content).to.be.equal('This is a comment');
            done();
        });
    });

    it('should get a comment', (done) => {
        commentMock.get200Response();

        commentsApi.listComments('74cd8a96-8a21-47e5-9b3b-a1b3e296787d').then(
            (data) => {
                expect(data.list.entries[0].entry.content).to.be.equal('This is another comment');
                done();
            }
        );
    });

});
