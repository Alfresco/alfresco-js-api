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

import { DateAlfresco } from './dateAlfresco';
import { Person } from './person';

export class Comment {
    id: string;
    content: string;
    createdBy: Person;
    createdAt: DateAlfresco;
    edited: boolean;
    modifiedBy: Person;
    modifiedAt: DateAlfresco;
    canEdit: boolean;
    canDelete: boolean;

    constructor(input?: any) {

        Object.assign(this, input);
        this.createdBy = new Person(input.createdBy);
        this.createdAt = new DateAlfresco(input.createdAt);
        this.modifiedBy = new Person(input.modifiedBy);
        this.modifiedAt = new DateAlfresco(input.modifiedAt);
    }

}
