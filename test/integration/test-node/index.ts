/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
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

import { AlfrescoApi, DiscoveryApi } from '@alfresco/js-api';

let alfrescoApi: AlfrescoApi = new AlfrescoApi();
alfrescoApi.setConfig({
    provider: 'ECM',
    hostEcm: 'http://adfdev.envalfresco.com',
    authType: 'BASIC',
    contextRoot: ''
});

alfrescoApi.login('admin','adf$2018IloveAngular');

let discovery = new DiscoveryApi(alfrescoApi);
discovery.getRepositoryInformation().then(
    (ecmVers) => {
        console.log('ecmVers' + JSON.stringify(ecmVers));
    },
    (ecmVers) => {
        console.log('error ecmvers' + ecmVers);
    });
