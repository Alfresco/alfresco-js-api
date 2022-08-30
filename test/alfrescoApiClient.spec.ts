import { AlfrescoApiCompatibility as AlfrescoApi, AlfrescoApiConfig } from '../index';
import { DateAlfresco } from  '../index';
import { EcmAuthMock } from '../test/mockObjects';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-datetime'));

describe('Alfresco Core API Client', () => {

    describe('type conversion', () => {

        it('should return the username after login', (done) => {
            const authResponseEcmMock = new EcmAuthMock('http://127.0.0.1:8080');

            authResponseEcmMock.get201Response();

            const alfrescoJsApi = new AlfrescoApi({
                hostEcm: 'http://127.0.0.1:8080'
            } as AlfrescoApiConfig);

            alfrescoJsApi.login('admin', 'admin').then(() => {
                expect(alfrescoJsApi.getEcmUsername()).to.be.equal('admin');
                done();
            });
        });
    });

    describe('date parsing', () => {

        it('should convert dates falling in GMT without a timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates falling in BST without a timezone', () => {
            expect(DateAlfresco.parseDate('2015-10-17T03:33:17')).to.equalTime(new Date(Date.UTC(2015, 9, 17, 3, 33, 17)));
        });

        it('should convert dates with a UTC Zulu-time timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17Z')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates with a UTC zero-offset timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+0000')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 3, 33, 17)));
        });

        it('should convert dates with a positive offset timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+0200')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

        it('should convert dates with a negative offset timezone', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17-0200')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 5, 33, 17)));
        });

        it('should convert dates with a part-hour offset', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:23:17-0930')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 12, 53, 17)));
        });

        it('should convert dates with a timezone HH:MM separator', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+02:00')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

        it('should convert dates with a timezone with hours only', () => {
            expect(DateAlfresco.parseDate('2015-11-17T03:33:17+02')).to.equalTime(new Date(Date.UTC(2015, 10, 17, 1, 33, 17)));
        });

    });

});
