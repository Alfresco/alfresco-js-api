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

module.exports = async ({github, context}) => {

    const tagName = require('../package.json').version + '-test';
    const tagSHA = 'dc864c0f11fcc425524367c34a6aa24d23d79bc5';

    console.log(`Creating a tag with title: ${tagName} and SHA: ${tagSHA}`);

    const createdTag = await github.rest.git.createTag({
        owner: context.repo.owner,
        repo: context.repo.repo,
        tag: tagName,
        message: tagName,
        object: tagSHA,
        type: 'commit'
    });

    const createdRef = await github.rest.git.createRef({
        owner: context.repo.owner,
        repo: context.repo.repo,
        ref: 'refs/tags/' + tagName,
        sha: createdTag.data.sha
    });

    if (createdRef.status === 201) {
        console.log(`Tag ${tagName} was created successfully`);
    }
}
