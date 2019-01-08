/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d        = __webpack_require__(32)
  , callable = __webpack_require__(18)

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlfrescoApiClient; });
/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(event_emitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _authentication_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
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




var Emitter = event_emitter__WEBPACK_IMPORTED_MODULE_0__;
var superagent = superagent__WEBPACK_IMPORTED_MODULE_2__;
var process = {};
var AlfrescoApiClient = (function () {
    function AlfrescoApiClient(host) {
        this.basePath = '';
        this.authentications = new _authentication_authentication__WEBPACK_IMPORTED_MODULE_3__[/* Authentication */ "a"]({
            'basicAuth': {}, type: 'basic'
        });
        this.defaultHeaders = {};
        this.timeout = undefined;
        this.on = Emitter.on;
        this.off = Emitter.off;
        this.once = Emitter.once;
        this.emit = Emitter.emit;
        this.storage = new _storage__WEBPACK_IMPORTED_MODULE_1__[/* Storage */ "a"]();
        this.host = host;
        this.on = (new Emitter()).on;
        this.off = (new Emitter()).off;
        this.once = (new Emitter()).once;
        this.emit = (new Emitter()).emit;
        Emitter.call(this);
    }
    AlfrescoApiClient.prototype.paramToString = function (param) {
        if (param === undefined || param === null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        return param.toString();
    };
    AlfrescoApiClient.prototype.buildUrl = function (path, pathParams) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }
        var url = this.basePath + path;
        var _this = this;
        url = url.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = _this.paramToString(pathParams[key]);
            }
            else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
        return url;
    };
    AlfrescoApiClient.prototype.isJsonMime = function (contentType) {
        return Boolean(contentType !== null && contentType.match(/^application\/json(;.*)?$/i));
    };
    AlfrescoApiClient.prototype.jsonPreferredMime = function (contentTypes) {
        for (var i = 0; i < contentTypes.length; i++) {
            if (this.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }
        return contentTypes[0];
    };
    AlfrescoApiClient.prototype.isFileParam = function (param) {
        if (typeof Buffer === 'function' && param instanceof Buffer) {
            return true;
        }
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }
        if (typeof File === 'function' && param instanceof File) {
            return true;
        }
        if (typeof File === 'object' && param instanceof File) {
            return true;
        }
        return false;
    };
    AlfrescoApiClient.prototype.normalizeParams = function (params) {
        var newParams = {};
        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] !== undefined && params[key] !== null) {
                var value = params[key];
                if (this.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                }
                else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }
        return newParams;
    };
    AlfrescoApiClient.prototype.buildCollectionParam = function (param, collectionFormat) {
        if (!param) {
            return null;
        }
        switch (collectionFormat) {
            case 'csv':
                return param.map(this.paramToString).join(',');
            case 'ssv':
                return param.map(this.paramToString).join(' ');
            case 'tsv':
                return param.map(this.paramToString).join('\t');
            case 'pipes':
                return param.map(this.paramToString).join('|');
            case 'multi':
                return param.map(this.paramToString);
            default:
                throw new Error('Unknown collection format: ' + collectionFormat);
        }
    };
    AlfrescoApiClient.prototype.isWithCredentials = function () {
        if (this.config) {
            return this.config.withCredentials;
        }
        else {
            return false;
        }
    };
    AlfrescoApiClient.prototype.applyAuthToRequest = function (request) {
        if (this.authentications) {
            switch (this.authentications.type) {
                case 'basic':
                    var basicAuth = this.authentications.basicAuth;
                    if (basicAuth.username || basicAuth.password) {
                        request.auth(basicAuth.username ? encodeURI(basicAuth.username) : '', basicAuth.password ? encodeURI(basicAuth.password) : '');
                    }
                    break;
                case 'activiti':
                    if (this.authentications.basicAuth.ticket) {
                        request.set({ 'Authorization': this.authentications.basicAuth.ticket });
                    }
                    break;
                case 'oauth2':
                    var oauth2 = this.authentications.oauth2;
                    if (oauth2.accessToken) {
                        request.set({ 'Authorization': 'Bearer ' + oauth2.accessToken });
                    }
                    break;
                default:
                    throw new Error('Unknown authentication type: ' + this.authentications.type);
            }
        }
    };
    AlfrescoApiClient.prototype.deserialize = function (response, returnType) {
        if (response === null) {
            return null;
        }
        var data = response.body;
        if (data === null) {
            data = response.text;
        }
        if (returnType) {
            data = new returnType(data);
        }
        return data;
    };
    AlfrescoApiClient.prototype.basicAuth = function (username, password) {
        var str = username + ':' + password;
        var base64;
        if (typeof Buffer === 'function') {
            base64 = Buffer.from(str.toString(), 'binary').toString('base64');
        }
        else {
            base64 = btoa(str);
        }
        return 'Basic ' + base64;
    };
    AlfrescoApiClient.prototype.callApi = function (path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, contentTypes, accepts, returnType, contextRoot, responseType) {
        var url;
        if (contextRoot) {
            var basePath = this.host + "/" + contextRoot;
            url = this.buildUrlCustomBasePath(basePath, path, pathParams);
        }
        else {
            url = this.buildUrl(path, pathParams);
        }
        return this.callHostApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, contentTypes, accepts, returnType, contextRoot, responseType, url);
    };
    AlfrescoApiClient.prototype.callCustomApi = function (path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, contentTypes, accepts, returnType, contextRoot, responseType) {
        var url = this.buildUrlCustomBasePath(path, '', pathParams);
        return this.callHostApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, contentTypes, accepts, returnType, contextRoot, responseType, url);
    };
    AlfrescoApiClient.prototype.callHostApi = function (path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, contentTypes, accepts, returnType, contextRoot, responseType, url) {
        var _this_1 = this;
        var eventEmitter = {};
        Emitter(eventEmitter);
        var request = this.buildRequest(httpMethod, url, queryParams, headerParams, formParams, bodyParam, contentTypes, accepts, responseType, eventEmitter, returnType);
        if (returnType === 'Binary') {
            request = request.buffer(true).parse(superagent.parse['application/octet-stream']);
        }
        var promise = new Promise(function (resolve, reject) {
            request.end(function (error, response) {
                if (error) {
                    _this_1.emit('error', error);
                    eventEmitter.emit('error', error);
                    if (error.status === 401) {
                        _this_1.emit('unauthorized');
                        eventEmitter.emit('unauthorized');
                    }
                    if (response && response.text) {
                        error = error || {};
                        reject(Object.assign(error, { message: response.text }));
                    }
                    else {
                        reject({ error: error });
                    }
                }
                else {
                    if (_this_1.isBpmRequest()) {
                        if (response.header && response.header.hasOwnProperty('set-cookie')) {
                            _this_1.authentications.cookie = response.header['set-cookie'];
                        }
                    }
                    var data = {};
                    if (response.type === 'text/html') {
                        data = _this_1.deserialize(response);
                    }
                    else {
                        data = _this_1.deserialize(response, returnType);
                    }
                    eventEmitter.emit('success', data);
                    resolve(data);
                }
            }).on('abort', function () {
                eventEmitter.emit('abort');
            });
        });
        promise.on = function () {
            eventEmitter.on.apply(eventEmitter, arguments);
            return this;
        };
        promise.once = function () {
            eventEmitter.once.apply(eventEmitter, arguments);
            return this;
        };
        promise.emit = function () {
            eventEmitter.emit.apply(eventEmitter, arguments);
            return this;
        };
        promise.off = function () {
            eventEmitter.off.apply(eventEmitter, arguments);
            return this;
        };
        promise.abort = function () {
            request.abort();
            return this;
        };
        return promise;
    };
    AlfrescoApiClient.prototype.isBpmRequest = function () {
        return this.className === 'ProcessAuth' || this.className === 'ProcessClient';
    };
    AlfrescoApiClient.prototype.isCsrfEnabled = function () {
        if (this.config) {
            return !this.config.disableCsrf;
        }
        else {
            return true;
        }
    };
    AlfrescoApiClient.prototype.setCsrfToken = function (request) {
        var token = this.createCSRFToken();
        request.set('X-CSRF-TOKEN', token);
        if (this.isNodeEnv()) {
            request.set('Cookie', 'CSRF-TOKEN=' + token + ';path=/');
        }
        try {
            document.cookie = 'CSRF-TOKEN=' + token + ';path=/';
        }
        catch (err) {
        }
    };
    AlfrescoApiClient.prototype.isNodeEnv = function () {
        return (typeof process !== 'undefined') && (process.release && process.release.name === 'node');
    };
    AlfrescoApiClient.prototype.createCSRFToken = function (a) {
        return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e16] + (1e16).toString()).replace(/[01]/g, this.createCSRFToken);
    };
    AlfrescoApiClient.prototype.progress = function (event, eventEmitter) {
        if (event.lengthComputable) {
            var percent = Math.round(event.loaded / event.total * 100);
            eventEmitter.emit('progress', {
                total: event.total,
                loaded: event.loaded,
                percent: percent
            });
        }
    };
    AlfrescoApiClient.prototype.buildUrlCustomBasePath = function (basePath, path, pathParams) {
        if (path && path !== '' && !path.match(/^\//)) {
            path = '/' + path;
        }
        var url = basePath + path;
        var _this = this;
        url = url.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = _this.paramToString(pathParams[key]);
            }
            else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
        return url;
    };
    AlfrescoApiClient.prototype.buildRequest = function (httpMethod, url, queryParams, headerParams, formParams, bodyParam, contentTypes, accepts, responseType, eventEmitter, returnType) {
        var _this_1 = this;
        var request = superagent(httpMethod, url);
        this.applyAuthToRequest(request);
        request.query(this.normalizeParams(queryParams));
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));
        if (this.isBpmRequest() && this.isCsrfEnabled()) {
            this.setCsrfToken(request);
        }
        if (this.isWithCredentials()) {
            request.withCredentials();
        }
        if (this.isBpmRequest()) {
            request._withCredentials = true;
            if (this.authentications.cookie) {
                if (this.isNodeEnv()) {
                    request.set('Cookie', this.authentications.cookie);
                }
            }
        }
        request.timeout(this.timeout);
        var contentType = this.jsonPreferredMime(contentTypes);
        if (contentType && contentType !== 'multipart/form-data') {
            request.type(contentType);
        }
        else if (!request.header['Content-Type'] && contentType !== 'multipart/form-data') {
            request.type('application/json');
        }
        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(this.normalizeParams(formParams)).on('progress', function (event) {
                _this_1.progress(event, eventEmitter);
            });
        }
        else if (contentType === 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        request.attach(key, _formParams[key]).on('progress', function (event) {
                            _this_1.progress(event, eventEmitter);
                        });
                    }
                    else {
                        request.field(key, _formParams[key]).on('progress', function (event) {
                            _this_1.progress(event, eventEmitter);
                        });
                    }
                }
            }
        }
        else if (bodyParam) {
            request.send(bodyParam).on('progress', function (event) {
                _this_1.progress(event, eventEmitter);
            });
        }
        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }
        if (returnType === 'Blob' || responseType === 'blob' || responseType === 'Blob') {
            request.responseType('blob');
        }
        else if (returnType === 'String') {
            request.responseType('string');
        }
        return request;
    };
    return AlfrescoApiClient;
}());

