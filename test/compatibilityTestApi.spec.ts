import { AlfrescoApiCompatibility } from '../src/alfrescoApiCompatibility';
import { PersonBodyCreate } from '../src/api/content-rest-api/model/personBodyCreate';
import { PeopleMock } from './mockObjects';

describe('Compatibility test', () => {
    let peopleMock: PeopleMock;
    let alfrescoApiCompatibility: AlfrescoApiCompatibility;

    beforeEach(() => {
        peopleMock = new PeopleMock();

        alfrescoApiCompatibility = new AlfrescoApiCompatibility({
            hostEcm: 'http://127.0.0.1:8080'
        });
    });

    it('should add a person', (done) => {
        const personBodyCreate = new PersonBodyCreate();
        peopleMock.get201Response();

        personBodyCreate.id = 'chewbe';
        personBodyCreate.email = 'chewbe@millenniumfalcon.com';
        personBodyCreate.lastName = 'Chewbe';
        personBodyCreate.firstName = 'chewbacca';
        personBodyCreate.password = 'Rrrrrrrghghghghgh';

        alfrescoApiCompatibility.core.peopleApi.addPerson(personBodyCreate).then(
            () => { done(); },
            (error: any) => { console.error(error); }
        );
    });
});
