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
import { UserInfo } from '../../content-rest-api/model/userInfo';

export class Record {
    id: string;
    parentId: string;
    /**
     * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.
The character . must not be used at the end of the name.

     */
    name: string;
    nodeType: string;
    /**
     * Present only for record nodes. Indicates if the record is completed
     */
    isCompleted?: boolean;
    modifiedAt: DateAlfresco;
    modifiedByUser: UserInfo;
    createdAt: DateAlfresco;
    createdByUser: UserInfo;
    aspectNames?: string[];
    properties?: any;
    allowableOperations?: string[];
    content?: ContentInfo;
    path?: PathInfo;

    constructor(input?: any) {

        Object.assign(this, input);
        this.modifiedAt = input.modifiedAt ? new DateAlfresco(input.modifiedAt) : undefined;
        this.modifiedByUser = input.modifiedByUser ? new UserInfo(input.modifiedByUser) : undefined;
        this.createdAt = input.createdAt ? new DateAlfresco(input.createdAt) : undefined;
        this.createdByUser = input.createdByUser ? new UserInfo(input.createdByUser) : undefined;
        this.content = input.content ? new ContentInfo(input.content) : undefined;
        this.path = input.path ? new PathInfo(input.path) : undefined;
    }

}
