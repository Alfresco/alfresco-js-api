/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { ContentApi as NewContentApi } from '../../../../api/activiti-rest-api/api/content.api';
import { RelatedContentRepresentation } from '../../../../api/activiti-rest-api/model/relatedContentRepresentation';
import { ProcessInstancesApi } from '../../../../api/activiti-rest-api/api/processInstances.api';
import { ResultListDataRepresentationProcessContentRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationProcessContentRepresentation';

/**
 * @deprecated 3.0.0
 */
export class ContentApi {

    private contentApi: NewContentApi;
    private processInstancesApi: ProcessInstancesApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.contentApi = new NewContentApi(alfrescoApi);
        this.processInstancesApi = new ProcessInstancesApi(alfrescoApi);
    }

    createRelatedContentOnProcessInstancePostBody(processInstanceId: string, relatedContent: RelatedContentRepresentation, opts?: any): Promise<RelatedContentRepresentation> {
        return this.contentApi.createRelatedContentOnProcessInstance(processInstanceId, relatedContent, opts);
    }

    createRelatedContentOnProcessInstance(processInstanceId: string, file: any, opts?: any): Promise<RelatedContentRepresentation> {
        return this.contentApi.createRelatedContentOnProcessInstance(processInstanceId, file, opts);
    }

    createRelatedContentOnTaskPostBody(taskId: string, relatedContent: any, opts?: any): Promise<RelatedContentRepresentation> {
        return this.contentApi.createRelatedContentOnTask(taskId, relatedContent, opts);
    }

    createRelatedContentOnTask(taskId: string, file: any, opts?: any): Promise<RelatedContentRepresentation> {
        return this.contentApi.createRelatedContentOnTask(taskId, file, opts);
    }

    createTemporaryRawRelatedContent(file: any): Promise<RelatedContentRepresentation> {
        return this.contentApi.createTemporaryRawRelatedContent(file);
    }

    createTemporaryRelatedContent(relatedContent: RelatedContentRepresentation): Promise<RelatedContentRepresentation> {
        return this.contentApi.createTemporaryRelatedContent(relatedContent);
    }

    deleteContent(contentId: number): Promise<any> {
        return this.contentApi.deleteContent(contentId);
    }

    getContent(contentId: number): Promise<RelatedContentRepresentation> {
        return this.contentApi.getContent(contentId);
    }

    getProcessInstanceContent(processInstanceId: string): Promise<ResultListDataRepresentationProcessContentRepresentation> {
        return this.processInstancesApi.getProcessInstanceContent(processInstanceId);
    }

    getRawContent(contentId: number): Promise<any> {
        return this.contentApi.getRawContent(contentId);
    }

    getContentPreview(contentId: number) {
        return this.contentApi.getRawContent(contentId, 'preview');
    }

    /**
     * Get content Raw URL for the given contentId
     * @param {Number} contentId contentId
     */
    getRawContentUrl(contentId: number) {
        return this.contentApi.getRawContentUrl(contentId);
    }

    getContentThumbnail(contentId: number) {
        return this.contentApi.getRawContent(contentId, 'thumbnail');
    }

    getRelatedContentForProcessInstance(processInstanceId: string, isRelatedContent: boolean) {
        return this.contentApi.getRelatedContentForProcessInstance(processInstanceId, { isRelatedContent });
    }

    getRelatedContentForTask(taskId: string, isRelatedContent: boolean) {
        return this.contentApi.getRelatedContentForTask(taskId, { isRelatedContent });
    }
}
