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

import { QueryVariable } from './queryVariable';

export class HistoricProcessInstanceQueryRepresentation {
    excludeSubprocesses?: boolean;
    finished?: boolean;
    finishedAfter?: Date;
    finishedBefore?: Date;
    includeProcessVariables?: boolean;
    involvedUser?: string;
    order?: string;
    processBusinessKey?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processInstanceId?: string;
    processInstanceIds?: any;
    size?: number;
    sort?: string;
    start?: number;
    startedAfter?: Date;
    startedBefore?: Date;
    startedBy?: string;
    superProcessInstanceId?: string;
    tenantId?: string;
    tenantIdLike?: string;
    variables?: any;
    withoutTenantId?: boolean;
}
