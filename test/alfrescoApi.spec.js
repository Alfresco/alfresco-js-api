/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;

describe('Basic configuration test', function () {
    beforeEach(function () {
        this.host = 'http://127.0.0.1:8080';
        this.contextRoot = 'script';
        this.servicePath = 'alfresco';
        this.scriptPath = 'testWebScript';
    });

    it('default value', function () {
        var config = {
            username: 'companyTiger',
            password: 'tiger'
        };

        this.alfrescoJsApi = new AlfrescoApi(config);

        expect(this.alfrescoJsApi.getClient().basePath)
            .equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');
    });

    it('config parameter should be reflected in the client', function () {
        var config = {
            host: 'http://testServer.com:1616',
            contextRoot: 'strangeContextRoot',
            username: 'companyTiger',
            password: 'tiger'
        };

        this.alfrescoJsApi = new AlfrescoApi(config);

        expect(this.alfrescoJsApi.getClient().basePath)
            .equal('http://testServer.com:1616/strangeContextRoot/api/-default-/public/alfresco/versions/1');

        expect(this.alfrescoJsApi.config.username).equal('companyTiger');
        expect(this.alfrescoJsApi.config.password).equal('tiger');
    });

});
