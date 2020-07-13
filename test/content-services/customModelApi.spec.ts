/*global describe, it, beforeEach */

import { AlfrescoApi } from '../../src/alfrescoApi';
import { CustomModelApi } from '../../src/api/content-custom-api';

const AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
const CustomModelMock = require('../../test/mockObjects/mockAlfrescoApi').CustomModel;

describe('Custom Model Api', () => {
    let authResponseMock: any;
    let customModelMock: any;
    let customModelApi: CustomModelApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        customModelMock = new CustomModelMock(hostEcm);

        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(
            () => {
                done();
            },
            (error: any) => {
                console.log('error ' + JSON.stringify(error));
            }
        );

        customModelApi = new CustomModelApi(alfrescoJsApi);
    });

    describe('Get', () => {
        it('All Custom Model', (done) => {
            customModelMock.get200AllCustomModel();

            customModelApi.getAllCustomModel().then(
                () => {
                    done();
                },
                (error: any) => {
                    console.log('error' + error);
                });
        });
    });

    describe('Create', () => {

        it('createCustomModel', (done) => {
            customModelMock.create201CustomModel();

            const status = 'DRAFT';
            const description = 'Test model description';
            const name = 'testModel';
            const namespaceUri = 'http://www.alfresco.org/model/testNamespace/1.0';
            const namespacePrefix = 'test';

            customModelApi.createCustomModel(status, description, name, namespaceUri, namespacePrefix).then(
                () => {
                    done();
                },
                (error: any) => {
                    console.log('error' + error);
                }
            );
        });

    });

    describe('PUT', () => {
        it('activateCustomModel', (done) => {
            customModelMock.activateCustomModel200();

            customModelApi.activateCustomModel('testModel').then(
                () => {
                    done();
                },
                (error: any) => {
                    console.log('error' + error);
                }
            );
        });

    });
});
