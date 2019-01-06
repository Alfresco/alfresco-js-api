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

import { ClassificationGuideInTopic } from './classificationGuideInTopic';
import { DateAlfresco } from '../../content-rest-api/model/dateAlfresco';
import { Instruction } from './instruction';
import { Path } from './path';

export class Topic {
    id: string;
    name: string;
    description?: string;
    /**
     * Flag indicating whether the topic has an instruction or not.
     */
    hasInstruction: boolean;
    instruction?: Instruction;
    createdAt: DateAlfresco;
    /**
     * Flag indicating whether the topic has subtopics. This field is only included when requested.
     */
    hasSubtopics?: boolean;
    path?: Path;
    classificationGuide?: ClassificationGuideInTopic;

    constructor(input?: any) {

        if (input) {
            Object.assign(this, input);
            this.instruction = input.instruction ? new Instruction(input.instruction) : undefined;
            this.createdAt = input.createdAt ? new DateAlfresco(input.createdAt) : undefined;
            this.path = input.path ? new Path(input.path) : undefined;
            this.classificationGuide = input.classificationGuide ? new ClassificationGuideInTopic(input.classificationGuide) : undefined;
        }
    }

}
