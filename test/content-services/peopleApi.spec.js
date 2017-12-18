/*global describe, it, beforeEach */

var AlfrescoApi = require('../../main');
var PeopleMock = require('../../test/mockObjects/mockAlfrescoApi').PeopleApi;

describe('PeopleApi', function () {

    beforeEach(function () {
        this.peopleMock = new PeopleMock();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: 'http://127.0.0.1:8080'
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

});
