import { AlfrescoApi } from '../src/alfrescoApi';
import { PersonBodyCreate } from '../src/api/content-rest-api/model/personBodyCreate';
import { PeopleApi } from '../src/api/content-rest-api/api/people.api';
import { PeopleMock } from './mockObjects';
import { AlfrescoApiConfig } from '..';

describe('PeopleApi', () => {
    let peopleMock: PeopleMock;
    let peopleApi: PeopleApi;

    beforeEach(() => {
        peopleMock = new PeopleMock();

        const alfrescoApi = new AlfrescoApi({
            hostEcm: 'http://127.0.0.1:8080'
        } as AlfrescoApiConfig);

        peopleApi = new PeopleApi(alfrescoApi);
    });

    it('should add a person', (done) => {
        const personBodyCreate = new PersonBodyCreate();
        peopleMock.get201Response();

        personBodyCreate.id = 'chewbe';
        personBodyCreate.email = 'chewbe@millenniumfalcon.com';
        personBodyCreate.lastName = 'Chewbe';
        personBodyCreate.firstName = 'chewbacca';
        personBodyCreate.password = 'Rrrrrrrghghghghgh';

        peopleApi.createPerson(personBodyCreate).then(
            () => {
                done();
            },
            (error: any) => {
                console.error(error);
            }
        );
    });
});
