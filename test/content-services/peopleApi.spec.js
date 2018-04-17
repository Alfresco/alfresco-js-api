/*global describe, it, beforeEach */

var AlfrescoApi = require('../../main');
var PeopleMock = require('../../test/mockObjects/mockAlfrescoApi').PeopleApi;
var AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;

describe('PeopleApi', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://adfdev.lab.alfresco.me';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.peopleMock = new PeopleMock(this.hostEcm);
        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(function() {
            done();
        });
    });

    it('should add a person', function (done) {
        this.peopleMock.get201Response();
        var personBodyCreate = new this.alfrescoJsApi.core.PersonBodyCreate();

        personBodyCreate.id = 'chewbe';
        personBodyCreate.email = 'chewbe@millenniumfalcon.com';
        personBodyCreate.lastName = 'Chewbe';
        personBodyCreate.firstName = 'chewbacca';
        personBodyCreate.password = 'Rrrrrrrghghghghgh';

        this.alfrescoJsApi.core.peopleApi.addPerson(personBodyCreate).then(function () {
            done();
        }, function (error) {
            console.error(error);
        });

    });

    it('should get list of people', function (done) {
        this.peopleMock.get200ResponsePersons();

        this.alfrescoJsApi.core.peopleApi.getPersons().then(() => {
            this.peopleMock.play();

            done();
        }, (error) => {
            console.error(error);
        });

    });

});
