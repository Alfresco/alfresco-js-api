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

import { ActionDefinition } from './actionDefinition';
import { Pagination } from './pagination';

export class ActionDefinitionListList {
    pagination?: Pagination;
    entries?: Array<ActionDefinition>;

    constructor(input?: any) {

        Object.assign(this, input);
        this.pagination = new Pagination(input.pagination);
        this.entries = input.entries.map((item: any) => {
            return new Array<ActionDefinition>(item);
        });
    }

}