//# sourceMappingURL=alfrescoApiClient.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17).Buffer))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authentication; });
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
var Authentication = (function () {
    function Authentication(input) {
        Object.assign(this, input);
    }
    return Authentication;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(25)(); // Support ES3 engines

module.exports = function (val) {
 return (val !== _undefined) && (val !== null);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(12);
var RequestBase = __webpack_require__(11);
var isObject = __webpack_require__(4);
var ResponseBase = __webpack_require__(10);
var Agent = __webpack_require__(8);

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify,
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse,
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Storage; });
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
var Storage = (function () {
    function Storage() {
        if (this.supportsStorage()) {
            this._storage = window.localStorage;
        }
    }
    Storage.prototype.supportsStorage = function () {
        try {
            return 'sessionStorage' in window && window.sessionStorage !== null;
        }
        catch (e) {
            return false;
        }
    };
    Storage.prototype.setStorage = function (storage) {
        this._storage = storage;
    };
    Storage.prototype.setItem = function (key, value) {
        if (this.supportsStorage()) {
            this._storage.setItem(key, value);
        }
    };
    Storage.prototype.removeItem = function (key) {
        if (this.supportsStorage()) {
            this._storage.removeItem(key);
        }
    };
    Storage.prototype.getItem = function (key) {
        if (this.supportsStorage()) {
            return this._storage.getItem(key);
        }
    };
    return Storage;
}());

//# sourceMappingURL=storage.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/event-emitter/index.js
var event_emitter = __webpack_require__(0);

// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/auth-rest-api/model/ticket.js
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
var Ticket = (function () {
    function Ticket(input) {
        if (input) {
            Object.assign(this, input);
        }
    }
    return Ticket;
}());

//# sourceMappingURL=ticket.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/auth-rest-api/model/ticketEntry.js
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

var ticketEntry_TicketEntry = (function () {
    function TicketEntry(input) {
        if (input) {
            Object.assign(this, input);
            this.entry = input.entry ? new Ticket(input.entry) : undefined;
        }
    }
    return TicketEntry;
}());

//# sourceMappingURL=ticketEntry.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/auth-rest-api/model/validTicket.js
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
var ValidTicket = (function () {
    function ValidTicket(input) {
        if (input) {
            Object.assign(this, input);
        }
    }
    return ValidTicket;
}());

//# sourceMappingURL=validTicket.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/auth-rest-api/model/validTicketEntry.js
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

var validTicketEntry_ValidTicketEntry = (function () {
    function ValidTicketEntry(input) {
        if (input) {
            Object.assign(this, input);
            this.entry = input.entry ? new ValidTicket(input.entry) : undefined;
        }
    }
    return ValidTicketEntry;
}());

//# sourceMappingURL=validTicketEntry.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/auth-rest-api/api/base.api.js
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
var BaseApi = (function () {
    function BaseApi(alfrescoApi) {
        if (alfrescoApi) {
            this.apiClient = alfrescoApi.authClient;
        }
    }
    BaseApi.prototype.errorMessage = function (param, methodName) {
        return "Missing param " + param + " in " + methodName;
    };
    return BaseApi;
}());

//# sourceMappingURL=base.api.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/auth-rest-api/api/authentication.api.js
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




var authentication_api_AuthenticationApi = (function (_super) {
    __extends(AuthenticationApi, _super);
    function AuthenticationApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthenticationApi.prototype.createTicket = function (ticketBodyCreate) {
        var postBody = ticketBodyCreate;
        if (ticketBodyCreate === undefined || ticketBodyCreate === null) {
            throw new Error("Required param 'ticketBodyCreate' in createTicket");
        }
        var pathParams = {};
        var queryParams = {};
        var headerParams = {};
        var formParams = {};
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        return this.apiClient.callApi('/tickets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts, ticketEntry_TicketEntry);
    };
    AuthenticationApi.prototype.deleteTicket = function () {
        var postBody = null;
        var pathParams = {};
        var queryParams = {};
        var headerParams = {};
        var formParams = {};
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        return this.apiClient.callApi('/tickets/-me-', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts);
    };
    AuthenticationApi.prototype.validateTicket = function () {
        var postBody = null;
        var pathParams = {};
        var queryParams = {};
        var headerParams = {};
        var formParams = {};
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        return this.apiClient.callApi('/tickets/-me-', 'GET', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts, validTicketEntry_ValidTicketEntry);
    };
    return AuthenticationApi;
}(BaseApi));

//# sourceMappingURL=authentication.api.js.map
// EXTERNAL MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/alfrescoApiClient.js
var alfrescoApiClient = __webpack_require__(1);

// EXTERNAL MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/authentication/authentication.js
var authentication = __webpack_require__(2);

// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/authentication/contentAuth.js
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





var contentAuth_Emitter = event_emitter;
var contentAuth_ContentAuth = (function (_super) {
    __extends(ContentAuth, _super);
    function ContentAuth(config, alfrescoApi) {
        var _this = _super.call(this) || this;
        _this.className = 'ContentAuth';
        _this.setConfig(config);
        contentAuth_Emitter.call(_this);
        return _this;
    }
    ContentAuth.getInstance = function (config, alfrescoApi) {
        if (!ContentAuth.instance) {
            ContentAuth.instance = new ContentAuth(config, alfrescoApi);
        }
        else {
            ContentAuth.instance.setConfig(config);
        }
        ContentAuth.instance.authApi = new authentication_api_AuthenticationApi(alfrescoApi);
        return ContentAuth.instance;
    };
    ContentAuth.prototype.setConfig = function (config) {
        this.config = config;
        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1';
        if (this.config.domainPrefix) {
            this.ticketStorageLabel = this.config.domainPrefix.concat('-ticket-ECM');
        }
        else {
            this.ticketStorageLabel = 'ticket-ECM';
        }
        if (this.config.ticketEcm) {
            this.setTicket(config.ticketEcm);
        }
        else if (this.storage.getItem(this.ticketStorageLabel)) {
            this.setTicket(this.storage.getItem(this.ticketStorageLabel));
        }
    };
    ContentAuth.prototype.changeHost = function () {
        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1';
        this.ticket = undefined;
    };
    ContentAuth.prototype.saveUsername = function (username) {
        if (this.storage.supportsStorage()) {
            this.storage.setItem('ACS_USERNAME', username);
        }
    };
    ContentAuth.prototype.login = function (username, password) {
        var _this = this;
        this.authentications.basicAuth.username = username;
        this.authentications.basicAuth.password = password;
        var loginRequest = {};
        loginRequest.userId = this.authentications.basicAuth.username;
        loginRequest.password = this.authentications.basicAuth.password;
        var promise = new Promise(function (resolve, reject) {
            _this.authApi.createTicket(loginRequest)
                .then(function (data) {
                _this.saveUsername(username);
                _this.setTicket(data.entry.id);
                promise.emit('success');
                resolve(data.entry.id);
            })
                .catch(function (error) {
                _this.saveUsername('');
                if (error.status === 401) {
                    promise.emit('unauthorized');
                }
                else if (error.status === 403) {
                    promise.emit('forbidden');
                }
                else {
                    promise.emit('error');
                }
                reject(error);
            });
        });
        contentAuth_Emitter(promise);
        return promise;
    };
    ContentAuth.prototype.validateTicket = function () {
        var _this = this;
        this.setTicket(this.config.ticketEcm);
        var promise = new Promise(function (resolve, reject) {
            _this.authApi.validateTicket().then(function (data) {
                _this.setTicket(data.entry.id);
                promise.emit('success');
                resolve(data.entry.id);
            }, function (error) {
                if (error.status === 401) {
                    promise.emit('unauthorized');
                }
                promise.emit('error');
                reject(error);
            });
        });
        contentAuth_Emitter(promise);
        return promise;
    };
    ContentAuth.prototype.logout = function () {
        var _this = this;
        this.saveUsername('');
        var promise = new Promise(function (resolve, reject) {
            _this.authApi.deleteTicket().then(function () {
                promise.emit('logout');
                _this.invalidateSession();
                resolve('logout');
            }, function (error) {
                if (error.status === 401) {
                    promise.emit('unauthorized');
                }
                promise.emit('error');
                reject(error);
            });
        });
        contentAuth_Emitter(promise);
        return promise;
    };
    ContentAuth.prototype.setTicket = function (ticket) {
        this.authentications.basicAuth.username = 'ROLE_TICKET';
        this.authentications.basicAuth.password = ticket;
        this.storage.setItem(this.ticketStorageLabel, ticket);
        this.ticket = ticket;
    };
    ContentAuth.prototype.getTicket = function () {
        return this.ticket;
    };
    ContentAuth.prototype.invalidateSession = function () {
        this.storage.removeItem(this.ticketStorageLabel);
        this.authentications.basicAuth.username = null;
        this.authentications.basicAuth.password = null;
        this.ticket = null;
    };
    ContentAuth.prototype.isLoggedIn = function () {
        return !!this.ticket;
    };
    ContentAuth.prototype.getAuthentication = function () {
        return this.authentications;
    };
    ContentAuth.instance = null;
    ContentAuth.authentications = new authentication["a" /* Authentication */]({
        'basicAuth': { ticket: '' }, type: 'basic'
    });
    return ContentAuth;
}(alfrescoApiClient["a" /* AlfrescoApiClient */]));

contentAuth_Emitter(contentAuth_ContentAuth.prototype);
//# sourceMappingURL=contentAuth.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/authentication/processAuth.js
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




var processAuth_Emitter = event_emitter;
var processAuth_ProcessAuth = (function (_super) {
    __extends(ProcessAuth, _super);
    function ProcessAuth(config) {
        var _this = _super.call(this) || this;
        _this.authentications = new authentication["a" /* Authentication */]({
            'basicAuth': { ticket: '' }, type: 'activiti'
        });
        _this.className = 'ProcessAuth';
        _this.setConfig(config);
        processAuth_Emitter.call(_this);
        return _this;
    }
    ProcessAuth.getInstance = function (config) {
        if (!ProcessAuth.instance) {
            ProcessAuth.instance = new ProcessAuth(config);
        }
        else {
            ProcessAuth.instance.setConfig(config);
        }
        return ProcessAuth.instance;
    };
    ProcessAuth.prototype.setConfig = function (config) {
        this.config = config;
        this.ticket = undefined;
        this.basePath = config.hostBpm + '/' + this.config.contextRootBpm;
        if (this.config.ticketBpm) {
            this.setTicket(config.ticketBpm);
        }
        else if (this.storage.getItem('ticket-BPM')) {
            this.setTicket(this.storage.getItem('ticket-BPM'));
        }
    };
    ProcessAuth.prototype.changeHost = function () {
        this.basePath = this.config.hostBpm + '/' + this.config.contextRootBpm;
        this.ticket = undefined;
    };
    ProcessAuth.prototype.changeCsrfConfig = function (disableCsrf) {
        this.config.disableCsrf = disableCsrf;
    };
    ProcessAuth.prototype.saveUsername = function (username) {
        if (this.storage.supportsStorage()) {
            this.storage.setItem('APS_USERNAME', username);
        }
    };
    ProcessAuth.prototype.login = function (username, password) {
        var _this = this;
        this.authentications.basicAuth.username = username;
        this.authentications.basicAuth.password = password;
        var postBody = {}, pathParams = {}, queryParams = {};
        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        };
        var formParams = {
            j_username: this.authentications.basicAuth.username,
            j_password: this.authentications.basicAuth.password,
            _spring_security_remember_me: true,
            submit: 'Login'
        };
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];
        var promise = new Promise(function (resolve, reject) {
            _this.callApi('/app/authentication', 'POST', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts).then(function (data) {
                _this.saveUsername(username);
                var ticket = _this.basicAuth(_this.authentications.basicAuth.username, _this.authentications.basicAuth.password);
                _this.setTicket(ticket);
                promise.emit('success');
                resolve(ticket);
            }, function (error) {
                _this.saveUsername('');
                if (error.status === 401) {
                    promise.emit('unauthorized');
                }
                else if (error.status === 403) {
                    promise.emit('forbidden');
                }
                else {
                    promise.emit('error');
                }
                reject(error);
            });
        });
        processAuth_Emitter(promise);
        return promise;
    };
    ProcessAuth.prototype.logout = function () {
        var _this = this;
        this.saveUsername('');
        var postBody = {}, pathParams = {}, queryParams = {}, headerParams = {}, formParams = {};
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];
        var promise = new Promise(function (resolve, reject) {
            _this.callApi('/app/logout', 'GET', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts).then(function () {
                _this.invalidateSession();
                promise.emit('logout');
                resolve('logout');
            }, function (error) {
                if (error.status === 401) {
                    promise.emit('unauthorized');
                }
                promise.emit('error');
                reject(error);
            });
        });
        processAuth_Emitter(promise);
        return promise;
    };
    ProcessAuth.prototype.setTicket = function (ticket) {
        this.authentications.basicAuth.ticket = ticket;
        this.authentications.basicAuth.password = null;
        this.storage.setItem('ticket-BPM', ticket);
        this.ticket = ticket;
    };
    ProcessAuth.prototype.invalidateSession = function () {
        this.storage.removeItem('ticket-BPM');
        this.authentications.basicAuth.ticket = null;
        this.authentications.basicAuth.password = null;
        this.authentications.basicAuth.username = null;
        this.ticket = null;
    };
    ProcessAuth.prototype.getTicket = function () {
        return this.ticket;
    };
    ProcessAuth.prototype.isLoggedIn = function () {
        return !!this.ticket;
    };
    ProcessAuth.prototype.getAuthentication = function () {
        return this.authentications;
    };
    ProcessAuth.instance = null;
    return ProcessAuth;
}(alfrescoApiClient["a" /* AlfrescoApiClient */]));

