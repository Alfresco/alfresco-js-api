(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/SecurityControlSettingEntry', '../model/SecurityControlSettingBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/SecurityControlSettingEntry'), require('../model/SecurityControlSettingBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecuritycontrolsettingsApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.Error, root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingEntry, root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingBody);
  }
}(this, function(ApiClient, Error, SecurityControlSettingEntry, SecurityControlSettingBody) {
  'use strict';

  /**
   * Securitycontrolsettings service.
   * @module api/SecuritycontrolsettingsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SecuritycontrolsettingsApi.
   * @alias module:api/SecuritycontrolsettingsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get security control setting value
     * Gets the value for a selected **securityControlSettingKey**.
     * @param {String} securityControlSettingKey The key for the security control setting. You can use one of the following settings:\n* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file\n
     * data is of type: {module:model/SecurityControlSettingEntry}
     */
    this.getSecurityControlSetting = function(securityControlSettingKey) {
      var postBody = null;

      // verify the required parameter 'securityControlSettingKey' is set
      if (securityControlSettingKey == undefined || securityControlSettingKey == null) {
        throw "Missing the required parameter 'securityControlSettingKey' when calling getSecurityControlSetting";
      }


      var pathParams = {
        'securityControlSettingKey': securityControlSettingKey
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
      var returnType = SecurityControlSettingEntry;

      return this.apiClient.callApi(
        '/security-control-settings/{securityControlSettingKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update security control setting value
     * Updates the value of a selected **securityControlSettingKey**.
     * @param {String} securityControlSettingKey The key for the security control setting. You can use one of the following settings:\n* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file\n
     * @param {module:model/SecurityControlSettingBody} securityControlSettingValue The new value for the security control setting. This can be a string or number, depending on the setting key.
     * data is of type: {module:model/SecurityControlSettingEntry}
     */
    this.updateSecurityControlSetting = function(securityControlSettingKey, securityControlSettingValue) {
      var postBody = securityControlSettingValue;

      // verify the required parameter 'securityControlSettingKey' is set
      if (securityControlSettingKey == undefined || securityControlSettingKey == null) {
        throw "Missing the required parameter 'securityControlSettingKey' when calling updateSecurityControlSetting";
      }

      // verify the required parameter 'securityControlSettingValue' is set
      if (securityControlSettingValue == undefined || securityControlSettingValue == null) {
        throw "Missing the required parameter 'securityControlSettingValue' when calling updateSecurityControlSetting";
      }


      var pathParams = {
        'securityControlSettingKey': securityControlSettingKey
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
      var returnType = SecurityControlSettingEntry;

      return this.apiClient.callApi(
        '/security-control-settings/{securityControlSettingKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
