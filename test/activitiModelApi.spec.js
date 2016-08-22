/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
var ModelsMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Models;

describe('Activiti Process Api', function () {
    beforeEach(function (done) {
        this.hostActiviti = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostActiviti);
        this.modelsMock = new ModelsMock(this.hostActiviti);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            host: this.hostActiviti,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get activiti model', function (done) {
        this.modelsMock.get200getModels();

        var opts = {
            'filter': 'myReusableForms',
            'modelType': 2
        };

        this.alfrescoJsApi.activiti.modelsApi.getModels(opts).then((data)=> {
            expect(data.data[0].name).equal('Metadata');
            done();
        });

    });
});
