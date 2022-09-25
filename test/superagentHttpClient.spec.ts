import { FormValueRepresentation } from '../index';
import { SuperagentHttpClient } from '../src/superagentHttpClient';

const expect = require('chai').expect;

describe('SuperagentHttpClient', () => {
    describe('#buildRequest', () => {
        const client = new SuperagentHttpClient();

        it('should create a request with response type blob', () => {
            const queryParams = {};
            const headerParams = {};
            const formParams = {};

            const contentTypes = 'application/json';
            const accepts = 'application/json';
            const responseType = 'blob';
            const url = '/fake-api/enterprise/process-instances/';
            const httpMethod = 'GET';
            const securityOptions = {
                isBpmRequest: false,
                enableCsrf: false,
                withCredentials: false,
                authentications: {
                    basicAuth: {
                        ticket: '',
                    },
                    type: 'basic',
                },
                defaultHeaders: {},
            };

            const response: any = client['buildRequest'](
                httpMethod,
                url,
                queryParams,
                headerParams,
                formParams,
                null,
                contentTypes,
                accepts,
                responseType,
                null,
                null,
                securityOptions
            );

            expect(response.url).equal('/fake-api/enterprise/process-instances/');
            expect(response.header.Accept).equal('application/json');
            expect(response.header['Content-Type']).equal('application/json');
            expect(response._responseType).equal('blob');
        });
    });

    describe('#deserialize', () => {
        it('should the deserializer return an array of object when the response is an array', () => {
            const data = {
                body: [
                    {
                        id: '1',
                        name: 'test1',
                    },
                    {
                        id: '2',
                        name: 'test2',
                    },
                ],
            };
            const result = SuperagentHttpClient['deserialize'](data, FormValueRepresentation);
            const isArray = Array.isArray(result);
            const isObject = result[0] instanceof FormValueRepresentation;
            expect(isArray).to.equal(true);
            expect(isObject).to.equal(true);
        });
    });
});