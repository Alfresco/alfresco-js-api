'use strict';
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var ApiClient = require('./alfresco-core-rest-api/src/ApiClient');
var superagent = require('superagent');
var _ = require('lodash');

class AlfrescoApiClient extends ApiClient {

    constructor() {
        super();
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
     * constructor for a complex type.   * @returns {Promise} A Promise object.
     */
    callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames,
            contentTypes, accepts, returnType) {

        var url = this.buildUrl(path, pathParams);
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
        if (contentType) {
            request.type(contentType);
        } else if (!request.header['Content-Type']) {
            request.type('application/json');
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(this.normalizeParams(formParams));
        } else if (contentType === 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]);
                    } else {
                        request.field(key, _formParams[key]);
                    }
                }
            }
        } else if (bodyParam) {
            request.send(bodyParam);
        }

        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        return new Promise((resolve, reject) => {
            request.end((error, response) => {
                if (error) {
                    if (error.status === 401) {

                        if (typeof this.emit === 'function') {
                            this.emit('unauthorized');
                        }
                    }
                    if (response && response.text) {
                        reject(_.merge(error, {message: response.text }));
                    } else {
                        reject({error: error });
                    }
                } else {
                    var data = this.deserialize(response, returnType);
                    resolve(data);
                }
            });
        });
    }
}

util.inherits(ApiClient, EventEmitter);
module.exports = AlfrescoApiClient;
