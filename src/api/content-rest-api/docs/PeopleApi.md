# PeopleApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPerson**](PeopleApi.md#createPerson) | **POST** /people | Create person
[**deleteAvatarImage**](PeopleApi.md#deleteAvatarImage) | **DELETE** /people/{personId}/avatar | Delete avatar image
[**getAvatarImage**](PeopleApi.md#getAvatarImage) | **GET** /people/{personId}/avatar | Get avatar image
[**getPerson**](PeopleApi.md#getPerson) | **GET** /people/{personId} | Get a person
[**listPeople**](PeopleApi.md#listPeople) | **GET** /people | List people
[**requestPasswordReset**](PeopleApi.md#requestPasswordReset) | **POST** /people/{personId}/request-password-reset | Request password reset
[**resetPassword**](PeopleApi.md#resetPassword) | **POST** /people/{personId}/reset-password | Reset password
[**updateAvatarImage**](PeopleApi.md#updateAvatarImage) | **PUT** /people/{personId}/avatar | Update avatar image
[**updatePerson**](PeopleApi.md#updatePerson) | **PUT** /people/{personId} | Update person


<a name="createPerson"></a>
# **createPerson**
> PersonEntry createPerson(personBodyCreateopts)

Create person

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

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


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

peopleApi.createPerson(personBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personBodyCreate** | [**PersonBodyCreate**](PersonBodyCreate.md)| The person details. | 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**PersonEntry**](PersonEntry.md)

<a name="deleteAvatarImage"></a>
# **deleteAvatarImage**
> deleteAvatarImage(personId)

Delete avatar image

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Deletes the avatar image related to person **personId**.

You must be the person or have admin rights to update a person's avatar.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);


peopleApi.deleteAvatarImage(personId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 

### Return type

null (empty response body)

<a name="getAvatarImage"></a>
# **getAvatarImage**
> getAvatarImage(personIdopts)

Get avatar image

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Gets the avatar image related to the person **personId**. If the person has no related avatar then
the **placeholder** query parameter can be optionally used to request a placeholder image to be returned.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);

let opts = { 
  'attachment': true //  | **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.

  'ifModifiedSince': 2013-10-20T19:20:30+01:00 //  | Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.

  'placeholder': true //  | If **true** and there is no avatar for this **personId**
then the placeholder image is returned, rather than a 404 response.

};

peopleApi.getAvatarImage(personIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **attachment** | **boolean**| **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.
 | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
 | [optional] 
 **placeholder** | **boolean**| If **true** and there is no avatar for this **personId**
then the placeholder image is returned, rather than a 404 response.
 | [optional] [default to true]

### Return type

null (empty response body)

<a name="getPerson"></a>
# **getPerson**
> PersonEntry getPerson(personIdopts)

Get a person

Gets information for the person **personId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

peopleApi.getPerson(personIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**PersonEntry**](PersonEntry.md)

<a name="listPeople"></a>
# **listPeople**
> PersonPaging listPeople(opts)

List people

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

List people.

You can use the **include** parameter to return any additional information.

The default sort order for the returned list is for people to be sorted by ascending id.
You can override the default by using the **orderBy** parameter.

You can use any of the following fields to order the results:
* id
* firstName
* lastName


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'include':  //  | Returns additional information about the person. The following optional fields can be requested:
* properties
* aspectNames
* capabilities

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

peopleApi.listPeople(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the person. The following optional fields can be requested:
* properties
* aspectNames
* capabilities
 | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**PersonPaging**](PersonPaging.md)

<a name="requestPasswordReset"></a>
# **requestPasswordReset**
> requestPasswordReset(personIdclientBody)

Request password reset

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

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


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);


peopleApi.requestPasswordReset(personIdclientBody).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **clientBody** | [**ClientBody**](ClientBody.md)| The client name to send email with app-specific url. | 

### Return type

null (empty response body)

<a name="resetPassword"></a>
# **resetPassword**
> resetPassword(personIdpasswordResetBody)

Reset password

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Resets user's password

The password, id and key properties are mandatory in the request body. For example:
JSON
{
  \"password\":\"newPassword\",
  \"id\":\"activiti$10\",
  \"key\":\"4dad6d00-0daf-413a-b200-f64af4e12345\"
}

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);


peopleApi.resetPassword(personIdpasswordResetBody).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **passwordResetBody** | [**PasswordResetBody**](PasswordResetBody.md)| The reset password details | 

### Return type

null (empty response body)

<a name="updateAvatarImage"></a>
# **updateAvatarImage**
> updateAvatarImage(personIdcontentBodyUpdate)

Update avatar image

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Updates the avatar image related to the person **personId**.

The request body should be the binary stream for the avatar image. The content type of the file
should be an image file. This will be used to generate an \"avatar\" thumbnail rendition.

You must be the person or have admin rights to update a person's avatar.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);


peopleApi.updateAvatarImage(personIdcontentBodyUpdate).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **contentBodyUpdate** | **string**| The binary content | 

### Return type

null (empty response body)

<a name="updatePerson"></a>
# **updatePerson**
> PersonEntry updatePerson(personIdpersonBodyUpdateopts)

Update person

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

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


### Example
```javascript
import PeopleApi from 'PeopleApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let peopleApi = new PeopleApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

peopleApi.updatePerson(personIdpersonBodyUpdateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **personBodyUpdate** | [**PersonBodyUpdate**](PersonBodyUpdate.md)| The person details. | 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**PersonEntry**](PersonEntry.md)