processAuth_Emitter(processAuth_ProcessAuth.prototype);
//# sourceMappingURL=processAuth.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/authentication/oauth2Auth.js
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




var oauth2Auth_Emitter = event_emitter;
var oauth2Auth_Oauth2Auth = (function (_super) {
    __extends(Oauth2Auth, _super);
    function Oauth2Auth(config) {
        var _this = _super.call(this) || this;
        _this.authentications = new authentication["a" /* Authentication */]({
            'oauth2': { accessToken: '' }, type: 'oauth2', 'basicAuth': {}
        });
        _this.className = 'Oauth2Auth';
        _this.setConfig(config);
        oauth2Auth_Emitter.call(_this);
        return _this;
    }
    Oauth2Auth.getInstance = function (config) {
        if (!Oauth2Auth.instance) {
            Oauth2Auth.instance = new Oauth2Auth(config);
        }
        else {
            Oauth2Auth.instance.setConfig(config);
        }
        return Oauth2Auth.instance;
    };
    Oauth2Auth.prototype.setConfig = function (config) {
        this.config = config;
        if (this.config.oauth2) {
            if (this.config.oauth2.host === undefined || this.config.oauth2.host === null) {
                throw 'Missing the required oauth2 host parameter';
            }
            if (this.config.oauth2.clientId === undefined || this.config.oauth2.clientId === null) {
                throw 'Missing the required oauth2 clientId parameter';
            }
            if (this.config.oauth2.scope === undefined || this.config.oauth2.scope === null) {
                throw 'Missing the required oauth2 scope parameter';
            }
            if (this.config.oauth2.secret === undefined || this.config.oauth2.secret === null) {
                this.config.oauth2.secret = '';
            }
            if ((this.config.oauth2.redirectUri === undefined || this.config.oauth2.redirectUri === null) && this.config.oauth2.implicitFlow) {
                throw 'Missing redirectUri required parameter';
            }
            if (!this.config.oauth2.refreshTokenTimeout) {
                this.config.oauth2.refreshTokenTimeout = 40000;
            }
            if (!this.config.oauth2.redirectSilentIframeUri) {
                var context_1 = '';
                if (typeof window !== 'undefined') {
                    context_1 = window.location.origin;
                }
                this.config.oauth2.redirectSilentIframeUri = context_1 + '/assets/silent-refresh.html';
            }
            this.basePath = this.config.oauth2.host;
            this.host = this.config.oauth2.host;
            this.initOauth();
        }
    };
    Oauth2Auth.prototype.initOauth = function () {
        var _this = this;
        if (!this.config.oauth2.implicitFlow && this.isValidAccessToken()) {
            var accessToken = this.storage.getItem('access_token');
            this.setToken(accessToken, null);
        }
        return Promise.resolve()
            .then(function () {
            return _this.discoveryUrls();
        })
            .then(function () {
            if (_this.config.oauth2.implicitFlow) {
                return _this.loadJwks();
            }
        })
            .then(function () {
            if (_this.config.oauth2.implicitFlow) {
                return _this.checkFragment();
            }
        });
    };
    Oauth2Auth.prototype.discoveryUrls = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var discoveryStore = _this.storage.getItem('discovery');
            if (discoveryStore) {
                _this.discovery = JSON.parse(discoveryStore);
            }
            if (!_this.discovery) {
                var postBody = {}, pathParams = {}, queryParams = {}, formParams = {}, headerParams = {};
                var contentTypes = ['application/json'];
                var accepts = ['application/json'];
                var url = '.well-known/openid-configuration';
                _this.callApi(url, 'GET', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts).then(function (discovery) {
                    _this.discovery = {};
                    _this.discovery.loginUrl = discovery.authorization_endpoint;
                    _this.discovery.logoutUrl = discovery.end_session_endpoint;
                    _this.discovery.grantTypesSupported = discovery.grant_types_supported;
                    _this.discovery.issuer = discovery.issuer;
                    _this.discovery.tokenEndpoint = discovery.token_endpoint;
                    _this.discovery.userinfoEndpoint = discovery.userinfo_endpoint;
                    _this.discovery.jwksUri = discovery.jwks_uri;
                    _this.discovery.sessionCheckIFrameUrl = discovery.check_session_iframe;
                    _this.emit('discovery', _this.discovery);
                    _this.storage.setItem('discovery', JSON.stringify(_this.discovery));
                    resolve(discovery);
                }, function (error) {
                    reject(error.error);
                });
            }
            else {
                _this.emit('discovery', _this.discovery);
                resolve(_this.discovery);
            }
        });
    };
    Oauth2Auth.prototype.loadJwks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var jwksStore = _this.storage.getItem('jwks');
            if (jwksStore) {
                _this.jwks = JSON.parse(jwksStore);
            }
            if (_this.discovery.jwksUri) {
                if (!_this.jwks) {
                    var postBody = {}, pathParams = {}, queryParams = {}, formParams = {}, headerParams = {};
                    var contentTypes = ['application/json'];
                    var accepts = ['application/json'];
                    _this.callCustomApi(_this.discovery.jwksUri, 'GET', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts).then(function (jwks) {
                        _this.jwks = jwks;
                        _this.emit('jwks', jwks);
                        _this.storage.setItem('jwks', JSON.stringify(jwks));
                        resolve(jwks);
                    }, function (error) {
                        reject(error.error);
                    });
                }
                else {
                    _this.emit('jwks', _this.jwks);
                    resolve(_this.jwks);
                }
            }
            else {
                reject('jwks error');
            }
        });
    };
    Oauth2Auth.prototype.checkFragment = function (externalHash) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.hashFragmentParams = _this.getHashFragmentParams(externalHash);
            if (externalHash === undefined && _this.isValidAccessToken()) {
                var accessToken = _this.storage.getItem('access_token');
                _this.setToken(accessToken, null);
                _this.silentRefresh();
                resolve(accessToken);
            }
            if (_this.hashFragmentParams) {
                var accessToken_1 = _this.hashFragmentParams.access_token;
                var idToken_1 = _this.hashFragmentParams.id_token;
                var sessionState = _this.hashFragmentParams.session_state;
                var expiresIn_1 = _this.hashFragmentParams.expires_in;
                if (!sessionState) {
                    reject('session state not present');
                }
                _this.processJWTToken(idToken_1).then(function (jwt) {
                    if (jwt) {
                        _this.storeIdToken(idToken_1, jwt.payload.exp);
                        _this.storeAccessToken(accessToken_1, expiresIn_1);
                        _this.authentications.basicAuth.username = jwt.payload.preferred_username;
                        _this.saveUsername(jwt.payload.preferred_username);
                        _this.silentRefresh();
                        resolve(accessToken_1);
                    }
                }, function (error) {
                    reject('Validation JWT error' + error);
                });
            }
            else {
                if (_this.config.oauth2.silentLogin) {
                    _this.implicitLogin();
                }
            }
        });
    };
    Oauth2Auth.prototype.padBase64 = function (base64data) {
        while (base64data.length % 4 !== 0) {
            base64data += '=';
        }
        return base64data;
    };
    Oauth2Auth.prototype.processJWTToken = function (jwt) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (jwt) {
                var jwtArray = jwt.split('.');
                var headerBase64 = _this.padBase64(jwtArray[0]);
                var headerJson = _this.b64DecodeUnicode(headerBase64);
                var header = JSON.parse(headerJson);
                var payloadBase64 = _this.padBase64(jwtArray[1]);
                var payloadJson = _this.b64DecodeUnicode(payloadBase64);
                var payload = JSON.parse(payloadJson);
                var savedNonce = _this.storage.getItem('nonce');
                if (!payload.sub) {
                    reject('Missing sub in JWT');
                }
                if (payload.nonce !== savedNonce) {
                    reject('Failing nonce JWT is not corrisponding' + payload.nonce);
                }
                if (_this.jwks) {
                    resolve({
                        idToken: jwt,
                        payload: payload,
                        header: header
                    });
                }
            }
        });
    };
    Oauth2Auth.prototype.b64DecodeUnicode = function (b64string) {
        var base64 = b64string.replace(/\-/g, '+').replace(/\_/g, '/');
        return decodeURIComponent(atob(base64)
            .split('')
            .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    };
    Oauth2Auth.prototype.storeIdToken = function (idToken, exp) {
        this.storage.setItem('id_token', idToken);
        this.storage.setItem('id_token_expires_at', Number(exp * 1000).toString());
        this.storage.setItem('id_token_stored_at', Date.now().toString());
    };
    Oauth2Auth.prototype.storeAccessToken = function (accessToken, expiresIn) {
        this.storage.setItem('access_token', accessToken);
        var expiresInMilliSeconds = expiresIn * 1000;
        var now = new Date();
        var expiresAt = now.getTime() + expiresInMilliSeconds;
        this.storage.setItem('access_token_expires_in', expiresAt);
        this.storage.setItem('access_token_stored_at', Date.now().toString());
        this.setToken(accessToken, null);
    };
    Oauth2Auth.prototype.saveUsername = function (username) {
        if (this.storage.supportsStorage()) {
            this.storage.setItem('USERNAME', username);
        }
    };
    Oauth2Auth.prototype.implicitLogin = function () {
        var _this = this;
        if (!this.isValidToken() || !this.isValidAccessToken()) {
            if (this.discovery && this.discovery.loginUrl) {
                this.redirectLogin();
            }
            else {
                this.on('discovery', function () {
                    _this.redirectLogin();
                });
            }
        }
        else {
            var accessToken = this.storage.getItem('access_token');
            this.setToken(accessToken, null);
        }
    };
    Oauth2Auth.prototype.isValidToken = function () {
        var validToken = false;
        if (this.getIdToken()) {
            var expiresAt = this.storage.getItem('id_token_expires_at'), now = new Date();
            if (expiresAt && parseInt(expiresAt, 10) >= now.getTime()) {
                validToken = true;
            }
        }
        return validToken;
    };
    Oauth2Auth.prototype.isValidAccessToken = function () {
        var validAccessToken = false;
        if (this.getAccessToken()) {
            var expiresAt = this.storage.getItem('access_token_expires_in');
            var now = new Date();
            if (expiresAt && parseInt(expiresAt, 10) >= now.getTime()) {
                validAccessToken = true;
            }
        }
        return validAccessToken;
    };
    Oauth2Auth.prototype.getIdToken = function () {
        return this.storage.getItem('id_token');
    };
    Oauth2Auth.prototype.getAccessToken = function () {
        return this.storage.getItem('access_token');
    };
    Oauth2Auth.prototype.redirectLogin = function () {
        if (this.config.oauth2.implicitFlow && typeof window !== 'undefined') {
            var href = this.composeImplicitLoginUrl();
            window.location.href = href;
            this.emit('implicit_redirect', href);
        }
    };
    Oauth2Auth.prototype.genNonce = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 40; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    Oauth2Auth.prototype.composeImplicitLoginUrl = function () {
        var nonce = this.genNonce();
        this.storage.setItem('nonce', nonce);
        var separation = this.discovery.loginUrl.indexOf('?') > -1 ? '&' : '?';
        return this.discovery.loginUrl +
            separation +
            'client_id=' +
            encodeURIComponent(this.config.oauth2.clientId) +
            '&redirect_uri=' +
            encodeURIComponent(this.config.oauth2.redirectUri) +
            '&scope=' +
            encodeURIComponent(this.config.oauth2.scope) +
            '&response_type=' +
            encodeURIComponent('id_token token') +
            '&nonce=' +
            encodeURIComponent(nonce);
    };
    Oauth2Auth.prototype.composeIframeLoginUrl = function () {
        var nonce = this.genNonce();
        this.storage.setItem('nonce', nonce);
        var separation = this.discovery.loginUrl.indexOf('?') > -1 ? '&' : '?';
        return this.discovery.loginUrl +
            separation +
            'client_id=' +
            encodeURIComponent(this.config.oauth2.clientId) +
            '&redirect_uri=' +
            encodeURIComponent(this.config.oauth2.redirectSilentIframeUri) +
            '&scope=' +
            encodeURIComponent(this.config.oauth2.scope) +
            '&response_type=' +
            encodeURIComponent('id_token token') +
            '&nonce=' +
            encodeURIComponent(nonce) +
            '&prompt=none';
    };
    Oauth2Auth.prototype.hasHashCharacter = function (hash) {
        return hash.indexOf('#') === 0;
    };
    Oauth2Auth.prototype.startWithHashRoute = function (hash) {
        return hash.startsWith('#/');
    };
    Oauth2Auth.prototype.getHashFragmentParams = function (externalHash) {
        var hashFragmentParams = null;
        if (typeof window !== 'undefined') {
            var hash = void 0;
            if (!externalHash) {
                hash = decodeURIComponent(window.location.hash);
                if (!this.startWithHashRoute(hash)) {
                    window.location.hash = '';
                }
            }
            else {
                hash = decodeURIComponent(externalHash);
                this.removeHashFromSilentIframe();
                this.destroyIframe();
            }
            if (this.hasHashCharacter(hash) && !this.startWithHashRoute(hash)) {
                var questionMarkPosition = hash.indexOf('?');
                if (questionMarkPosition > -1) {
                    hash = hash.substr(questionMarkPosition + 1);
                }
                else {
                    hash = hash.substr(1);
                }
                hashFragmentParams = this.parseQueryString(hash);
            }
        }
        return hashFragmentParams;
    };
    Oauth2Auth.prototype.parseQueryString = function (queryString) {
        var data = {};
        var pairs, pair, separatorIndex, escapedKey, escapedValue, key, value;
        if (queryString !== null) {
            pairs = queryString.split('&');
            for (var i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                separatorIndex = pair.indexOf('=');
                if (separatorIndex === -1) {
                    escapedKey = pair;
                    escapedValue = null;
                }
                else {
                    escapedKey = pair.substr(0, separatorIndex);
                    escapedValue = pair.substr(separatorIndex + 1);
                }
                key = decodeURIComponent(escapedKey);
                value = decodeURIComponent(escapedValue);
                if (key.substr(0, 1) === '/') {
                    key = key.substr(1);
                }
                data[key] = value;
            }
        }
        return data;
    };
    Oauth2Auth.prototype.silentRefresh = function () {
        var _this = this;
        if (typeof document === 'undefined') {
            throw new Error('Silent refresh supported only on browsers');
        }
        setTimeout(function () {
            _this.destroyIframe();
            _this.createIframe();
        }, this.config.oauth2.refreshTokenTimeout);
    };
    Oauth2Auth.prototype.removeHashFromSilentIframe = function () {
        var iframe = document.getElementById('silent_refresh_token_iframe');
        if (iframe && iframe.contentWindow.location.hash) {
            iframe.contentWindow.location.hash = '';
        }
    };
    Oauth2Auth.prototype.createIframe = function () {
        var _this = this;
        var iframe = document.createElement('iframe');
        iframe.id = 'silent_refresh_token_iframe';
        var loginUrl = this.composeIframeLoginUrl();
        iframe.setAttribute('src', loginUrl);
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        this.iFameHashListner = function () {
            var silentRefreshTokenIframe = document.getElementById('silent_refresh_token_iframe');
            var hash = silentRefreshTokenIframe.contentWindow.location.hash;
            _this.checkFragment(hash);
        };
        iframe.addEventListener('load', this.iFameHashListner);
    };
    Oauth2Auth.prototype.destroyIframe = function () {
        var iframe = document.getElementById('silent_refresh_token_iframe');
        if (iframe) {
            iframe.removeEventListener('load', this.iFameHashListner);
            document.body.removeChild(iframe);
        }
    };
    Oauth2Auth.prototype.login = function (username, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.discovery) {
                _this.grantPasswordLogin(username, password, resolve, reject);
            }
            else {
                _this.on('discovery', function () {
                    _this.grantPasswordLogin(username, password, resolve, reject);
                });
            }
        });
        return promise;
    };
    Oauth2Auth.prototype.grantPasswordLogin = function (username, password, resolve, reject) {
        var _this = this;
        var postBody = {}, pathParams = {}, queryParams = {};
        var authHeader = this.basicAuth(this.authentications.basicAuth.username, this.authentications.basicAuth.password);
        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': authHeader
        };
        var formParams = {
            username: username,
            password: password,
            grant_type: 'password',
            client_id: this.config.oauth2.clientId
        };
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];
        var promise = this.callCustomApi(this.discovery.tokenEndpoint, 'POST', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts).then(function (data) {
            _this.saveUsername(username);
            _this.setToken(data.access_token, data.refresh_token);
            _this.storeAccessToken(data.access_token, data.expires_in);
            resolve(data);
        }, function (error) {
            if (error.error.status === 401) {
                _this.emit('unauthorized');
            }
            _this.emit('error');
            reject(error.error);
        });
        oauth2Auth_Emitter(promise);
    };
    Oauth2Auth.prototype.refreshToken = function () {
        var _this = this;
        var postBody = {}, pathParams = {}, queryParams = {}, formParams = {};
        var auth = 'Basic ' + btoa(this.config.oauth2.clientId + ':' + this.config.oauth2.secret);
        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
            'Authorization': auth
        };
        queryParams = {
            refresh_token: this.authentications.oauth2.refreshToken,
            grant_type: 'refresh_token'
        };
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];
        var promise = new Promise(function (resolve, reject) {
            _this.callCustomApi(_this.discovery.tokenEndpoint, 'POST', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts).then(function (data) {
                _this.setToken(data.access_token, data.refresh_token);
                resolve(data);
            }, function (error) {
                if (error.error.status === 401) {
                    _this.emit('unauthorized');
                }
                _this.emit('error');
                reject(error.error);
            });
        });
        oauth2Auth_Emitter(promise);
        return promise;
    };
    Oauth2Auth.prototype.setToken = function (token, refreshToken) {
        this.authentications.oauth2.accessToken = token;
        this.authentications.oauth2.refreshToken = refreshToken;
        this.authentications.basicAuth.password = null;
        this.token = token;
        this.emit('token_issued');
    };
    Oauth2Auth.prototype.getToken = function () {
        return this.token;
    };
    Oauth2Auth.prototype.getAuthentication = function () {
        return this.authentications;
    };
    Oauth2Auth.prototype.changeHost = function (host) {
        this.config.hostOauth2 = host;
    };
    Oauth2Auth.prototype.isLoggedIn = function () {
        return !!this.authentications.oauth2.accessToken;
    };
    Oauth2Auth.prototype.logOut = function () {
        var _this = this;
        var id_token = this.getIdToken();
        this.invalidateSession();
        this.setToken(null, null);
        var separation = this.discovery.logoutUrl.indexOf('?') > -1 ? '&' : '?';
        var redirectLogout = this.config.oauth2.redirectUriLogout || this.config.oauth2.redirectUri;
        var logoutUrl = this.discovery.logoutUrl +
            separation +
            'post_logout_redirect_uri=' +
            encodeURIComponent(redirectLogout) +
            '&id_token_hint=' +
            encodeURIComponent(id_token);
        var returnPromise = Promise.resolve().then(function () {
            if (_this.config.oauth2.implicitFlow && typeof window !== 'undefined') {
                window.location.href = logoutUrl;
            }
        });
        return returnPromise;
    };
    Oauth2Auth.prototype.invalidateSession = function () {
        this.storage.removeItem('access_token');
        this.storage.removeItem('access_token_expires_in');
        this.storage.removeItem('access_token_stored_at');
        this.storage.removeItem('id_token');
        this.storage.removeItem('id_token');
        this.storage.removeItem('id_token_claims_obj');
        this.storage.removeItem('id_token_expires_at');
        this.storage.removeItem('id_token_stored_at');
        this.storage.removeItem('nonce');
        this.storage.removeItem('jwks');
        this.storage.removeItem('discovery');
    };
    Oauth2Auth.instance = null;
    return Oauth2Auth;
}(alfrescoApiClient["a" /* AlfrescoApiClient */]));

