'use strict';
var Emitter = require('event-emitter');
var ApiClient = require('./alfresco-core-rest-api/src/ApiClient');
var superagent = require('superagent');
var Storage = require('./storage');

class AlfrescoApiClient extends ApiClient {

    /**
     * @param {String} host
     * */
    constructor(host) {
        super();
        this.storage = new Storage();
        this.host = host;
        Emitter.call(this);
    }

    /**
     * Invokes the REST service using the supplied settings and parameters.
     *
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {String[]} authNames An array of authentication type names.
     * @param {String[]} contentTypes An array of request MIME types.
     * @param {String[]} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * @param {(String)} contextRoot alternative contextRoot
     * @param {(String)} responseType  is an enumerated value that returns the type of the response.
     *                                  It also lets the author change the response type to one "arraybuffer", "blob", "document",
     *                                  "json", or "text".
     *                                   If an empty string is set as the value of responseType, it is assumed as type "text".
     * constructor for a complex type.   * @returns {Promise} A Promise object.
     */
    callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames,
            contentTypes, accepts, returnType, contextRoot, responseType) {

        var url;

        if (contextRoot) {
            var basePath = this.host + '/' + contextRoot;
            url = this.buildUrlCustomBasePath(basePath, path, pathParams);
        } else {
            url = this.buildUrl(path, pathParams);
        }

        return this.callHostApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames,
            contentTypes, accepts, returnType, contextRoot, responseType, url);
    }

    /**
     * Invokes the REST service using the supplied settings and parameters but not the basepath.
     *
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {String[]} authNames An array of authentication type names.
     * @param {String[]} contentTypes An array of request MIME types.
     * @param {String[]} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * @param {(String)} contextRoot alternative contextRoot
     * @param {(String)} responseType  is an enumerated value that returns the type of the response.
     *                                  It also lets the author change the response type to one "arraybuffer", "blob", "document",
     *                                  "json", or "text".
     *                                   If an empty string is set as the value of responseType, it is assumed as type "text".
     * constructor for a complex type.   * @returns {Promise} A Promise object.
     */
    callCustomApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames,
                  contentTypes, accepts, returnType, contextRoot, responseType) {
        var url = this.buildUrlCustomBasePath(path, '', pathParams);

        return this.callHostApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames,
            contentTypes, accepts, returnType, contextRoot, responseType, url);
    }

    /**
     * Invokes the REST service using the supplied settings and parameters.
     *
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {String[]} authNames An array of authentication type names.
     * @param {String[]} contentTypes An array of request MIME types.
     * @param {String[]} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * @param {(String)} contextRoot alternative contextRoot
     * @param {(String)} responseType  is an enumerated value that returns the type of the response.
     *                                  It also lets the author change the response type to one "arraybuffer", "blob", "document",
     *                                  "json", or "text".
     *                                   If an empty string is set as the value of responseType, it is assumed as type "text".
     * constructor for a complex type.   * @returns {Promise} A Promise object.
     */
    callHostApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames,
                contentTypes, accepts, returnType, contextRoot, responseType, url) {

        var eventEmitter = {};
        Emitter(eventEmitter); // jshint ignore:line

        var request = this.buildRequest(httpMethod, url, queryParams, headerParams, formParams, bodyParam,
            contentTypes, accepts, responseType, eventEmitter, returnType);

        if (returnType === 'Binary') {
            request = request.buffer(true).parse(superagent.parse['application/octet-stream']);
        }

        this.promise = new Promise((resolve, reject) => {
            request.end((error, response) => {
                if (error) {

                    this.emit('error', error);
                    eventEmitter.emit('error', error);

                    if (error.status === 401) {
                        this.emit('unauthorized');
                        eventEmitter.emit('unauthorized');
                    }

                    if (response && response.text) {
                        error = error || {};
                        reject(Object.assign(error, {message: response.text}));
                    } else {
                        reject({error: error});
                    }

                } else {
                    if (this.isBpmRequest()) {
                        if (response.header && response.header.hasOwnProperty('set-cookie')) {
                            this.authentications.cookie = response.header['set-cookie'];
                        }
                    }
                    var data = {};
                    if (response.type === 'text/html') {
                        data = this.deserialize(response, 'String');
                    } else {
                        data = this.deserialize(response, returnType);
                    }

                    eventEmitter.emit('success', data);
                    resolve(data);
                }
            }).on('abort', () => {
                eventEmitter.emit('abort');
            });
        });

        this.promise.on = function () {
            eventEmitter.on.apply(eventEmitter, arguments);
            return this;
        };

        this.promise.once = function () {
            eventEmitter.once.apply(eventEmitter, arguments);
            return this;
        };

        this.promise.emit = function () {
            eventEmitter.emit.apply(eventEmitter, arguments);
            return this;
        };

        this.promise.off = function () {
            eventEmitter.off.apply(eventEmitter, arguments);
            return this;
        };

        this.promise.abort = function () {
            request.abort();
            return this;
        };

        return this.promise;
    }

    isBpmRequest() {
        return this.className === 'BpmAuth' || this.className === 'BpmClient';
    }

    isCsrfEnabled() {
        if (this.config) {
            return !this.config.disableCsrf;
        } else {
            return true;
        }
    }

    setCsrfToken(request) {
        var token = this.token();
        request.set('X-CSRF-TOKEN', token);

        if (this.isNodeEnv()) {
            request.set('Cookie', 'CSRF-TOKEN=' + token + ';path=/');
        }

        try {
            document.cookie = 'CSRF-TOKEN=' + token + ';path=/';
        } catch (err) {
        }
    }

    isWithCredentials() {
        if (this.config) {
            return this.config.withCredentials;
        } else {
            return false;
        }
    }

    isNodeEnv() {
        return (typeof process !== 'undefined') && (process.release && process.release.name === 'node');
    }

    token(a) {
        return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e16] + 1e16).replace(/[01]/g, this.token);
    }

    progress(event, eventEmitter) {
        if (event.lengthComputable && this.promise) {
            var percent = Math.round(event.loaded / event.total * 100);

            eventEmitter.emit('progress', {
                total: event.total,
                loaded: event.loaded,
                percent: percent
            });
        }
    }

    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders
     * with parameter values.
     *
     * @param {String} basePath the base path
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @returns {String} The encoded path with parameter values substituted.
     */
    buildUrlCustomBasePath(basePath, path, pathParams) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }
        var url = basePath + path;
        var _this = this;
        url = url.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = _this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
        return url;
    }

    buildRequest(httpMethod, url, queryParams, headerParams, formParams, bodyParam,
                 contentTypes, accepts, responseType, eventEmitter, returnType) {
        var request = superagent(httpMethod, url);

        // apply authentications
        this.applyAuthToRequest(request, ['basicAuth']);

        // set query parameters
        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        if (this.isBpmRequest() && this.isCsrfEnabled()) {
            this.setCsrfToken(request);
        }

        if (this.isWithCredentials()) {
            request.withCredentials();
        }

        // add cookie for activiti
        if (this.isBpmRequest()) {
            request._withCredentials = true;
            if (this.authentications.cookie) {
                if (this.isNodeEnv()) {
                    request.set('Cookie', this.authentications.cookie);
                }
            }
        }

        // set request timeout
        request.timeout(this.timeout);

        var contentType = this.jsonPreferredMime(contentTypes);

        if (contentType && contentType !== 'multipart/form-data') {
            request.type(contentType);
        } else if (!request.header['Content-Type'] && contentType !== 'multipart/form-data') {
            request.type('application/json');
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(this.normalizeParams(formParams)).on('progress', (event) => {
                this.progress(event, eventEmitter);
            });
        } else if (contentType === 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]).on('progress', (event) => {// jshint ignore:line
                            this.progress(event, eventEmitter);
                        });
                    } else {
                        request.field(key, _formParams[key]).on('progress', (event) => {// jshint ignore:line
                            this.progress(event, eventEmitter);
                        });
                    }
                }
            }
        } else if (bodyParam) {
            request.send(bodyParam).on('progress', (event) => {
                this.progress(event, eventEmitter);
            });
        }

        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        if (returnType === 'Blob' || responseType === 'blob' || responseType === 'Blob') {
            request.responseType('blob');
        } else if (returnType === 'String') {
            request.responseType('string');
        }

        return request;
    }
}

Emitter(AlfrescoApiClient.prototype); // jshint ignore:line
module.exports = AlfrescoApiClient;
