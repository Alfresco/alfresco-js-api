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

const GitHub = require('github-api');
const args = require('yargs').argv;

const ORGANISATION = 'Alfresco';

class PrCreator {
    constructor(githubUser, githubRepo, token) {
        this.github = new GitHub({token});
        this.repo = this.github.getRepo(githubUser, githubRepo);
    }

    async create(title, head, base) {
        const { data: prs } = await this.repo.listPullRequests({ state: 'open', head: `${ORGANISATION}:${head}`, base });

        if (prs.length < 1) {
            const { data: pr } = await this.repo.createPullRequest({ title, head, base });
            return pr.number;
        }

        return prs[0].number;
    }
}

async function main() {
    const { token, title, head, repo } = args,
        prCreator = new PrCreator(ORGANISATION, repo, token);

    if (!token || !head || !title) {
        throw new Error('Each of the parameters have to be provided. --token, --title, --head');
    }

    return prCreator.create(title, head, 'develop');
}

main()
    .then(prNumber => {
        console.log(prNumber)
        process.exit(0);
    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
