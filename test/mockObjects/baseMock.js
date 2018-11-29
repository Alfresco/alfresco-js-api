'use strict';

let nock = require('nock');

class
BaseMock {

    constructor(host) {
        this.host = host ? host : 'http://127.0.0.1:8080';
    }

    get200GenericResponse(scriptSlug) {
        nock(this.host, {'encodedQueryParams': true})
            .get(scriptSlug)
            .reply(200);
    }

    put200GenericResponse(scriptSlug) {
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

module.exports = BaseMock;
