# Activities Api

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

| Method                                              | HTTP request                          | Description     |
|-----------------------------------------------------|---------------------------------------|-----------------|
| [listActivitiesForPerson](#listActivitiesForPerson) | **GET** /people/{personId}/activities | List activities |

## listActivitiesForPerson

List activities

You can use the `-me-` string in place of `<personId>` to specify the currently authenticated user.

**Parameters**

| Name           | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes            |
|----------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| **personId**   | string   | The identifier of a person.                                                                                                                                                                                                                                                                                                                                                                                                             |                  |
| opts.skipCount | number   | The number of entities that exist in the collection before those included in this list. If not supplied then the default value is 0.                                                                                                                                                                                                                                                                                                    | [default to 0]   |
| opts.maxItems  | number   | The maximum number of items to return in the list. If not supplied then the default value is 100.                                                                                                                                                                                                                                                                                                                                       | [default to 100] |
| opts.who       | string   | A filter to include the user's activities only me, other user's activities only others'                                                                                                                                                                                                                                                                                                                                                 |                  |
| opts.siteId    | string   | Include only activity feed entries relating to this site.                                                                                                                                                                                                                                                                                                                                                                               |                  | 
| opts.fields    | string[] | A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. |                  |

**Return type**: [ActivityPaging](ActivityPaging.md)

**Example**x

```javascript
import { AlfrescoApi, ActivitiesApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi(/*...*/);
const activitiesApi = new ActivitiesApi(alfrescoApi);

const personId = '<personId>';
const opts = {};

activitiesApi.listActivitiesForPerson(personId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
});
```