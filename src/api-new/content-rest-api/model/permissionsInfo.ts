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

import { PermissionElement } from './permissionElement';

export class PermissionsInfo {
    isInheritanceEnabled?: boolean;
    inherited?: Array<PermissionElement>;
    locallySet?: Array<PermissionElement>;
    settable?: Array<string>;

    constructor(input?: any) {

        Object.assign(this, input);
        this.inherited = input.inherited.map((item: any) => {
            return new Array<PermissionElement>(item);
        });
        this.locallySet = input.locallySet.map((item: any) => {
            return new Array<PermissionElement>(item);
        });
    }

}
