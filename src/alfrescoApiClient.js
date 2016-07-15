'use strict';
var Emitter = require('event-emitter');
var ApiClient = require('./alfresco-core-rest-api/src/ApiClient');
var superagent = require('superagent');
var _ = require('lodash');

class AlfrescoApiClient extends ApiClient {

    /**
     * @param {String} host
     * */
    constructor(host) {
        super();
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
     * @param {Array.<String>} authNames An array of authentication type names.
     * @param {Array.<String>} contentTypes An array of request MIME types.
     * @param {Array.<String>} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * @param {(String)} contextRoot alternative contextRoot
     * constructor for a complex type.   * @returns {Promise} A Promise object.
     */
    callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames,
            contentTypes, accepts, returnType, contextRoot) {

        var eventEmitter = {};
        Emitter(eventEmitter); // jshint ignore:line

        var url;

        if (contextRoot) {
            var basePath = this.host + '/' + contextRoot;
            url = this.buildUrlCustomBasePath(basePath, path, pathParams);
        } else {
            url = this.buildUrl(path, pathParams);
        }

        var request = superagent(httpMethod, url);

        // apply authentications
        this.applyAuthToRequest(request, authNames);

        // set query parameters
        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        // set request timeout
        request.timeout(this.timeout);

        var contentType = this.jsonPreferredMime(contentTypes);

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(this.normalizeParams(formParams)).on('progress', (event)=> {
                this.progress(event, eventEmitter);
            });
        } else if (contentType === 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]).on('progress', (event)=> {// jshint ignore:line
                            this.progress(event, eventEmitter);
                        });
                    } else {
                        request.field(key, _formParams[key]).on('progress', (event)=> {// jshint ignore:line
                            this.progress(event, eventEmitter);
                        });
                    }
                }
            }
        } else if (bodyParam) {
            request.send(bodyParam).on('progress', (event)=> {
                this.progress(event, eventEmitter);
            });
        }

        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        this.promise = new Promise((resolve, reject) => {
            request.end((error, response) => {
                if (error) {
                    eventEmitter.emit('error', error);

                    if (error.status === 401) {
                        eventEmitter.emit('unauthorized');
                    }

                    if (response && response.text) {
                        reject(_.merge(error, {message: response.text}));
                    } else {
                        reject({error: error});
                    }

                } else {
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
}

Emitter(AlfrescoApiClient.prototype); // jshint ignore:line
module.exports = AlfrescoApiClient;
