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


    get200ResponseHTMLFormat() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/service/sample/folder/Company%20Home')
            .reply(200, '<html>\n  <head>\n    <title>/Company Home</title>\n  </head>\n  <body>\n    Folder: /Company Home\n    <br>\n    <table>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/Data%20Dictionary\">Data Dictionary</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/Guest%20Home\">Guest Home</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/User%20Homes\">User Homes</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/Shared\">Shared</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/Imap%20Attachments\">Imap Attachments</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/IMAP%20Home\">IMAP Home</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/Sites\">Sites</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/x\">x</a>\n     </tr>\n     <tr>\n         <td><td><a href=\"/alfresco/service/api/node/content/workspace/SpacesStore/2857abfd-0ac6-459d-a22d-ec78770570f3/testFile.txt\">testFile.txt</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/newFolder\">newFolder</a>\n     </tr>\n     <tr>\n         <td>&gt;<td><a href=\"/alfresco/service/sample/folder/Company%20Home/newFolder-1\">newFolder-1</a>\n     </tr>\n     <tr>\n         <td><td><a href=\"/alfresco/service/api/node/content/workspace/SpacesStore/21ce66a9-6bc5-4c49-8ad3-43d3b824a9a3/testFile-1.txt\">testFile-1.txt</a>\n     </tr>\n     <tr>\n         <td><td><a href=\"/alfresco/service/api/node/content/workspace/SpacesStore/ae314293-27e8-4221-9a09-699f103db5f3/testFile-2.txt\">testFile-2.txt</a>\n     </tr>\n     <tr>\n         <td><td><a href=\"/alfresco/service/api/node/content/workspace/SpacesStore/935c1a72-647f-4c8f-aab6-e3b161978427/testFile-3.txt\">testFile-3.txt</a>\n     </tr>\n    </table>\n  </body>\n</html>\n\n'); // jshint ignore:line
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
