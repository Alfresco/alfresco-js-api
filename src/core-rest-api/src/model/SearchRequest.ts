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

import { RequestDefaults } from './RequestDefaults';
import { RequestFacetFields } from './RequestFacetFields';
import { RequestFacetIntervals } from './RequestFacetIntervals';
import { RequestFacetQuery } from './RequestFacetQuery';
import { RequestFilterQuery } from './RequestFilterQuery';
import { RequestHighlight } from './RequestHighlight';
import { RequestLimits } from './RequestLimits';
import { RequestLocalization } from './RequestLocalization';
import { RequestPagination } from './RequestPagination';
import { RequestPivot } from './RequestPivot';
import { RequestQuery } from './RequestQuery';
import { RequestRange } from './RequestRange';
import { RequestScope } from './RequestScope';
import { RequestSortDefinitionInner } from './RequestSortDefinitionInner';
import { RequestSpellcheck } from './RequestSpellcheck';
import { RequestStats } from './RequestStats';
import { RequestTemplate } from './RequestTemplate';

export interface SearchRequest {
    query ?: RequestQuery;
    paging ?: RequestPagination;
    include ?: Array<string>;
    includeRequest?: boolean;
    fields ?: Array<string>;
    sort ?: Array<RequestSortDefinitionInner>;
    templates ?: Array<RequestTemplate>;
    defaults ?: RequestDefaults;
    localization?: RequestLocalization;
    filterQueries ?: Array<RequestFilterQuery>;
    facetQueries ?: Array<RequestFacetQuery>;
    facetFields ?: RequestFacetFields;
    facetIntervals?: RequestFacetIntervals;
    pivots?: Array<RequestPivot>;
    stats?: Array<RequestStats>;
    spellcheck ?: RequestSpellcheck;
    scope ?: RequestScope;
    limits ?: RequestLimits;
    highlight ?: RequestHighlight;
    ranges?: Array<RequestRange>;
}
