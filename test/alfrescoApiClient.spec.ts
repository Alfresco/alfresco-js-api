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

import { AlfrescoApi, DateAlfresco } from '../index';
import { EcmAuthMock } from '../test/mockObjects';
import { expect } from 'chai';

describe('Alfresco Core API Client', () => {
    describe('type conversion', () => {
        it('should return the username after login', (done) => {
            const authResponseEcmMock = new EcmAuthMock('http://127.0.0.1:8080');

            authResponseEcmMock.get201Response();

            const alfrescoJsApi = new AlfrescoApi({
                hostEcm: 'http://127.0.0.1:8080'
            });

            alfrescoJsApi.login('admin', 'admin').then(() => {
                expect(alfrescoJsApi.getEcmUsername()).to.be.equal('admin');
                done();
            });
        });
    });

    describe('date parsing', () => {
        const equalTime = (actual: Date, expected: Date) => actual.getTime() == expected.getTime();

        it('should convert dates falling in GMT without a timezone', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-11-17T03:33:17'), new Date(Date.UTC(2015, 10, 17, 3, 33, 17)))).to.be.equal(true);
        });

        it('should convert dates falling in BST without a timezone', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-10-17T03:33:17'), new Date(Date.UTC(2015, 9, 17, 3, 33, 17)))).to.be.equal(true);
        });

        it('should convert dates with a UTC Zulu-time timezone', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-11-17T03:33:17Z'), new Date(Date.UTC(2015, 10, 17, 3, 33, 17)))).to.be.equal(true);
        });

        it('should convert dates with a UTC zero-offset timezone', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-11-17T03:33:17+0000'), new Date(Date.UTC(2015, 10, 17, 3, 33, 17)))).to.be.equal(true);
        });

        it('should convert dates with a positive offset timezone', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-11-17T03:33:17+0200'), new Date(Date.UTC(2015, 10, 17, 1, 33, 17)))).to.be.equal(true);
        });

        it('should convert dates with a negative offset timezone', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-11-17T03:33:17-0200'), new Date(Date.UTC(2015, 10, 17, 5, 33, 17)))).to.be.equal(true);
        });

        it('should convert dates with a part-hour offset', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-11-17T03:23:17-0930'), new Date(Date.UTC(2015, 10, 17, 12, 53, 17)))).to.be.equal(true);
        });

        it('should convert dates with a timezone HH:MM separator', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-11-17T03:33:17+02:00'), new Date(Date.UTC(2015, 10, 17, 1, 33, 17)))).to.be.equal(true);
        });

        it('should convert dates with a timezone with hours only', () => {
            expect(equalTime(DateAlfresco.parseDate('2015-11-17T03:33:17+02'), new Date(Date.UTC(2015, 10, 17, 1, 33, 17)))).to.be.equal(true);
        });
    });
});
