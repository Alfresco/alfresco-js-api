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
import { QueryVariable } from './queryVariable';

export class HistoricProcessInstanceQueryRepresentation {
    excludeSubprocesses?: boolean;
    finished?: boolean;
    finishedAfter?: DateAlfresco;
    finishedBefore?: DateAlfresco;
    includeProcessVariables?: boolean;
    involvedUser?: string;
    order?: string;
    processBusinessKey?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processInstanceId?: string;
    processInstanceIds?: Array<string>;
    size?: number;
    sort?: string;
    start?: number;
    startedAfter?: DateAlfresco;
    startedBefore?: DateAlfresco;
    startedBy?: string;
    superProcessInstanceId?: string;
    tenantId?: string;
    tenantIdLike?: string;
    variables?: Array<QueryVariable>;
    withoutTenantId?: boolean;

    constructor(input?: any) {

        Object.assign(this, input);
        this.finishedAfter = new DateAlfresco(input.finishedAfter);
        this.finishedBefore = new DateAlfresco(input.finishedBefore);
        this.startedAfter = new DateAlfresco(input.startedAfter);
        this.startedBefore = new DateAlfresco(input.startedBefore);
        this.variables = input.variables.map((item: any) => {
            return new Array<QueryVariable>(item);
        });
    }

}
