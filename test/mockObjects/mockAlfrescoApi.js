var mockAlfrescoApi = {};

mockAlfrescoApi.Auth = require('./authResponseMock.js');
mockAlfrescoApi.Node = require('./nodeMock.js');
mockAlfrescoApi.UploadMock = require('./uploadMock.js');

module.exports = mockAlfrescoApi;
