'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class AuthResponseMock extends BaseMock {

    constructor(host, username, password) {
        super(host);
        this.username = username || 'admin';
        this.password = password || 'admin';
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/oauth/token')
            .query({'username': this.username, 'password': this.password, 'grant_type': 'password'})
            .reply(200, {
                'access_token': '5c37e781-40a7-4957-adcc-2b171c770a5c',
                'token_type': 'bearer',
                'refresh_token': '15d66b26-3cf7-446a-8db8-1345f2f4485a',
                'expires_in': 604603,
                'scope': 'openid',
                'legacyToken': 'LegacyToken{legacyTokenBpm=\'Basic YWRtaW46YWRtaW4=\', tokenId=\'null\', legacyTokenEcm=\'TICKET_bbead3a54dbe141f77e442e6703f7fa29671107a\'}'
            });
    }

    get200CustomResponse(path) {
        nock(this.host, {'encodedQueryParams': true})
            .post(path)
            .query({'username': this.username, 'password': this.password, 'grant_type': 'password'})
            .reply(200, {
                'access_token': '5c37e781-40a7-4957-adcc-2b171c770a5c',
                'token_type': 'bearer',
                'refresh_token': '15d66b26-3cf7-446a-8db8-1345f2f4485a',
                'expires_in': 604603,
                'scope': 'openid',
                'legacyToken': 'LegacyToken{legacyTokenBpm=\'Basic YWRtaW46YWRtaW4=\', tokenId=\'null\', legacyTokenEcm=\'TICKET_bbead3a54dbe141f77e442e6703f7fa29671107a\'}'
            });
    }

    get200RefreshTokenResponse(refreshToken) {
        nock(this.host, {'encodedQueryParams': true})
            .post('/oauth/token')
            .query({
                refresh_token: refreshToken,
                grant_type: 'refresh_token'
            })
            .reply(200, {
                'access_token': 'f8bccca0-76cf-4bd9-bb16-a867ffdd5a35',
                'token_type': 'bearer',
                'refresh_token': '2bad6f69-a9fe-4582-aed7-1a30f81356f4',
                'expires_in': 604799,
                'scope': 'openid read write'
            });
    }


}

module.exports = AuthResponseMock;
