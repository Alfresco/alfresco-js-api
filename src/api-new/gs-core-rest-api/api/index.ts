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


export * from './fileplans.api';
import { FileplansApi } from './fileplans.api';
export * from './files.api';
import { FilesApi } from './files.api';
export * from './gsSites.api';
import { GsSitesApi } from './gsSites.api';
export * from './recordcategories.api';
import { RecordcategoriesApi } from './recordcategories.api';
export * from './recordfolders.api';
import { RecordfoldersApi } from './recordfolders.api';
export * from './records.api';
import { RecordsApi } from './records.api';
export * from './transfercontainers.api';
import { TransfercontainersApi } from './transfercontainers.api';
export * from './transfers.api';
import { TransfersApi } from './transfers.api';
export * from './unfiledcontainers.api';
import { UnfiledcontainersApi } from './unfiledcontainers.api';
export * from './unfiledrecordfolders.api';
import { UnfiledrecordfoldersApi } from './unfiledrecordfolders.api';
export const GS_CORE_APIS = [FileplansApi, FilesApi, GsSitesApi, RecordcategoriesApi, RecordfoldersApi, RecordsApi, TransfercontainersApi, TransfersApi, UnfiledcontainersApi, UnfiledrecordfoldersApi];
