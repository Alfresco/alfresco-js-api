# AlfrescoCoreRestApi.NetworksApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetwork**](NetworksApi.md#getNetwork) | **GET** /networks/{networkId} | Get a network


<a name="getNetwork"></a>
# **getNetwork**
> PersonNetworkEntry getNetwork(networkId, opts)

Get a network

Returns information for a network **networkId**.

### Example
```javascript
var networkId = "networkId_example"; // {String} The identifier of a network.

var opts = {
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                    You can use this parameter to restrict the fields
                                    returned within a response if, for example, you want to save on overall bandwidth.

                                    The list applies to a returned individual
                                    entity or entries within a collection.

                                    If the API method also supports the **include**
                                    parameter, then the fields specified in the **include**
                                    parameter are returned in addition to those specified in the **fields** parameter. */

};

this.alfrescoJsApi.core.networksApi.getNetwork(networkId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**| The identifier of a network. |
 **fields** | [**[String]**](String.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional]

### Return type

[**PersonNetworkEntry**](PersonNetworkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

