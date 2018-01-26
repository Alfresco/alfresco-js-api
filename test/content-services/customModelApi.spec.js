/*global describe, it, beforeEach */

var AlfrescoApi = require('../../main');
var AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
var CustomModelMock = require('../../test/mockObjects/mockAlfrescoApi').CustomModel;

describe('Custom Model Api', function () {
    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.customModelMock = new CustomModelMock(this.hostEcm);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        }, (error) => {
            console.log('error ' + JSON.stringify(error));
        });
    });

    describe('Get', function () {

        it('All Custom Model', function (done) {
            this.customModelMock.get200AllCustomModel();

            this.alfrescoJsApi.core.customModelApi.getAllCustomModel().then(function () {
                done();
            }, function (error) {
                console.log('error' + error);
            });
        });

    });

    describe('Create', function () {

        it('createCustomModel', function (done) {
            this.customModelMock.create201CustomModel();

            var status = 'DRAFT';
            var description = 'Test model description';
            var name = 'testModel';
            var namespaceUri = 'http://www.alfresco.org/model/testNamespace/1.0';
            var namespacePrefix = 'test';

            this.alfrescoJsApi.core.customModelApi.createCustomModel(status, description, name, namespaceUri, namespacePrefix).then(function () {
                done();
            }, function (error) {
                console.log('error' + error);
            });
        });

    });

    describe('PUT', function () {

        it('activateCustomModel', function (done) {
            this.customModelMock.activateCustomModel200();
            var name = 'testModel';

            this.alfrescoJsApi.core.customModelApi.activateCustomModel(name).then(function () {
                done();
            }, function (error) {
                console.log('error' + error);
            });
        });

    });
});
