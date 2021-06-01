let mockAlfrescoApi = {};

//Content service Mock
mockAlfrescoApi.Auth = require('./content-services/authResponseMock.js');
mockAlfrescoApi.Version = require('./content-services/versionMock.js');
mockAlfrescoApi.Node = require('./content-services/nodeMock.js');
mockAlfrescoApi.Upload = require('./content-services/uploadMock.js');
mockAlfrescoApi.WebScript = require('./content-services/webScriptMock.js');
mockAlfrescoApi.Tag = require('./content-services/tagMock.js');
mockAlfrescoApi.FindNodes = require('./content-services/findNodesMock.js');
mockAlfrescoApi.Rendition = require('./content-services/renditionMock.js');
mockAlfrescoApi.CustomModel = require('./content-services/customModelMock.js');
mockAlfrescoApi.Discovery = require('./content-services/discoveryMock.js');
mockAlfrescoApi.Search = require('./content-services/searchMock.js');
mockAlfrescoApi.PeopleApi = require('./content-services/peopleMock.js');
mockAlfrescoApi.GroupsApi = require('./content-services/groupsMock.js');

//Governance service
mockAlfrescoApi.GsCoreMock = {};
mockAlfrescoApi.GsSitesApi = require('./goverance-services/gsSitesApiMock.js');


//Process service
mockAlfrescoApi.ActivitiMock = {};
mockAlfrescoApi.ActivitiMock.Auth = require('./process-services/authResponseMock.js');
mockAlfrescoApi.ActivitiMock.Process = require('./process-services/processMock.js');
mockAlfrescoApi.ActivitiMock.ProcessInstanceVariables = require('./process-services/processInstanceVariablesMock.js');
mockAlfrescoApi.ActivitiMock.Profile = require('./process-services/profileMock.js');
mockAlfrescoApi.ActivitiMock.Tasks = require('./process-services/tasksMock.js');
mockAlfrescoApi.ActivitiMock.TaskFormMock = require('./process-services/taskFormMock.js');
mockAlfrescoApi.ActivitiMock.Models = require('./process-services/modelsMock.js');
mockAlfrescoApi.ActivitiMock.ModelJsonBpmMock = require('./process-services/modelJsonBpmMock.js');
mockAlfrescoApi.ActivitiMock.UserFilters = require('./process-services/userFiltersMock.js');
mockAlfrescoApi.ActivitiMock.Reports = require('./process-services/reportsMock.js');


//Oauth2
mockAlfrescoApi.Oauth2Mock = {};
mockAlfrescoApi.Oauth2Mock.Auth = require('./oauth2/authResponseMock.js');

module.exports = mockAlfrescoApi;
