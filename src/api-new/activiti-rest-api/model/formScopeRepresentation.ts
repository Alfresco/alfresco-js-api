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

import { FormFieldRepresentation } from './formFieldRepresentation';
import { FormOutcomeRepresentation } from './formOutcomeRepresentation';

export class FormScopeRepresentation {
    description?: string;
    fieldVariables?: Array<FormFieldRepresentation>;
    fields?: Array<FormFieldRepresentation>;
    id?: number;
    name?: string;
    outcomes?: Array<FormOutcomeRepresentation>;

    constructor(input?: any) {

        Object.assign(this, input);
        this.fieldVariables = input.fieldVariables.map((item: any) => {
            return new Array<FormFieldRepresentation>(item);
        });
        this.fields = input.fields.map((item: any) => {
            return new Array<FormFieldRepresentation>(item);
        });
        this.outcomes = input.outcomes.map((item: any) => {
            return new Array<FormOutcomeRepresentation>(item);
        });
    }

}
