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

import { AlfrescoApiConfig } from '../src/alfrescoApiConfig';
import { AlfrescoApiCompatibility } from '../src/alfrescoApiCompatibility';
import { PersonBodyCreate } from '../src/api/content-rest-api/model/personBodyCreate';
import { PeopleMock } from './mockObjects';

describe('Compatibility test', () => {
    let peopleMock: PeopleMock;
    let alfrescoApiCompatibility: AlfrescoApiCompatibility;

    beforeEach(() => {
        peopleMock = new PeopleMock();

        alfrescoApiCompatibility = new AlfrescoApiCompatibility({
            hostEcm: 'http://127.0.0.1:8080'
        } as AlfrescoApiConfig);
    });

    it('should add a person', (done) => {
        const personBodyCreate = new PersonBodyCreate();
        peopleMock.get201Response();

        personBodyCreate.id = 'chewbe';
        personBodyCreate.email = 'chewbe@millenniumfalcon.com';
        personBodyCreate.lastName = 'Chewbe';
        personBodyCreate.firstName = 'chewbacca';
        personBodyCreate.password = 'Rrrrrrrghghghghgh';

        alfrescoApiCompatibility.core.peopleApi.addPerson(personBodyCreate).then(
            () => { done(); },
            (error: any) => { console.error(error); }
        );
    });
});
