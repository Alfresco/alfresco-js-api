# ActivitiPublicRestApi.ReportApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDefaultReports**](ReportApi.md#createDefaultReports) | **POST** /app/rest/reporting/default-reports | Create the default reports
[**getTasksByProcessDefinitionId**](ReportApi.md#getTasksByProcessDefinitionId) | **GET** /app/rest/reporting/report-params/{reportId}/tasks | Retrieves all tasks that refer to the processDefinitionId
[**getReportsByParams**](ReportApi.md#getReportsByParams) | **GET** /app/rest/reporting/report-params/{reportId} | Generate the reports

<a name="createDefaultReports"></a>
# **createDefaultReports**
> createDefaultReports()

Create the default reports

### Example
```javascript

this.alfrescoJsApi.activiti.reportApi.createDefaultReports();
```

### Parameters
No parameters required.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTasksByProcessDefinitionId"></a>
# **getTasksByProcessDefinitionId**
> [&#39;String&#39;] getTasksByProcessDefinitionId(reportId, processDefinitionId)

Retrieves all tasks that refer to the processDefinitionId

### Example
```javascript

var reportId = "1"; // String | reportId
var processDefinitionId = "1"; // String | processDefinitionId

this.alfrescoJsApi.activiti.reportApi.getTasksByProcessDefinitionId(reportId, processDefinitionId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |
 **processDefinitionId** | **String**| process definition id |

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReportsByParams"></a>
# **getReportsByParams**
> [Object] getReportsByParams(reportId, paramsQuery)

Generate the reports based on the input parameters

### Example
```javascript

var reportId = "1"; // String | reportId
var paramsQuery = {status: 'ALL'}; // Object | paramsQuery

this.alfrescoJsApi.activiti.reportApi.getReportsByParams(reportId, paramsQuery);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |
 **paramsQuery** | **Object**| Query parameters |

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
