**Authentication API**

Provides access to the authentication features of Alfresco Content Services.


- Last Build date: 2018-11-05T11:24:58.864Z


## Documentation for API Endpoints

All URIs are relative to *https://localhost/alfresco/api/-default-/public/authentication/versions/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*.AuthenticationApi* | [**createTicket**](docs/AuthenticationApi.md#createTicket) | **POST** /tickets | Create ticket (login)
*.AuthenticationApi* | [**deleteTicket**](docs/AuthenticationApi.md#deleteTicket) | **DELETE** /tickets/-me- | Delete ticket (logout)
*.AuthenticationApi* | [**validateTicket**](docs/AuthenticationApi.md#validateTicket) | **GET** /tickets/-me- | Validate ticket


## Documentation for Models

 - [ErrorError](docs/ErrorError.md)
 - [ModelError](docs/ModelError.md)
 - [Ticket](docs/Ticket.md)
 - [TicketBody](docs/TicketBody.md)
 - [TicketEntry](docs/TicketEntry.md)
 - [ValidTicket](docs/ValidTicket.md)
 - [ValidTicketEntry](docs/ValidTicketEntry.md)

