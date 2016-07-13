var mockAlfrescoApi = {};

mockAlfrescoApi.Auth = require('./authResponseMock.js');
mockAlfrescoApi.Node = require('./nodeMock.js');
mockAlfrescoApi.Upload = require('./uploadMock.js');

module.exports = mockAlfrescoApi;
