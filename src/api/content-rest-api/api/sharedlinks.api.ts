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

import { RenditionEntry } from '../model/renditionEntry';
import { RenditionPaging } from '../model/renditionPaging';
import { SharedLinkBodyCreate } from '../model/sharedLinkBodyCreate';
import { SharedLinkBodyEmail } from '../model/sharedLinkBodyEmail';
import { SharedLinkEntry } from '../model/sharedLinkEntry';
import { SharedLinkPaging } from '../model/sharedLinkPaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Sharedlinks service.
* @module SharedlinksApi
*/
export class SharedlinksApi extends BaseApi {
    /**
    * Create a shared link to a file
    *
    * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Create a shared link to the file **nodeId** in the request body. Also, an optional expiry date could be set,
so the shared link would become invalid when the expiry date is reached. For example:

JSON
  {
    \"nodeId\": \"1ff9da1a-ee2f-4b9c-8c34-3333333333\",
    \"expiresAt\": \"2017-03-23T23:00:00.000+0000\"
  }

**Note:** You can create shared links to more than one file
specifying a list of **nodeId**s in the JSON body like this:

JSON
[
  {
    \"nodeId\": \"1ff9da1a-ee2f-4b9c-8c34-4444444444\"
  },
  {
    \"nodeId\": \"1ff9da1a-ee2f-4b9c-8c34-5555555555\"
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}

    *
    * @param sharedLinkBodyCreate The nodeId to create a shared link for.
    * @param opts Optional parameters
    * @param opts.include Returns additional information about the shared link, the following optional fields can be requested:
* allowableOperations
* path

    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<SharedLinkEntry>
    */
    createSharedLink(sharedLinkBodyCreate: SharedLinkBodyCreate, opts?: any): Promise<SharedLinkEntry> {
        throwIfNotDefined(sharedLinkBodyCreate, 'sharedLinkBodyCreate');

        opts = opts || {};
        let postBody = sharedLinkBodyCreate;

        let pathParams = {

        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/shared-links', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SharedLinkEntry);
    }
    /**
        * Deletes a shared link
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Deletes the shared link with identifier **sharedId**.

        *
        * @param sharedId The identifier of a shared link to a file.
        * @return Promise<{}>
        */
    deleteSharedLink(sharedId: string): Promise<any> {
        throwIfNotDefined(sharedId, 'sharedId');

        let postBody = null;

        let pathParams = {
            'sharedId': sharedId
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
            '/shared-links/{sharedId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Email shared link
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Sends email with app-specific url including identifier **sharedId**.

    The client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:
    JSON
    {
        \"client\": \"myClient\",
        \"recipientEmails\": [\"john.doe@acme.com\", \"joe.bloggs@acme.com\"]
    }

    A plain text message property can be optionally provided in the request body to customise the sent email.
    Also, a locale property can be optionally provided in the request body to send the emails in a particular language (if the locale is supported by Alfresco).
    For example, to email a shared link with a messages and a locale:
    JSON
    {
        \"client\": \"myClient\",
        \"recipientEmails\": [\"john.doe@acme.com\", \"joe.bloggs@acme.com\"],
        \"message\": \"myMessage\",
        \"locale\":\"en-GB\"
    }

    **Note:** The client must be registered before you can send a shared link email. See [server documentation]. However, out-of-the-box
     share is registered as a default client, so you could pass **share** as the client name:
    JSON
    {
        \"client\": \"share\",
        \"recipientEmails\": [\"john.doe@acme.com\"]
    }


        *
        * @param sharedId The identifier of a shared link to a file.
        * @param sharedLinkBodyEmail The shared link email to send.
        * @return Promise<{}>
        */
    emailSharedLink(sharedId: string, sharedLinkBodyEmail: SharedLinkBodyEmail): Promise<any> {
        throwIfNotDefined(sharedId, 'sharedId');
        throwIfNotDefined(sharedLinkBodyEmail, 'sharedLinkBodyEmail');

        let postBody = sharedLinkBodyEmail;

        let pathParams = {
            'sharedId': sharedId
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
            '/shared-links/{sharedId}/email', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a shared link
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets minimal information for the file with shared link identifier **sharedId**.

    **Note:** No authentication is required to call this endpoint.

        *
        * @param sharedId The identifier of a shared link to a file.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SharedLinkEntry>
        */
    getSharedLink(sharedId: string, opts?: any): Promise<SharedLinkEntry> {
        throwIfNotDefined(sharedId, 'sharedId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'sharedId': sharedId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/shared-links/{sharedId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SharedLinkEntry);
    }
    /**
        * Get shared link content
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets the content of the file with shared link identifier **sharedId**.

    **Note:** No authentication is required to call this endpoint.

        *
        * @param sharedId The identifier of a shared link to a file.
        * @param opts Optional parameters
        * @param opts.attachment **true** enables a web browser to download the file as an attachment.
    **false** means a web browser may preview the file in a new tab or window, but not
    download the file.

    You can only set this parameter to **false** if the content type of the file is in the supported list;
    for example, certain image files and PDF files.

    If the content type is not supported for preview, then a value of **false**  is ignored, and
    the attachment will be returned in the response.
     (default to true)
        * @param opts.ifModifiedSince Only returns the content if it has been modified since the date provided.
    Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.

        * @param opts.range The Range header indicates the part of a document that the server should return.
    Single part request supported, for example: bytes=1-10.

        * @return Promise<{}>
        */
    getSharedLinkContent(sharedId: string, opts?: any): Promise<any> {
        throwIfNotDefined(sharedId, 'sharedId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'sharedId': sharedId
        };

        let queryParams = {
            'attachment': opts['attachment']
        };

        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince'], 'Range': opts['range']
        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/shared-links/{sharedId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get shared link rendition information
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets rendition information for the file with shared link identifier **sharedId**.

    This API method returns rendition information where the rendition status is CREATED,
    which means the rendition is available to view/download.

    **Note:** No authentication is required to call this endpoint.

        *
        * @param sharedId The identifier of a shared link to a file.
        * @param renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
        * @return Promise<RenditionEntry>
        */
    getSharedLinkRendition(sharedId: string, renditionId: string): Promise<RenditionEntry> {
        throwIfNotDefined(sharedId, 'sharedId');
        throwIfNotDefined(renditionId, 'renditionId');

        let postBody = null;

        let pathParams = {
            'sharedId': sharedId, 'renditionId': renditionId
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
            '/shared-links/{sharedId}/renditions/{renditionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RenditionEntry);
    }
    /**
        * Get shared link rendition content
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets the rendition content for file with shared link identifier **sharedId**.

    **Note:** No authentication is required to call this endpoint.

        *
        * @param sharedId The identifier of a shared link to a file.
        * @param renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
        * @param opts Optional parameters
        * @param opts.attachment **true** enables a web browser to download the file as an attachment.
    **false** means a web browser may preview the file in a new tab or window, but not
    download the file.

    You can only set this parameter to **false** if the content type of the file is in the supported list;
    for example, certain image files and PDF files.

    If the content type is not supported for preview, then a value of **false**  is ignored, and
    the attachment will be returned in the response.
     (default to true)
        * @param opts.ifModifiedSince Only returns the content if it has been modified since the date provided.
    Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.

        * @param opts.range The Range header indicates the part of a document that the server should return.
    Single part request supported, for example: bytes=1-10.

        * @return Promise<{}>
        */
    getSharedLinkRenditionContent(sharedId: string, renditionId: string, opts?: any): Promise<any> {
        throwIfNotDefined(sharedId, 'sharedId');
        throwIfNotDefined(renditionId, 'renditionId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'sharedId': sharedId, 'renditionId': renditionId
        };

        let queryParams = {
            'attachment': opts['attachment']
        };

        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince'], 'Range': opts['range']
        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/shared-links/{sharedId}/renditions/{renditionId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List renditions for a shared link
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets a list of the rendition information for the file with shared link identifier **sharedId**.

    This API method returns rendition information, including the rendition id, for each rendition
    where the rendition status is CREATED, which means the rendition is available to view/download.

    **Note:** No authentication is required to call this endpoint.

        *
        * @param sharedId The identifier of a shared link to a file.
        * @return Promise<RenditionPaging>
        */
    listSharedLinkRenditions(sharedId: string): Promise<RenditionPaging> {
        throwIfNotDefined(sharedId, 'sharedId');

        let postBody = null;

        let pathParams = {
            'sharedId': sharedId
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
            '/shared-links/{sharedId}/renditions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RenditionPaging);
    }
    /**
        * List shared links
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Get a list of links that the current user has read permission on source node.

    The list is ordered in descending modified order.

    **Note:** The list of links is eventually consistent so newly created shared links may not appear immediately.

        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.where Optionally filter the list by \"sharedByUser\" userid of person who shared the link (can also use -me-)

    *   where=(sharedByUser='jbloggs')

    *   where=(sharedByUser='-me-')

        * @param opts.include Returns additional information about the shared link, the following optional fields can be requested:
    * allowableOperations
    * path

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SharedLinkPaging>
        */
    listSharedLinks(opts?: any): Promise<SharedLinkPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/shared-links', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SharedLinkPaging);
    }

}
