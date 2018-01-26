# alfresco_governance_services_rest_api

AlfrescoGovernanceServicesRestApi - JavaScript client for alfresco_governance_services_rest_api
**GS Core API**  
Provides access to the core features of Alfresco Governance Services. 

## Documentation for API Endpoints

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AlfrescoGovernanceServicesRestApi.FilePlansApi* | [**createFilePlanCategories**](docs/FilePlansApi.md#createFilePlanCategories) | **POST** /file-plans/{filePlanId}/categories | Create record categories for a file plan
*AlfrescoGovernanceServicesRestApi.FilePlansApi* | [**getFilePlan**](docs/FilePlansApi.md#getFilePlan) | **GET** /file-plans/{filePlanId} | Get a file plan
*AlfrescoGovernanceServicesRestApi.FilePlansApi* | [**getFilePlanCategories**](docs/FilePlansApi.md#getFilePlanCategories) | **GET** /file-plans/{filePlanId}/categories | List file plans&#39;s children
*AlfrescoGovernanceServicesRestApi.FilePlansApi* | [**updateFilePlan**](docs/FilePlansApi.md#updateFilePlan) | **PUT** /file-plans/{filePlanId} | Update a file plan
*AlfrescoGovernanceServicesRestApi.FilesApi* | [**declareRecord**](docs/FilesApi.md#declareRecord) | **POST** /files/{fileId}/declare | Declare as record
*AlfrescoGovernanceServicesRestApi.GsSitesApi* | [**createRMSite**](docs/GsSitesApi.md#createRMSite) | **POST** /gs-sites | Create the Records Management (RM) site
*AlfrescoGovernanceServicesRestApi.GsSitesApi* | [**deleteRMSite**](docs/GsSitesApi.md#deleteRMSite) | **DELETE** /gs-sites/rm | Delete the Records Management (RM) site
*AlfrescoGovernanceServicesRestApi.GsSitesApi* | [**getRMSite**](docs/GsSitesApi.md#getRMSite) | **GET** /gs-sites/rm | Get the Records Management (RM) site
*AlfrescoGovernanceServicesRestApi.GsSitesApi* | [**updateRMSite**](docs/GsSitesApi.md#updateRMSite) | **PUT** /gs-sites/rm | Update the Records Management (RM) site
*AlfrescoGovernanceServicesRestApi.RecordCategoriesApi* | [**createRecordCategoryChild**](docs/RecordCategoriesApi.md#createRecordCategoryChild) | **POST** /record-categories/{recordCategoryId}/children | Create a record category or a record folder
*AlfrescoGovernanceServicesRestApi.RecordCategoriesApi* | [**deleteRecordCategory**](docs/RecordCategoriesApi.md#deleteRecordCategory) | **DELETE** /record-categories/{recordCategoryId} | Delete a record category
*AlfrescoGovernanceServicesRestApi.RecordCategoriesApi* | [**getRecordCategory**](docs/RecordCategoriesApi.md#getRecordCategory) | **GET** /record-categories/{recordCategoryId} | Get a record category
*AlfrescoGovernanceServicesRestApi.RecordCategoriesApi* | [**listRecordCategoryChildren**](docs/RecordCategoriesApi.md#listRecordCategoryChildren) | **GET** /record-categories/{recordCategoryId}/children | List record category&#39;s children
*AlfrescoGovernanceServicesRestApi.RecordCategoriesApi* | [**updateRecordCategory**](docs/RecordCategoriesApi.md#updateRecordCategory) | **PUT** /record-categories/{recordCategoryId} | Update a record category
*AlfrescoGovernanceServicesRestApi.RecordFoldersApi* | [**createRecordFolderChild**](docs/RecordFoldersApi.md#createRecordFolderChild) | **POST** /record-folders/{recordFolderId}/records | Create a record
*AlfrescoGovernanceServicesRestApi.RecordFoldersApi* | [**deleteRecordFolder**](docs/RecordFoldersApi.md#deleteRecordFolder) | **DELETE** /record-folders/{recordFolderId} | Delete a record folder
*AlfrescoGovernanceServicesRestApi.RecordFoldersApi* | [**getRecordFolder**](docs/RecordFoldersApi.md#getRecordFolder) | **GET** /record-folders/{recordFolderId} | Get a record folder
*AlfrescoGovernanceServicesRestApi.RecordFoldersApi* | [**listRecordFolderChildren**](docs/RecordFoldersApi.md#listRecordFolderChildren) | **GET** /record-folders/{recordFolderId}/records | List records
*AlfrescoGovernanceServicesRestApi.RecordFoldersApi* | [**updateRecordFolder**](docs/RecordFoldersApi.md#updateRecordFolder) | **PUT** /record-folders/{recordFolderId} | Update a record folder
*AlfrescoGovernanceServicesRestApi.RecordsApi* | [**completeRecord**](docs/RecordsApi.md#completeRecord) | **POST** /records/{recordId}/complete | Complete a record
*AlfrescoGovernanceServicesRestApi.RecordsApi* | [**deleteRecord**](docs/RecordsApi.md#deleteRecord) | **DELETE** /records/{recordId} | Delete a record
*AlfrescoGovernanceServicesRestApi.RecordsApi* | [**fileRecord**](docs/RecordsApi.md#fileRecord) | **POST** /records/{recordId}/file | File a record
*AlfrescoGovernanceServicesRestApi.RecordsApi* | [**getRecord**](docs/RecordsApi.md#getRecord) | **GET** /records/{recordId} | Get a record
*AlfrescoGovernanceServicesRestApi.RecordsApi* | [**getRecordContent**](docs/RecordsApi.md#getRecordContent) | **GET** /records/{recordId}/content | Get record content
*AlfrescoGovernanceServicesRestApi.RecordsApi* | [**updateRecord**](docs/RecordsApi.md#updateRecord) | **PUT** /records/{recordId} | Update record
*AlfrescoGovernanceServicesRestApi.TransferContainersApi* | [**getTransferContainer**](docs/TransferContainersApi.md#getTransferContainer) | **GET** /transfer-containers/{transferContainerId} | Get a transfer container
*AlfrescoGovernanceServicesRestApi.TransferContainersApi* | [**listTransfers**](docs/TransferContainersApi.md#listTransfers) | **GET** /transfer-containers/{transferContainerId}/transfers | List transfer container&#39;s children
*AlfrescoGovernanceServicesRestApi.TransferContainersApi* | [**updateTransferContainer**](docs/TransferContainersApi.md#updateTransferContainer) | **PUT** /transfer-containers/{transferContainerId} | Update transfer container
*AlfrescoGovernanceServicesRestApi.TransfersApi* | [**getTransfer**](docs/TransfersApi.md#getTransfer) | **GET** /transfers/{transferId} | Get a transfer
*AlfrescoGovernanceServicesRestApi.TransfersApi* | [**listTransfersChildren**](docs/TransfersApi.md#listTransfersChildren) | **GET** /transfers/{transferId}/children | List transfer&#39;s children
*AlfrescoGovernanceServicesRestApi.UnfiledContainersApi* | [**createUnfiledContainerChildren**](docs/UnfiledContainersApi.md#createUnfiledContainerChildren) | **POST** /unfiled-containers/{unfiledContainerId}/children | Create a record or an unfiled record folder
*AlfrescoGovernanceServicesRestApi.UnfiledContainersApi* | [**getUnfiledContainer**](docs/UnfiledContainersApi.md#getUnfiledContainer) | **GET** /unfiled-containers/{unfiledContainerId} | Get the unfiled records container
*AlfrescoGovernanceServicesRestApi.UnfiledContainersApi* | [**listUnfiledContainerChildren**](docs/UnfiledContainersApi.md#listUnfiledContainerChildren) | **GET** /unfiled-containers/{unfiledContainerId}/children | List unfiled record container&#39;s children
*AlfrescoGovernanceServicesRestApi.UnfiledContainersApi* | [**updateUnfiledContainer**](docs/UnfiledContainersApi.md#updateUnfiledContainer) | **PUT** /unfiled-containers/{unfiledContainerId} | Update an unfiled record container
*AlfrescoGovernanceServicesRestApi.UnfiledRecordFoldersApi* | [**createUnfiledRecordFolderChildren**](docs/UnfiledRecordFoldersApi.md#createUnfiledRecordFolderChildren) | **POST** /unfiled-record-folders/{unfiledRecordFolderId}/children | Create a record or an unfiled record folder
*AlfrescoGovernanceServicesRestApi.UnfiledRecordFoldersApi* | [**deleteUnfiledRecordFolder**](docs/UnfiledRecordFoldersApi.md#deleteUnfiledRecordFolder) | **DELETE** /unfiled-record-folders/{unfiledRecordFolderId} | Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.
*AlfrescoGovernanceServicesRestApi.UnfiledRecordFoldersApi* | [**getUnfiledRecordFolder**](docs/UnfiledRecordFoldersApi.md#getUnfiledRecordFolder) | **GET** /unfiled-record-folders/{unfiledRecordFolderId} | Get the unfiled record folder
*AlfrescoGovernanceServicesRestApi.UnfiledRecordFoldersApi* | [**listUnfiledRecordFolderChildren**](docs/UnfiledRecordFoldersApi.md#listUnfiledRecordFolderChildren) | **GET** /unfiled-record-folders/{unfiledRecordFolderId}/children | List unfiled record folder&#39;s children
*AlfrescoGovernanceServicesRestApi.UnfiledRecordFoldersApi* | [**updateUnfiledRecordFolder**](docs/UnfiledRecordFoldersApi.md#updateUnfiledRecordFolder) | **PUT** /unfiled-record-folders/{unfiledRecordFolderId} | Update an unfiled record folder


## Documentation for Models

 - [AlfrescoGovernanceServicesRestApi.ChildAssociationInfo](docs/ChildAssociationInfo.md)
 - [AlfrescoGovernanceServicesRestApi.ContentInfo](docs/ContentInfo.md)
 - [AlfrescoGovernanceServicesRestApi.Error](docs/Error.md)
 - [AlfrescoGovernanceServicesRestApi.ErrorError](docs/ErrorError.md)
 - [AlfrescoGovernanceServicesRestApi.FilePlan](docs/FilePlan.md)
 - [AlfrescoGovernanceServicesRestApi.FilePlanBodyUpdate](docs/FilePlanBodyUpdate.md)
 - [AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate](docs/FilePlanComponentBodyUpdate.md)
 - [AlfrescoGovernanceServicesRestApi.FilePlanEntry](docs/FilePlanEntry.md)
 - [AlfrescoGovernanceServicesRestApi.Pagination](docs/Pagination.md)
 - [AlfrescoGovernanceServicesRestApi.PathElement](docs/PathElement.md)
 - [AlfrescoGovernanceServicesRestApi.PathInfo](docs/PathInfo.md)
 - [AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate](docs/RMNodeBodyCreate.md)
 - [AlfrescoGovernanceServicesRestApi.RMNodeBodyCreateWithRelativePath](docs/RMNodeBodyCreateWithRelativePath.md)
 - [AlfrescoGovernanceServicesRestApi.RMSite](docs/RMSite.md)
 - [AlfrescoGovernanceServicesRestApi.RMSiteBodyCreate](docs/RMSiteBodyCreate.md)
 - [AlfrescoGovernanceServicesRestApi.RMSiteBodyUpdate](docs/RMSiteBodyUpdate.md)
 - [AlfrescoGovernanceServicesRestApi.RMSiteEntry](docs/RMSiteEntry.md)
 - [AlfrescoGovernanceServicesRestApi.Record](docs/Record.md)
 - [AlfrescoGovernanceServicesRestApi.RecordCategory](docs/RecordCategory.md)
 - [AlfrescoGovernanceServicesRestApi.RecordCategoryChild](docs/RecordCategoryChild.md)
 - [AlfrescoGovernanceServicesRestApi.RecordCategoryChildEntry](docs/RecordCategoryChildEntry.md)
 - [AlfrescoGovernanceServicesRestApi.RecordCategoryChildPaging](docs/RecordCategoryChildPaging.md)
 - [AlfrescoGovernanceServicesRestApi.RecordCategoryChildPagingList](docs/RecordCategoryChildPagingList.md)
 - [AlfrescoGovernanceServicesRestApi.RecordCategoryEntry](docs/RecordCategoryEntry.md)
 - [AlfrescoGovernanceServicesRestApi.RecordCategoryPaging](docs/RecordCategoryPaging.md)
 - [AlfrescoGovernanceServicesRestApi.RecordCategoryPagingList](docs/RecordCategoryPagingList.md)
 - [AlfrescoGovernanceServicesRestApi.RecordEntry](docs/RecordEntry.md)
 - [AlfrescoGovernanceServicesRestApi.RecordFolder](docs/RecordFolder.md)
 - [AlfrescoGovernanceServicesRestApi.RecordFolderAssociationPaging](docs/RecordFolderAssociationPaging.md)
 - [AlfrescoGovernanceServicesRestApi.RecordFolderAssociationPagingList](docs/RecordFolderAssociationPagingList.md)
 - [AlfrescoGovernanceServicesRestApi.RecordFolderChildAssociationEntry](docs/RecordFolderChildAssociationEntry.md)
 - [AlfrescoGovernanceServicesRestApi.RecordFolderEntry](docs/RecordFolderEntry.md)
 - [AlfrescoGovernanceServicesRestApi.RequestBodyFile](docs/RequestBodyFile.md)
 - [AlfrescoGovernanceServicesRestApi.RootCategoryBodyCreate](docs/RootCategoryBodyCreate.md)
 - [AlfrescoGovernanceServicesRestApi.Transfer](docs/Transfer.md)
 - [AlfrescoGovernanceServicesRestApi.TransferAssociationPaging](docs/TransferAssociationPaging.md)
 - [AlfrescoGovernanceServicesRestApi.TransferAssociationPagingList](docs/TransferAssociationPagingList.md)
 - [AlfrescoGovernanceServicesRestApi.TransferChild](docs/TransferChild.md)
 - [AlfrescoGovernanceServicesRestApi.TransferChildAssociationEntry](docs/TransferChildAssociationEntry.md)
 - [AlfrescoGovernanceServicesRestApi.TransferContainer](docs/TransferContainer.md)
 - [AlfrescoGovernanceServicesRestApi.TransferContainerAssociationPaging](docs/TransferContainerAssociationPaging.md)
 - [AlfrescoGovernanceServicesRestApi.TransferContainerAssociationPagingList](docs/TransferContainerAssociationPagingList.md)
 - [AlfrescoGovernanceServicesRestApi.TransferContainerBodyUpdate](docs/TransferContainerBodyUpdate.md)
 - [AlfrescoGovernanceServicesRestApi.TransferContainerChild](docs/TransferContainerChild.md)
 - [AlfrescoGovernanceServicesRestApi.TransferContainerChildAssociationEntry](docs/TransferContainerChildAssociationEntry.md)
 - [AlfrescoGovernanceServicesRestApi.TransferContainerEntry](docs/TransferContainerEntry.md)
 - [AlfrescoGovernanceServicesRestApi.TransferEntry](docs/TransferEntry.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledContainer](docs/UnfiledContainer.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledContainerAssociationPaging](docs/UnfiledContainerAssociationPaging.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledContainerAssociationPagingList](docs/UnfiledContainerAssociationPagingList.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledContainerChild](docs/UnfiledContainerChild.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledContainerChildAssociationEntry](docs/UnfiledContainerChildAssociationEntry.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledContainerEntry](docs/UnfiledContainerEntry.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordContainerBodyUpdate](docs/UnfiledRecordContainerBodyUpdate.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordFolder](docs/UnfiledRecordFolder.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderAssociationPaging](docs/UnfiledRecordFolderAssociationPaging.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderAssociationPagingList](docs/UnfiledRecordFolderAssociationPagingList.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderBodyUpdate](docs/UnfiledRecordFolderBodyUpdate.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderChild](docs/UnfiledRecordFolderChild.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderChildAssociationEntry](docs/UnfiledRecordFolderChildAssociationEntry.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderEntry](docs/UnfiledRecordFolderEntry.md)
 - [AlfrescoGovernanceServicesRestApi.UserInfo](docs/UserInfo.md)
 - [AlfrescoGovernanceServicesRestApi.RecordFolderChildAssociation](docs/RecordFolderChildAssociation.md)
 - [AlfrescoGovernanceServicesRestApi.TransferChildAssociation](docs/TransferChildAssociation.md)
 - [AlfrescoGovernanceServicesRestApi.TransferContainerChildAssociation](docs/TransferContainerChildAssociation.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledContainerChildAssociation](docs/UnfiledContainerChildAssociation.md)
 - [AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderChildAssociation](docs/UnfiledRecordFolderChildAssociation.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication

