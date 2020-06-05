import { AlfrescoApi } from '../src/alfrescoApi';
const expect = require('chai').expect;

describe('Basic configuration test', () => {

    describe('config parameter ', () => {

        it('Should basePath have a default value', () => {
            let config = {};

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.basePath)
                .equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');
        });

        it('should be reflected in the client', () => {
            let config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot'
            };

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.basePath)
                .equal('http://testServer.com:1616/strangeContextRoot/api/-default-/public/alfresco/versions/1');
        });
    });

    describe('setconfig parameter ', () => {

        it('should be possible change the host in the client', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot'
            };

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.basePath)
                .equal('http://testServer.com:1616/strangeContextRoot/api/-default-/public/alfresco/versions/1');

            const newConfig = {
                hostEcm: 'http://testServer.com:2616',
                contextRoot: 'strangeContextRoot'
            };

            alfrescoJsApi.setConfig(newConfig);

            expect(alfrescoJsApi.contentClient.basePath)
                .equal('http://testServer.com:2616/strangeContextRoot/api/-default-/public/alfresco/versions/1');
        });
    });

    describe('CSRF', () => {

        it('should disableCsrf true parameter should be reflected in the clients', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                disableCsrf: true
            };

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.isCsrfEnabled()).equal(false);
            expect(alfrescoJsApi.processClient.isCsrfEnabled()).equal(false);
        });

        it('should disableCsrf false parameter should be reflected in the clients', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                disableCsrf: false
            };

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.isCsrfEnabled()).equal(true);
            expect(alfrescoJsApi.processClient.isCsrfEnabled()).equal(true);
        });
    });

    describe('WithCredentials', () => {
        it('should withCredentials true parameter should be reflected in the clients', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                withCredentials: true
            };
            const alfrescoJsApi = new AlfrescoApi(config);
            expect(alfrescoJsApi.contentClient.isWithCredentials()).equal(true);
            expect(alfrescoJsApi.processClient.isWithCredentials()).equal(true);
        });

        it('should withCredentials false parameter should be reflected in the clients', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                withCredentials: false
            };
            const alfrescoJsApi = new AlfrescoApi(config);
            expect(alfrescoJsApi.contentClient.isWithCredentials()).equal(false);
            expect(alfrescoJsApi.processClient.isWithCredentials()).equal(false);
        });
    });
});
