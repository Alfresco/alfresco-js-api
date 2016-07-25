var mockAlfrescoApi = {};

mockAlfrescoApi.Auth = require('./alfresco/authResponseMock.js');
mockAlfrescoApi.Node = require('./alfresco/nodeMock.js');
mockAlfrescoApi.Upload = require('./alfresco/uploadMock.js');
mockAlfrescoApi.WebScript = require('./alfresco/webScriptMock.js');

//Bpm Mock
mockAlfrescoApi.ActivitiMock = {};
mockAlfrescoApi.ActivitiMock.Auth = require('./activiti/authResponseMock.js');


module.exports = mockAlfrescoApi;
