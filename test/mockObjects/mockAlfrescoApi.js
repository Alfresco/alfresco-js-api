var mockAlfrescoApi = {};

mockAlfrescoApi.Auth = require('./alfresco/authResponseMock.js');
mockAlfrescoApi.Node = require('./alfresco/nodeMock.js');
mockAlfrescoApi.Upload = require('./alfresco/uploadMock.js');
mockAlfrescoApi.WebScript = require('./alfresco/webScriptMock.js');

//Activiti Mock
mockAlfrescoApi.Activiti = {};
mockAlfrescoApi.Activiti.Auth = require('./activiti/authResponseMock.js');


module.exports = mockAlfrescoApi;