//# sourceMappingURL=oauth2Auth.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/contentClient.js
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


var contentClient_ContentClient = (function (_super) {
    __extends(ContentClient, _super);
    function ContentClient(config, servicePath) {
        var _this = _super.call(this) || this;
        _this.className = 'ContentClient';
        _this.config = config;
        _this.servicePath = servicePath;
        _this.changeHost();
        return _this;
    }
    ContentClient.prototype.changeHost = function () {
        this.host = this.config.hostEcm;
        this.basePath = this.config.hostEcm + "/" + this.config.contextRoot + this.servicePath;
    };
    ContentClient.prototype.setAuthentications = function (authentications) {
        this.authentications = authentications;
    };
    return ContentClient;
}(alfrescoApiClient["a" /* AlfrescoApiClient */]));

//# sourceMappingURL=contentClient.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/processClient.js
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


var processClient_ProcessClient = (function (_super) {
    __extends(ProcessClient, _super);
    function ProcessClient(config) {
        var _this = _super.call(this) || this;
        _this.className = 'ProcessClient';
        _this.config = config;
        _this.changeHost();
        return _this;
    }
    ProcessClient.prototype.changeHost = function () {
        this.host = this.config.hostBpm;
        this.basePath = this.config.hostBpm + "/" + this.config.contextRootBpm;
    };
    ProcessClient.prototype.setAuthentications = function (authentications) {
        this.authentications = authentications;
    };
    return ProcessClient;
}(alfrescoApiClient["a" /* AlfrescoApiClient */]));

