/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AlfrescoApi } from '../../../alfrescoApi';
import { PaginatedList, PaginatedEntries } from '../model/pagination';
import { BaseApi } from './base.api';
import { assertStringParam } from '../../../assert';

export interface CustomModel {
    name: string;
    namespacePrefix: string;
    description: string;
    author: string;
    namespaceUri: string;
    status: 'ACTIVE' | 'DRAFT';
}

export interface CustomType {
    name?: string;
    parentName?: string;
    prefixedName?: string;
    properties?: CustomModelProperty[];
    title?: string;
}

export interface CustomAspect {
    description?: string;
    name?: string;
    parentName?: string;
    prefixedName?: string;
    properties?: CustomModelProperty[];
    title?: string;
}

export interface CustomModelProperty {
    name?: string;
    prefixedName?: string;
    title?: string;
    dataType?: string;
    facetable?: 'FALSE' | 'TRUE';
    indexTokenisationMode?: 'FALSE' | 'TRUE';
    constraints?: CustomModelPropertyConstraint[];
    multiValued?: boolean;
    mandatoryEnforced?: boolean;
    mandatory?: boolean;
    indexed?: boolean;
}

export interface CustomModelPropertyConstraint {
    name: string;
    prefixedName: string;
    type: string;
    parameters: any[];
}

/**
 * Comments service.
 * @module api/CustomModelApi
 * @version 0.1.0
 */

