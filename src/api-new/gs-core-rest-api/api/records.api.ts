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

import { FilePlanComponentBodyUpdate } from '../model/filePlanComponentBodyUpdate';
import { ModelError } from '../model/modelError';
import { RecordEntry } from '../model/recordEntry';
import { RequestBodyFile } from '../model/requestBodyFile';
import { BaseApi } from './base.api';

/**
* Records service.
* @module RecordsApi
*/
export class RecordsApi extends BaseApi {
    /**
    * Complete a record
    * 
    * Completes the record **recordId**.

    * 
    * @param  recordId The identifier of a record.
    * @param Object opts Optional parameters
    * @param  opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:
* allowableOperations
* content
* isCompleted
* path

    * @param  opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<RecordEntry>
    */
    completeRecord(recordId: string, opts: any): Promise<RecordEntry> {
        opts = opts || {};
        let postBody = null;

        if (recordId === undefined || recordId === null) {
            throw new Error("Required param 'recordId' in completeRecord");
        }

        let pathParams = {
            'recordId': recordId
        };

        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/records/{recordId}/complete', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete a record
        * 
        * Deletes the record **recordId**. Deleted file plan components cannot be recovered, they are deleted permanently.
    
        * 
        * @param  recordId The identifier of a record.
        * @return Promise<{}>
        */
    deleteRecord(recordId: string): Promise<{}> {

        let postBody = null;

        if (recordId === undefined || recordId === null) {
            throw new Error("Required param 'recordId' in deleteRecord");
        }

        let pathParams = {
            'recordId': recordId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/records/{recordId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * File a record
        * 
        * Files the record **recordId** in the target record folder.
    
    You need to specify the target record folder by providing its id **targetParentId**
    
    If the record is already filed, a link to the target record folder is created.
    
    You can use the **include** parameter (include=allowableOperations) to return additional information.
    
        * 
        * @param  recordId The identifier of a record.
        * @param  nodeBodyFile The target record folder id
        * @param Object opts Optional parameters
        * @param  opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * content
    * isCompleted
    * path
    
        * @param  opts.fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        * @return Promise<RecordEntry>
        */
    fileRecord(recordId: string, nodeBodyFile: RequestBodyFile, opts: any): Promise<RecordEntry> {
        opts = opts || {};
        let postBody = nodeBodyFile;

        if (recordId === undefined || recordId === null) {
            throw new Error("Required param 'recordId' in fileRecord");
        }

        if (nodeBodyFile === undefined || nodeBodyFile === null) {
            throw new Error("Required param 'nodeBodyFile' in fileRecord");
        }

        let pathParams = {
            'recordId': recordId
        };

        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/records/{recordId}/file', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a record
        * 
        * Gets information for record **recordId**
    
    Mandatory fields and the record's aspects and properties are returned by default.
    
    You can use the **include** parameter (include=allowableOperations) to return additional information.
    
        * 
        * @param  recordId The identifier of a record.
        * @param Object opts Optional parameters
        * @param  opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * content
    * isCompleted
    * path
    
        * @param  opts.fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        * @return Promise<RecordEntry>
        */
    getRecord(recordId: string, opts: any): Promise<RecordEntry> {
        opts = opts || {};
        let postBody = null;

        if (recordId === undefined || recordId === null) {
            throw new Error("Required param 'recordId' in getRecord");
        }

        let pathParams = {
            'recordId': recordId
        };

        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/records/{recordId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get record content
        * 
        * 
    Gets the content of the record with identifier **recordId**.
    
        * 
        * @param  recordId The identifier of a record.
        * @param Object opts Optional parameters
        * @param  opts.attachment **true** enables a web browser to download the file as an attachment.
    **false** means a web browser may preview the file in a new tab or window, but not
    download the file.
    
    You can only set this parameter to **false** if the content type of the file is in the supported list;
    for example, certain image files and PDF files.
    
    If the content type is not supported for preview, then a value of **false**  is ignored, and
    the attachment will be returned in the response.
     (default to true)
        * @param  opts.ifModifiedSince Only returns the content if it has been modified since the date provided.
    Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
    
        * @return Promise<{}>
        */
    getRecordContent(recordId: string, opts: any): Promise<{}> {
        opts = opts || {};
        let postBody = null;

        if (recordId === undefined || recordId === null) {
            throw new Error("Required param 'recordId' in getRecordContent");
        }

        let pathParams = {
            'recordId': recordId
        };

        let queryParams = {
            'attachment': opts['attachment']
        };

        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince']
        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/records/{recordId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update record
        * 
        * Updates the record **recordId**. For example, you can rename a record:
    JSON
    {
      \"name\":\"My new name\"
    }
    
    You can also set or update one or more properties:
    JSON
    {
      \"properties\":
        {
           \"cm:title\":\"New title\",
           \"cm:description\":\"New description\"
        }
    }
    
    **Note:** if you want to add or remove aspects, then you must use **GET /records/{recordId}** first to get the complete set of *aspectNames*.
    
    **Note:** Currently there is no optimistic locking for updates, so they are applied in \"last one wins\" order.
    
        * 
        * @param  recordId The identifier of a record.
        * @param  recordBodyUpdate The record information to update.
        * @param Object opts Optional parameters
        * @param  opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * content
    * isCompleted
    * path
    
        * @param  opts.fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        * @return Promise<RecordEntry>
        */
    updateRecord(recordId: string, recordBodyUpdate: FilePlanComponentBodyUpdate, opts: any): Promise<RecordEntry> {
        opts = opts || {};
        let postBody = recordBodyUpdate;

        if (recordId === undefined || recordId === null) {
            throw new Error("Required param 'recordId' in updateRecord");
        }

        if (recordBodyUpdate === undefined || recordBodyUpdate === null) {
            throw new Error("Required param 'recordBodyUpdate' in updateRecord");
        }

        let pathParams = {
            'recordId': recordId
        };

        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/records/{recordId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
