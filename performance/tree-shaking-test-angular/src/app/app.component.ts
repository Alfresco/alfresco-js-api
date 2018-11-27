import { Component, OnInit } from '@angular/core';
import { AlfrescoApi, DiscoveryEntry, DiscoveryApi } from 'alfresco-js-api';

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
    let discovery: DiscoveryApi = new DiscoveryApi(this.alfrescoApi);
    discovery.getRepositoryInformation().then((ecmVers: DiscoveryEntry) => {
      console.log(`ecmVers ${ecmVers}`);
      this.ecmVers = ecmVers;
    });
  }

}
