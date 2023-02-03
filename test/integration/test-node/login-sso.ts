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

import { AlfrescoApi } from '../../../src/alfrescoApi';

const program = require('commander');

async function main() {

    program
        .version('0.1.0')
        .option('--host  [type]', '')
        .option('-p, --password [type]', 'password ')
        .option('-u, --username [type]', 'username ')
        .parse(process.argv);

    const alfrescoApi = new AlfrescoApi();

    alfrescoApi.setConfig({
        provider: 'ALL',
        hostBpm: program.host,
        authType: 'OAUTH',
        oauth2: {
            host: `${program.host}/auth/realms/alfresco`,
            clientId: `alfresco`,
            scope: 'openid',
            secret: '',
            implicitFlow: false,
            silentLogin: false,
            redirectUri: '/'
        },
        contextRoot: ''
    });

    alfrescoApi.login(program.username, program.password).then(() => {
        console.log('login SSO ok');
        alfrescoApi.logout();
    }, (error) => {
        console.log(`login SSO error ${JSON.stringify(error)}`);
        alfrescoApi.logout();
        process.exit(1);
    });

}

main();
