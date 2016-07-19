# Alfresco Auth Rest Api

AlfrescoAuthRestApi - JavaScript client for alfresco-auth-rest-api
Provides access to the Authentication features of Alfresco

## Documentation for API Endpoints

All URIs are relative to *https://localhost/alfresco/api/-default-/public/authentication/versions/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AlfrescoAuthRestApi.AuthenticationApi* | [**createTicket**](docs/AuthenticationApi.md#createTicket) | **POST** /tickets | Create ticket (login)
*AlfrescoAuthRestApi.AuthenticationApi* | [**deleteTicket**](docs/AuthenticationApi.md#deleteTicket) | **DELETE** /tickets/-me- | Delete ticket (logout)
*AlfrescoAuthRestApi.AuthenticationApi* | [**validateTicket**](docs/AuthenticationApi.md#validateTicket) | **GET** /tickets/-me- | Validate ticket


## Documentation for Models

 - [AlfrescoAuthRestApi.Error](docs/Error.md)
 - [AlfrescoAuthRestApi.ErrorError](docs/ErrorError.md)
 - [AlfrescoAuthRestApi.LoginRequest](docs/LoginRequest.md)
 - [AlfrescoAuthRestApi.LoginTicketEntry](docs/LoginTicketEntry.md)
 - [AlfrescoAuthRestApi.LoginTicketEntryEntry](docs/LoginTicketEntryEntry.md)
 - [AlfrescoAuthRestApi.ValidateTicketEntry](docs/ValidateTicketEntry.md)
 - [AlfrescoAuthRestApi.ValidateTicketEntryEntry](docs/ValidateTicketEntryEntry.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication
