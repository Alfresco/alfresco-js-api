import { AlfrescoApiConfig } from './alfrescoApiConfig';
import { RequestOptions } from './api-clients/http-client.interface';
import { ContentClient } from './contentClient';
import { SuperagentHttpClient } from './superagentHttpClient';

const config = new AlfrescoApiConfig({
    contextRoot: 'alfresco',
    contextRootBpm: 'activiti-app',
    disableCsrf: false,
    hostBpm: 'http://example.com/bpm',
    hostEcm: 'http://example.com/ecm',
});

describe('AlfrescoApiClient', () => {
    const callHostApiSpy = jest.spyOn(SuperagentHttpClient.prototype, 'request');
    const contentClient = new ContentClient(config, '/api/-default-/private/alfresco/versions/1');

    it('should create correct url path for PUT calls with contextRoot and custom request options', () => {
        const options: RequestOptions = {
            path: 'cmm/{modelName}/types/{typeName}?select=props',
            pathParams: {
                modelName: 'activitiFormsModel',
                typeName: 'typeTest',
            },
        };

        contentClient.put(options);
        const expectedUrl = 'http://example.com/ecm/alfresco/api/-default-/private/alfresco/versions/1/cmm/activitiFormsModel/types/typeTest?select=props';

        expect(callHostApiSpy).toHaveBeenLastCalledWith(
            expectedUrl,
            expect.objectContaining({
                httpMethod: 'PUT',
            }),
            expect.any(Object),
            expect.any(Object)
        );
    });

    it('should create correct url path for GET calls with contextRoot and custom request options', () => {
        const options: RequestOptions = {
            path: 'cmm',
        };

        contentClient.get(options);
        const expectedUrl = 'http://example.com/ecm/alfresco/api/-default-/private/alfresco/versions/1/cmm';

        expect(callHostApiSpy).toHaveBeenLastCalledWith(
            expectedUrl,
            expect.objectContaining({
                httpMethod: 'GET',
            }),
            expect.any(Object),
            expect.any(Object)
        );
    });

    it('should create correct url path for POST calls with contextRoot and custom request options', () => {
        const options: RequestOptions = {
            path: 'cmm/{modelName}/types',
            bodyParam: { name: 'typeTest', parentName: 'cm:folder', title: 'typeTest', description: '' },
            pathParams: { modelName: 'activitiFormsModel' },
        };

        contentClient.post(options);
        const expectedUrl = 'http://example.com/ecm/alfresco/api/-default-/private/alfresco/versions/1/cmm/activitiFormsModel/types';

        expect(callHostApiSpy).toHaveBeenLastCalledWith(
            expectedUrl,
            expect.objectContaining({
                httpMethod: 'POST',
                bodyParam: options.bodyParam,
            }),
            expect.any(Object),
            expect.any(Object)
        );
    });
});
