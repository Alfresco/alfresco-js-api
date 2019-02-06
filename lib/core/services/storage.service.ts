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

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private memoryStore: { [key: string]: any } = {};
    private useLocalStorage: boolean = false;

    constructor() {
        this.useLocalStorage = this.storageAvailable('localStorage');
    }

    /**
     * Gets an item.
     * @param key Key to identify the item
     * @returns The item (if any) retrieved by the key
     */
    getItem(key: string): string | null {
        if (this.useLocalStorage) {
            return localStorage.getItem(key);
        } else {
            return this.memoryStore.hasOwnProperty(key) ? this.memoryStore[key] : null;
        }
    }

    /**
     * Stores an item
     * @param key Key to identify the item
     * @param data Data to store
     */
    setItem(key: string, data: string) {
        if (this.useLocalStorage) {
            localStorage.setItem(key, data);
        } else {
            this.memoryStore[key] = data.toString();
        }
    }

    /** Removes all currently stored items. */
    clear() {
        if (this.useLocalStorage) {
            localStorage.clear();
        } else {
            this.memoryStore = {};
        }
    }

    /**
     * Removes a single item.
     * @param key Key to identify the item
     */
    removeItem(key: string) {
        if (this.useLocalStorage) {
            localStorage.removeItem(key);
        } else {
            delete this.memoryStore[key];
        }
    }

    /**
     * Is any item currently stored under `key`?
     * @param key Key identifying item to check
     * @returns True if key retrieves an item, false otherwise
     */
    hasItem(key: string): boolean {
        if (this.useLocalStorage) {
            return localStorage.getItem(key) ? true : false;
        } else {
            return this.memoryStore.hasOwnProperty(key);
        }
    }

    private storageAvailable(type: string): boolean {
        try {
            let storage = window[type];
            const key = '__storage_test__';
            storage.setItem(key, key);
            storage.removeItem(key, key);
            return true;
        } catch (e) {
            return false;
        }
    }

}