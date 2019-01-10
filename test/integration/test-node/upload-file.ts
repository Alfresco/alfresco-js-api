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

import { AlfrescoApiCompatibility } from '../../../src/alfrescoApiCompatibility';
import path = require('path');
import fs = require('fs');

let program = require('commander');

async function main() {

    program
        .version('0.1.0')
        .option('--host  [type]', '')
        .option('-p, --password [type]', 'password ')
        .option('-u, --username [type]', 'username ')
        .parse(process.argv);

    let alfrescoApi = new AlfrescoApiCompatibility({
        provider: 'ECM',
        hostEcm: program.host,
        authType: 'BASIC',
        contextRoot: ''
    });

    alfrescoApi.login(program.username, program.password).then(() => {
        console.log('login done');
    }, () => {
        process.exit(1);
    });

    let pathFile = path.join(path.resolve(__dirname, 'testExtension.test'));
    let file = fs.createReadStream(pathFile);

    let site = await alfrescoApi.core.sitesApi.createSite({
        title: 'my-site-test-' + new Date(),
        visibility: 'PUBLIC'
    });

    alfrescoApi.upload.uploadFile(
        file,
        '',
        site.entry.guid,
        null,
        {
            'name': 'a_png_file.png',
            'nodeType': 'cm:content',
            'renditions': 'doclib'
        }
    ).then(() => {
        console.log(`file uploaded`);
    }, (e) => {
        console.log(`error ${e}`);
        process.exit(1);
    })

}

main();
