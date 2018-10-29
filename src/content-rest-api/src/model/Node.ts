/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { ContentInfo } from './ContentInfo';
import { PathInfo } from './PathInfo';
import { PermissionsInfo } from './PermissionsInfo';
import { UserInfo } from './UserInfo';

export class  Node {
    id?: string;
    nodeId?: string;
    name?: string;
    nodeType?: string;
    isFolder?: boolean;
    isFile?: boolean;
    isFavorite?: boolean;
    isLocked?: boolean;
    modifiedAt?: Date;
    modifiedByUser?: UserInfo;
    adddAt?: Date;
    adddByUser?: UserInfo;
    parentId?: string;
    isLink?: boolean;
    content?: ContentInfo;
    aspectNames?: Array<string>;
    properties?: any;
    allowableOperations?: Array<string>;
    path?: PathInfo;
    permissions?: PermissionsInfo;
    createdAt?: Date;
    createdByUser?: UserInfo;
}
