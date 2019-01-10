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

export * from './src/api-legacy/legacy';
export * from './src/api-legacy/content-rest-api/src/index';
export * from './src/api-legacy/activiti-rest-api/src/index';
export * from './src/api/content-rest-api/index';
export * from './src/api/discovery-rest-api/index';
export * from './src/api/gs-classification-rest-api/index';
export * from './src/api/gs-core-rest-api/index';
export * from './src/api/auth-rest-api/index';
export * from './src/api/activiti-rest-api/index';
export * from './src/api/search-rest-api/index';

export { ContentApi } from './src/contentApi';
export { AlfrescoUpload } from './src/api-legacy/alfrescoUpload';
export { ContentAuth } from './src/authentication/contentAuth';
export { ProcessAuth } from './src/authentication/processAuth';
export { Oauth2Auth } from './src/authentication/oauth2Auth';
export { ContentClient } from './src/contentClient';
export { ProcessClient } from './src/processClient';
export { Storage } from './src/storage';
export { AlfrescoApi } from './src/alfrescoApi';
export { AlfrescoApiCompatibility } from './src/alfrescoApiCompatibility';
export { AlfrescoApiClient } from './src/alfrescoApiClient';
