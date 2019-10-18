# **Core API**

Provides access to the core features of Alfresco Content Services.

> Documentation updated on: 2019-10-17T13:46:19.017+01:00

## Methods

All URIs are relative to:

```text
https://localhost/alfresco/api/-default-/public/alfresco/versions/1
```

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
ActionsApi | [**actionDetails**](docs/ActionsApi.md#actionDetails) | **GET** /action-definitions/{actionDefinitionId} | Retrieve the details of an action definition
ActionsApi | [**actionExec**](docs/ActionsApi.md#actionExec) | **POST** /action-executions | Execute an action
ActionsApi | [**listActions**](docs/ActionsApi.md#listActions) | **GET** /action-definitions | Retrieve list of available actions
ActionsApi | [**nodeActions**](docs/ActionsApi.md#nodeActions) | **GET** /nodes/{nodeId}/action-definitions | Retrieve actions for a node
ActivitiesApi | [**listActivitiesForPerson**](docs/ActivitiesApi.md#listActivitiesForPerson) | **GET** /people/{personId}/activities | List activities
AuditApi | [**deleteAuditEntriesForAuditApp**](docs/AuditApi.md#deleteAuditEntriesForAuditApp) | **DELETE** /audit-applications/{auditApplicationId}/audit-entries | Permanently delete audit entries for an audit application
AuditApi | [**deleteAuditEntry**](docs/AuditApi.md#deleteAuditEntry) | **DELETE** /audit-applications/{auditApplicationId}/audit-entries/{auditEntryId} | Permanently delete an audit entry
AuditApi | [**getAuditApp**](docs/AuditApi.md#getAuditApp) | **GET** /audit-applications/{auditApplicationId} | Get audit application info
AuditApi | [**getAuditEntry**](docs/AuditApi.md#getAuditEntry) | **GET** /audit-applications/{auditApplicationId}/audit-entries/{auditEntryId} | Get audit entry
AuditApi | [**listAuditApps**](docs/AuditApi.md#listAuditApps) | **GET** /audit-applications | List audit applications
AuditApi | [**listAuditEntriesForAuditApp**](docs/AuditApi.md#listAuditEntriesForAuditApp) | **GET** /audit-applications/{auditApplicationId}/audit-entries | List audit entries for an audit application
AuditApi | [**listAuditEntriesForNode**](docs/AuditApi.md#listAuditEntriesForNode) | **GET** /nodes/{nodeId}/audit-entries | List audit entries for a node
AuditApi | [**updateAuditApp**](docs/AuditApi.md#updateAuditApp) | **PUT** /audit-applications/{auditApplicationId} | Update audit application info
CommentsApi | [**createComment**](docs/CommentsApi.md#createComment) | **POST** /nodes/{nodeId}/comments | Create a comment
CommentsApi | [**deleteComment**](docs/CommentsApi.md#deleteComment) | **DELETE** /nodes/{nodeId}/comments/{commentId} | Delete a comment
CommentsApi | [**listComments**](docs/CommentsApi.md#listComments) | **GET** /nodes/{nodeId}/comments | List comments
CommentsApi | [**updateComment**](docs/CommentsApi.md#updateComment) | **PUT** /nodes/{nodeId}/comments/{commentId} | Update a comment
DownloadsApi | [**cancelDownload**](docs/DownloadsApi.md#cancelDownload) | **DELETE** /downloads/{downloadId} | Cancel a download
DownloadsApi | [**createDownload**](docs/DownloadsApi.md#createDownload) | **POST** /downloads | Create a new download
DownloadsApi | [**getDownload**](docs/DownloadsApi.md#getDownload) | **GET** /downloads/{downloadId} | Get a download
FavoritesApi | [**createFavorite**](docs/FavoritesApi.md#createFavorite) | **POST** /people/{personId}/favorites | Create a favorite
FavoritesApi | [**createSiteFavorite**](docs/FavoritesApi.md#createSiteFavorite) | **POST** /people/{personId}/favorite-sites | Create a site favorite
FavoritesApi | [**deleteFavorite**](docs/FavoritesApi.md#deleteFavorite) | **DELETE** /people/{personId}/favorites/{favoriteId} | Delete a favorite
FavoritesApi | [**deleteSiteFavorite**](docs/FavoritesApi.md#deleteSiteFavorite) | **DELETE** /people/{personId}/favorite-sites/{siteId} | Delete a site favorite
FavoritesApi | [**getFavorite**](docs/FavoritesApi.md#getFavorite) | **GET** /people/{personId}/favorites/{favoriteId} | Get a favorite
FavoritesApi | [**getFavoriteSite**](docs/FavoritesApi.md#getFavoriteSite) | **GET** /people/{personId}/favorite-sites/{siteId} | Get a favorite site
FavoritesApi | [**listFavoriteSitesForPerson**](docs/FavoritesApi.md#listFavoriteSitesForPerson) | **GET** /people/{personId}/favorite-sites | List favorite sites
FavoritesApi | [**listFavorites**](docs/FavoritesApi.md#listFavorites) | **GET** /people/{personId}/favorites | List favorites
GroupsApi | [**createGroup**](docs/GroupsApi.md#createGroup) | **POST** /groups | Create a group
GroupsApi | [**createGroupMembership**](docs/GroupsApi.md#createGroupMembership) | **POST** /groups/{groupId}/members | Create a group membership
GroupsApi | [**deleteGroup**](docs/GroupsApi.md#deleteGroup) | **DELETE** /groups/{groupId} | Delete a group
GroupsApi | [**deleteGroupMembership**](docs/GroupsApi.md#deleteGroupMembership) | **DELETE** /groups/{groupId}/members/{groupMemberId} | Delete a group membership
GroupsApi | [**getGroup**](docs/GroupsApi.md#getGroup) | **GET** /groups/{groupId} | Get group details
GroupsApi | [**listGroupMemberships**](docs/GroupsApi.md#listGroupMemberships) | **GET** /groups/{groupId}/members | List memberships of a group
GroupsApi | [**listGroupMembershipsForPerson**](docs/GroupsApi.md#listGroupMembershipsForPerson) | **GET** /people/{personId}/groups | List group memberships
GroupsApi | [**listGroups**](docs/GroupsApi.md#listGroups) | **GET** /groups | List groups
GroupsApi | [**updateGroup**](docs/GroupsApi.md#updateGroup) | **PUT** /groups/{groupId} | Update group details
NetworksApi | [**getNetwork**](docs/NetworksApi.md#getNetwork) | **GET** /networks/{networkId} | Get a network
NetworksApi | [**getNetworkForPerson**](docs/NetworksApi.md#getNetworkForPerson) | **GET** /people/{personId}/networks/{networkId} | Get network information
NetworksApi | [**listNetworksForPerson**](docs/NetworksApi.md#listNetworksForPerson) | **GET** /people/{personId}/networks | List network membership
NodesApi | [**copyNode**](docs/NodesApi.md#copyNode) | **POST** /nodes/{nodeId}/copy | Copy a node
NodesApi | [**createAssociation**](docs/NodesApi.md#createAssociation) | **POST** /nodes/{nodeId}/targets | Create node association
NodesApi | [**createNode**](docs/NodesApi.md#createNode) | **POST** /nodes/{nodeId}/children | Create a node
NodesApi | [**createSecondaryChildAssociation**](docs/NodesApi.md#createSecondaryChildAssociation) | **POST** /nodes/{nodeId}/secondary-children | Create secondary child
NodesApi | [**deleteAssociation**](docs/NodesApi.md#deleteAssociation) | **DELETE** /nodes/{nodeId}/targets/{targetId} | Delete node association(s)
NodesApi | [**deleteNode**](docs/NodesApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete a node
NodesApi | [**deleteSecondaryChildAssociation**](docs/NodesApi.md#deleteSecondaryChildAssociation) | **DELETE** /nodes/{nodeId}/secondary-children/{childId} | Delete secondary child or children
NodesApi | [**getNode**](docs/NodesApi.md#getNode) | **GET** /nodes/{nodeId} | Get a node
NodesApi | [**getNodeContent**](docs/NodesApi.md#getNodeContent) | **GET** /nodes/{nodeId}/content | Get node content
NodesApi | [**listNodeChildren**](docs/NodesApi.md#listNodeChildren) | **GET** /nodes/{nodeId}/children | List node children
NodesApi | [**listParents**](docs/NodesApi.md#listParents) | **GET** /nodes/{nodeId}/parents | List parents
NodesApi | [**listSecondaryChildren**](docs/NodesApi.md#listSecondaryChildren) | **GET** /nodes/{nodeId}/secondary-children | List secondary children
NodesApi | [**listSourceAssociations**](docs/NodesApi.md#listSourceAssociations) | **GET** /nodes/{nodeId}/sources | List source associations
NodesApi | [**listTargetAssociations**](docs/NodesApi.md#listTargetAssociations) | **GET** /nodes/{nodeId}/targets | List target associations
NodesApi | [**lockNode**](docs/NodesApi.md#lockNode) | **POST** /nodes/{nodeId}/lock | Lock a node
NodesApi | [**moveNode**](docs/NodesApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
NodesApi | [**unlockNode**](docs/NodesApi.md#unlockNode) | **POST** /nodes/{nodeId}/unlock | Unlock a node
NodesApi | [**updateNode**](docs/NodesApi.md#updateNode) | **PUT** /nodes/{nodeId} | Update a node
NodesApi | [**updateNodeContent**](docs/NodesApi.md#updateNodeContent) | **PUT** /nodes/{nodeId}/content | Update node content
PeopleApi | [**createPerson**](docs/PeopleApi.md#createPerson) | **POST** /people | Create person
PeopleApi | [**deleteAvatarImage**](docs/PeopleApi.md#deleteAvatarImage) | **DELETE** /people/{personId}/avatar | Delete avatar image
PeopleApi | [**getAvatarImage**](docs/PeopleApi.md#getAvatarImage) | **GET** /people/{personId}/avatar | Get avatar image
PeopleApi | [**getPerson**](docs/PeopleApi.md#getPerson) | **GET** /people/{personId} | Get a person
PeopleApi | [**listPeople**](docs/PeopleApi.md#listPeople) | **GET** /people | List people
PeopleApi | [**requestPasswordReset**](docs/PeopleApi.md#requestPasswordReset) | **POST** /people/{personId}/request-password-reset | Request password reset
PeopleApi | [**resetPassword**](docs/PeopleApi.md#resetPassword) | **POST** /people/{personId}/reset-password | Reset password
PeopleApi | [**updateAvatarImage**](docs/PeopleApi.md#updateAvatarImage) | **PUT** /people/{personId}/avatar | Update avatar image
PeopleApi | [**updatePerson**](docs/PeopleApi.md#updatePerson) | **PUT** /people/{personId} | Update person
PreferencesApi | [**getPreference**](docs/PreferencesApi.md#getPreference) | **GET** /people/{personId}/preferences/{preferenceName} | Get a preference
PreferencesApi | [**listPreferences**](docs/PreferencesApi.md#listPreferences) | **GET** /people/{personId}/preferences | List preferences
ProbesApi | [**getProbe**](docs/ProbesApi.md#getProbe) | **GET** /probes/{probeId} | Check readiness and liveness of the repository
QueriesApi | [**findNodes**](docs/QueriesApi.md#findNodes) | **GET** /queries/nodes | Find nodes
QueriesApi | [**findPeople**](docs/QueriesApi.md#findPeople) | **GET** /queries/people | Find people
QueriesApi | [**findSites**](docs/QueriesApi.md#findSites) | **GET** /queries/sites | Find sites
RatingsApi | [**createRating**](docs/RatingsApi.md#createRating) | **POST** /nodes/{nodeId}/ratings | Create a rating
RatingsApi | [**deleteRating**](docs/RatingsApi.md#deleteRating) | **DELETE** /nodes/{nodeId}/ratings/{ratingId} | Delete a rating
RatingsApi | [**getRating**](docs/RatingsApi.md#getRating) | **GET** /nodes/{nodeId}/ratings/{ratingId} | Get a rating
RatingsApi | [**listRatings**](docs/RatingsApi.md#listRatings) | **GET** /nodes/{nodeId}/ratings | List ratings
RenditionsApi | [**createRendition**](docs/RenditionsApi.md#createRendition) | **POST** /nodes/{nodeId}/renditions | Create rendition
RenditionsApi | [**getRendition**](docs/RenditionsApi.md#getRendition) | **GET** /nodes/{nodeId}/renditions/{renditionId} | Get rendition information
RenditionsApi | [**getRenditionContent**](docs/RenditionsApi.md#getRenditionContent) | **GET** /nodes/{nodeId}/renditions/{renditionId}/content | Get rendition content
RenditionsApi | [**listRenditions**](docs/RenditionsApi.md#listRenditions) | **GET** /nodes/{nodeId}/renditions | List renditions
SharedlinksApi | [**createSharedLink**](docs/SharedlinksApi.md#createSharedLink) | **POST** /shared-links | Create a shared link to a file
SharedlinksApi | [**deleteSharedLink**](docs/SharedlinksApi.md#deleteSharedLink) | **DELETE** /shared-links/{sharedId} | Deletes a shared link
SharedlinksApi | [**emailSharedLink**](docs/SharedlinksApi.md#emailSharedLink) | **POST** /shared-links/{sharedId}/email | Email shared link
SharedlinksApi | [**getSharedLink**](docs/SharedlinksApi.md#getSharedLink) | **GET** /shared-links/{sharedId} | Get a shared link
SharedlinksApi | [**getSharedLinkContent**](docs/SharedlinksApi.md#getSharedLinkContent) | **GET** /shared-links/{sharedId}/content | Get shared link content
SharedlinksApi | [**getSharedLinkRendition**](docs/SharedlinksApi.md#getSharedLinkRendition) | **GET** /shared-links/{sharedId}/renditions/{renditionId} | Get shared link rendition information
SharedlinksApi | [**getSharedLinkRenditionContent**](docs/SharedlinksApi.md#getSharedLinkRenditionContent) | **GET** /shared-links/{sharedId}/renditions/{renditionId}/content | Get shared link rendition content
SharedlinksApi | [**listSharedLinkRenditions**](docs/SharedlinksApi.md#listSharedLinkRenditions) | **GET** /shared-links/{sharedId}/renditions | List renditions for a shared link
SharedlinksApi | [**listSharedLinks**](docs/SharedlinksApi.md#listSharedLinks) | **GET** /shared-links | List shared links
SitesApi | [**approveSiteMembershipRequest**](docs/SitesApi.md#approveSiteMembershipRequest) | **POST** /sites/{siteId}/site-membership-requests/{inviteeId}/approve | Approve a site membership request
SitesApi | [**createSite**](docs/SitesApi.md#createSite) | **POST** /sites | Create a site
SitesApi | [**createSiteMembership**](docs/SitesApi.md#createSiteMembership) | **POST** /sites/{siteId}/members | Create a site membership
SitesApi | [**createSiteMembershipRequestForPerson**](docs/SitesApi.md#createSiteMembershipRequestForPerson) | **POST** /people/{personId}/site-membership-requests | Create a site membership request
SitesApi | [**deleteSite**](docs/SitesApi.md#deleteSite) | **DELETE** /sites/{siteId} | Delete a site
SitesApi | [**deleteSiteMembership**](docs/SitesApi.md#deleteSiteMembership) | **DELETE** /sites/{siteId}/members/{personId} | Delete a site membership
SitesApi | [**deleteSiteMembershipForPerson**](docs/SitesApi.md#deleteSiteMembershipForPerson) | **DELETE** /people/{personId}/sites/{siteId} | Delete a site membership
SitesApi | [**deleteSiteMembershipRequestForPerson**](docs/SitesApi.md#deleteSiteMembershipRequestForPerson) | **DELETE** /people/{personId}/site-membership-requests/{siteId} | Delete a site membership request
SitesApi | [**getSite**](docs/SitesApi.md#getSite) | **GET** /sites/{siteId} | Get a site
SitesApi | [**getSiteContainer**](docs/SitesApi.md#getSiteContainer) | **GET** /sites/{siteId}/containers/{containerId} | Get a site container
SitesApi | [**getSiteMembership**](docs/SitesApi.md#getSiteMembership) | **GET** /sites/{siteId}/members/{personId} | Get a site membership
SitesApi | [**getSiteMembershipForPerson**](docs/SitesApi.md#getSiteMembershipForPerson) | **GET** /people/{personId}/sites/{siteId} | Get a site membership
SitesApi | [**getSiteMembershipRequestForPerson**](docs/SitesApi.md#getSiteMembershipRequestForPerson) | **GET** /people/{personId}/site-membership-requests/{siteId} | Get a site membership request
SitesApi | [**getSiteMembershipRequests**](docs/SitesApi.md#getSiteMembershipRequests) | **GET** /site-membership-requests | Get site membership requests
SitesApi | [**listSiteContainers**](docs/SitesApi.md#listSiteContainers) | **GET** /sites/{siteId}/containers | List site containers
SitesApi | [**listSiteMembershipRequestsForPerson**](docs/SitesApi.md#listSiteMembershipRequestsForPerson) | **GET** /people/{personId}/site-membership-requests | List site membership requests
SitesApi | [**listSiteMemberships**](docs/SitesApi.md#listSiteMemberships) | **GET** /sites/{siteId}/members | List site memberships
SitesApi | [**listSiteMembershipsForPerson**](docs/SitesApi.md#listSiteMembershipsForPerson) | **GET** /people/{personId}/sites | List site memberships
SitesApi | [**listSites**](docs/SitesApi.md#listSites) | **GET** /sites | List sites
SitesApi | [**rejectSiteMembershipRequest**](docs/SitesApi.md#rejectSiteMembershipRequest) | **POST** /sites/{siteId}/site-membership-requests/{inviteeId}/reject | Reject a site membership request
SitesApi | [**updateSite**](docs/SitesApi.md#updateSite) | **PUT** /sites/{siteId} | Update a site
SitesApi | [**updateSiteMembership**](docs/SitesApi.md#updateSiteMembership) | **PUT** /sites/{siteId}/members/{personId} | Update a site membership
SitesApi | [**updateSiteMembershipRequestForPerson**](docs/SitesApi.md#updateSiteMembershipRequestForPerson) | **PUT** /people/{personId}/site-membership-requests/{siteId} | Update a site membership request
TagsApi | [**createTagForNode**](docs/TagsApi.md#createTagForNode) | **POST** /nodes/{nodeId}/tags | Create a tag for a node
TagsApi | [**deleteTagFromNode**](docs/TagsApi.md#deleteTagFromNode) | **DELETE** /nodes/{nodeId}/tags/{tagId} | Delete a tag from a node
TagsApi | [**getTag**](docs/TagsApi.md#getTag) | **GET** /tags/{tagId} | Get a tag
TagsApi | [**listTags**](docs/TagsApi.md#listTags) | **GET** /tags | List tags
TagsApi | [**listTagsForNode**](docs/TagsApi.md#listTagsForNode) | **GET** /nodes/{nodeId}/tags | List tags for a node
TagsApi | [**updateTag**](docs/TagsApi.md#updateTag) | **PUT** /tags/{tagId} | Update a tag
TrashcanApi | [**deleteDeletedNode**](docs/TrashcanApi.md#deleteDeletedNode) | **DELETE** /deleted-nodes/{nodeId} | Permanently delete a deleted node
TrashcanApi | [**getArchivedNodeRendition**](docs/TrashcanApi.md#getArchivedNodeRendition) | **GET** /deleted-nodes/{nodeId}/renditions/{renditionId} | Get rendition information for a deleted node
TrashcanApi | [**getArchivedNodeRenditionContent**](docs/TrashcanApi.md#getArchivedNodeRenditionContent) | **GET** /deleted-nodes/{nodeId}/renditions/{renditionId}/content | Get rendition content of a deleted node
TrashcanApi | [**getDeletedNode**](docs/TrashcanApi.md#getDeletedNode) | **GET** /deleted-nodes/{nodeId} | Get a deleted node
TrashcanApi | [**getDeletedNodeContent**](docs/TrashcanApi.md#getDeletedNodeContent) | **GET** /deleted-nodes/{nodeId}/content | Get deleted node content
TrashcanApi | [**listDeletedNodeRenditions**](docs/TrashcanApi.md#listDeletedNodeRenditions) | **GET** /deleted-nodes/{nodeId}/renditions | List renditions for a deleted node
TrashcanApi | [**listDeletedNodes**](docs/TrashcanApi.md#listDeletedNodes) | **GET** /deleted-nodes | List deleted nodes
TrashcanApi | [**restoreDeletedNode**](docs/TrashcanApi.md#restoreDeletedNode) | **POST** /deleted-nodes/{nodeId}/restore | Restore a deleted node
VersionsApi | [**deleteVersion**](docs/VersionsApi.md#deleteVersion) | **DELETE** /nodes/{nodeId}/versions/{versionId} | Delete a version
VersionsApi | [**getVersion**](docs/VersionsApi.md#getVersion) | **GET** /nodes/{nodeId}/versions/{versionId} | Get version information
VersionsApi | [**getVersionContent**](docs/VersionsApi.md#getVersionContent) | **GET** /nodes/{nodeId}/versions/{versionId}/content | Get version content
VersionsApi | [**listVersionHistory**](docs/VersionsApi.md#listVersionHistory) | **GET** /nodes/{nodeId}/versions | List version history
VersionsApi | [**revertVersion**](docs/VersionsApi.md#revertVersion) | **POST** /nodes/{nodeId}/versions/{versionId}/revert | Revert a version

## Models

- [ActionBodyExec](docs/ActionBodyExec.md)
- [ActionDefinition](docs/ActionDefinition.md)
- [ActionDefinitionEntry](docs/ActionDefinitionEntry.md)
- [ActionDefinitionList](docs/ActionDefinitionList.md)
- [ActionDefinitionListList](docs/ActionDefinitionListList.md)
- [ActionExecResult](docs/ActionExecResult.md)
- [ActionExecResultEntry](docs/ActionExecResultEntry.md)
- [ActionParameterDefinition](docs/ActionParameterDefinition.md)
- [Activity](docs/Activity.md)
- [ActivityEntry](docs/ActivityEntry.md)
- [ActivityPaging](docs/ActivityPaging.md)
- [ActivityPagingList](docs/ActivityPagingList.md)
- [Association](docs/Association.md)
- [AssociationBody](docs/AssociationBody.md)
- [AssociationEntry](docs/AssociationEntry.md)
- [AssociationInfo](docs/AssociationInfo.md)
- [AuditApp](docs/AuditApp.md)
- [AuditAppEntry](docs/AuditAppEntry.md)
- [AuditAppPaging](docs/AuditAppPaging.md)
- [AuditAppPagingList](docs/AuditAppPagingList.md)
- [AuditBodyUpdate](docs/AuditBodyUpdate.md)
- [AuditEntry](docs/AuditEntry.md)
- [AuditEntryEntry](docs/AuditEntryEntry.md)
- [AuditEntryPaging](docs/AuditEntryPaging.md)
- [AuditEntryPagingList](docs/AuditEntryPagingList.md)
- [Capabilities](docs/Capabilities.md)
- [ChildAssociation](docs/ChildAssociation.md)
- [ChildAssociationBody](docs/ChildAssociationBody.md)
- [ChildAssociationEntry](docs/ChildAssociationEntry.md)
- [ChildAssociationInfo](docs/ChildAssociationInfo.md)
- [ClientBody](docs/ClientBody.md)
- [Comment](docs/Comment.md)
- [CommentBody](docs/CommentBody.md)
- [CommentEntry](docs/CommentEntry.md)
- [CommentPaging](docs/CommentPaging.md)
- [CommentPagingList](docs/CommentPagingList.md)
- [Company](docs/Company.md)
- [ContentInfo](docs/ContentInfo.md)
- [DeletedNodeBodyRestore](docs/DeletedNodeBodyRestore.md)
- [DeletedNodeEntry](docs/DeletedNodeEntry.md)
- [DeletedNodesPaging](docs/DeletedNodesPaging.md)
- [DeletedNodesPagingList](docs/DeletedNodesPagingList.md)
- [Download](docs/Download.md)
- [DownloadBodyCreate](docs/DownloadBodyCreate.md)
- [DownloadEntry](docs/DownloadEntry.md)
- [ErrorError](docs/ErrorError.md)
- [Favorite](docs/Favorite.md)
- [FavoriteBodyCreate](docs/FavoriteBodyCreate.md)
- [FavoriteEntry](docs/FavoriteEntry.md)
- [FavoritePaging](docs/FavoritePaging.md)
- [FavoritePagingList](docs/FavoritePagingList.md)
- [FavoriteSite](docs/FavoriteSite.md)
- [FavoriteSiteBodyCreate](docs/FavoriteSiteBodyCreate.md)
- [FavoriteSiteEntry](docs/FavoriteSiteEntry.md)
- [Group](docs/Group.md)
- [GroupBodyCreate](docs/GroupBodyCreate.md)
- [GroupBodyUpdate](docs/GroupBodyUpdate.md)
- [GroupEntry](docs/GroupEntry.md)
- [GroupMember](docs/GroupMember.md)
- [GroupMemberEntry](docs/GroupMemberEntry.md)
- [GroupMemberPaging](docs/GroupMemberPaging.md)
- [GroupMemberPagingList](docs/GroupMemberPagingList.md)
- [GroupMembershipBodyCreate](docs/GroupMembershipBodyCreate.md)
- [GroupPaging](docs/GroupPaging.md)
- [GroupPagingList](docs/GroupPagingList.md)
- [ModelError](docs/ModelError.md)
- [NetworkQuota](docs/NetworkQuota.md)
- [Node](docs/Node.md)
- [NodeAssociationEntry](docs/NodeAssociationEntry.md)
- [NodeAssociationPaging](docs/NodeAssociationPaging.md)
- [NodeAssociationPagingList](docs/NodeAssociationPagingList.md)
- [NodeBodyCopy](docs/NodeBodyCopy.md)
- [NodeBodyCreate](docs/NodeBodyCreate.md)
- [NodeBodyCreateAssociation](docs/NodeBodyCreateAssociation.md)
- [NodeBodyLock](docs/NodeBodyLock.md)
- [NodeBodyMove](docs/NodeBodyMove.md)
- [NodeBodyUpdate](docs/NodeBodyUpdate.md)
- [NodeChildAssociationEntry](docs/NodeChildAssociationEntry.md)
- [NodeChildAssociationPaging](docs/NodeChildAssociationPaging.md)
- [NodeChildAssociationPagingList](docs/NodeChildAssociationPagingList.md)
- [NodeEntry](docs/NodeEntry.md)
- [NodePaging](docs/NodePaging.md)
- [NodePagingList](docs/NodePagingList.md)
- [Pagination](docs/Pagination.md)
- [PasswordResetBody](docs/PasswordResetBody.md)
- [PathElement](docs/PathElement.md)
- [PathInfo](docs/PathInfo.md)
- [PermissionElement](docs/PermissionElement.md)
- [PermissionsBodyUpdate](docs/PermissionsBodyUpdate.md)
- [PermissionsInfo](docs/PermissionsInfo.md)
- [Person](docs/Person.md)
- [PersonBodyCreate](docs/PersonBodyCreate.md)
- [PersonBodyUpdate](docs/PersonBodyUpdate.md)
- [PersonEntry](docs/PersonEntry.md)
- [PersonNetwork](docs/PersonNetwork.md)
- [PersonNetworkEntry](docs/PersonNetworkEntry.md)
- [PersonNetworkPaging](docs/PersonNetworkPaging.md)
- [PersonNetworkPagingList](docs/PersonNetworkPagingList.md)
- [PersonPaging](docs/PersonPaging.md)
- [PersonPagingList](docs/PersonPagingList.md)
- [Preference](docs/Preference.md)
- [PreferenceEntry](docs/PreferenceEntry.md)
- [PreferencePaging](docs/PreferencePaging.md)
- [PreferencePagingList](docs/PreferencePagingList.md)
- [ProbeEntry](docs/ProbeEntry.md)
- [ProbeEntryEntry](docs/ProbeEntryEntry.md)
- [Rating](docs/Rating.md)
- [RatingAggregate](docs/RatingAggregate.md)
- [RatingBody](docs/RatingBody.md)
- [RatingEntry](docs/RatingEntry.md)
- [RatingPaging](docs/RatingPaging.md)
- [RatingPagingList](docs/RatingPagingList.md)
- [Rendition](docs/Rendition.md)
- [RenditionBodyCreate](docs/RenditionBodyCreate.md)
- [RenditionEntry](docs/RenditionEntry.md)
- [RenditionPaging](docs/RenditionPaging.md)
- [RenditionPagingList](docs/RenditionPagingList.md)
- [RevertBody](docs/RevertBody.md)
- [SharedLink](docs/SharedLink.md)
- [SharedLinkBodyCreate](docs/SharedLinkBodyCreate.md)
- [SharedLinkBodyEmail](docs/SharedLinkBodyEmail.md)
- [SharedLinkEntry](docs/SharedLinkEntry.md)
- [SharedLinkPaging](docs/SharedLinkPaging.md)
- [SharedLinkPagingList](docs/SharedLinkPagingList.md)
- [Site](docs/Site.md)
- [SiteBodyCreate](docs/SiteBodyCreate.md)
- [SiteBodyUpdate](docs/SiteBodyUpdate.md)
- [SiteContainer](docs/SiteContainer.md)
- [SiteContainerEntry](docs/SiteContainerEntry.md)
- [SiteContainerPaging](docs/SiteContainerPaging.md)
- [SiteContainerPagingList](docs/SiteContainerPagingList.md)
- [SiteEntry](docs/SiteEntry.md)
- [SiteMember](docs/SiteMember.md)
- [SiteMemberEntry](docs/SiteMemberEntry.md)
- [SiteMemberPaging](docs/SiteMemberPaging.md)
- [SiteMemberPagingList](docs/SiteMemberPagingList.md)
- [SiteMembershipApprovalBody](docs/SiteMembershipApprovalBody.md)
- [SiteMembershipBodyCreate](docs/SiteMembershipBodyCreate.md)
- [SiteMembershipBodyUpdate](docs/SiteMembershipBodyUpdate.md)
- [SiteMembershipRejectionBody](docs/SiteMembershipRejectionBody.md)
- [SiteMembershipRequest](docs/SiteMembershipRequest.md)
- [SiteMembershipRequestBodyCreate](docs/SiteMembershipRequestBodyCreate.md)
- [SiteMembershipRequestBodyUpdate](docs/SiteMembershipRequestBodyUpdate.md)
- [SiteMembershipRequestEntry](docs/SiteMembershipRequestEntry.md)
- [SiteMembershipRequestPaging](docs/SiteMembershipRequestPaging.md)
- [SiteMembershipRequestPagingList](docs/SiteMembershipRequestPagingList.md)
- [SiteMembershipRequestWithPerson](docs/SiteMembershipRequestWithPerson.md)
- [SiteMembershipRequestWithPersonEntry](docs/SiteMembershipRequestWithPersonEntry.md)
- [SiteMembershipRequestWithPersonPaging](docs/SiteMembershipRequestWithPersonPaging.md)
- [SiteMembershipRequestWithPersonPagingList](docs/SiteMembershipRequestWithPersonPagingList.md)
- [SitePaging](docs/SitePaging.md)
- [SitePagingList](docs/SitePagingList.md)
- [SiteRole](docs/SiteRole.md)
- [SiteRoleEntry](docs/SiteRoleEntry.md)
- [SiteRolePaging](docs/SiteRolePaging.md)
- [SiteRolePagingList](docs/SiteRolePagingList.md)
- [Tag](docs/Tag.md)
- [TagBody](docs/TagBody.md)
- [TagEntry](docs/TagEntry.md)
- [TagPaging](docs/TagPaging.md)
- [TagPagingList](docs/TagPagingList.md)
- [UserInfo](docs/UserInfo.md)
- [Version](docs/Version.md)
- [VersionEntry](docs/VersionEntry.md)
- [VersionPaging](docs/VersionPaging.md)
- [VersionPagingList](docs/VersionPagingList.md)
- [DeletedNode](docs/DeletedNode.md)
- [NodeAssociation](docs/NodeAssociation.md)
- [NodeChildAssociation](docs/NodeChildAssociation.md)