//# sourceMappingURL=processClient.js.map
// EXTERNAL MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/storage.js
var storage = __webpack_require__(6);

// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/alfrescoApi.js
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







var alfrescoApi_Emitter = event_emitter;
var alfrescoApi_AlfrescoApi = (function () {
    function AlfrescoApi() {
        this.on = alfrescoApi_Emitter.on;
        this.off = alfrescoApi_Emitter.off;
        this.once = alfrescoApi_Emitter.once;
        this.emit = alfrescoApi_Emitter.emit;
        this.on = (new alfrescoApi_Emitter()).on;
        this.off = (new alfrescoApi_Emitter()).off;
        this.once = (new alfrescoApi_Emitter()).once;
        this.emit = (new alfrescoApi_Emitter()).emit;
        alfrescoApi_Emitter.call(this);
    }
    AlfrescoApi.prototype.setConfig = function (config) {
        if (!config) {
            config = {};
        }
        this.storage = new storage["a" /* Storage */]();
        this.config = {
            hostEcm: config.hostEcm || 'http://127.0.0.1:8080',
            hostBpm: config.hostBpm || 'http://127.0.0.1:9999',
            oauth2: config.oauth2,
            authType: config.authType || 'BASIC',
            contextRoot: config.contextRoot || 'alfresco',
            contextRootBpm: config.contextRootBpm || 'activiti-app',
            provider: config.provider || 'ECM',
            ticketEcm: config.ticketEcm,
            ticketBpm: config.ticketBpm,
            accessToken: config.accessToken,
            disableCsrf: config.disableCsrf || false,
            domainPrefix: config.domainPrefix || '',
            withCredentials: config.withCredentials || false
        };
        this.contentPrivateClient = new contentClient_ContentClient(this.config, '/api/-default-/private/alfresco/versions/1');
        this.contentClient = new contentClient_ContentClient(this.config, '/api/-default-/public/alfresco/versions/1');
        this.authClient = new contentClient_ContentClient(this.config, '/api/-default-/public/authentication/versions/1');
        this.searchClient = new contentClient_ContentClient(this.config, '/api/-default-/public/search/versions/1');
        this.discoveryClient = new contentClient_ContentClient(this.config, '/api');
        this.gsClient = new contentClient_ContentClient(this.config, '/api/-default-/public/gs/versions/1');
        this.processClient = new processClient_ProcessClient(this.config);
        this.errorListeners();
        if (this.isOauthConfiguration()) {
            this.oauth2Auth = oauth2Auth_Oauth2Auth.getInstance(this.config);
            this.setAuthenticationClientECMBPM(this.oauth2Auth.getAuthentication(), this.oauth2Auth.getAuthentication());
        }
        else {
            this.processAuth = processAuth_ProcessAuth.getInstance(this.config);
            this.contentAuth = contentAuth_ContentAuth.getInstance(this.config, this);
            this.setAuthenticationClientECMBPM(this.contentAuth.getAuthentication(), this.processAuth.getAuthentication());
        }
        return config;
    };
    AlfrescoApi.prototype.errorListeners = function () {
        var _this = this;
        this.contentClient.off('error', function () { });
        this.authClient.off('error', function () { });
        this.contentPrivateClient.off('error', function () { });
        this.processClient.off('error', function () { });
        this.searchClient.off('error', function () { });
        this.discoveryClient.off('error', function () { });
        this.gsClient.off('error', function () { });
        this.contentClient.on('error', function (error) {
            _this.errorHandler(error);
        });
        this.authClient.on('error', function (error) {
            _this.errorHandler(error);
        });
        this.contentPrivateClient.on('error', function (error) {
            _this.errorHandler(error);
        });
        this.processClient.on('error', function (error) {
            _this.errorHandler(error);
        });
        this.searchClient.on('error', function (error) {
            _this.errorHandler(error);
        });
        this.discoveryClient.on('error', function (error) {
            _this.errorHandler(error);
        });
        this.gsClient.on('error', function (error) {
            _this.errorHandler(error);
        });
    };
    AlfrescoApi.prototype.errorHandler = function (error) {
        if (error.status === 401) {
            this.invalidateSession();
        }
        this.emit('error', error);
    };
    AlfrescoApi.prototype.changeWithCredentialsConfig = function (withCredentials) {
        this.config.withCredentials = withCredentials;
    };
    AlfrescoApi.prototype.changeCsrfConfig = function (disableCsrf) {
        this.config.disableCsrf = disableCsrf;
        this.processAuth.changeCsrfConfig(disableCsrf);
    };
    AlfrescoApi.prototype.changeEcmHost = function (hostEcm) {
        this.config.hostEcm = hostEcm;
        this.contentAuth.changeHost();
        this.contentClient.changeHost();
        this.authClient.changeHost();
    };
    AlfrescoApi.prototype.changeBpmHost = function (hostBpm) {
        this.config.hostBpm = hostBpm;
        this.processAuth.changeHost();
        this.processClient.changeHost();
    };
    AlfrescoApi.prototype.login = function (username, password) {
        var _this = this;
        if (username) {
            username = username.trim();
        }
        if (this.isOauthConfiguration()) {
            var oauth2AuthPromise = void 0;
            oauth2AuthPromise = this.oauth2Auth.login(username, password);
            oauth2AuthPromise.then(function (accessToken) {
                _this.config.accessToken = accessToken;
            }, function () {
                console.log('login OAUTH error');
            });
            return oauth2AuthPromise;
        }
        else {
            if (this.isBpmConfiguration()) {
                var processPromise = this.processAuth.login(username, password);
                processPromise.then(function (ticketBpm) {
                    _this.config.ticketBpm = ticketBpm;
                }, function () {
                    console.log('login BPM error');
                });
                return processPromise;
            }
            else if (this.isEcmConfiguration()) {
                var contentPromise = this.contentAuth.login(username, password);
                contentPromise.then(function (ticketEcm) {
                    _this.setAuthenticationClientECMBPM(_this.contentAuth.getAuthentication(), null);
                    _this.config.ticketEcm = ticketEcm;
                }, function () {
                    console.log('login ECM error');
                });
                return contentPromise;
            }
            else if (this.isEcmBpmConfiguration()) {
                var contentProcessPromise = this._loginBPMECM(username, password);
                contentProcessPromise.then(function (data) {
                    _this.config.ticketEcm = data[0];
                    _this.config.ticketBpm = data[1];
                });
                return contentProcessPromise;
            }
        }
    };
    AlfrescoApi.prototype.implicitLogin = function () {
        var _this = this;
        if (!this.isOauthConfiguration()) {
            return Promise.reject('Missing the required oauth2 configuration');
        }
        return new Promise(function () {
            _this.oauth2Auth.implicitLogin();
        });
    };
    AlfrescoApi.prototype.setAuthenticationClientECMBPM = function (authECM, authBPM) {
        this.contentClient.setAuthentications(authECM);
        this.authClient.setAuthentications(authECM);
        this.searchClient.setAuthentications(authECM);
        this.contentPrivateClient.setAuthentications(authECM);
        this.processClient.setAuthentications(authBPM);
        this.searchClient.setAuthentications(authECM);
        this.discoveryClient.setAuthentications(authECM);
        this.gsClient.setAuthentications(authECM);
    };
    AlfrescoApi.prototype.loginTicket = function (ticketEcm, ticketBpm) {
        this.config.ticketEcm = ticketEcm;
        this.config.ticketBpm = ticketBpm;
        return this.contentAuth.validateTicket();
    };
    AlfrescoApi.prototype._loginBPMECM = function (username, password) {
        var _this = this;
        var contentPromise = this.contentAuth.login(username, password);
        var processPromise = this.processAuth.login(username, password);
        var promise = new Promise(function (resolve, reject) {
            Promise.all([contentPromise, processPromise]).then(function (data) {
                promise.emit('success');
                resolve(data);
            }, function (error) {
                _this.contentAuth.invalidateSession();
                _this.processAuth.invalidateSession();
                if (error.status === 401) {
                    promise.emit('unauthorized');
                }
                promise.emit('error');
                reject(error);
            });
        });
        alfrescoApi_Emitter(promise);
        return promise;
    };
    AlfrescoApi.prototype.logout = function () {
        var _this = this;
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.logOut();
        }
        else {
            if (this.isBpmConfiguration()) {
                return this.processAuth.logout();
            }
            else if (this.isEcmConfiguration()) {
                var contentPromise = this.contentAuth.logout();
                contentPromise.then(function () {
                    _this.config.ticket = undefined;
                }, function () {
                });
                return contentPromise;
            }
            else if (this.isEcmBpmConfiguration()) {
                return this._logoutBPMECM();
            }
        }
    };
    AlfrescoApi.prototype._logoutBPMECM = function () {
        var _this = this;
        var contentPromise = this.contentAuth.logout();
        var processPromise = this.processAuth.logout();
        var promise = new Promise(function (resolve, reject) {
            Promise.all([contentPromise, processPromise]).then(function (data) {
                _this.config.ticket = undefined;
                promise.emit('logout');
                resolve('logout');
            }, function (error) {
                if (error.status === 401) {
                    promise.emit('unauthorized');
                }
                promise.emit('error');
                reject(error);
            });
        });
        alfrescoApi_Emitter(promise);
        return promise;
    };
    AlfrescoApi.prototype.isLoggedIn = function () {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.isLoggedIn();
        }
        else {
            if (this.isBpmConfiguration()) {
                return this.processAuth.isLoggedIn();
            }
            else if (this.isEcmConfiguration()) {
                return this.contentAuth.isLoggedIn();
            }
            else if (this.isEcmBpmConfiguration()) {
                return this.contentAuth.isLoggedIn() && this.processAuth.isLoggedIn();
            }
        }
    };
    AlfrescoApi.prototype.isBpmLoggedIn = function () {
        if (this.isBpmConfiguration() || this.isEcmBpmConfiguration()) {
            if (this.isOauthConfiguration()) {
                return this.oauth2Auth.isLoggedIn();
            }
            else {
                return this.processAuth.isLoggedIn();
            }
        }
        return false;
    };
    AlfrescoApi.prototype.isEcmLoggedIn = function () {
        if (this.isEcmConfiguration() || this.isEcmBpmConfiguration()) {
            if (this.isOauthConfiguration()) {
                return this.oauth2Auth.isLoggedIn();
            }
            else {
                return this.contentAuth.isLoggedIn();
            }
        }
        return false;
    };
    AlfrescoApi.prototype.getBpmUsername = function () {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.storage.getItem('USERNAME');
        }
        else {
            return this.processAuth.storage.getItem('APS_USERNAME');
        }
    };
    AlfrescoApi.prototype.getEcmUsername = function () {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.storage.getItem('USERNAME');
        }
        else {
            return this.contentAuth.storage.getItem('ACS_USERNAME');
        }
    };
    AlfrescoApi.prototype.refreshToken = function () {
        if (!this.isOauthConfiguration()) {
            return Promise.reject('Missing the required oauth2 configuration');
        }
        if (this.config.oauth2.implicitFlow) {
            return Promise.reject('Manual refresh token not possible in implicit flow');
        }
        return this.oauth2Auth.refreshToken();
    };
    AlfrescoApi.prototype.getTicketAuth = function () {
        return this.oauth2Auth && this.oauth2Auth.getToken();
    };
    AlfrescoApi.prototype.setTicket = function (ticketEcm, TicketBpm) {
        if (this.contentAuth) {
            this.contentAuth.setTicket(ticketEcm);
        }
        if (this.processAuth) {
            this.processAuth.setTicket(TicketBpm);
        }
    };
    AlfrescoApi.prototype.invalidateSession = function () {
        if (this.oauth2Auth) {
            this.oauth2Auth.invalidateSession();
        }
        else {
            this.contentAuth.invalidateSession();
            this.processAuth.invalidateSession();
        }
    };
    AlfrescoApi.prototype.getTicketBpm = function () {
        return this.processAuth && this.processAuth.getTicket();
    };
    AlfrescoApi.prototype.getTicketEcm = function () {
        return this.contentAuth && this.contentAuth.getTicket();
    };
    AlfrescoApi.prototype.getTicket = function () {
        return [this.contentAuth.getTicket(), this.processAuth.getTicket()];
    };
    AlfrescoApi.prototype.isBpmConfiguration = function () {
        return this.config.provider && this.config.provider.toUpperCase() === 'BPM';
    };
    AlfrescoApi.prototype.isEcmConfiguration = function () {
        return this.config.provider && this.config.provider.toUpperCase() === 'ECM';
    };
    AlfrescoApi.prototype.isOauthConfiguration = function () {
        return this.config.authType === 'OAUTH';
    };
    AlfrescoApi.prototype.isEcmBpmConfiguration = function () {
        return this.config.provider && this.config.provider.toUpperCase() === 'ALL';
    };
    return AlfrescoApi;
}());

