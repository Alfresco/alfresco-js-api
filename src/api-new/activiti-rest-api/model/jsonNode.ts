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

export class JsonNode {
    array?: boolean;
    bigDecimal?: boolean;
    bigInteger?: boolean;
    binary?: boolean;
    boolean?: boolean;
    containerNode?: boolean;
    double?: boolean;
    float?: boolean;
    floatingPointNumber?: boolean;
    int?: boolean;
    integralNumber?: boolean;
    long?: boolean;
    missingNode?: boolean;
    nodeType?: JsonNode.NodeTypeEnum | string;
    null?: boolean;
    number?: boolean;
    object?: boolean;
    pojo?: boolean;
    short?: boolean;
    textual?: boolean;
    valueNode?: boolean;

    constructor(input?: any) {

        if (input) {
            Object.assign(this, input);
        }
    }

}
export namespace JsonNode {
    export type NodeTypeEnum = 'ARRAY' | 'BINARY' | 'BOOLEAN' | 'MISSING' | 'NULL' | 'NUMBER' | 'OBJECT' | 'POJO' | 'STRING';
    export const NodeTypeEnum = {
        ARRAY: 'ARRAY' as NodeTypeEnum,
        BINARY: 'BINARY' as NodeTypeEnum,
        BOOLEAN: 'BOOLEAN' as NodeTypeEnum,
        MISSING: 'MISSING' as NodeTypeEnum,
        NULL: 'NULL' as NodeTypeEnum,
        NUMBER: 'NUMBER' as NodeTypeEnum,
        OBJECT: 'OBJECT' as NodeTypeEnum,
        POJO: 'POJO' as NodeTypeEnum,
        STRING: 'STRING' as NodeTypeEnum
    };
}
