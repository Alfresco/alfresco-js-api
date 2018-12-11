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
import { GroupRepresentation } from './groupRepresentation';
import { LightAppRepresentation } from './lightAppRepresentation';

export class UserRepresentation {
    apps?: Array<LightAppRepresentation>;
    capabilities?: Array<string>;
    company?: string;
    created?: DateAlfresco;
    email?: string;
    externalId?: string;
    firstName?: string;
    fullname?: string;
    groups?: Array<GroupRepresentation>;
    id?: number;
    lastName?: string;
    lastUpdate?: DateAlfresco;
    latestSyncTimeStamp?: DateAlfresco;
    password?: string;
    pictureId?: number;
    primaryGroup?: GroupRepresentation;
    status?: string;
    tenantId?: number;
    tenantName?: string;
    tenantPictureId?: number;
    type?: string;

    constructor(input?: any) {

        Object.assign(this, input);
        this.apps = input.apps.map((item: any) => {
            return new Array<LightAppRepresentation>(item);
        });
        this.created = new DateAlfresco(input.created);
        this.groups = input.groups.map((item: any) => {
            return new Array<GroupRepresentation>(item);
        });
        this.lastUpdate = new DateAlfresco(input.lastUpdate);
        this.latestSyncTimeStamp = new DateAlfresco(input.latestSyncTimeStamp);
        this.primaryGroup = new GroupRepresentation(input.primaryGroup);
    }

}
