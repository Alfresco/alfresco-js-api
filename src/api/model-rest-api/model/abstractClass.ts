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

import { Property } from '../../content-rest-api/model/property';
import { Association } from './association';
import { Model } from './model';

export class AbstractClass {
    id: string;
    title: string;
    description?: string;
    parentId?: string;
    properties?: Property[];
    isContainer?: boolean;
    archive?: boolean;
    includedInSupertypeQuery?: boolean;
    mandatoryAspects?: string[];
    associations?: Association[];
    model?: Model;

    constructor(input?: any) {
        if (input) {
            Object.assign(this, input);
            if (input.properties) {
                this.properties = input.properties.map((item: any) => {
                    return new Property(item);
                });
            }
            if (input.associations) {
                this.associations = input.associations.map((item: any) => {
                    return new Association(item);
                });
            }
            this.model = input.model ? new Model(input.model) : undefined;
        }
    }
}