/**
 * Constructs a new CustomModelApi.
 * @alias module:api/CustomModelApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class CustomModelApi extends BaseApi {
    private = true;

    constructor(alfrescoApi?: AlfrescoApi) {
        super(alfrescoApi);

        if (alfrescoApi) {
            this.apiClient = alfrescoApi.contentPrivateClient;
        }
    }

    /**
     * create Custom Model
     */
    createCustomModel(status: string, description: string, name: string, namespaceUri: string, namespacePrefix: string, author?: string): Promise<{ entry: CustomModel }> {
        assertStringParam(namespaceUri, 'namespaceUri');
        assertStringParam(namespacePrefix, 'namespacePrefix');

        const bodyParam = {
            status,
            description,
            name,
            namespaceUri,
            namespacePrefix,
            author
        };

        return this.apiClient.post({
            path: 'cmm',
            bodyParam
        });
    }

    /**
     * Create a custom type
     */
    createCustomType(modelName: string, name: string, parentName?: string, title?: string, description?: string): Promise<{ entry: CustomType }> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(name, 'name');

        const bodyParam = {
            name,
            parentName,
            title,
            description
        };

        const pathParams = {
            modelName
        };

        return this.apiClient.post({
            path: 'cmm/{modelName}/types',
            bodyParam,
            pathParams
        });
    }

    /**
     * Create a custom aspect
     */
    createCustomAspect(modelName: string, name: string, parentName?: string, title?: string, description?: string): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(name, 'name');

        const bodyParam = {
            name,
            parentName,
            title,
            description
        };

        const pathParams = {
            modelName
        };

        return this.apiClient.post({
            path: 'cmm/{modelName}/aspects',
            bodyParam,
            pathParams
        });
    }

    /**
     * Create a custom constraint
     */
    createCustomConstraint(modelName: string, name: string, type: string, parameters?: any): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(type, 'type');
        assertStringParam(name, 'name');

        const bodyParam = {
            name,
            type,
            parameters
        };

        const pathParams = {
            modelName
        };

        return this.apiClient.post({
            path: 'cmm/{modelName}/constraints',
            bodyParam,
            pathParams
        });
    }

    /**
     * Activate the custom model
     */
    activateCustomModel(modelName: string): Promise<{ entry: CustomModel }> {
        assertStringParam(modelName, 'modelName');

        const bodyParam = {
            'status': 'ACTIVE'
        };

        const pathParams = {
            modelName
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}?select=status',
            bodyParam,
            pathParams
        });
    }

    /**
     * Deactivate the custom model
     */
    deactivateCustomModel(modelName: string): Promise<{ entry: CustomModel }> {
        assertStringParam(modelName, 'modelName');

        const bodyParam = {
            'status': 'DRAFT'
        };

        const pathParams = {
            modelName
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}?select=status',
            bodyParam,
            pathParams
        });
    }

    /**
     * Add property into an existing aspect
     */
    addPropertyToAspect(modelName: string, aspectName: string, properties?: CustomModelProperty[]): Promise<CustomAspect> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(aspectName, 'aspectName');

        const bodyParam = {
            'name': aspectName,
            properties
        };

        const pathParams = {
            modelName,
            aspectName
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}/aspects/{aspectName}?select=props',
            bodyParam,
            pathParams
        });
    }

    /**
     * Add Property into an existing type
     */
    addPropertyToType(modelName: string, typeName: string, properties?: CustomModelProperty[]): Promise<CustomType> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(typeName, 'typeName');

        const bodyParam = {
            'name': typeName,
            properties
        };

        const pathParams = {
            modelName,
            typeName
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}/types/{typeName}?select=props',
            bodyParam,
            pathParams
        });
    }

    /**
     * Edit an existing custom model
     */
    updateCustomModel(modelName: string, description?: string, namespaceUri?: string, namespacePrefix?: string): Promise<any> {
        assertStringParam(modelName, 'modelName');

        const bodyParam = {
            'name': modelName,
            description,
            namespaceUri,
            namespacePrefix
        };

        const pathParams = {
            modelName
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}',
            bodyParam,
            pathParams
        });
    }

    /**
     * Edit an existing custom model type
     */
    updateCustomType(modelName: string, typeName: string, description?: string, parentName?: string, title?: string): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(typeName, 'typeName');

        const bodyParam = {
            'name': modelName,
            parentName,
            title,
            description
        };

        const pathParams = {
            modelName,
            typeName
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}/types/{typeName}',
            bodyParam,
            pathParams
        });
    }

    /**
     * Edit an existing custom model aspect
     */
    updateCustomAspect(modelName: string, aspectName: string, description?: string, parentName?: string, title?: string): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(aspectName, 'aspectName');

        const bodyParam = {
            'name': modelName,
            parentName,
            title,
            description
        };

        const pathParams = {
            modelName,
            aspectName
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}/aspects/{aspectName}',
            bodyParam,
            pathParams
        });
    }

    /**
     * Get all custom models
     */
    getAllCustomModel(): Promise<PaginatedEntries<CustomModel>> {
        return this.apiClient.get({
            path: 'cmm'
        });
    }

    /**
     * Get custom model
     */
    getCustomModel(modelName: string, queryParams?: any): Promise<{ entry: CustomModel }> {
        assertStringParam(modelName, 'modelName');

        const pathParams = {
            modelName
        };

        return this.apiClient.get({
            path: 'cmm/{modelName}',
            pathParams,
            queryParams
        });
    }

    /**
     * Get all custom model types
     */
    getAllCustomType(modelName: string): Promise<PaginatedList<CustomType>> {
        assertStringParam(modelName, 'modelName');

        const pathParams = {
            modelName
        };

        return this.apiClient.get({
            path: 'cmm/{modelName}/types',
            pathParams
        });
    }

    /**
     * Get custom model type
     */
    getCustomType(modelName: string, typeName?: string, queryParams?: any): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(typeName, 'typeName');

        const pathParams = {
            modelName,
            typeName
        };

        return this.apiClient.get({
            path: 'cmm/{modelName}/types/{typeName}',
            pathParams,
            queryParams
        });
    }

    /**
     * Get all custom model aspect
     */
    getAllCustomAspect(modelName: string, queryParams?: any): Promise<PaginatedList<CustomAspect>> {
        assertStringParam(modelName, 'modelName');

        const pathParams = {
            modelName
        };

        return this.apiClient.get({
            path: 'cmm/{modelName}/aspects',
            pathParams,
            queryParams
        });
    }

    /**
     * Get custom model aspect
     */
    getCustomAspect(modelName: string, aspectName: string, queryParams?: any): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(aspectName, 'aspectName');

        const pathParams = {
            modelName,
            aspectName
        };

        return this.apiClient.get({
            path: 'cmm/{modelName}/aspects/{aspectName}',
            pathParams,
            queryParams
        });
    }

    /**
     * Get all custom model defined constraints
     */
    getAllCustomConstraints(modelName: string, queryParams?: any): Promise<any> {
        assertStringParam(modelName, 'modelName');

        const pathParams = {
            modelName
        };

        return this.apiClient.get({
            path: 'cmm/{modelName}/constraints',
            pathParams,
            queryParams
        });
    }

    /**
     * Get custom model defined constraints
     */
    getCustomConstraints(modelName: string, constraintName: string, queryParams?: any): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(constraintName, 'constraintName');

        const pathParams = {
            modelName,
            constraintName
        };

        return this.apiClient.get({
            path: 'cmm/{modelName}/constraints{constraintName}',
            pathParams,
            queryParams
        });
    }

    /**
     * Delete the given custom model
     */
    deleteCustomModel(modelName: string): Promise<any> {
        assertStringParam(modelName, 'modelName');

        const pathParams = {
            modelName
        };

        return this.apiClient.delete({
            path: 'cmm/{modelName}',
            pathParams
        });
    }

    /**
     * Delete the given custom type
     */
    deleteCustomType(modelName: string, typeName: string): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(typeName, 'typeName');

        const pathParams = {
            modelName,
            typeName
        };

        return this.apiClient.delete({
            path: 'cmm/{modelName}/types/{typeName}',
            pathParams
        });
    }

    deleteCustomAspect(modelName: string, aspectName: string): Promise<any> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(aspectName, 'aspectName');

        const pathParams = {
            modelName,
            aspectName
        };

        return this.apiClient.delete({
            path: 'cmm/{modelName}/aspects/{aspectName}',
            pathParams
        });
    }

    deleteCustomAspectProperty(modelName: string, aspectName: string, propertyName: string): Promise<{ entry: CustomAspect }> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(aspectName, 'aspectName');
        assertStringParam(propertyName, 'propertyName');

        const bodyParam = {
            'name': aspectName
        };

        const pathParams = {
            modelName,
            aspectName
        };

        const queryParams = {
            select: 'props',
            delete: propertyName,
            update: true
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}/aspects/{aspectName}',
            bodyParam,
            pathParams,
            queryParams
        });
    }

    deleteCustomTypeProperty(modelName: string, typeName: string, propertyName: string): Promise<{ entry: CustomType }> {
        assertStringParam(modelName, 'modelName');
        assertStringParam(typeName, 'typeName');
        assertStringParam(propertyName, 'propertyName');

        const bodyParam = {
            'name': typeName
        };

        const pathParams = {
            modelName,
            typeName
        };

        const queryParams = {
            select: 'props',
            delete: propertyName,
            update: true
        };

        return this.apiClient.put({
            path: 'cmm/{modelName}/types/{typeName}',
            bodyParam,
            pathParams,
            queryParams
        });
    }

}
