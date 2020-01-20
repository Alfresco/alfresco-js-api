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

import { ClientBody } from '../model/clientBody';
import { PasswordResetBody } from '../model/passwordResetBody';
import { PersonBodyCreate } from '../model/personBodyCreate';
import { PersonBodyUpdate } from '../model/personBodyUpdate';
import { PersonEntry } from '../model/personEntry';
import { PersonPaging } from '../model/personPaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* People service.
* @module PeopleApi
*/
export class PeopleApi extends BaseApi {
    /**
    * Create person
    *
    * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Create a person.

If applicable, the given person's login access can also be optionally disabled.

You must have admin rights to create a person.

You can set custom properties when you create a person:
JSON
{
  \"id\": \"abeecher\",
  \"firstName\": \"Alice\",
  \"lastName\": \"Beecher\",
  \"email\": \"abeecher@example.com\",
  \"password\": \"secret\",
  \"properties\":
  {
    \"my:property\": \"The value\"
  }
}

**Note:** setting properties of type d:content and d:category are not supported.

    *
    * @param personBodyCreate The person details.
    * @param opts Optional parameters
    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<PersonEntry>
    */
    createPerson(personBodyCreate: PersonBodyCreate, opts?: any): Promise<PersonEntry> {
        throwIfNotDefined(personBodyCreate, 'personBodyCreate');

        opts = opts || {};
        let postBody = personBodyCreate;

        let pathParams = {

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
            '/people', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PersonEntry);
    }
    /**
        * Delete avatar image
        *
        * **Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

    Deletes the avatar image related to person **personId**.

    You must be the person or have admin rights to update a person's avatar.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @return Promise<{}>
        */
    deleteAvatarImage(personId: string): Promise<any> {
        throwIfNotDefined(personId, 'personId');

        let postBody = null;

        let pathParams = {
            'personId': personId
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
            '/people/{personId}/avatar', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get avatar image
        *
        * **Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

    Gets the avatar image related to the person **personId**. If the person has no related avatar then
    the **placeholder** query parameter can be optionally used to request a placeholder image to be returned.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
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

        * @param opts.placeholder If **true** and there is no avatar for this **personId**
    then the placeholder image is returned, rather than a 404 response.
     (default to true)
        * @return Promise<{}>
        */
    getAvatarImage(personId: string, opts?: any): Promise<any> {
        throwIfNotDefined(personId, 'personId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId
        };

        let queryParams = {
            'attachment': opts['attachment'],
            'placeholder': opts['placeholder']
        };

        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince']
        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/avatar', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a person
        *
        * Gets information for the person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<PersonEntry>
        */
    getPerson(personId: string, opts?: any): Promise<PersonEntry> {
        throwIfNotDefined(personId, 'personId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId
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
            '/people/{personId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PersonEntry);
    }
    /**
        * List people
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    List people.

    You can use the **include** parameter to return any additional information.

    The default sort order for the returned list is for people to be sorted by ascending id.
    You can override the default by using the **orderBy** parameter.

    You can use any of the following fields to order the results:
    * id
    * firstName
    * lastName

        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.include Returns additional information about the person. The following optional fields can be requested:
    * properties
    * aspectNames
    * capabilities

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<PersonPaging>
        */
    listPeople(opts?: any): Promise<PersonPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
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
            '/people', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PersonPaging);
    }
    /**
        * Request password reset
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Initiates the reset password workflow to send an email with reset password instruction to the user's registered email.

    The client is mandatory in the request body. For example:
    JSON
    {
      \"client\": \"myClient\"
    }

    **Note:** The client must be registered before this API can send an email. See [server documentation]. However, out-of-the-box
    share is registered as a default client, so you could pass **share** as the client name:
    JSON
    {
      \"client\": \"share\"
    }

    **Note:** No authentication is required to call this endpoint.

        *
        * @param personId The identifier of a person.
        * @param clientBody The client name to send email with app-specific url.
        * @return Promise<{}>
        */
    requestPasswordReset(personId: string, clientBody: ClientBody): Promise<any> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(clientBody, 'clientBody');

        let postBody = clientBody;

        let pathParams = {
            'personId': personId
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
            '/people/{personId}/request-password-reset', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Reset password
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Resets user's password

    The password, id and key properties are mandatory in the request body. For example:
    JSON
    {
      \"password\":\"newPassword\",
      \"id\":\"activiti$10\",
      \"key\":\"4dad6d00-0daf-413a-b200-f64af4e12345\"
    }

    **Note:** No authentication is required to call this endpoint.

        *
        * @param personId The identifier of a person.
        * @param passwordResetBody The reset password details
        * @return Promise<{}>
        */
    resetPassword(personId: string, passwordResetBody: PasswordResetBody): Promise<any> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(passwordResetBody, 'passwordResetBody');

        let postBody = passwordResetBody;

        let pathParams = {
            'personId': personId
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
            '/people/{personId}/reset-password', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update avatar image
        *
        * **Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

    Updates the avatar image related to the person **personId**.

    The request body should be the binary stream for the avatar image. The content type of the file
    should be an image file. This will be used to generate an \"avatar\" thumbnail rendition.

    You must be the person or have admin rights to update a person's avatar.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param contentBodyUpdate The binary content
        * @return Promise<{}>
        */
    updateAvatarImage(personId: string, contentBodyUpdate: string): Promise<any> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(contentBodyUpdate, 'contentBodyUpdate');

        let postBody = contentBodyUpdate;

        let pathParams = {
            'personId': personId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/octet-stream'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/avatar', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update person
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Update the given person's details.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

    If applicable, the given person's login access can also be optionally disabled or re-enabled.

    You must have admin rights to update a person — unless updating your own details.

    If you are changing your password, as a non-admin user, then the existing password must also
    be supplied (using the oldPassword field in addition to the new password value).

    Admin users cannot be disabled by setting enabled to false.

    Non-admin users may not disable themselves.

    You can set custom properties when you update a person:
    JSON
    {
      \"firstName\": \"Alice\",
      \"properties\":
      {
        \"my:property\": \"The value\"
      }
    }

    **Note:** setting properties of type d:content and d:category are not supported.

        *
        * @param personId The identifier of a person.
        * @param personBodyUpdate The person details.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<PersonEntry>
        */
    updatePerson(personId: string, personBodyUpdate: PersonBodyUpdate, opts?: any): Promise<PersonEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(personBodyUpdate, 'personBodyUpdate');

        opts = opts || {};
        let postBody = personBodyUpdate;

        let pathParams = {
            'personId': personId
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
            '/people/{personId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PersonEntry);
    }

}
