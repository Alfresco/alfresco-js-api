/*global describe, it, beforeEach */

import { PersonBodyCreate } from '../src/api-new/content-rest-api/model/PersonBodyCreate';
import { AlfrescoApiCompatibility } from '../src/alfrescoApiCompatibility';
import { PeopleApi } from '../src/api-new/content-rest-api/api/people.api';

let PeopleMock = require('../test/mockObjects/mockAlfrescoApi').PeopleApi;

describe('PeopleApi', function() {

    beforeEach(function() {
        this.peopleMock = new PeopleMock();

        this.alfrescoApiCompatibility = new AlfrescoApiCompatibility({
            hostEcm: 'http://127.0.0.1:8080'
        });
    });

    it.only('should add a person', function(done) {
        let personBodyCreate = new PersonBodyCreate();
        this.peopleMock.get201Response();

        personBodyCreate.id = 'chewbe';
        personBodyCreate.email = 'chewbe@millenniumfalcon.com';
        personBodyCreate.lastName = 'Chewbe';
        personBodyCreate.firstName = 'chewbacca';
        personBodyCreate.password = 'Rrrrrrrghghghghgh';

       // console.log(JSON.stringify(this.alfrescoApiCompatibility.core));

        this.alfrescoApiCompatibility.core.peopleApi.addPerson(personBodyCreate).then(function() {
            done();
        }, function(error) {
            console.error(error);
        });

    });

});
