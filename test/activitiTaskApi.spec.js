/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
//var expect = require('chai').expect;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;

describe('Activiti Task Api', function () {
    beforeEach(function (done) {
        this.hostActiviti = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostActiviti);

        //this.authResponseBpmMock.rec();

        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin@app.activiti.com',
            password: 'admin',
            host: this.hostActiviti,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login().then(() => {
            done();
        });
    });

    it.skip('get activiti Task list', function (done) {

        this.alfrescoJsApi.activiti.taskApi.filterTasks('{"appId": "2"}').then((data)=> {
            this.authResponseBpmMock.play();

            console.log('a' + data);
            done();
        });
    });
});