//# sourceMappingURL=alfrescoApi.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/content-rest-api/model/dateAlfresco.js
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

var dateAlfresco_DateAlfresco = (function (_super) {
    __extends(DateAlfresco, _super);
    function DateAlfresco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateAlfresco.parseDate = function (dateToConvert) {
        if (dateToConvert instanceof Date) {
            return dateToConvert;
        }
        else if (typeof dateToConvert === 'number') {
            return new Date(dateToConvert);
        }
        var dateLength = 10;
        var separatorPos = dateToConvert.substring(dateLength).search(/[\+\-]/) + dateLength;
        var dateStr = separatorPos > dateLength ? dateToConvert.substring(0, separatorPos) : dateToConvert;
        var tzStr = separatorPos > dateLength ? dateToConvert.substring(separatorPos) : '';
        var parsedDate = this.parseDateTime(dateStr);
        var tzOffsetMins = this.parseDateTimeZone(tzStr);
        parsedDate.setTime(parsedDate.getTime() + tzOffsetMins * 60000);
        return parsedDate;
    };
    DateAlfresco.parseDateTime = function (dateToConvert) {
        var dateParts = dateToConvert.split(/[^0-9]/).map(function (s) {
            return parseInt(s, 10);
        });
        return new Date(Date.UTC(dateParts[0], dateParts[1] - 1 || 0, dateParts[2] || 1, dateParts[3] || 0, dateParts[4] || 0, dateParts[5] || 0, dateParts[6] || 0));
    };
    DateAlfresco.parseDateTimeZone = function (dateToConvert) {
        var match = /([\+\-])(\d{2}):?(\d{2})?/.exec(dateToConvert);
        if (match !== null) {
            return (parseInt(match[1] + '1', 10) * -1 * (parseInt(match[2], 10) * 60) + parseInt(match[3] || '0', 10));
        }
        else {
            return 0;
        }
    };
    return DateAlfresco;
}(Date));

