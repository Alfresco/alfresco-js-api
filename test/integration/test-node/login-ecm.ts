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

import { argv, exit } from 'node:process';
import { AlfrescoApi, DiscoveryApi } from '@alfresco/js-api';
import { Command } from 'commander';
const program = new Command();

async function main() {
    program
        .version('0.1.0')
        .option('--host  [type]', '')
        .option('-p, --password [type]', 'password ')
        .option('-u, --username [type]', 'username ')
        .parse(argv);

    const options = program.opts();
    const alfrescoApi = new AlfrescoApi();

    alfrescoApi.setConfig({
        provider: 'ECM',
        hostEcm: options.host,
        authType: 'BASIC',
        contextRoot: ''
    });

    try {
        await alfrescoApi.login(options.username, options.password);
        const discovery = new DiscoveryApi(alfrescoApi);

        try {
            const repoInfo = await discovery.getRepositoryInformation();
            console.log(repoInfo);
        } catch (err) {
            console.error('[Login ECM]', err);
            exit(1);
        }

    } catch (err) {
        console.error('[Login ECM]', err);
        exit(1);
    }
}

main();
