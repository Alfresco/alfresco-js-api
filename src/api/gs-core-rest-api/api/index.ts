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


export * from './filePlans.api';
import { FilePlansApi } from './filePlans.api';

export * from './files.api';
import { FilesApi } from './files.api';

export * from './gsSites.api';
import { GsSitesApi } from './gsSites.api';

export * from './recordCategories.api';
import { RecordCategoriesApi } from './recordCategories.api';

export * from './recordFolders.api';
import { RecordFoldersApi } from './recordFolders.api';

export * from './records.api';
import { RecordsApi } from './records.api';

export * from './transferContainers.api';
import { TransferContainersApi } from './transferContainers.api';

export * from './transfers.api';
import { TransfersApi } from './transfers.api';

export * from './unfiledContainers.api';
import { UnfiledContainersApi } from './unfiledContainers.api';

export * from './unfiledRecordFolders.api';
import { UnfiledRecordFoldersApi } from './unfiledRecordFolders.api';

export const GS_CORE_APIS = {
    FilePlansApi: FilePlansApi,
    FilesApi: FilesApi,
    GsSitesApi: GsSitesApi,
    RecordCategoriesApi: RecordCategoriesApi,
    RecordFoldersApi: RecordFoldersApi,
    RecordsApi: RecordsApi,
    TransferContainersApi: TransferContainersApi,
    TransfersApi: TransfersApi,
    UnfiledContainersApi: UnfiledContainersApi,
    UnfiledRecordFoldersApi: UnfiledRecordFoldersApi
};
