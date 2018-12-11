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

import { ContentInfo } from '../../content-rest-api/model/contentInfo';
import { DateAlfresco } from '../../content-rest-api/model/dateAlfresco';
import { PathInfo } from '../../content-rest-api/model/pathInfo';
import { SearchEntry } from './searchEntry';
import { UserInfo } from '../../content-rest-api/model/userInfo';

export class ResultNode {
    id: string;
    /**
     * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.
The character . must not be used at the end of the name.

     */
    name: string;
    nodeType: string;
    isFolder: boolean;
    isFile: boolean;
    isLocked?: boolean;
    modifiedAt: DateAlfresco;
    modifiedByUser: UserInfo;
    createdAt: DateAlfresco;
    createdByUser: UserInfo;
    parentId?: string;
    isLink?: boolean;
    content?: ContentInfo;
    aspectNames?: Array<string>;
    properties?: any;
    allowableOperations?: Array<string>;
    path?: PathInfo;
    search?: SearchEntry;
    archivedByUser?: UserInfo;
    archivedAt?: DateAlfresco;
    versionLabel?: string;
    versionComment?: string;

    constructor(input?: any) {

        Object.assign(this, input);
        this.modifiedAt = new DateAlfresco(input.modifiedAt);
        this.modifiedByUser = new UserInfo(input.modifiedByUser);
        this.createdAt = new DateAlfresco(input.createdAt);
        this.createdByUser = new UserInfo(input.createdByUser);
        this.content = new ContentInfo(input.content);
        this.path = new PathInfo(input.path);
        this.search = new SearchEntry(input.search);
        this.archivedByUser = new UserInfo(input.archivedByUser);
        this.archivedAt = new DateAlfresco(input.archivedAt);
    }

}
