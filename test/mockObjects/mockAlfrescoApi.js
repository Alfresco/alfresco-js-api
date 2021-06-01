let mockAlfrescoApi = {};

//Process service
mockAlfrescoApi.ActivitiMock = {};
mockAlfrescoApi.ActivitiMock.Tasks = require('./process-services/tasksMock.js');
mockAlfrescoApi.ActivitiMock.TaskFormMock = require('./process-services/taskFormMock.js');
mockAlfrescoApi.ActivitiMock.UserFilters = require('./process-services/userFiltersMock.js');


//Oauth2
mockAlfrescoApi.Oauth2Mock = {};
mockAlfrescoApi.Oauth2Mock.Auth = require('./oauth2/authResponseMock.js');

module.exports = mockAlfrescoApi;
