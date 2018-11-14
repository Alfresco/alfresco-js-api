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

import { RevertBody } from '../model/RevertBody';
import { VersionsApi as NewVersionsApi } from '../../../../api-new/content-rest-api/api/versions.api';
import { AlfrescoApi } from '../../../../alfrescoApi';

/**
 * Constructs a new VersionsApi.
 * @alias module:api/VersionsApi
 * @class
 * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class VersionsApi {

    versionsApi: NewVersionsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.versionsApi = new NewVersionsApi(alfrescoApi);
    }

    /**
     * Delete a version
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Delete the version identified by **versionId** and **nodeId*.  If the version is successfully deleted then the content and metadata for that versioned node will be deleted and will no longer appear in the version history. This operation cannot be undone.  If the most recent version is deleted the live node will revert to the next most recent version.  We currently do not allow the last version to be deleted. If you wish to clear the history then you can remove the \&quot;cm:versionable\&quot; aspect (via update node) which will also disable versioning. In this case, you can re-enable versioning by adding back the \&quot;cm:versionable\&quot; aspect or using the version params (majorVersion and comment) on a subsequent file content update.
     * @param {String} nodeId The identifier of a node.
     * @param {String} versionId The identifier of a version, ie. version label, within the version history of a node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteVersion(nodeId: string, versionId: string): Promise<any> {
        return this.versionsApi.deleteVersion(nodeId, versionId);
    }

    /**
     * Get version information
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets the version information for **versionId** of file node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} versionId The identifier of a version, ie. version label, within the version history of a node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VersionEntry} and HTTP response
     */
    getVersion(nodeId: string, versionId: string): Promise<any> {
        return this.versionsApi.getVersion(nodeId, versionId);
    }

    /**
     * Get version content
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets the version content for **versionId** of file node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} versionId The identifier of a version, ie. version label, within the version history of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.
     * @param {String} opts.range The Range header indicates the part of a document that the server should return. Single part request supported, for example: bytes&#x3D;1-10.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getVersionContent(nodeId: string, versionId: string, opts?: any): Promise<any> {
        return this.versionsApi.getVersionContent(nodeId, versionId);
    }

    /**
     * List version history
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets the version history as an ordered list of versions for the specified **nodeId**.  The list is ordered in descending modified order. So the most recent version is first and the original version is last in the list.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the version node. The following optional fields can be requested: * properties * aspectNames
     * @param {Array.<String>} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list. If not supplied then the default value is 0.  (default to 0)
     * @param {Number} opts.maxItems The maximum number of items to return in the list. If not supplied then the default value is 100.  (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VersionPaging} and HTTP response
     */
    listVersionHistory(nodeId: string, opts?: any): Promise<any> {
        return this.versionsApi.listVersionHistory(nodeId, opts);
    }

    /**
     * Revert a version
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Attempts to revert the version identified by **versionId** and **nodeId** to the live node.  If the node is successfully reverted then the content and metadata for that versioned node will be promoted to the live node and a new version will appear in the version history.
     * @param {String} nodeId The identifier of a node.
     * @param {String} versionId The identifier of a version, ie. version label, within the version history of a node.
     * @param {module:model/RevertBody} revertBody Optionally, specify a version comment and whether this should be a major version, or not.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VersionEntry} and HTTP response
     */
    revertVersion(nodeId: string, versionId: string, revertBody: RevertBody, opts?: any): Promise<any> {
        return this.versionsApi.revertVersion(nodeId, versionId, <any>revertBody, opts);
    }

}
