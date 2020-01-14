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

import { ActionBodyExec } from '../model/actionBodyExec';
import { ActionDefinitionEntry } from '../model/actionDefinitionEntry';
import { ActionDefinitionList } from '../model/actionDefinitionList';
import { ActionExecResultEntry } from '../model/actionExecResultEntry';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Actions service.
* @module ActionsApi
*/
export class ActionsApi extends BaseApi {
    /**
    * Retrieve the details of an action definition
    *
    * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Retrieve the details of the action denoted by **actionDefinitionId**.

    *
    * @param actionDefinitionId The identifier of an action definition.
    * @return Promise<ActionDefinitionEntry>
    */
    actionDetails(actionDefinitionId: string): Promise<ActionDefinitionEntry> {
        throwIfNotDefined(actionDefinitionId, 'actionDefinitionId');

        let postBody = null;

        let pathParams = {
            'actionDefinitionId': actionDefinitionId
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
            '/action-definitions/{actionDefinitionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ActionDefinitionEntry);
    }
    /**
        * Execute an action
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Executes an action

    An action may be executed against a node specified by **targetId**. For example:


    {
      \"actionDefinitionId\": \"copy\",
      \"targetId\": \"4c4b3c43-f18b-43ff-af84-751f16f1ddfd\",
      \"params\": {
            \"destination-folder\": \"34219f79-66fa-4ebf-b371-118598af898c\"
      }
    }


    Performing a POST with the request body shown above will result in the node identified by targetId
    being copied to the destination folder specified in the params object by the key destination-folder.

    **targetId** is optional, however, currently **targetId** must be a valid node ID.
    In the future, actions may be executed against different entity types or
    executed without the need for the context of an entity.


    Parameters supplied to the action within the params object will be converted to the expected type,
    where possible using the DefaultTypeConverter class. In addition:

    * Node IDs may be supplied in their short form (implicit workspace://SpacesStore prefix)
    * Aspect names may be supplied using their short form, e.g. cm:versionable or cm:auditable

    In this example, we add the aspect cm:versionable to a node using the QName resolution mentioned above:


    {
      \"actionDefinitionId\": \"add-features\",
      \"targetId\": \"16349e3f-2977-44d1-93f2-73c12b8083b5\",
      \"params\": {
            \"aspect-name\": \"cm:versionable\"
      }
    }


    The actionDefinitionId is the id of an action definition as returned by
    the _list actions_ operations (e.g. GET /action-definitions).

    The action will be executed **asynchronously** with a 202 HTTP response signifying that
    the request has been accepted successfully. The response body contains the unique ID of the action
    pending execution. The ID may be used, for example to correlate an execution with output in the server logs.

        *
        * @param actionBodyExec Action execution details
        * @return Promise<ActionExecResultEntry>
        */
    actionExec(actionBodyExec: ActionBodyExec): Promise<ActionExecResultEntry> {
        throwIfNotDefined(actionBodyExec, 'actionBodyExec');

        let postBody = actionBodyExec;

        let pathParams = {

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
            '/action-executions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ActionExecResultEntry);
    }
    /**
        * Retrieve list of available actions
        *
        * **Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

    Gets a list of all available actions

    The default sort order for the returned list is for actions to be sorted by ascending name.
    You can override the default by using the **orderBy** parameter.

    You can use any of the following fields to order the results:
    * name
    * title

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

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<ActionDefinitionList>
        */
    listActions(opts?: any): Promise<ActionDefinitionList> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/action-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ActionDefinitionList);
    }
    /**
        * Retrieve actions for a node
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Retrieve the list of actions that may be executed against the given **nodeId**.

    The default sort order for the returned list is for actions to be sorted by ascending name.
    You can override the default by using the **orderBy** parameter.

    You can use any of the following fields to order the results:
    * name
    * title

        *
        * @param nodeId The identifier of a node.
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

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<ActionDefinitionList>
        */
    nodeActions(nodeId: string, opts?: any): Promise<ActionDefinitionList> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/action-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ActionDefinitionList);
    }

}
