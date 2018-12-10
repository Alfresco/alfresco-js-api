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

import { Node } from './node';
import { NodeChildAssociationEntry } from './nodeChildAssociationEntry';
import { Pagination } from './pagination';

export class NodeChildAssociationPagingList {
    pagination?: Pagination;
    entries?: Array<NodeChildAssociationEntry>;
    source?: Node;

    constructor(input?: any) {
        Object.assign(this, input);

        this.entries = input.entries.map((item: any) => {
            return new NodeChildAssociationEntry(item);
        });



        //   this.pagination =  new Pagination(input.pagination);
        // this.entries =  new NodeChildAssociationEntry(input.entries);
        //  this.source =  new Node(input.source);

    }
}
