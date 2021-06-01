import nock from 'nock';

export class BaseMock {

    host: string;

    constructor(host?: string) {
        this.host = host || 'http://127.0.0.1:8080';
    }

    get200GenericResponse(scriptSlug: any) {
        nock(this.host, {'encodedQueryParams': true})
            .get(scriptSlug)
            .reply(200);
    }

    put200GenericResponse(scriptSlug: any) {
        nock(this.host, {'encodedQueryParams': true})
            .put(scriptSlug)
            .reply(200);
    }

    rec() {
        nock.recorder.rec();
    }

    play() {
        nock.recorder.play();
    }

    cleanAll() {
        nock.cleanAll();
    }
}
