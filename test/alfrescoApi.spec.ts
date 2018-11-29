/*global describe, it */

import { AlfrescoApiCompatibility as AlfrescoApi } from 'alfresco-js-api';
let expect = require('chai').expect;

describe('Basic configuration test', function () {

    describe('config parameter ', function () {

        it('Should basePath have a default value', function () {
            let config = {};

            this.alfrescoJsApi = new AlfrescoApi(config);

            expect(this.alfrescoJsApi.ecmClient.basePath)
                .equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');
        });

        it('should be reflected in the client', function () {
            let config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot'
            };

            this.alfrescoJsApi = new AlfrescoApi(config);

            expect(this.alfrescoJsApi.ecmClient.basePath)
                .equal('http://testServer.com:1616/strangeContextRoot/api/-default-/public/alfresco/versions/1');
        });
    });

    describe('CSRF', function () {

        it('should disableCsrf true parameter should be reflected in the clients', function () {
            let config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                disableCsrf: true
            };

            this.alfrescoJsApi = new AlfrescoApi(config);

            expect(this.alfrescoJsApi.ecmClient.isCsrfEnabled())
                .equal(false);
            expect(this.alfrescoJsApi.bpmClient.isCsrfEnabled())
                .equal(false);
        });

        it('should disableCsrf false parameter should be reflected in the clients', function () {
            let config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                disableCsrf: false
            };

            this.alfrescoJsApi = new AlfrescoApi(config);

            expect(this.alfrescoJsApi.ecmClient.isCsrfEnabled())
                .equal(true);
            expect(this.alfrescoJsApi.bpmClient.isCsrfEnabled())
                .equal(true);
        });
    });

    describe('WithCredentials', function () {

        it('should withCredentials true parameter should be reflected in the clients', function () {
            let config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                withCredentials: true
            };
            this.alfrescoJsApi = new AlfrescoApi(config);
            expect(this.alfrescoJsApi.ecmClient.isWithCredentials())
                .equal(true);
            expect(this.alfrescoJsApi.bpmClient.isWithCredentials())
                .equal(true);
        });

        it('should withCredentials false parameter should be reflected in the clients', function () {
            let config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                withCredentials: false
            };
            this.alfrescoJsApi = new AlfrescoApi(config);
            expect(this.alfrescoJsApi.ecmClient.isWithCredentials())
                .equal(false);
            expect(this.alfrescoJsApi.bpmClient.isWithCredentials())
                .equal(false);
        });
    });
});
