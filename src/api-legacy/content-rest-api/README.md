# Alfresco Core Rest Api

AlfrescoCoreRestApi - JavaScript client for core-rest-api
Provides access to the core features of Alfresco.

This API uses the term **entity** to refer to an object in an Alfresco repository.
An **entity** is of a specific **type**, and has a unique **id**.

* The **id** of an entity of type **node** is the **NodeRef** with the `workspace://SpacesStore` prefix removed.
* The **id** of an entity of type **site** is the site's short name.
* The **id** for an entity of type **person** is the person's username.


## Documentation for API Endpoints

- [Downloads](docs/DownloadsApi.md)

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AlfrescoCoreRestApi.AssociationsApi* | [**addAssoc**](docs/AssociationsApi.md#addAssoc) | **POST** /nodes/{sourceId}/targets | Add node association
*AlfrescoCoreRestApi.AssociationsApi* | [**listSourceNodeAssociations**](docs/AssociationsApi.md#listSourceNodeAssociations) | **GET** /nodes/{targetId}/sources | List node associations
*AlfrescoCoreRestApi.AssociationsApi* | [**listTargetAssociations**](docs/AssociationsApi.md#listTargetAssociations) | **GET** /nodes/{sourceId}/targets | List node associations
*AlfrescoCoreRestApi.AssociationsApi* | [**removeAssoc**](docs/AssociationsApi.md#removeAssoc) | **DELETE** /nodes/{sourceId}/targets/{targetId} | Remove node association(s)
*AlfrescoCoreRestApi.ChildAssociationsApi* | [**addNode**](docs/ChildAssociationsApi.md#addNode) | **POST** /nodes/{nodeId}/children | Create a node
*AlfrescoCoreRestApi.ChildAssociationsApi* | [**addSecondaryChildAssoc**](docs/ChildAssociationsApi.md#addSecondaryChildAssoc) | **POST** /nodes/{parentId}/secondary-children | Add secondary child
*AlfrescoCoreRestApi.ChildAssociationsApi* | [**deleteNode**](docs/ChildAssociationsApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete a node
*AlfrescoCoreRestApi.ChildAssociationsApi* | [**getNodeChildren**](docs/ChildAssociationsApi.md#getNodeChildren) | **GET** /nodes/{nodeId}/children | Get node children
*AlfrescoCoreRestApi.ChildAssociationsApi* | [**listParents**](docs/ChildAssociationsApi.md#listParents) | **GET** /nodes/{childId}/parents | List parents
*AlfrescoCoreRestApi.ChildAssociationsApi* | [**listSecondaryChildAssociations**](docs/ChildAssociationsApi.md#listSecondaryChildAssociations) | **GET** /nodes/{parentId}/secondary-children | List secondary children
*AlfrescoCoreRestApi.ChildAssociationsApi* | [**moveNode**](docs/ChildAssociationsApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
*AlfrescoCoreRestApi.ChildAssociationsApi* | [**removeSecondaryChildAssoc**](docs/ChildAssociationsApi.md#removeSecondaryChildAssoc) | **DELETE** /nodes/{parentId}/secondary-children/{childId} | Remove secondary child (or children)
*AlfrescoCoreRestApi.CommentsApi* | [**addComment**](docs/CommentsApi.md#addComment) | **POST** /nodes/{nodeId}/comments | Add a comment
*AlfrescoCoreRestApi.CommentsApi* | [**getComments**](docs/CommentsApi.md#getComments) | **GET** /nodes/{nodeId}/comments | Get comments
*AlfrescoCoreRestApi.CommentsApi* | [**removeComment**](docs/CommentsApi.md#removeComment) | **DELETE** /nodes/{nodeId}/comments/{commentId} | Delete a comment
*AlfrescoCoreRestApi.CommentsApi* | [**updateComment**](docs/CommentsApi.md#updateComment) | **PUT** /nodes/{nodeId}/comments/{commentId} | Update a comment
*AlfrescoCoreRestApi.CustomModelApi* | [**createCustomModel**](docs/CustomModelApi.md#createCustomModel)| **POST** /cmm | create Custom Model
*AlfrescoCoreRestApi.CustomModelApi* | [**createCustomType**](docs/CustomModelApi.md#createCustomType) | **POST** /cmm/{modelName}/types | create custom type
*AlfrescoCoreRestApi.CustomModelApi* | [**createCustomAspect**](docs/CustomModelApi.md#createCustomAspect) | **POST** /cmm/{modelName}/aspects | create custom aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**createCustomConstraint**](docs/CustomModelApi.md#createCustomConstraint) | **POST** cmm/{modelName}?select=status | create custom constraint
*AlfrescoCoreRestApi.CustomModelApi* | [**activateCustomModel**](docs/CustomModelApi.md#activateCustomModel) | **PUT** /nodes/{nodeId}/tags/{tagId} | activate custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**deactivateCustomModel**](docs/CustomModelApi.md#deactivateCustomModel) | **PUT** /cmm/{modelName}?select=status | deactivate custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**addPropertyToAspect**](docs/CustomModelApi.md#addPropertyToAspect) | **PUT** /cmm/{modelName}/aspects/{aspectName}?select=props| add property into an existing aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**addPropertyToType**](docs/CustomModelApi.md#addPropertyToType) | **PUT** /cmm/{modelName}/types/{typeName}?select=props | Add Property into an existing type
*AlfrescoCoreRestApi.CustomModelApi* | [**updateCustomModel**](docs/CustomModelApi.md#updateCustomModel) | **PUT** /cmm/{modelName} | edit an existing custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**updateCustomType**](docs/CustomModelApi.md#updateCustomType) | **PUT** /cmm/{modelName}/types/{typeName} | edit an existing custom type
*AlfrescoCoreRestApi.CustomModelApi* | [**updateCustomAspect**](docs/CustomModelApi.md#updateCustomAspect) | **PUT** /cmm/{modelName}/aspects/{aspectName} | dEdit an existing custom aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**getAllCustomModel**](docs/CustomModelApi.md#getAllCustomModel) | **GET** /cmm | get all customModel
*AlfrescoCoreRestApi.CustomModelApi* | [**getCustomModel**](docs/CustomModelApi.md#getCustomModel) | **GET** /cmm/{modelName} | get a single custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**getAllCustomType**](docs/CustomModelApi.md#getAllCustomType) | **GET** /cmm/{modelName}/types | get all custom Type
*AlfrescoCoreRestApi.CustomModelApi* | [**getCustomType**](docs/CustomModelApi.md#getCustomType) | **GET** /cmm/{modelName}/types/{typeName} | get custom type
*AlfrescoCoreRestApi.CustomModelApi* | [**getAllCustomAspect**](docs/CustomModelApi.md#getAllCustomAspect) | **GET** /cmm/{modelName}/aspects | get all custom aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**getCustomAspect**](docs/CustomModelApi.md#getCustomAspect) | **GET** /cmm/{modelName}/aspects/{aspectName} | get custom aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**getAllCustomConstraints**](docs/CustomModelApi.md#getAllCustomConstraints) | **GET** /cmm/{modelName}/constraints | get all custom constraints
*AlfrescoCoreRestApi.CustomModelApi* | [**getCustomConstraints**](docs/CustomModelApi.md#getCustomConstraints) | **GET** /cmm/{modelName}/constraints{constraintName} | get custom constraints
*AlfrescoCoreRestApi.CustomModelApi* | [**deleteCustomModel**](docs/CustomModelApi.md#deleteCustomModel) | **DELETE** /cmm/{modelName} | delete custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**deleteCustomType**](docs/CustomModelApi.md#deleteCustomType) | **DELETE** /cmm/{modelName}/types/{typeName} | delete custom type
*AlfrescoCoreRestApi.FavoritesApi* | [**addFavorite**](docs/FavoritesApi.md#addFavorite) | **POST** /people/{personId}/favorites | Add a favorite
*AlfrescoCoreRestApi.FavoritesApi* | [**getFavorite**](docs/FavoritesApi.md#getFavorite) | **GET** /people/{personId}/favorites/{favoriteId} | Get a favorite
*AlfrescoCoreRestApi.FavoritesApi* | [**getFavorites**](docs/FavoritesApi.md#getFavorites) | **GET** /people/{personId}/favorites | Get favorites
*AlfrescoCoreRestApi.FavoritesApi* | [**removeFavoriteSite**](docs/FavoritesApi.md#removeFavoriteSite) | **DELETE** /people/{personId}/favorites/{favoriteId} | Delete a favorite
*AlfrescoCoreRestApi.NetworksApi* | [**getNetwork**](docs/NetworksApi.md#getNetwork) | **GET** /networks/{networkId} | Get a network
*AlfrescoCoreRestApi.NodesApi* | [**addNode**](docs/NodesApi.md#addNode) | **POST** /nodes/{nodeId}/children | Create a node
*AlfrescoCoreRestApi.NodesApi* | [**copyNode**](docs/NodesApi.md#copyNode) | **POST** /nodes/{nodeId}/copy | Copy a node
*AlfrescoCoreRestApi.NodesApi* | [**deleteNode**](docs/NodesApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete a node
*AlfrescoCoreRestApi.NodesApi* | [**getDeletedNode**](docs/NodesApi.md#getDeletedNode) | **GET** /deleted-nodes/{nodeId} | Get a deleted node
*AlfrescoCoreRestApi.NodesApi* | [**getDeletedNodes**](docs/NodesApi.md#getDeletedNodes) | **GET** /deleted-nodes | Get deleted nodes
*AlfrescoCoreRestApi.NodesApi* | [**getFileContent**](docs/NodesApi.md#getFileContent) | **GET** /nodes/{nodeId}/content | Get file content
*AlfrescoCoreRestApi.NodesApi* | [**getNode**](docs/NodesApi.md#getNode) | **GET** /nodes/{nodeId} | Get a node
*AlfrescoCoreRestApi.NodesApi* | [**getNodeChildren**](docs/NodesApi.md#getNodeChildren) | **GET** /nodes/{nodeId}/children | Get node children
*AlfrescoCoreRestApi.NodesApi* | [**moveNode**](docs/NodesApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
*AlfrescoCoreRestApi.NodesApi* | [**purgeDeletedNode**](docs/NodesApi.md#purgeDeletedNode) | **DELETE** /deleted-nodes/{nodeId} | Purge a deleted node
*AlfrescoCoreRestApi.NodesApi* | [**restoreNode**](docs/NodesApi.md#restoreNode) | **POST** /deleted-nodes/{nodeId}/restore | Restore a deleted node
*AlfrescoCoreRestApi.NodesApi* | [**updateFileContent**](docs/NodesApi.md#updateFileContent) | **PUT** /nodes/{nodeId}/content | Update file content
*AlfrescoCoreRestApi.NodesApi* | [**updateNode**](docs/NodesApi.md#updateNode) | **PUT** /nodes/{nodeId} | Update a node
*AlfrescoCoreRestApi.PeopleApi* | [**addFavorite**](docs/PeopleApi.md#addFavorite) | **POST** /people/{personId}/favorites | Add a favorite
*AlfrescoCoreRestApi.PeopleApi* | [**addSiteMembershipRequest**](docs/PeopleApi.md#addSiteMembershipRequest) | **POST** /people/{personId}/site-membership-requests | Create a site membership request
*AlfrescoCoreRestApi.PeopleApi* | [**deleteFavoriteSite**](docs/PeopleApi.md#deleteFavoriteSite) | **DELETE** /people/{personId}/favorite-sites/{siteId} | Delete favorite site
*AlfrescoCoreRestApi.PeopleApi* | [**favoriteSite**](docs/PeopleApi.md#favoriteSite) | **POST** /people/{personId}/favorite-sites | Favorite a site
*AlfrescoCoreRestApi.PeopleApi* | [**getActivities**](docs/PeopleApi.md#getActivities) | **GET** /people/{personId}/activities | Get activities
*AlfrescoCoreRestApi.PeopleApi* | [**getFavorite**](docs/PeopleApi.md#getFavorite) | **GET** /people/{personId}/favorites/{favoriteId} | Get a favorite
*AlfrescoCoreRestApi.PeopleApi* | [**getFavoriteSite**](docs/PeopleApi.md#getFavoriteSite) | **GET** /people/{personId}/favorite-sites/{siteId} | Get a favorite site
*AlfrescoCoreRestApi.PeopleApi* | [**getFavoriteSites**](docs/PeopleApi.md#getFavoriteSites) | **GET** /people/{personId}/favorite-sites | Get favorite sites
*AlfrescoCoreRestApi.PeopleApi* | [**getFavorites**](docs/PeopleApi.md#getFavorites) | **GET** /people/{personId}/favorites | Get favorites
*AlfrescoCoreRestApi.PeopleApi* | [**addPerson**](docs/PeopleApi.md#addPerson) | **POST** /people | Add a person
*AlfrescoCoreRestApi.PeopleApi* | [**updatePerson**](docs/PeopleApi.md#updatePerson) | **PUT** /people/{personId} | Update a person
*AlfrescoCoreRestApi.PeopleApi* | [**getPersons**](docs/PeopleApi.md#getPersons) | **GET** /people | List people
*AlfrescoCoreRestApi.PeopleApi* | [**getPerson**](docs/PeopleApi.md#getPerson) | **GET** /people/{personId} | Get a person
*AlfrescoCoreRestApi.PeopleApi* | [**getPersonNetwork**](docs/PeopleApi.md#getPersonNetwork) | **GET** /people/{personId}/networks/{networkId} | Get network information
*AlfrescoCoreRestApi.PeopleApi* | [**getPersonNetworks**](docs/PeopleApi.md#getPersonNetworks) | **GET** /people/{personId}/networks | Get network membership for a person
*AlfrescoCoreRestApi.PeopleApi* | [**getPreference**](docs/PeopleApi.md#getPreference) | **GET** /people/{personId}/preferences/{preferenceName} | Get a preference
*AlfrescoCoreRestApi.PeopleApi* | [**getPreferences**](docs/PeopleApi.md#getPreferences) | **GET** /people/{personId}/preferences | Get preferences
*AlfrescoCoreRestApi.PeopleApi* | [**getSiteMembership**](docs/PeopleApi.md#getSiteMembership) | **GET** /people/{personId}/sites | Get site membership information
*AlfrescoCoreRestApi.PeopleApi* | [**getSiteMembershipRequest**](docs/PeopleApi.md#getSiteMembershipRequest) | **GET** /people/{personId}/site-membership-requests/{siteId} | Get a site membership request
*AlfrescoCoreRestApi.PeopleApi* | [**getSiteMembershipRequests**](docs/PeopleApi.md#getSiteMembershipRequests) | **GET** /people/{personId}/site-membership-requests | Get site membership requests
*AlfrescoCoreRestApi.PeopleApi* | [**removeFavoriteSite**](docs/PeopleApi.md#removeFavoriteSite) | **DELETE** /people/{personId}/favorites/{favoriteId} | Delete a favorite
*AlfrescoCoreRestApi.PeopleApi* | [**removeSiteMembershipRequest**](docs/PeopleApi.md#removeSiteMembershipRequest) | **DELETE** /people/{personId}/site-membership-requests/{siteId} | Cancel a site membership
*AlfrescoCoreRestApi.PeopleApi* | [**updateSiteMembershipRequest**](docs/PeopleApi.md#updateSiteMembershipRequest) | **PUT** /people/{personId}/site-membership-requests/{siteId} | Update a site membership request
*AlfrescoCoreRestApi.QueriesApi* | [**findNodes**](docs/QueriesApi.md#findNodes) | **GET** /queries/nodes | Find nodes
*AlfrescoCoreRestApi.RatingsApi* | [**getRating**](docs/RatingsApi.md#getRating) | **GET** /nodes/{nodeId}/ratings/{ratingId} | Get a rating
*AlfrescoCoreRestApi.RatingsApi* | [**getRatings**](docs/RatingsApi.md#getRatings) | **GET** /nodes/{nodeId}/ratings | Get ratings
*AlfrescoCoreRestApi.RatingsApi* | [**rate**](docs/RatingsApi.md#rate) | **POST** /nodes/{nodeId}/ratings | Rate
*AlfrescoCoreRestApi.RatingsApi* | [**removeRating**](docs/RatingsApi.md#removeRating) | **DELETE** /nodes/{nodeId}/ratings/{ratingId} | Delete a rating
*AlfrescoCoreRestApi.RenditionsApi* | [**createRendition**](docs/RenditionsApi.md#createRendition) | **POST** /nodes/{nodeId}/renditions | Create rendition
*AlfrescoCoreRestApi.RenditionsApi* | [**getRendition**](docs/RenditionsApi.md#getRendition) | **GET** /nodes/{nodeId}/renditions/{renditionId} | Get rendition information
*AlfrescoCoreRestApi.RenditionsApi* | [**getRenditionContent**](docs/RenditionsApi.md#getRenditionContent) | **GET** /nodes/{nodeId}/renditions/{renditionId}/content | Get rendition content
*AlfrescoCoreRestApi.RenditionsApi* | [**getRenditions**](docs/RenditionsApi.md#getRenditions) | **GET** /nodes/{nodeId}/renditions | List information for renditions
*AlfrescoCoreRestApi.RenditionsApi* | [**getSharedLinkRenditionContent**](docs/RenditionsApi.md#getSharedLinkRenditionContent) | **GET** /shared-links/{sharedId}/renditions/{renditionId}/content | Get shared link rendition content
*AlfrescoCoreRestApi.RenditionsApi* | [**getSharedLinkRenditions**](docs/RenditionsApi.md#getSharedLinkRenditions) | **GET** /shared-links/{sharedId}/renditions | List information for created renditions
*AlfrescoCoreRestApi.SharedlinksApi* | [**addSharedLink**](docs/SharedlinksApi.md#addSharedLink) | **POST** /shared-links | Create a shared link to a file
*AlfrescoCoreRestApi.SharedlinksApi* | [**deleteSharedLink**](docs/SharedlinksApi.md#deleteSharedLink) | **DELETE** /shared-links/{sharedId} | Deletes a shared link
*AlfrescoCoreRestApi.SharedlinksApi* | [**emailSharedLink**](docs/SharedlinksApi.md#emailSharedLink) | **POST** /shared-links/{sharedId}/email | Email shared link
*AlfrescoCoreRestApi.SharedlinksApi* | [**findSharedLinks**](docs/SharedlinksApi.md#findSharedLinks) | **GET** /shared-links | Find shared links
*AlfrescoCoreRestApi.SharedlinksApi* | [**getSharedLink**](docs/SharedlinksApi.md#getSharedLink) | **GET** /shared-links/{sharedId} | Get a shared link
*AlfrescoCoreRestApi.SharedlinksApi* | [**getSharedLinkContent**](docs/SharedlinksApi.md#getSharedLinkContent) | **GET** /shared-links/{sharedId}/content | Get file content
*AlfrescoCoreRestApi.SitesApi* | [**addSiteMember**](docs/SitesApi.md#addSiteMember) | **POST** /sites/{siteId}/members | Add a person
*AlfrescoCoreRestApi.SitesApi* | [**createSite**](docs/SitesApi.md#createSite) | **POST** /sites | Create a site
*AlfrescoCoreRestApi.SitesApi* | [**updateSite**](docs/SitesApi.md#updateSite) | **PUT** /sites/{siteId} | Update a site
*AlfrescoCoreRestApi.SitesApi* | [**deleteSite**](docs/SitesApi.md#deleteSite) | **DELETE** /sites/{siteId} | Delete a site
*AlfrescoCoreRestApi.SitesApi* | [**getSite**](docs/SitesApi.md#getSite) | **GET** /sites/{siteId} | Get a site
*AlfrescoCoreRestApi.SitesApi* | [**getSiteContainer**](docs/SitesApi.md#getSiteContainer) | **GET** /sites/{siteId}/containers/{containerId} | Get a container
*AlfrescoCoreRestApi.SitesApi* | [**getSiteContainers**](docs/SitesApi.md#getSiteContainers) | **GET** /sites/{siteId}/containers | Get containers
*AlfrescoCoreRestApi.SitesApi* | [**getSiteMember**](docs/SitesApi.md#getSiteMember) | **GET** /sites/{siteId}/members/{personId} | Get a site member
*AlfrescoCoreRestApi.SitesApi* | [**getSiteMembers**](docs/SitesApi.md#getSiteMembers) | **GET** /sites/{siteId}/members | Get members
*AlfrescoCoreRestApi.SitesApi* | [**getSites**](docs/SitesApi.md#getSites) | **GET** /sites | Get sites
*AlfrescoCoreRestApi.SitesApi* | [**removeSiteMember**](docs/SitesApi.md#removeSiteMember) | **DELETE** /sites/{siteId}/members/{personId} | Delete a site member
*AlfrescoCoreRestApi.SitesApi* | [**updateSiteMember**](docs/SitesApi.md#updateSiteMember) | **PUT** /sites/{siteId}/members/{personId} | Update a site member
*AlfrescoCoreRestApi.TagsApi* | [**addTag**](docs/TagsApi.md#addTag) | **POST** /nodes/{nodeId}/tags | Add a tag
*AlfrescoCoreRestApi.TagsApi* | [**getNodeTags**](docs/TagsApi.md#getNodeTags) | **GET** /nodes/{nodeId}/tags | Get tags
*AlfrescoCoreRestApi.TagsApi* | [**getTag**](docs/TagsApi.md#getTag) | **GET** /tags/{tagId} | Get a tag
*AlfrescoCoreRestApi.TagsApi* | [**getTags**](docs/TagsApi.md#getTags) | **GET** /tags | Get tags
*AlfrescoCoreRestApi.TagsApi* | [**removeTag**](docs/TagsApi.md#removeTag) | **DELETE** /nodes/{nodeId}/tags/{tagId} | Delete a tag
*AlfrescoCoreRestApi.TagsApi* | [**updateTag**](docs/TagsApi.md#updateTag) | **PUT** /tags/{tagId} | Update a tag
*AlfrescoCoreRestApi.WebscriptApi* | [**executeWebScript**](docs/WebscriptApi.md#executeWebScript) | |  execute WebScript
*AlfrescoCoreRestApi.GroupsApi* | [**createGroup**](docs/GroupsApi.md#createGroup) | **POST** /groups | Create a group
*AlfrescoCoreRestApi.GroupsApi* | [**getGroups**](docs/GroupsApi.md#getGroups) | **GET** /groups | Get groups
*AlfrescoCoreRestApi.GroupsApi* | [**deleteGroup**](docs/GroupsApi.md#deleteGroup) | **DELETE** /groups/{groupId} | Delete a group
*AlfrescoCoreRestApi.GroupsApi* | [**getGroup**](docs/GroupsApi.md#getGroup) | **GET** /groups/{groupId} | Get a group
*AlfrescoCoreRestApi.GroupsApi* | [**updateGroup**](docs/GroupsApi.md#updateGroup) | **PUT** /groups/{groupId} | Update a group name
*AlfrescoCoreRestApi.GroupsApi* | [**getGroupMembers**](docs/GroupsApi.md#getGroupMembers) | **GET** /groups/{groupId}/members | Get members of the group
*AlfrescoCoreRestApi.GroupsApi* | [**addGroupMember**](docs/GroupsApi.md#addGroupMember) | **POST** /groups/{groupId}/members | Add a group member
*AlfrescoCoreRestApi.GroupsApi* | [**deleteGroupMember**](docs/GroupsApi.md#deleteGroupMember) | **DELETE** /groups/{groupId}/members/{groupMemberId} | Remove a group member
*AlfrescoCoreRestApi.DownloadsApi* | [**cancelDownload**](docs/DownloadsApi.md#cancelDownload) | **DELETE** /downloads/{downloadId} | Cancel a download
*AlfrescoCoreRestApi.DownloadsApi* | [**createDownload**](docs/DownloadsApi.md#createDownload) | **POST** /downloads | Create a new download
*AlfrescoCoreRestApi.DownloadsApi* | [**getDownload**](docs/DownloadsApi.md#getDownload) | **GET** /downloads/{downloadId} | Get a download
*AlfrescoContentServicesRestApi.VersionsApi* | [**deleteVersion**](docs/VersionsApi.md#deleteVersion) | **DELETE** /nodes/{nodeId}/versions/{versionId} | Delete a version
*AlfrescoContentServicesRestApi.VersionsApi* | [**getVersion**](docs/VersionsApi.md#getVersion) | **GET** /nodes/{nodeId}/versions/{versionId} | Get version information
*AlfrescoContentServicesRestApi.VersionsApi* | [**getVersionContent**](docs/VersionsApi.md#getVersionContent) | **GET** /nodes/{nodeId}/versions/{versionId}/content | Get version content
*AlfrescoContentServicesRestApi.VersionsApi* | [**listVersionHistory**](docs/VersionsApi.md#listVersionHistory) | **GET** /nodes/{nodeId}/versions | List version history
*AlfrescoContentServicesRestApi.VersionsApi* | [**revertVersion**](docs/VersionsApi.md#revertVersion) | **POST** /nodes/{nodeId}/versions/{versionId}/revert | Revert a version

## Documentation for Models

 - [AlfrescoCoreRestApi.Activity](docs/Activity.md)
 - [AlfrescoCoreRestApi.ActivityActivitySummary](docs/ActivityActivitySummary.md)
 - [AlfrescoCoreRestApi.ActivityEntry](docs/ActivityEntry.md)
 - [AlfrescoCoreRestApi.ActivityPaging](docs/ActivityPaging.md)
 - [AlfrescoCoreRestApi.ActivityPagingList](docs/ActivityPagingList.md)
 - [AlfrescoCoreRestApi.AssocChildBody](docs/AssocChildBody.md)
 - [AlfrescoCoreRestApi.AssocInfo](docs/AssocInfo.md)
 - [AlfrescoCoreRestApi.AssocTargetBody](docs/AssocTargetBody.md)
 - [AlfrescoCoreRestApi.ChildAssocInfo](docs/ChildAssocInfo.md)
 - [AlfrescoCoreRestApi.Comment](docs/Comment.md)
 - [AlfrescoCoreRestApi.CommentBody](docs/CommentBody.md)
 - [AlfrescoCoreRestApi.CommentBody1](docs/CommentBody1.md)
 - [AlfrescoCoreRestApi.CommentEntry](docs/CommentEntry.md)
 - [AlfrescoCoreRestApi.CommentPaging](docs/CommentPaging.md)
 - [AlfrescoCoreRestApi.CommentPagingList](docs/CommentPagingList.md)
 - [AlfrescoCoreRestApi.Company](docs/Company.md)
 - [AlfrescoCoreRestApi.ContentInfo](docs/ContentInfo.md)
 - [AlfrescoCoreRestApi.CopyBody](docs/CopyBody.md)
 - [AlfrescoCoreRestApi.DeletedNode](docs/DeletedNode.md)
 - [AlfrescoCoreRestApi.DeletedNodeEntry](docs/DeletedNodeEntry.md)
 - [AlfrescoCoreRestApi.DeletedNodeMinimal](docs/DeletedNodeMinimal.md)
 - [AlfrescoCoreRestApi.DeletedNodeMinimalEntry](docs/DeletedNodeMinimalEntry.md)
 - [AlfrescoCoreRestApi.DeletedNodesPaging](docs/DeletedNodesPaging.md)
 - [AlfrescoCoreRestApi.DeletedNodesPagingList](docs/DeletedNodesPagingList.md)
 - [AlfrescoCoreRestApi.Download](docs/Download.md)
 - [AlfrescoCoreRestApi.DownloadBodyCreate](docs/DownloadBodyCreate.md)
 - [AlfrescoCoreRestApi.DownloadEntry](docs/DownloadEntry.md)
 - [AlfrescoCoreRestApi.EmailSharedLinkBody](docs/EmailSharedLinkBody.md)
 - [AlfrescoCoreRestApi.Error](docs/Error.md)
 - [AlfrescoCoreRestApi.ErrorError](docs/ErrorError.md)
 - [AlfrescoCoreRestApi.Favorite](docs/Favorite.md)
 - [AlfrescoCoreRestApi.FavoriteBody](docs/FavoriteBody.md)
 - [AlfrescoCoreRestApi.FavoriteEntry](docs/FavoriteEntry.md)
 - [AlfrescoCoreRestApi.FavoritePaging](docs/FavoritePaging.md)
 - [AlfrescoCoreRestApi.FavoritePagingList](docs/FavoritePagingList.md)
 - [AlfrescoCoreRestApi.FavoriteSiteBody](docs/FavoriteSiteBody.md)
 - [AlfrescoCoreRestApi.InlineResponse201](docs/InlineResponse201.md)
 - [AlfrescoCoreRestApi.InlineResponse201Entry](docs/InlineResponse201Entry.md)
 - [AlfrescoCoreRestApi.MoveBody](docs/MoveBody.md)
 - [AlfrescoCoreRestApi.NetworkQuota](docs/NetworkQuota.md)
 - [AlfrescoCoreRestApi.NodeAssocMinimal](docs/NodeAssocMinimal.md)
 - [AlfrescoCoreRestApi.NodeAssocMinimalEntry](docs/NodeAssocMinimalEntry.md)
 - [AlfrescoCoreRestApi.NodeAssocPaging](docs/NodeAssocPaging.md)
 - [AlfrescoCoreRestApi.NodeAssocPagingList](docs/NodeAssocPagingList.md)
 - [AlfrescoCoreRestApi.NodeBody](docs/NodeBody.md)
 - [AlfrescoCoreRestApi.NodeBody1](docs/NodeBody1.md)
 - [AlfrescoCoreRestApi.NodeChildAssocMinimal](docs/NodeChildAssocMinimal.md)
 - [AlfrescoCoreRestApi.NodeChildAssocMinimalEntry](docs/NodeChildAssocMinimalEntry.md)
 - [AlfrescoCoreRestApi.NodeChildAssocPaging](docs/NodeChildAssocPaging.md)
 - [AlfrescoCoreRestApi.NodeChildAssocPagingList](docs/NodeChildAssocPagingList.md)
 - [AlfrescoCoreRestApi.NodeEntry](docs/NodeEntry.md)
 - [AlfrescoCoreRestApi.NodeFull](docs/NodeFull.md)
 - [AlfrescoCoreRestApi.NodeMinimal](docs/NodeMinimal.md)
 - [AlfrescoCoreRestApi.NodeMinimalEntry](docs/NodeMinimalEntry.md)
 - [AlfrescoCoreRestApi.NodePaging](docs/NodePaging.md)
 - [AlfrescoCoreRestApi.NodePagingList](docs/NodePagingList.md)
 - [AlfrescoCoreRestApi.NodeSharedLink](docs/NodeSharedLink.md)
 - [AlfrescoCoreRestApi.NodeSharedLinkEntry](docs/NodeSharedLinkEntry.md)
 - [AlfrescoCoreRestApi.NodeSharedLinkPaging](docs/NodeSharedLinkPaging.md)
 - [AlfrescoCoreRestApi.NodeSharedLinkPagingList](docs/NodeSharedLinkPagingList.md)
 - [AlfrescoCoreRestApi.NodesnodeIdchildrenContent](docs/NodesnodeIdchildrenContent.md)
 - [AlfrescoCoreRestApi.Pagination](docs/Pagination.md)
 - [AlfrescoCoreRestApi.PathElement](docs/PathElement.md)
 - [AlfrescoCoreRestApi.PathInfo](docs/PathInfo.md)
 - [AlfrescoCoreRestApi.Person](docs/Person.md)
 - [AlfrescoCoreRestApi.PersonEntry](docs/PersonEntry.md)
 - [AlfrescoCoreRestApi.PersonNetwork](docs/PersonNetwork.md)
 - [AlfrescoCoreRestApi.PersonNetworkEntry](docs/PersonNetworkEntry.md)
 - [AlfrescoCoreRestApi.PersonNetworkPaging](docs/PersonNetworkPaging.md)
 - [AlfrescoCoreRestApi.PersonNetworkPagingList](docs/PersonNetworkPagingList.md)
 - [AlfrescoCoreRestApi.Preference](docs/Preference.md)
 - [AlfrescoCoreRestApi.PreferenceEntry](docs/PreferenceEntry.md)
 - [AlfrescoCoreRestApi.PreferencePaging](docs/PreferencePaging.md)
 - [AlfrescoCoreRestApi.PreferencePagingList](docs/PreferencePagingList.md)
 - [AlfrescoCoreRestApi.Rating](docs/Rating.md)
 - [AlfrescoCoreRestApi.RatingAggregate](docs/RatingAggregate.md)
 - [AlfrescoCoreRestApi.RatingBody](docs/RatingBody.md)
 - [AlfrescoCoreRestApi.RatingEntry](docs/RatingEntry.md)
 - [AlfrescoCoreRestApi.RatingPaging](docs/RatingPaging.md)
 - [AlfrescoCoreRestApi.RatingPagingList](docs/RatingPagingList.md)
 - [AlfrescoCoreRestApi.Rendition](docs/Rendition.md)
 - [AlfrescoCoreRestApi.RenditionBody](docs/RenditionBody.md)
 - [AlfrescoCoreRestApi.RenditionEntry](docs/RenditionEntry.md)
 - [AlfrescoCoreRestApi.RenditionPaging](docs/RenditionPaging.md)
 - [AlfrescoCoreRestApi.RenditionPagingList](docs/RenditionPagingList.md)
 - [AlfrescoCoreRestApi.SharedLinkBody](docs/SharedLinkBody.md)
 - [AlfrescoCoreRestApi.Site](docs/Site.md)
 - [AlfrescoCoreRestApi.SiteBody](docs/SiteBody.md)
 - [AlfrescoCoreRestApi.SiteContainer](docs/SiteContainer.md)
 - [AlfrescoCoreRestApi.SiteContainerEntry](docs/SiteContainerEntry.md)
 - [AlfrescoCoreRestApi.SiteContainerPaging](docs/SiteContainerPaging.md)
 - [AlfrescoCoreRestApi.SiteEntry](docs/SiteEntry.md)
 - [AlfrescoCoreRestApi.SiteMember](docs/SiteMember.md)
 - [AlfrescoCoreRestApi.SiteMemberBody](docs/SiteMemberBody.md)
 - [AlfrescoCoreRestApi.SiteMemberEntry](docs/SiteMemberEntry.md)
 - [AlfrescoCoreRestApi.SiteMemberPaging](docs/SiteMemberPaging.md)
 - [AlfrescoCoreRestApi.SiteMemberRoleBody](docs/SiteMemberRoleBody.md)
 - [AlfrescoCoreRestApi.SiteMembershipBody](docs/SiteMembershipBody.md)
 - [AlfrescoCoreRestApi.SiteMembershipBody1](docs/SiteMembershipBody1.md)
 - [AlfrescoCoreRestApi.SiteMembershipRequest](docs/SiteMembershipRequest.md)
 - [AlfrescoCoreRestApi.SiteMembershipRequestEntry](docs/SiteMembershipRequestEntry.md)
 - [AlfrescoCoreRestApi.SiteMembershipRequestPaging](docs/SiteMembershipRequestPaging.md)
 - [AlfrescoCoreRestApi.SiteMembershipRequestPagingList](docs/SiteMembershipRequestPagingList.md)
 - [AlfrescoCoreRestApi.SitePaging](docs/SitePaging.md)
 - [AlfrescoCoreRestApi.SitePagingList](docs/SitePagingList.md)
 - [AlfrescoCoreRestApi.Tag](docs/Tag.md)
 - [AlfrescoCoreRestApi.TagBody](docs/TagBody.md)
 - [AlfrescoCoreRestApi.TagBody1](docs/TagBody1.md)
 - [AlfrescoCoreRestApi.TagEntry](docs/TagEntry.md)
 - [AlfrescoCoreRestApi.TagPaging](docs/TagPaging.md)
 - [AlfrescoCoreRestApi.TagPagingList](docs/TagPagingList.md)
 - [AlfrescoCoreRestApi.UserInfo](docs/UserInfo.md)
 - [AlfrescoCoreRestApi.GroupsApi](docs/GroupsApi.md)
 - [AlfrescoContentServicesRestApi.Version](docs/Version.md)
 - [AlfrescoContentServicesRestApi.VersionEntry](docs/VersionEntry.md)
 - [AlfrescoContentServicesRestApi.VersionPaging](docs/VersionPaging.md)
 - [AlfrescoContentServicesRestApi.VersionPagingList](docs/VersionPagingList.md)

## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication

