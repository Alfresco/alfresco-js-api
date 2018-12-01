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

export * from './src/api-new/content-rest-api/index';
export * from './src/api-new/discovery-rest-api/index';
export * from './src/api-new/gs-classification-rest-api/index';
export * from './src/api-new/gs-core-rest-api/index';
export * from './src/api-new/auth-rest-api/index';
export * from './src/api-new/activiti-rest-api/index';

export { AlfrescoContent } from './src/alfrescoContent';
export { AlfrescoUpload } from './src/api/alfrescoUpload';
export { EcmAuth } from './src/ecmAuth';
export { BpmAuth } from './src/bpmAuth';
export { Oauth2Auth } from './src/oauth2Auth';
export { EcmClient } from './src/ecmClient';
export { BpmClient } from './src/bpmClient';
export { Storage } from './src/storage';
export { AlfrescoApi } from './src/alfrescoApi';
export { AlfrescoApiCompatibility } from './src/alfrescoApiCompatibility';
export { AlfrescoApiClient } from './src/alfrescoApiClient';
