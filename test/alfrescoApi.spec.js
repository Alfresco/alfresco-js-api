/*global describe, it */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;

describe('Basic configuration test', function () {

    describe('config parameter ', function () {

        it('Should basePath have a default value', function () {
            var config = {};

            this.alfrescoJsApi = new AlfrescoApi(config);

            expect(this.alfrescoJsApi.ecmClient.basePath)
                .equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');
        });

        it('should be reflected in the client', function () {
            var config = {
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
            var config = {
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
            var config = {
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
});
