/*global describe, it, beforeEach */

import { AlfrescoApi } from '../../src/alfrescoApi';
import { PersonBodyCreate } from '../../src/api/content-rest-api/model/personBodyCreate';
import { PeopleApi } from '../../src/api/content-rest-api';
import { AuthResponseMock, PeopleMock } from '../../test/mockObjects';

describe('PeopleApi', () => {
    let authResponseMock: AuthResponseMock;
    let peopleMock: PeopleMock;
    let peopleApi: PeopleApi;

    beforeEach((done) => {
        const hostEcm = 'http://adfdev.lab.alfresco.me';

        authResponseMock = new AuthResponseMock(hostEcm);
        peopleMock = new PeopleMock(hostEcm);
        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        peopleApi = new PeopleApi(alfrescoJsApi);
    });

    it('should add a person', (done) => {
        peopleMock.get201Response();

        const payload = new PersonBodyCreate();
        payload.id = 'chewbe';
        payload.email = 'chewbe@millenniumfalcon.com';
        payload.lastName = 'Chewbe';
        payload.firstName = 'chewbacca';
        payload.password = 'Rrrrrrrghghghghgh';

        peopleApi.createPerson(payload).then(
            () => {
                done();
            },
            (error: any) => {
                console.error(error);
            }
        );
    });

    it('should get list of people', (done) => {
        peopleMock.get200ResponsePersons();

        peopleApi.listPeople().then(
            () => {
                peopleMock.play();
                done();
            },
            (error: any) => {
                console.error(error);
            }
        );
    });
});
