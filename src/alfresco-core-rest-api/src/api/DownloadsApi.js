(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DownloadBodyCreate', '../model/DownloadEntry', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DownloadBodyCreate'), require('../model/DownloadEntry'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DownloadsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DownloadBodyCreate, root.AlfrescoCoreRestApi.DownloadEntry, root.AlfrescoCoreRestApi.Error);
  }
}(this, function(ApiClient, DownloadBodyCreate, DownloadEntry, Error) {
  'use strict';

  /**
   * Downloads service.
   * @module api/DownloadsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new DownloadsApi.
   * @alias module:api/DownloadsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelDownload operation.
     * @callback module:api/DownloadsApi~cancelDownloadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a download
     * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.  Cancels the creation of a download request.  **Note:** The download node can be deleted using the **DELETE /nodes/{downloadId}** endpoint   By default, if the download node is not deleted it will be picked up by a cleaner job which removes download nodes older than a configurable amount of time (default is 1 hour)  Information about the existing progress at the time of cancelling can be retrieved by calling the **GET /downloads/{downloadId}** endpoint  The cancel operation is done asynchronously.
     * @param {String} downloadId The identifier of a download node.
     * @param {module:api/DownloadsApi~cancelDownloadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cancelDownload = function(downloadId, callback) {
      var postBody = null;

      // verify the required parameter 'downloadId' is set
      if (downloadId == undefined || downloadId == null) {
        throw new Error("Missing the required parameter 'downloadId' when calling cancelDownload");
      }


      var pathParams = {
        'downloadId': downloadId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/downloads/{downloadId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDownload operation.
     * @callback module:api/DownloadsApi~createDownloadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DownloadEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new download
     * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.  Creates a new download node asynchronously, the content of which will be the zipped content of the **nodeIds** specified in the JSON body like this:  &#x60;&#x60;&#x60;JSON {     \&quot;nodeIds\&quot;:      [        \&quot;c8bb482a-ff3c-4704-a3a3-de1c83ccd84c\&quot;,        \&quot;cffa62db-aa01-493d-9594-058bc058eeb1\&quot;      ] } &#x60;&#x60;&#x60;  **Note:** The content of the download node can be obtained using the **GET /nodes/{downloadId}/content** endpoint
     * @param {module:model/DownloadBodyCreate} downloadBodyCreate The nodeIds the content of which will be zipped, which zip will be set as the content of our download node.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @param {module:api/DownloadsApi~createDownloadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DownloadEntry}
     */
    this.createDownload = function(downloadBodyCreate, opts, callback) {
      opts = opts || {};
      var postBody = downloadBodyCreate;

      // verify the required parameter 'downloadBodyCreate' is set
      if (downloadBodyCreate == undefined || downloadBodyCreate == null) {
        throw new Error("Missing the required parameter 'downloadBodyCreate' when calling createDownload");
      }


      var pathParams = {
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DownloadEntry;

      return this.apiClient.callApi(
        '/downloads', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDownload operation.
     * @callback module:api/DownloadsApi~getDownloadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DownloadEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a download
     * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.  Retrieve status information for download node **downloadId**
     * @param {String} downloadId The identifier of a download node.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @param {module:api/DownloadsApi~getDownloadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DownloadEntry}
     */
    this.getDownload = function(downloadId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'downloadId' is set
      if (downloadId == undefined || downloadId == null) {
        throw new Error("Missing the required parameter 'downloadId' when calling getDownload");
      }


      var pathParams = {
        'downloadId': downloadId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DownloadEntry;

      return this.apiClient.callApi(
        '/downloads/{downloadId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
