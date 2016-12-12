(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ReportCharts', '../model/ParameterValueRepresentation', '../model/ReportParametersDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ReportCharts'), require('../model/ParameterValueRepresentation'), require('../model/ReportParametersDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ReportApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ReportCharts, root.ActivitiPublicRestApi.ParameterValueRepresentation, root.ActivitiPublicRestApi.ReportParametersDefinition);
  }
}(this, function(ApiClient, ReportCharts, ParameterValueRepresentation, ReportParametersDefinition) {
  'use strict';

  /**
   * Report service.
   * @module api/ReportApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ReportApi.
   * @alias module:api/ReportApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Create the default reports
     */
    this.createDefaultReports = function() {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/app/rest/reporting/default-reports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.getTasksByProcessDefinitionId = function(reportId, processDefinitionId) {
      var postBody = null;

      if (reportId == undefined || reportId == null) {
        throw "Missing the required parameter 'reportId' when calling getTasksByProcessDefinitionId";
      }

      if (processDefinitionId == undefined || processDefinitionId == null) {
        throw "Missing the required parameter 'processDefinitionId' when calling getTasksByProcessDefinitionId";
      }

      var pathParams = {
        'reportId': reportId
      };
      var queryParams = {
        'processDefinitionId': processDefinitionId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
          '/app/rest/reporting/report-params/{reportId}/tasks', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
      );
    }

    this.getReportsByParams = function(reportId, paramsQuery) {
      var postBody = paramsQuery;

      if (reportId == undefined || reportId == null) {
        throw "Missing the required parameter 'reportId' when calling getReportsByParams";
      }

      var pathParams = {
        'reportId': reportId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ReportCharts;

      return this.apiClient.callApi(
          '/app/rest/reporting/report-params/{reportId}', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
      );
    }

    this.getProcessDefinitionsValuesNoApp = function() {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ParameterValueRepresentation];

      return this.apiClient.callApi(
          '/app/rest/reporting/process-definitions', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
      );
    }

    this.getReportParams = function(reportId) {
      var postBody = null;

      if (reportId == undefined || reportId == null) {
        throw "Missing the required parameter 'reportId' when calling getReportParams";
      }

      var pathParams = {
        'reportId': reportId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ReportParametersDefinition;

      return this.apiClient.callApi(
          '/app/rest/reporting/report-params/{reportId}', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
      );
    }

    this.getReportList = function() {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ReportParametersDefinition];

      return this.apiClient.callApi(
          '/app/rest/reporting/reports', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType
      );
    }

  };

  return exports;
}));
