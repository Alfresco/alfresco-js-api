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

export class DecisionTaskRepresentation {
    activityId?: string;
    activityName?: string;
    decisionExecutionEnded?: DateAlfresco;
    decisionExecutionFailed?: boolean;
    decisionKey?: string;
    decisionName?: string;
    dmnDeploymentId?: number;
    executionId?: string;
    id?: number;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processInstanceId?: string;

    constructor(input?: any) {

        if (input) {
            Object.assign(this, input);
            this.decisionExecutionEnded = input.decisionExecutionEnded ? new DateAlfresco(input.decisionExecutionEnded) : undefined;
        }
    }

}
