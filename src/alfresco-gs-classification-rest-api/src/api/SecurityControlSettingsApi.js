

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/SecurityControlSettingBody', '../model/SecurityControlSettingEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/SecurityControlSettingBody'), require('../model/SecurityControlSettingEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingsApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.Error, root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingBody, root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingEntry);
  }
}(this, function(ApiClient, Error, SecurityControlSettingBody, SecurityControlSettingEntry) {
  'use strict';

  /**
   * Securitycontrolsettings service.
   * @module api/SecurityControlSettingsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SecurityControlSettingsApi.
   * @alias :api/SecurityControlSettingsApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get security control setting value
     * Gets the value for a selected **securityControlSettingKey**.
     * @param {string} securityControlSettingKey The key for the security control setting. You can use one of the following settings: * -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleSecurityControlSettingEntry} and HTTP response
     */
    this.getSecurityControlSetting = function(securityControlSettingKey) {
      var postBody = null;

      // verify the required parameter 'securityControlSettingKey' is set
      if (securityControlSettingKey === undefined || securityControlSettingKey === null) {
        throw new Error("Missing the required parameter 'securityControlSettingKey' when calling getSecurityControlSetting");
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
     * @param {string} securityControlSettingKey The key for the security control setting. You can use one of the following settings: * -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file
     * @param {SecurityControlSettingBody} securityControlSettingValue The new value for the security control setting. This can be a string or number, depending on the setting key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleSecurityControlSettingEntry} and HTTP response
     */
    this.updateSecurityControlSetting = function(securityControlSettingKey, securityControlSettingValue) {
      var postBody = securityControlSettingValue;

      // verify the required parameter 'securityControlSettingKey' is set
      if (securityControlSettingKey === undefined || securityControlSettingKey === null) {
        throw new Error("Missing the required parameter 'securityControlSettingKey' when calling updateSecurityControlSetting");
      }

      // verify the required parameter 'securityControlSettingValue' is set
      if (securityControlSettingValue === undefined || securityControlSettingValue === null) {
        throw new Error("Missing the required parameter 'securityControlSettingValue' when calling updateSecurityControlSetting");
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
