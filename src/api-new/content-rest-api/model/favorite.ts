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

import { DateAlfresco } from '../../content-rest-api/model/dateAlfresco';

/**
 * A favorite describes an Alfresco entity that a person has marked as a favorite.
The target can be a site, file or folder.

 */
export class Favorite {
    /**
     * The guid of the object that is a favorite.
     */
    targetGuid: string;
    /**
     * The time the object was made a favorite.
     */
    createdAt?: DateAlfresco;
    target: any;

    constructor(input?: any) {

        if (input) {
            Object.assign(this, input);
            this.createdAt = input.createdAt ? new DateAlfresco(input.createdAt) : undefined;
        }
    }

}
