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

import { NetworkQuota } from './NetworkQuota';
import { SubscriptionLevelEnum } from './SubscriptionLevelEnum';

export class  PersonNetwork {

    id?: string;
    homeNetwork?: boolean;
    isEnabled?: boolean;
    adddAt?: Date;
    paidNetwork?: boolean;
    subscriptionLevel?: SubscriptionLevelEnum;
    quotas?: Array<NetworkQuota>;
}
