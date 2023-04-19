/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import nock from 'nock';
import { BaseMock } from '../base.mock';

export class OAuthMock extends BaseMock {
    username: string;
    password: string;

    constructor(host?: string, username?: string, password?: string) {
        super(host);
        this.username = username || 'admin';
        this.password = password || 'admin';
    }

    get200Response(mockToken?: string): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/auth/realms/springboot/protocol/openid-connect/token')
            .reply(200, {
                access_token: mockToken || 'test-token',
                expires_in: 300,
                refresh_expires_in: 1800,
                refresh_token:
                    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0cHczOUltNE54dXZEN0ZqZ3JOQ3Q2ZkpaVDctQ3JWTzRkX3BLaXJlSTF3In0.eyJqdGkiOiI2MzQxMDc1ZC1lOTY4LTRmZTctOTkwZS05MTQ3NTUwOGEzZWIiLCJleHAiOjE1Mjk2MDkxMDYsIm5iZiI6MCwiaWF0IjoxNTI5NjA3MzA2LCJpc3MiOiJodHRwOi8vYTVlMmY5M2RlMTBhZjExZThhMDU2MGExYmVhNWI3YzgtMjM2NzA5NDMzLnVzLWVhc3QtMS5lbGIuYW1hem9uYXdzLmNvbTozMDA4MS9hdXRoL3JlYWxtcy9zcHJpbmdib290IiwiYXVkIjoiYWN0aXZpdGkiLCJzdWIiOiJlMjRjZjM0Mi1mYzUwLTRjYjEtYTBjMC01N2RhZWRiODI3NDkiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiYWN0aXZpdGkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI5NDMzZTIwNi1kZjFhLTQ2YTMtYmU3ZS02NWIwNDVhMWMzNmIiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiYWRtaW4iLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYnJva2VyIjp7InJvbGVzIjpbInJlYWQtdG9rZW4iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX19.mQ4Vi1yLG9KvcmmhHlgOowy8D30iaUsiO7--JTPY7Ol-R1eY4wvRn1cH5FllieXk8yltYGP23xXNtTC4M54guXGVtgRgo8AlRklFHL1BMlxpa0OPwcNmwthx1-P2n7c9XL1e8pt2uRhQJLxunr2TpLaQi0UpEmEyouXHfR7sxM1AzKAf3b9Nk7f7lrk__2BYlFsL3YcGlFDqDMgPfhNlDbR-rQGoxlOjt0YqS8ktYq4bneL5etpXnPh0oEt4B7FFK-WKKuOWR6rQ9791ACnn6puz6C_Ki261IkZ0a_Uu7tOA4Xi9xzoQKLgSTAlBeg4u86Wb5kjL5r2-3zTg-Dikew',
                token_type: 'bearer',
                'not-before-policy': 0,
                session_state: '9433e206-df1a-46a3-be7e-65b045a1c36b',
            });
    }

    get200CustomResponse(path: string): void {
        nock(this.host + '/auth/realms/springboot/protocol/', { encodedQueryParams: true })
            .post(path)
            .query({
                username: this.username,
                password: this.password,
                grant_type: 'password',
                client_id: 'alfrescoapp',
            })
            .reply(200, {
                access_token: '5c37e781-40a7-4957-adcc-2b171c770a5c',
                token_type: 'bearer',
                refresh_token: '15d66b26-3cf7-446a-8db8-1345f2f4485a',
                expires_in: 604603,
                scope: 'openid',
                legacyToken: "LegacyToken{legacyTokenBpm='Basic YWRtaW46YWRtaW4=', tokenId='null', legacyTokenEcm='TICKET_bbead3a54dbe141f77e442e6703f7fa29671107a'}",
            });
    }

    get200RefreshTokenResponse(refreshToken: string): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/auth/realms/springboot/protocol/openid-connect/token/')
            .query({
                refresh_token: refreshToken,
                grant_type: 'refresh_token',
            })
            .reply(200, {
                access_token: 'f8bccca0-76cf-4bd9-bb16-a867ffdd5a35',
                token_type: 'bearer',
                refresh_token: '2bad6f69-a9fe-4582-aed7-1a30f81356f4',
                expires_in: 604799,
                scope: 'openid read write',
            });
    }
}
