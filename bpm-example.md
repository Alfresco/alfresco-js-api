<!-- markdown-toc start - Don't edit this section.  npm run toc to generate it-->

<!-- toc -->

- [BPM](#bpm)
  * [Task Api](#task-api)
    + [List Task](#list-task)
      - [Example](#example)
    + [Get Task](#get-task)
      - [Parameters](#parameters)
      - [Example](#example-1)
    + [Filter Task](#filter-task)
      - [Parameters](#parameters-1)
      - [Example](#example-2)
    + [Complete Task](#complete-task)
      - [Parameters](#parameters-2)
      - [Example](#example-3)
    + [Get Task Form](#get-task-form)
      - [Parameters](#parameters-3)
      - [Example](#example-4)
    + [Complete Task Form](#complete-task-form)
      - [Parameters](#parameters-4)
      - [Example](#example-5)
  * [Process Api](#process-api)
    + [Get Process Instances](#get-process-instances)
      - [Parameters](#parameters-5)
      - [Example](#example-6)
  * [Models Api](#models-api)
    + [Get Model](#get-model)
      - [Parameters](#parameters-6)
      - [Example](#example-7)
  * [Report Api](#report-api)
    + [Create default Reports](#create-default-reports)
      - [Parameters](#parameters-7)
      - [Example](#example-8)
    + [Get Reports](#get-reports)
      - [Parameters](#parameters-8)
      - [Example](#example-9)
    + [Report Params](#report-params)
      - [Parameters](#parameters-9)
      - [Example](#example-10)
  * [Report Process Definitions](#report-process-definitions)
      - [Parameters](#parameters-10)
      - [Example](#example-11)
  * [Tasks of process definition](#tasks-of-process-definition)
      - [Parameters](#parameters-11)
      - [Example](#example-12)
  * [Generate reports](#generate-reports)
      - [Parameters](#parameters-12)
      - [Example](#example-13)
  * [Update report details](#update-report-details)
      - [Parameters](#parameters-13)
      - [Example](#example-14)
  * [Export to csv](#export-to-csv)
      - [Parameters](#parameters-14)
      - [Example](#example-15)
  * [Save Report](#save-report)
      - [Parameters](#parameters-15)
      - [Example](#example-16)
  * [Delete report](#delete-report)
      - [Parameters](#parameters-16)
      - [Example](#example-17)

<!-- tocstop -->

<!-- markdown-toc end -->

# BPM

A complete list of all the BPM methods is available her[Activiti API](/src/api/activiti-rest-api).
Below you can find some common examples.

## Task Api

Below you can find some example relative to the Activiti process api for all the possible method go to [Task Api documentation](/src/api/activiti-rest-api/docs/TaskApi.md)

### List Task

listTasks(requestNode)

>return a list of task based on the requestNode query

#### Example

```javascript
import {  TasksApi } from '@alfresco/js-api';

let requestTasks = new ResultListDataRepresentationTaskRepresentation();
let taskApi = TasksApi(this.alfrescoApi);
taskApi.listTasks(requestTasks).then( 
    (data) => {
        console.log('listTasks ' + data);
}, 
    (error) => {
 console.log('Error' + error);
});
```

### Get Task

getTask(taskId)

>return the [**TaskRepresentation**](/src/api/activiti-rest-api/docs/TaskRepresentation.md)  of single task by id

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **taskId** | **String**| taskId

#### Example

```javascript

let taskId = '10'; // String | taskId

let taskApi = TasksApi(this.alfrescoApi);
taskApi.getTask(taskId).then(function (data) {
    console.log('Task representation ' + data);
}, function (error) {
    console.log('Error' + error);
});
```

### Filter Task

filterTasks(requestTasks)

>return the [**ResultListDataRepresentation**](/src/api/activiti-rest-api/docs/ResultListDataRepresentation.md) that is a list of all the task filered

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **requestTasks** | [**TaskFilterRequestRepresentation**](/src/api/activiti-rest-api/docs/TaskFilterRequestRepresentation.md)| requestTasks


#### Example

```javascript

let requestTasks = new TaskFilterRequestRepresentation();
requestTasks.appDefinitionId = 1;

let taskApi = TasksApi(this.alfrescoApi);
taskApi.filterTasks(requestTasks).then(function (data) {
    console.log('Task filter list ' + data);
}, function (error) {
    console.log('Error' + error);
});
```

### Complete Task

completeTask(taskId)

>To complete a task (standalone or without a task form) :

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **taskId** | **String**| taskId

#### Example

```javascript

let taskId = '10'; // String | taskId

let taskApi = TasksApi(this.alfrescoApi);
taskApi.taskApi.completeTask(taskId).then(() => {
    console.log('Task completed');
}, function (error) {
    console.log('Error' + error);
});
```
### Get Task Form

getTaskForm(taskId)

>Retrieve the Task Form representation. [**FormDefinitionRepresentation**](/src/api/activiti-rest-api/docs/FormDefinitionRepresentation.md)

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **taskId** | **String**| taskId

#### Example

```javascript

let taskId = '10'; // String | taskId

let taskApi = TasksApi(this.alfrescoApi);
taskApi.getTaskForm(taskId).then(function (data) {
   console.log('Task form representation' + data);
}, function (error) {
   console.log('Error' + error);
});
```

### Complete Task Form

completeTaskForm(taskId, completeTaskFormRepresentation)

>Complete a Task Form

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **taskId** | **String**| taskId
 **completeTaskFormRepresentation** | [**CompleteFormRepresentation**](/src/api/activiti-rest-api/docs/CompleteFormRepresentation.md)| completeTaskFormRepresentation

#### Example

```javascript

let taskId = '10'; // String | taskId
let taskApi = TasksApi(this.alfrescoApi);
taskApi..completeTaskForm(taskId, completeTaskFormRepresentation).then(() => {
    console.log('Task completed');
}, function (error) {
    console.log('Error' + error);
});
```

## Process Api

Below you can find some example relative to the Activiti process api for all the possible method go to [Process Api documentation](/src/api/activiti-rest-api/docs/ProcessApi.md)


### Get Process Instances

getProcessInstances(requestNode)

>Retrieve a list of process instances [**ResultListDataRepresentation**](/src/api/activiti-rest-api/docs/ResultListDataRepresentation.md)

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **requestNode** | [**ProcessFilterRequestRepresentation**](/src/api/activiti-rest-api/docs/ProcessInstanceQueryRepresentation.md)| requestNode

#### Example

```javascript
let requestNode = new ProcessInstanceQueryRepresentation();

let processApi = ProcessApi(this.alfrescoApi);
processApi.getProcessInstances(requestNode).then(function (data) {
    console.log('All processes' + data);
}, function (error) {
    console.log('Error' + error);
});
```

Filtered process:

```javascript
let requestNode = new ProcessInstanceQueryRepresentation();

page = 0;
requestNode.sort = 'created-desc';
requestNode.state = 'completed';

let processApi = ProcessApi(this.alfrescoApi);
processApi.getProcessInstances(requestNode).then(function (data) {
   console.log('All processes completed' + data);
}, function (error) {
   console.log('Error' + error);
});
```

## Models Api

Below you can find some example relative to the Activiti process api for all the possible method go to [Task Api documentation](/src/api/activiti-rest-api/docs/ModelsApi.md)

### Get Model

getModel(modelId, opts)

>To retrieve details about a particular model (process, form, decision rule or app) return a [**ModelRepresentation**](ModelRepresentation.md)

#### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId |
 **includePermissions** | **Boolean**| includePermissions | [optional]

#### Example
```javascript

let opts = {
    'filter': 'myReusableForms',
    'modelType': 2
};

let modelsApi = ModelsApi(this.alfrescoApi);
modelsApi.getModels(opts).then(function (data) {
    console.log('All your reusable forms' + data);
 }, function (error) {
    console.log('Error' + error);
 });
```

## Report Api

Below you can find some example relative to the Activiti report api for all the possible method go to [Report Api documentation](/src/api/activiti-rest-api/docs/ReportApi.md)

### Create default Reports

createDefaultReports()

>Create the default reports

#### Parameters

No parameters required.

#### Example

```javascript

let reportApi = ReportApi(this.alfrescoApi);
reportApi.createDefaultReports();
```

### Get Reports

getReportList()

> Retrieve the available report list

#### Parameters

No parameters required.

#### Example

```javascript
let reportApi = ReportApi(this.alfrescoApi);
reportApi.getReportList();
```

### Report Params

getReportParams(reportId)

> Retrieve the parameters referring to the reportId.

#### Parameters

Name | Type | Description  | Notes|
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||

#### Example

```javascript

let reportId = "1"; // String | reportId
let reportApi = ReportApi(this.alfrescoApi);
reportApi.getReportParams(reportId);
```

## Report Process Definitions

getProcessDefinitions()

> Retrieve the process definition list for all the apps.

#### Parameters

No parameters required.

#### Example

```javascript

let reportApi = ReportApi(this.alfrescoApi);
reportApi.getProcessDefinitions();
```

## Tasks of process definition

getTasksByProcessDefinitionId(reportId, processDefinitionId)

> Retrieves all tasks that refer to the processDefinitionId

#### Parameters
Name | Type | Description  | Notes|
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **processDefinitionId** | **String**| process definition id ||

#### Example

```javascript

let reportId = "1"; // String | reportId
let processDefinitionId = "1"; // String | processDefinitionId

let reportApi = ReportApi(this.alfrescoApi);
reportApi.getTasksByProcessDefinitionId(reportId, processDefinitionId);
```

## Generate reports

getReportsByParams(reportId, paramsQuery)

> Generate the reports based on the input parameters

#### Parameters
Name | Type | Description  | Notes|
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **paramsQuery** | **Object**| Query parameters ||

#### Example

```javascript

let reportId = "1"; // String | reportId
let paramsQuery = {status: 'ALL'}; // Object | paramsQuery

let reportApi = ReportApi(this.alfrescoApi);
reportApi.getReportsByParams(reportId, paramsQuery);
```
## Update report details

updateReport(reportId, name)

> Update the report details

#### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **name** | **String**| The report name ||

#### Example

```javascript

let reportId = "1"; // String | reportId
let name = "new Fake name"; // String | reportId

let reportApi = ReportApi(this.alfrescoApi);
reportApi.updateReport(reportId, name);
```

## Export to csv
exportToCsv(reportId, queryParams)

> Export a report as csv

#### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **queryParams** | **Object**| Query parameters ||

#### Example
```javascript

let reportId = "1"; // String | reportId
let queryParams = {
            'processDefinitionId': 'TEST:99:999',
            'dateRange': {
                'startDate': '2017-01-01T00:00:00.000Z',
                'endDate': '2017-01-24T23:59:59.999Z',
                'rangeId': 'currentYear'
            },
            'slowProcessInstanceInteger': 10,
            'status': 'All',
            '__reportName': 'FAKE_REPORT_NAME'
        };

let reportApi = ReportApi(this.alfrescoApi);
reportApi.exportToCsv(reportId, queryParams);
```

## Save Report

saveReport(reportId, queryParams)

> Save a report

#### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **queryParams** | **Object**| Query parameters ||

#### Example
```javascript

let reportId = "1"; // String | reportId
let queryParams = {
            'processDefinitionId': 'TEST:99:999',
            'dateRange': {
                'startDate': '2017-01-01T00:00:00.000Z',
                'endDate': '2017-01-24T23:59:59.999Z',
                'rangeId': 'currentYear'
            },
            'slowProcessInstanceInteger': 10,
            'status': 'All',
            '__reportName': 'FAKE_REPORT_NAME'
        };

let reportApi = ReportApi(this.alfrescoApi);
reportApi.saveReport(reportId, queryParams);
```

## Delete report
deleteReport(reportId)

> Delete a report

#### Parameters
Name | Type | Description  | Notes |
------------- | ------------- | ------------- | ------------- |
 **reportId** | **String**| reportId | |

#### Example
```javascript

let reportId = "1"; // String | reportId

let reportApi = ReportApi(this.alfrescoApi);
reportApi.deleteReport(reportId);
```
