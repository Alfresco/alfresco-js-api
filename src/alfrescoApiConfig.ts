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

import { Oauth2Config } from './authentication/oauth2Config';

export class AlfrescoApiConfig {
    ticket?: string;
    hostEcm?: string;
    hostBpm?: string;
    hostOauth2?: string;
    authType?: string;
    oauth2?: Oauth2Config;
    contextRoot?: string;
    contextRootBpm?: string;
    domainPrefix?: string;
    provider?: string;
    ticketEcm?: string;
    ticketBpm?: string;
    accessToken?: string;
    disableCsrf?: boolean;
    withCredentials?: boolean;
}
