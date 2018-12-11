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

import { ContentInfo } from './contentInfo';

export class Rendition {
    id?: string;
    content?: ContentInfo;
    status?: Rendition.StatusEnum;

    constructor(input?: any) {

        Object.assign(this, input);
        this.content = new ContentInfo(input.content);
    }

}
export namespace Rendition {
    export type StatusEnum = 'CREATED' | 'NOT_CREATED';
    export const StatusEnum = {
        CREATED: 'CREATED' as StatusEnum,
        NOTCREATED: 'NOT_CREATED' as StatusEnum
    };
}