//# sourceMappingURL=dateAlfresco.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/model/entitlementsInfo.js
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
var EntitlementsInfo = (function () {
    function EntitlementsInfo(input) {
        if (input) {
            Object.assign(this, input);
        }
    }
    return EntitlementsInfo;
}());

//# sourceMappingURL=entitlementsInfo.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/model/licenseInfo.js
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


var licenseInfo_LicenseInfo = (function () {
    function LicenseInfo(input) {
        if (input) {
            Object.assign(this, input);
            this.issuedAt = input.issuedAt ? dateAlfresco_DateAlfresco.parseDate(input.issuedAt) : undefined;
            this.expiresAt = input.expiresAt ? dateAlfresco_DateAlfresco.parseDate(input.expiresAt) : undefined;
            this.entitlements = input.entitlements ? new EntitlementsInfo(input.entitlements) : undefined;
        }
    }
    return LicenseInfo;
}());

//# sourceMappingURL=licenseInfo.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/model/moduleInfo.js
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

var moduleInfo_ModuleInfo = (function () {
    function ModuleInfo(input) {
        if (input) {
            Object.assign(this, input);
            this.installDate = input.installDate ? dateAlfresco_DateAlfresco.parseDate(input.installDate) : undefined;
        }
    }
    return ModuleInfo;
}());

