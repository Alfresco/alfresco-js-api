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

import { RequestDefaults } from './requestDefaults';
import { RequestFacetFields } from './requestFacetFields';
import { RequestFacetIntervals } from './requestFacetIntervals';
import { RequestFacetQueries } from './requestFacetQueries';
import { RequestFields } from './requestFields';
import { RequestFilterQueries } from './requestFilterQueries';
import { RequestHighlight } from './requestHighlight';
import { RequestInclude } from './requestInclude';
import { RequestLimits } from './requestLimits';
import { RequestLocalization } from './requestLocalization';
import { RequestPagination } from './requestPagination';
import { RequestPivot } from './requestPivot';
import { RequestQuery } from './requestQuery';
import { RequestRange } from './requestRange';
import { RequestScope } from './requestScope';
import { RequestSortDefinition } from './requestSortDefinition';
import { RequestSpellcheck } from './requestSpellcheck';
import { RequestStats } from './requestStats';
import { RequestTemplates } from './requestTemplates';

export class SearchRequest {
    query: RequestQuery;
    paging?: RequestPagination;
    include?: RequestInclude;
    /**
     * When true, include the original request in the response
     */
    includeRequest?: boolean;
    fields?: RequestFields;
    sort?: RequestSortDefinition;
    templates?: RequestTemplates;
    defaults?: RequestDefaults;
    localization?: RequestLocalization;
    filterQueries?: RequestFilterQueries;
    facetQueries?: RequestFacetQueries;
    facetFields?: RequestFacetFields;
    facetIntervals?: RequestFacetIntervals;
    pivots?: Array<RequestPivot>;
    stats?: Array<RequestStats>;
    spellcheck?: RequestSpellcheck;
    scope?: RequestScope;
    limits?: RequestLimits;
    highlight?: RequestHighlight;
    ranges?: Array<RequestRange>;

    constructor(input?: any) {

        Object.assign(this, input);
        this.query = new RequestQuery(input.query);
        this.paging = new RequestPagination(input.paging);
        this.include = new RequestInclude(input.include);
        this.fields = new RequestFields(input.fields);
        this.sort = new RequestSortDefinition(input.sort);
        this.templates = new RequestTemplates(input.templates);
        this.defaults = new RequestDefaults(input.defaults);
        this.localization = new RequestLocalization(input.localization);
        this.filterQueries = new RequestFilterQueries(input.filterQueries);
        this.facetQueries = new RequestFacetQueries(input.facetQueries);
        this.facetFields = new RequestFacetFields(input.facetFields);
        this.facetIntervals = new RequestFacetIntervals(input.facetIntervals);
        this.pivots = input.pivots.map((item: any) => {
            return new Array<RequestPivot>(item);
        });
        this.stats = input.stats.map((item: any) => {
            return new Array<RequestStats>(item);
        });
        this.spellcheck = new RequestSpellcheck(input.spellcheck);
        this.scope = new RequestScope(input.scope);
        this.limits = new RequestLimits(input.limits);
        this.highlight = new RequestHighlight(input.highlight);
        this.ranges = input.ranges.map((item: any) => {
            return new Array<RequestRange>(item);
        });
    }

}
