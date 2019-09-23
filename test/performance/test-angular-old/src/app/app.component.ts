import { Component, OnInit } from '@angular/core';
import {
  AlfrescoApi
} from 'alfresco-js-api';
import * as alfrescoApi from 'alfresco-js-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  USERNAME: string;
  PASSWORD: string;

  alfrescoApi: AlfrescoApi;
  title = 'My test performance app';
  ecmVers: any = {};

  constructor() {
    this.alfrescoApi = <AlfrescoApi> new alfrescoApi({
      provider: 'ECM',
      hostEcm: 'http://localhost:3000',
      authType: 'BASIC',
      contextRoot: ''
    });

  }

  ngOnInit() {
    this.alfrescoApi.login(this.USERNAME, this.PASSWORD);
    this.alfrescoApi.discovery.discoveryApi.getRepositoryInformation().then((ecmVers) => {
      console.log(`ecmVers ${ecmVers}`);
      this.ecmVers = ecmVers;
    });
  }

}
