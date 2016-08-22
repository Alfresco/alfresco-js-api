var mockAlfrescoApi = {};

//Ecm Mock
mockAlfrescoApi.Auth = require('./alfresco/authResponseMock.js');
mockAlfrescoApi.Node = require('./alfresco/nodeMock.js');
mockAlfrescoApi.Upload = require('./alfresco/uploadMock.js');
mockAlfrescoApi.WebScript = require('./alfresco/webScriptMock.js');
mockAlfrescoApi.Tag = require('./alfresco/tagMock.js');

//Bpm Mock
mockAlfrescoApi.ActivitiMock = {};
mockAlfrescoApi.ActivitiMock.Auth = require('./activiti/authResponseMock.js');
mockAlfrescoApi.ActivitiMock.Process = require('./activiti/processMock.js');
mockAlfrescoApi.ActivitiMock.Tasks = require('./activiti/tasksMock.js');
mockAlfrescoApi.ActivitiMock.Models = require('./activiti/modelsMock.js');

module.exports = mockAlfrescoApi;
