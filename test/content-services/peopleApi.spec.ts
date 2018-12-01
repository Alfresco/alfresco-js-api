/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from 'alfresco-js-api';
import { PersonBodyCreate } from '../../src/api/content-rest-api/src/model/PersonBodyCreate';

let PeopleMock = require('../../test/mockObjects/mockAlfrescoApi').PeopleApi;
let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;

describe('PeopleApi', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://adfdev.lab.alfresco.me';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.peopleMock = new PeopleMock(this.hostEcm);
        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(function () {
            done();
        });
    });

    it('should add a person', function (done) {
        this.peopleMock.get201Response();
        let personBodyCreate: PersonBodyCreate = new PersonBodyCreate();

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
