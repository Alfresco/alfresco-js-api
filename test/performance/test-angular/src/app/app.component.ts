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

import { Component, OnInit } from '@angular/core';
import { AlfrescoApi, DiscoveryEntry, DiscoveryApi } from '@alfresco/js-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  alfrescoApi: AlfrescoApi;
  title = 'My test performance app';
  ecmVers: any = {};

  constructor() {

    this.alfrescoApi = new AlfrescoApi();
    this.alfrescoApi.setConfig({
      provider: 'ECM',
      hostEcm: 'http://localhost:3000',
      authType: 'BASIC',
      contextRoot:''
    });

  }

  ngOnInit() {
    const discovery: DiscoveryApi = new DiscoveryApi(this.alfrescoApi);
    discovery.getRepositoryInformation().then((ecmVers: DiscoveryEntry) => {
      console.log(`ecmVers ${ecmVers}`);
      this.ecmVers = ecmVers;
    });
  }

}
