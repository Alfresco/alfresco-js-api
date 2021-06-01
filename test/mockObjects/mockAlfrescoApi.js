let mockAlfrescoApi = {};


//Oauth2
mockAlfrescoApi.Oauth2Mock = {};
mockAlfrescoApi.Oauth2Mock.Auth = require('./oauth2/authResponseMock.js');

module.exports = mockAlfrescoApi;
