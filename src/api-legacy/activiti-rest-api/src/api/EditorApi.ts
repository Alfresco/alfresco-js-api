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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { FormModelsApi } from '../../../../api/activiti-rest-api/api/formModels.api';
import { FormRepresentation } from '../../../../api/activiti-rest-api/model/formRepresentation';
import { FormSaveRepresentation } from '../../../../api/activiti-rest-api/model/formSaveRepresentation';
import { ValidationErrorRepresentation } from '../../../../api/activiti-rest-api/model/validationErrorRepresentation';
import { ResultListDataRepresentationFormRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationFormRepresentation';
import { ResultListDataRepresentationRuntimeFormRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationRuntimeFormRepresentation';

/**
 * @deprecated 3.0.0
 */
export class EditorApi {

    private formModelsApi: FormModelsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.formModelsApi = new FormModelsApi(alfrescoApi);
    }

    getFormHistory(formId: number, formHistoryId: number): Promise<FormRepresentation> {
        return this.formModelsApi.getFormHistory(formId, formHistoryId);
    }

    getForm(formId: number): Promise<FormRepresentation> {
        return this.formModelsApi.getForm(formId);
    }

    getForms(input: any): Promise<FormRepresentation | ResultListDataRepresentationFormRepresentation | ResultListDataRepresentationRuntimeFormRepresentation> {
        return this.formModelsApi.getForms(input);
    }

    saveForm(formId: number, saveRepresentation: FormSaveRepresentation): Promise<FormRepresentation> {
        return this.formModelsApi.saveForm(formId, saveRepresentation);
    }

    validateModel(formId: number, saveRepresentation: FormSaveRepresentation): Promise<ValidationErrorRepresentation> {
        return this.formModelsApi.validateModel(formId, saveRepresentation);
    }
}
