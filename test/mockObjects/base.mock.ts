import nock from 'nock';

export class BaseMock {
    host: string;

    constructor(host?: string) {
        this.host = host || 'http://127.0.0.1:8080';
    }

    get200GenericResponse(scriptSlug: any): void {
        nock(this.host, { encodedQueryParams: true }).get(scriptSlug).reply(200);
    }

    put200GenericResponse(scriptSlug: any): void {
        nock(this.host, { encodedQueryParams: true }).put(scriptSlug).reply(200);
    }

    rec(): void {
        nock.recorder.rec();
    }

    play(): void {
        nock.recorder.play();
    }

    cleanAll(): void {
        nock.cleanAll();
    }
}
