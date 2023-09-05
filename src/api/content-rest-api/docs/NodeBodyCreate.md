# NodeBodyCreate

**Properties**

| Name              | Type                                                    | Description                                                                                                                                                  |
|-------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **name**          | string                                                  | The name must not contain spaces or the following special characters: `* \" < > \\ / ? :` and `\|`. The character . must not be used at the end of the name. |
| **nodeType**      | string                                                  |                                                                                                                                                              |
| aspectNames       | string[]                                                |                                                                                                                                                              |
| properties        | any                                                     |                                                                                                                                                              |
| permissions       | [PermissionsBody](PermissionsBody.md)                   |                                                                                                                                                              |
| definition        | [Definition](Definition.md)                             |                                                                                                                                                              |
| relativePath      | string                                                  |                                                                                                                                                              |
| association       | [NodeBodyCreateAssociation](#NodeBodyCreateAssociation) |                                                                                                                                                              |
| secondaryChildren | [ChildAssociationBody[]](ChildAssociationBody.md)       |                                                                                                                                                              |
| targets           | [AssociationBody[]](AssociationBody.md)                 |                                                                                                                                                              |

# NodeBodyCreateAssociation

**Properties**

| Name      | Type   |
|-----------|--------|
| assocType | string |