//# sourceMappingURL=moduleInfo.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/model/statusInfo.js
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
var StatusInfo = (function () {
    function StatusInfo(input) {
        if (input) {
            Object.assign(this, input);
        }
    }
    return StatusInfo;
}());

//# sourceMappingURL=statusInfo.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/model/versionInfo.js
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
var VersionInfo = (function () {
    function VersionInfo(input) {
        if (input) {
            Object.assign(this, input);
        }
    }
    return VersionInfo;
}());

//# sourceMappingURL=versionInfo.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/model/repositoryInfo.js
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




var repositoryInfo_RepositoryInfo = (function () {
    function RepositoryInfo(input) {
        if (input) {
            Object.assign(this, input);
            this.version = input.version ? new VersionInfo(input.version) : undefined;
            this.status = input.status ? new StatusInfo(input.status) : undefined;
            this.license = input.license ? new licenseInfo_LicenseInfo(input.license) : undefined;
            if (input.modules) {
                this.modules = input.modules.map(function (item) {
                    return new moduleInfo_ModuleInfo(item);
                });
            }
        }
    }
    return RepositoryInfo;
}());

//# sourceMappingURL=repositoryInfo.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/model/repositoryEntry.js
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

var repositoryEntry_RepositoryEntry = (function () {
    function RepositoryEntry(input) {
        if (input) {
            Object.assign(this, input);
            this.repository = input.repository ? new repositoryInfo_RepositoryInfo(input.repository) : undefined;
        }
    }
    return RepositoryEntry;
}());

//# sourceMappingURL=repositoryEntry.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/model/discoveryEntry.js
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

var discoveryEntry_DiscoveryEntry = (function () {
    function DiscoveryEntry(input) {
        if (input) {
            Object.assign(this, input);
            this.entry = input.entry ? new repositoryEntry_RepositoryEntry(input.entry) : undefined;
        }
    }
    return DiscoveryEntry;
}());

//# sourceMappingURL=discoveryEntry.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/api/base.api.js
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
var base_api_BaseApi = (function () {
    function BaseApi(alfrescoApi) {
        this.apiClient = alfrescoApi.discoveryClient;
    }
    BaseApi.prototype.errorMessage = function (param, methodName) {
        return "Missing param " + param + " in " + methodName;
    };
    return BaseApi;
}());

//# sourceMappingURL=base.api.js.map
// CONCATENATED MODULE: /Users/eromano/Projects/dev-platform-js-api/node_modules/@alfresco/js-api/_esm5/src/api/discovery-rest-api/api/discovery.api.js
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



var discovery_api_DiscoveryApi = (function (_super) {
    __extends(DiscoveryApi, _super);
    function DiscoveryApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscoveryApi.prototype.getRepositoryInformation = function () {
        var postBody = null;
        var pathParams = {};
        var queryParams = {};
        var headerParams = {};
        var formParams = {};
        var contentTypes = [];
        var accepts = ['application/json'];
        return this.apiClient.callApi('/discovery', 'GET', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts, discoveryEntry_DiscoveryEntry);
    };
    return DiscoveryApi;
}(base_api_BaseApi));

//# sourceMappingURL=discovery.api.js.map
// CONCATENATED MODULE: ./index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleApiTest", function() { return index_SingleApiTest; });
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

var index_SingleApiTest = (function () {
    function SingleApiTest() {
        var alfrescoApi = new alfrescoApi_AlfrescoApi();
        alfrescoApi.setConfig({
            provider: 'ECM',
            hostEcm: 'http://localhost:3000',
            authType: 'BASIC',
            contextRoot: ''
        });
        var discovery = new discovery_api_DiscoveryApi(alfrescoApi);
        discovery.getRepositoryInformation().then(function (ecmVers) {
            console.log('ecmVers' + ecmVers);
        }, function (ecmVers) {
            console.log('error ecmvers' + ecmVers);
        });
    }
    return SingleApiTest;
}());



/***/ }),
/* 8 */
/***/ (function(module, exports) {

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(9);

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(4);

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(15)
var ieee754 = __webpack_require__(14)
var isArray = __webpack_require__(13)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return (str.contains("dwa") === true) && (str.contains("foo") === false);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(20)()
	? String.prototype.contains
	: __webpack_require__(19);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated



module.exports = function (obj) {
 return typeof obj === "function";
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(3);

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(3);

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(3);

var keys = Object.keys;

module.exports = function (object) {
	return keys(isValue(object) ? Object(object) : object);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
 return false;
}
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(27)()
	? Object.keys
	: __webpack_require__(26);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(28)
  , value = __webpack_require__(24)
  , max   = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(30)()
	? Object.assign
	: __webpack_require__(29);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign        = __webpack_require__(31)
  , normalizeOpts = __webpack_require__(23)
  , isCallable    = __webpack_require__(22)
  , contains      = __webpack_require__(21)

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ })
/******/ ]);
