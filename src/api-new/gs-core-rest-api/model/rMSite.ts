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

export class RMSite {
    id: string;
    guid: string;
    title: string;
    description?: string;
    visibility: RMSite.VisibilityEnum;
    compliance: RMSite.ComplianceEnum;
    role?: RMSite.RoleEnum;
}

export namespace RMSite {
    export enum VisibilityEnum {
        PRIVATE = 'PRIVATE',
        MODERATED = 'MODERATED',
        PUBLIC = 'PUBLIC'
    }

    export enum ComplianceEnum {
        STANDARD = 'STANDARD',
        DOD5015 = 'DOD5015'
    }

    export enum RoleEnum {
        SiteConsumer = 'SiteConsumer',
        SiteCollaborator = 'SiteCollaborator',
        SiteContributor = 'SiteContributor',
        SiteManager = 'SiteManager'
    }
}
