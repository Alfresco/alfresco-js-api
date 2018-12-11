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

import { LicenseInfo } from './licenseInfo';
import { ModuleInfo } from './moduleInfo';
import { StatusInfo } from './statusInfo';
import { VersionInfo } from './versionInfo';

export class RepositoryInfo {
    edition: string;
    version: VersionInfo;
    status: StatusInfo;
    license?: LicenseInfo;
    modules?: Array<ModuleInfo>;

    constructor(input?: any) {

        Object.assign(this, input);
        this.version = new VersionInfo(input.version);
        this.status = new StatusInfo(input.status);
        this.license = new LicenseInfo(input.license);
        this.modules = input.modules.map((item: any) => {
            return new Array<ModuleInfo>(item);
        });
    }

}
