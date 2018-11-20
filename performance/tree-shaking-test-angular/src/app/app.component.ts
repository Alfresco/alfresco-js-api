import { Component, OnInit } from '@angular/core';
import { AlfrescoApi, DiscoveryApi, DiscoveryEntry } from 'alfresco-js-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    alfrescoApi: AlfrescoApi;

    constructor() {

        this.alfrescoApi = new AlfrescoApi();
        this.alfrescoApi.setConfig({
            provider: 'ECM',
            hostEcm: 'http://adfdev.envalfresco.com',
            authType: 'BASIC'
        });

    }

    ngOnInit() {
        let discovery: DiscoveryApi = new DiscoveryApi(this.alfrescoApi);
        discovery.getRepositoryInformation().then((ecmVers: DiscoveryEntry) => {
            console.log(`ecmVers ${ecmVers}`);
        });
    }

}
