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

import { expect } from 'chai';
import { AlfrescoApi } from '../src/alfrescoApi';
import { SearchApi } from '../src/api/search-rest-api';
import { EcmAuthMock, SearchMock } from '../test/mockObjects';

describe('Search', () => {
    let authResponseMock: EcmAuthMock;
    let searchMock: SearchMock;
    let searchApi: SearchApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new EcmAuthMock(hostEcm);
        authResponseMock.get201Response();

        searchMock = new SearchMock();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        searchApi = new SearchApi(alfrescoJsApi);
    });

    it('should search works', (done) => {
        searchMock.get200Response();

        searchApi.search({
            'query': {
                'query': 'select * from cmis:folder',
                'language': 'cmis'
            }
        }).then(
            (data) => {
                expect(data.list.entries[0].entry.name).to.be.equal('user');
                done();
            },
            (error) => {
                console.error(error);
            }
        );
    });
});
