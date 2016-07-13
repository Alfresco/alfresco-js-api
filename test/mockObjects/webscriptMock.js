'use strict';

var nock = require('nock');
var BaseMock = require('./baseMock');

class WebScriptMock extends BaseMock {

    constructor(host, contextRoot, servicePath, scriptPath) {
        super(host);
        this.contextRoot = contextRoot || 'alfresco';
        this.servicePath = servicePath || 'service';
        this.scriptPath = scriptPath;

        this.scriptSlug = '/' + this.contextRoot + '/' + this.servicePath + '/' + this.scriptPath;

    }

    get404Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get(this.scriptSlug)
            .reply(404, {
                'error': {
                    'errorKey': 'Unable to locate resource resource for :alfresco ',
                    'statusCode': 404,
                    'briefSummary': '06130000 Unable to locate resource resource for :alfresco ',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });

    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get(this.scriptSlug)
            .reply(200, {
                'randomStructure': {
                    'exampleInt': 1,
                    'exampleString': 'string test'
                }
            });
    }

    get401Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get(this.scriptSlug)
            .reply(401, {
                'error': {
                    'errorKey': 'framework.exception.ApiDefault',
                    'statusCode': 401,
                    'briefSummary': '05210059 Authentication failed for Web Script org/alfresco/api/ResourceWebScript.get',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }
}

module.exports = WebScriptMock;
