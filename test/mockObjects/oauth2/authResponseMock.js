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

    get200Discovery() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/.well-known/openid-configuration')
            .reply(200, {
                'issuer': 'http://myOauthUrl:30081/auth/realms/springboot',
                'authorization_endpoint': 'http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/auth',
                'token_endpoint': 'http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/token',
                'token_introspection_endpoint': 'http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/token/introspect',
                'userinfo_endpoint': 'http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/userinfo',
                'end_session_endpoint': 'http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/logout',
                'jwks_uri': 'http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/certs',
                'check_session_iframe': 'http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/login-status-iframe.html',
                'grant_types_supported': ['authorization_code', 'implicit', 'refresh_token', 'password', 'client_credentials'],
                'response_types_supported': ['code', 'none', 'id_token', 'token', 'id_token token', 'code id_token', 'code token', 'code id_token token'],
                'subject_types_supported': ['public', 'pairwise'],
                'id_token_signing_alg_values_supported': ['RS256'],
                'userinfo_signing_alg_values_supported': ['RS256'],
                'request_object_signing_alg_values_supported': ['none', 'RS256'],
                'response_modes_supported': ['query', 'fragment', 'form_post'],
                'registration_endpoint': 'http://myOauthUrl:30081/auth/realms/springboot/clients-registrations/openid-connect',
                'token_endpoint_auth_methods_supported': ['private_key_jwt', 'client_secret_basic', 'client_secret_post'],
                'token_endpoint_auth_signing_alg_values_supported': ['RS256'],
                'claims_supported': ['sub', 'iss', 'auth_time', 'name', 'given_name', 'family_name', 'preferred_username', 'email'],
                'claim_types_supported': ['normal'],
                'claims_parameter_supported': false,
                'scopes_supported': ['openid', 'offline_access'],
                'request_parameter_supported': true,
                'request_uri_parameter_supported': true
            });
    }


}

module.exports = AuthResponseMock;
