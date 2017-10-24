var mockAlfrescoApi = {};

//Ecm Mock
mockAlfrescoApi.Auth = require('./alfresco/authResponseMock.js');
mockAlfrescoApi.Comment = require('./alfresco/CommentMock.js');
mockAlfrescoApi.Version = require('./alfresco/VersionMock.js');
mockAlfrescoApi.Node = require('./alfresco/nodeMock.js');
mockAlfrescoApi.Upload = require('./alfresco/uploadMock.js');
mockAlfrescoApi.WebScript = require('./alfresco/webScriptMock.js');
mockAlfrescoApi.Tag = require('./alfresco/tagMock.js');
mockAlfrescoApi.FindNodes = require('./alfresco/findNodesMock.js');
mockAlfrescoApi.Rendition = require('./alfresco/renditionMock.js');
mockAlfrescoApi.CustomModel = require('./alfresco/customModelMock.js');
mockAlfrescoApi.Discovery = require('./alfresco/discoveryMock.js');
mockAlfrescoApi.Search = require('./alfresco/searchMock.js');


//Bpm Mock
mockAlfrescoApi.ActivitiMock = {};
mockAlfrescoApi.ActivitiMock.Auth = require('./activiti/authResponseMock.js');
mockAlfrescoApi.ActivitiMock.Process = require('./activiti/processMock.js');
mockAlfrescoApi.ActivitiMock.ProcessInstanceVariables = require('./activiti/processInstanceVariablesMock.js');
mockAlfrescoApi.ActivitiMock.Profile = require('./activiti/profileMock.js');
mockAlfrescoApi.ActivitiMock.Tasks = require('./activiti/tasksMock.js');
mockAlfrescoApi.ActivitiMock.TaskFormMock = require('./activiti/taskFormMock.js');
mockAlfrescoApi.ActivitiMock.Models = require('./activiti/modelsMock.js');
mockAlfrescoApi.ActivitiMock.ModelJsonBpmMock = require('./activiti/modelJsonBpmMock.js');
mockAlfrescoApi.ActivitiMock.UserFilters = require('./activiti/userFiltersMock.js');
mockAlfrescoApi.ActivitiMock.Reports = require('./activiti/reportsMock.js');

//Oauth2
mockAlfrescoApi.Oauth2Mock = {};
mockAlfrescoApi.Oauth2Mock.Auth = require('./oauth2/authResponseMock.js');

module.exports = mockAlfrescoApi;
