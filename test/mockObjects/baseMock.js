'use strict';

var nock = require('nock');

class BaseMock {

    constructor(host) {
        this.host = host ? host : 'http://127.0.0.1:8080';
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get(this.scriptSlug)
            .reply(200, {
                'randomStructure': {
                    'exampleInt': 1,
                    'exampleString': 'string test'
                }
            });
    }

    rec() {
        nock.recorder.rec();
    }

    play() {
        nock.recorder.play();
    }
}

module.exports = BaseMock;
