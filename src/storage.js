'use strict';

class Storage {

    static getStorage() {
        return this._storage;
    }

    supportsStorage() {
        try {
            return 'sessionStorage' in window && window.sessionStorage !== null;
        } catch (e) {
            return false;
        }
    }

    static setStorage() {
        if (this.supportsStorage()) {
            this._storage = window.sessionStorage;
        }
    }

    setItem(key, value) {
        if (this.supportsStorage()) {
            this._storage.setItem(key, value);
        }
    }

    getItem(value) {
        if (this.supportsStorage()) {
            this._storage.getItem(value);
        }
    }
}

module.exports = Storage;
