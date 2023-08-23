/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
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

import { DeclassificationDate } from '../model/declassificationDate';
import { BaseApi } from './base.api';
import { DateAlfresco } from '../../../../src/api/content-custom-api/model/dateAlfresco';
import { throwIfNotDefined } from '../../../assert';

/**
* DefaultClassificationValuesApi service.
* @module DefaultClassificationValuesApi
*/
export class DefaultClassificationValuesApi extends BaseApi {
    /**
    * Calculate the default declassification date
    *
    * Calculates the default declassification date for **nodeId** based on the properties of the node and the current declassification time frame.
    *
    * @param nodeId The identifier of a node.
    * @return Promise<DeclassificationDate>
    */
    calculateDefaultDeclassificationDate(nodeId: string): Promise<DeclassificationDate> {
        throwIfNotDefined(nodeId, 'nodeId');

        const pathParams = {
            nodeId
        };

        return this.post({
            path: '/default-classification-values/{nodeId}/calculate-declassification-date',
            pathParams,
            returnType: DateAlfresco
        });
    }
}
