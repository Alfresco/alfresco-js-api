'use strict';

class Storage {

    constructor() {
        if (this.supportsStorage()) {
            this._storage = window.localStorage;
        }
    }

    supportsStorage() {
        try {
            return 'sessionStorage' in window && window.sessionStorage !== null;
        } catch (e) {
            return false;
        }
    }

    setStorage(storage) {
        this._storage = storage;
    }

    setItem(key, value) {
        if (this.supportsStorage()) {
            this._storage.setItem(key, value);
        }
    }

    removeItem(key) {
        if (this.supportsStorage()) {
            this._storage.removeItem(key);
        }
    }

    getItem(value) {
        if (this.supportsStorage()) {
            return this._storage.getItem(value);
        }
    }
}

module.exports = Storage;
