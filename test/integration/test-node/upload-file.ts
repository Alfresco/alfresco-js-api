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

import * as path from 'path';
import * as fs from 'fs';
import { AlfrescoApi } from '@alfresco/js-api';
import { SitesApi } from '../../../src/api/content-rest-api/api/sites.api';
import { UploadApi } from '../../../src/api/content-custom-api';

const program = require('commander');

async function main() {

    program
        .version('0.1.0')
        .option('--host  [type]', '')
        .option('-p, --password [type]', 'password ')
        .option('-u, --username [type]', 'username ')
        .parse(process.argv);

    const alfrescoApi = new AlfrescoApi({
        provider: 'ECM',
        hostEcm: program.host,
        authType: 'BASIC',
        contextRoot: ''
    });

    alfrescoApi.login(program.username, program.password).then(
        () => {
            console.log('login done');
        },
        () => {
            process.exit(1);
        }
    );

    const pathFile = path.join(path.resolve(__dirname, 'testExtension.test'));
    const file = fs.createReadStream(pathFile);

    const sitesApi = new SitesApi(alfrescoApi);
    const uploadApi = new UploadApi(alfrescoApi);

    const site = await sitesApi.createSite({
        title: 'my-site-test-' + new Date(),
        visibility: 'PUBLIC'
    });

    uploadApi.uploadFile(
        file,
        '',
        site.entry.guid,
        null,
        {
            'name': 'a_png_file.png',
            'nodeType': 'cm:content',
            'renditions': 'doclib'
        }
    ).then(
        () => {
            console.log(`file uploaded`);
        },
        (e: any) => {
            console.log(`error ${e}`);
            process.exit(1);
        }
    );
}

main();
