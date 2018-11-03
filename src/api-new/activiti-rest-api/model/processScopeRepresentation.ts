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

import { EntityVariableScopeRepresentation } from './entityVariableScopeRepresentation';
import { FormScopeRepresentation } from './formScopeRepresentation';

import { VariableMappingRepresentation } from './variableMappingRepresentation';
import { VariableScopeRepresentation } from './variableScopeRepresentation';

export class ProcessScopeRepresentation {
    activityIds?: Array<string>;
    activityIdsByCollapsedSubProcessIdMap?: { [key: string]: Array<string>; };
    activityIdsByDecisionTableIdMap?: { [key: string]: Array<string>; };
    activityIdsByFormIdMap?: { [key: string]: Array<string>; };
    activityIdsWithExcludedSubProcess?: Array<string>;
    activitySidsByActivityIdMap?: { [key: string]: string; };
    customStencilVariables?: { [key: string]: Array<VariableScopeRepresentation>; };
    entityVariables?: { [key: string]: Array<EntityVariableScopeRepresentation>; };
    executionVariables?: { [key: string]: Array<VariableScopeRepresentation>; };
    fieldToVariableMappings?: { [key: string]: Array<VariableScopeRepresentation>; };
    forms?: { [key: string]: Array<FormScopeRepresentation>; };
    metadataVariables?: { [key: string]: Array<VariableScopeRepresentation>; };
    modelId?: number;
    processModelType?: number;
    responseVariables?: { [key: string]: Array<VariableScopeRepresentation>; };
    reusableFieldMapping?: { [key: string]: Array<VariableMappingRepresentation>; };
}
