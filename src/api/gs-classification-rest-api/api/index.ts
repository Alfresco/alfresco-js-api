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


export * from './classificationGuides.api';
import { ClassificationGuidesApi } from './classificationGuides.api';

export * from './classificationReasons.api';
import { ClassificationReasonsApi } from './classificationReasons.api';

export * from './declassificationExemptions.api';
import { DeclassificationExemptionsApi } from './declassificationExemptions.api';

export * from './defaultClassificationValues.api';
import { DefaultClassificationValuesApi } from './defaultClassificationValues.api';

export * from './securityControlSettings.api';
import { SecurityControlSettingsApi } from './securityControlSettings.api';

export const GS_CLASSIFICATION_APIS = {
    ClassificationGuidesApi: ClassificationGuidesApi,
    ClassificationReasonsApi: ClassificationReasonsApi,
    DeclassificationExemptionsApi: DeclassificationExemptionsApi,
    DefaultClassificationValuesApi: DefaultClassificationValuesApi,
    SecurityControlSettingsApi: SecurityControlSettingsApi
};
