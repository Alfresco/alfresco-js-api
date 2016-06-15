(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (Buffer){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['superagent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('superagent'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.ApiClient = factory(root.superagent);
  }
}(this, function(superagent) {
  'use strict';

  /**
   * @module ApiClient
   * @version 0.1.0
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:ApiClient
   * @class
   */
  var exports = function() {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://localhost/alfresco/api/-default-/public/authentication/versions/1
     */
    this.basePath = 'https://localhost/alfresco/api/-default-/public/authentication/versions/1'.replace(/\/+$/, '');

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
      'basicAuth': {type: 'basic'}
    };
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;
  };

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  exports.prototype.paramToString = function(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }
    return param.toString();
  };

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var url = this.basePath + path;
    var _this = this;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
  };

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {Array.<String>} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
   */
  exports.prototype.isFileParam = function(param) {
    // fs.ReadStream in Node.js (but not in runtime like browserify)
    if (typeof window === 'undefined' &&
        typeof require === 'function' &&
        require('fs') &&
        param instanceof require('fs').ReadStream) {
      return true;
    }
    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
      return true;
    }
    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
      return true;
    }
    return false;
  };

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Object.<String, Object>} params The parameters as object properties.
   * @returns {Object.<String, Object>} normalized parameters.
   */
  exports.prototype.normalizeParams = function(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String}
   * @readonly
   */
  exports.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
  };

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
    if (param == null) {
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
        // return the array directly as SuperAgent will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

  /**
   * Applies authentication headers to the request.
   * @param {Object} request The request object created by a <code>superagent()</code> call.
   * @param {Array.<String>} authNames An array of authentication method names.
   */
  exports.prototype.applyAuthToRequest = function(request, authNames) {
    var _this = this;
    authNames.forEach(function(authName) {
      var auth = _this.authentications[authName];
      switch (auth.type) {
        case 'basic':
          if (auth.username || auth.password) {
            request.auth(auth.username || '', auth.password || '');
          }
          break;
        case 'apiKey':
          if (auth.apiKey) {
            var data = {};
            if (auth.apiKeyPrefix) {
              data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
            } else {
              data[auth.name] = auth.apiKey;
            }
            if (auth['in'] === 'header') {
              request.set(data);
            } else {
              request.query(data);
            }
          }
          break;
        case 'oauth2':
          if (auth.accessToken) {
            request.set({'Authorization': 'Bearer ' + auth.accessToken});
          }
          break;
        default:
          throw new Error('Unknown authentication type: ' + auth.type);
      }
    });
  };

  /**
   * Deserializes an HTTP response body into a value of the specified type.
   * @param {Object} response A SuperAgent response object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns A value of the specified type.
   */
  exports.prototype.deserialize = function deserialize(response, returnType) {
    if (response == null || returnType == null) {
      return null;
    }
    // Rely on SuperAgent for parsing response body.
    // See http://visionmedia.github.io/superagent/#parsing-response-bodies
    var data = response.body;
    if (data == null) {
      // SuperAgent does not always produce a body; use the unparsed response as a fallback
      data = response.text;
    }
    return exports.convertToType(data, returnType);
  };

  /**
   * Invokes the REST service using the supplied settings and parameters.
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
  exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
      returnType) {

    var _this = this;
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
    } else if (contentType == 'multipart/form-data') {
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

    return new Promise(function(resolve, reject) {
      request.end(function(error, response) {
          if (error) {
          reject(error);
        } else {
          var data = _this.deserialize(response, returnType);
          resolve(data);
        }
      });
    });
  };

  /**
   * Parses an ISO-8601 string representation of a date value.
   * @param {String} str The date value as a string.
   * @returns {Date} The parsed date object.
   */
  exports.parseDate = function(str) {
    return new Date(str.replace(/T/i, ' '));
  };

  /**
   * Converts a value to the specified type.
   * @param {(String|Object)} data The data to convert, as a string or object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns An instance of the specified type.
   */
  exports.convertToType = function(data, type) {
    switch (type) {
      case 'Boolean':
        return Boolean(data);
      case 'Integer':
        return parseInt(data, 10);
      case 'Number':
        return parseFloat(data);
      case 'String':
        return String(data);
      case 'Date':
        return this.parseDate(String(data));
      default:
        if (type === Object) {
          // generic object, return directly
          return data;
        } else if (typeof type === 'function') {
          // for model type like: User
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          // for array type like: ['String']
          var itemType = type[0];
          return data.map(function(item) {
            return exports.convertToType(item, itemType);
          });
        } else if (typeof type === 'object') {
          // for plain object type like: {'String': 'Integer'}
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }
          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = exports.convertToType(k, keyType);
              var value = exports.convertToType(data[k], valueType);
              result[key] = value;
            }
          }
          return result;
        } else {
          // for unknown type, return the data directly
          return data;
        }
    }
  };

  /**
   * The default API client implementation.
   * @type {module:ApiClient}
   */
  exports.instance = new exports();

  return exports;
}));

}).call(this,require("buffer").Buffer)
},{"buffer":141,"fs":140,"superagent":137}],2:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/LoginTicketEntry', '../model/LoginRequest', '../model/ValidateTicketEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/LoginTicketEntry'), require('../model/LoginRequest'), require('../model/ValidateTicketEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.AuthenticationApi = factory(root.AlfrescoAuthRestApi.ApiClient, root.AlfrescoAuthRestApi.Error, root.AlfrescoAuthRestApi.LoginTicketEntry, root.AlfrescoAuthRestApi.LoginRequest, root.AlfrescoAuthRestApi.ValidateTicketEntry);
  }
}(this, function(ApiClient, Error, LoginTicketEntry, LoginRequest, ValidateTicketEntry) {
  'use strict';

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 0.1.0
   */

  /**
   * Constructs a new AuthenticationApi.
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create ticket (login)
     * Logs in and returns the new authentication ticket.\nThe userId and password properties are mandatory in the request body. For example:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;userId\&quot;: \&quot;jbloggs\&quot;,\n    \&quot;password\&quot;: \&quot;password\&quot;\n}\n&#x60;&#x60;&#x60;\nTo use the ticket in future requests you should pass it in the request header.\nFor example using Javascript:\n  &#x60;&#x60;&#x60;Javascript\n    request.setRequestHeader (\&quot;Authorization\&quot;, \&quot;Basic \&quot; + btoa(ticket));\n  &#x60;&#x60;&#x60;\n
     * @param {module:model/LoginRequest} loginRequest The user credential.
     * data is of type: {module:model/LoginTicketEntry}
     */
    this.createTicket = function(loginRequest) {
      var postBody = loginRequest;

      // verify the required parameter 'loginRequest' is set
      if (loginRequest == undefined || loginRequest == null) {
        throw "Missing the required parameter 'loginRequest' when calling createTicket";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoginTicketEntry;

      return this.apiClient.callApi(
        '/tickets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete ticket (logout)
     * Deletes logged in ticket (logout).\n
     */
    this.deleteTicket = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tickets/-me-', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Validate ticket
     * Validates the specified ticket (derived from Authorization header) is still valid.\n\nFor example, you can pass the Authorization request header using Javascript:\n  &#x60;&#x60;&#x60;Javascript\n    request.setRequestHeader (\&quot;Authorization\&quot;, \&quot;Basic \&quot; + btoa(ticket));\n  &#x60;&#x60;&#x60;\n
     * data is of type: {module:model/ValidateTicketEntry}
     */
    this.validateTicket = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidateTicketEntry;

      return this.apiClient.callApi(
        '/tickets/-me-', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":1,"../model/Error":4,"../model/LoginRequest":6,"../model/LoginTicketEntry":7,"../model/ValidateTicketEntry":9}],3:[function(require,module,exports){
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Error', './model/ErrorError', './model/LoginRequest', './model/LoginTicketEntry', './model/LoginTicketEntryEntry', './model/ValidateTicketEntry', './model/ValidateTicketEntryEntry', './api/AuthenticationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Error'), require('./model/ErrorError'), require('./model/LoginRequest'), require('./model/LoginTicketEntry'), require('./model/LoginTicketEntryEntry'), require('./model/ValidateTicketEntry'), require('./model/ValidateTicketEntryEntry'), require('./api/AuthenticationApi'));
  }
}(function(ApiClient, Error, ErrorError, LoginRequest, LoginTicketEntry, LoginTicketEntryEntry, ValidateTicketEntry, ValidateTicketEntryEntry, AuthenticationApi) {
  'use strict';

  /**
   * Provides access to the Authentication features of Alfresco.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoAuthRestApi = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoAuthRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoAuthRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AlfrescoAuthRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AlfrescoAuthRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorError model constructor.
     * @property {module:model/ErrorError}
     */
    ErrorError: ErrorError,
    /**
     * The LoginRequest model constructor.
     * @property {module:model/LoginRequest}
     */
    LoginRequest: LoginRequest,
    /**
     * The LoginTicketEntry model constructor.
     * @property {module:model/LoginTicketEntry}
     */
    LoginTicketEntry: LoginTicketEntry,
    /**
     * The LoginTicketEntryEntry model constructor.
     * @property {module:model/LoginTicketEntryEntry}
     */
    LoginTicketEntryEntry: LoginTicketEntryEntry,
    /**
     * The ValidateTicketEntry model constructor.
     * @property {module:model/ValidateTicketEntry}
     */
    ValidateTicketEntry: ValidateTicketEntry,
    /**
     * The ValidateTicketEntryEntry model constructor.
     * @property {module:model/ValidateTicketEntryEntry}
     */
    ValidateTicketEntryEntry: ValidateTicketEntryEntry,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi
  };

  return exports;
}));

},{"./ApiClient":1,"./api/AuthenticationApi":2,"./model/Error":4,"./model/ErrorError":5,"./model/LoginRequest":6,"./model/LoginTicketEntry":7,"./model/LoginTicketEntryEntry":8,"./model/ValidateTicketEntry":9,"./model/ValidateTicketEntryEntry":10}],4:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ErrorError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorError'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.Error = factory(root.AlfrescoAuthRestApi.ApiClient, root.AlfrescoAuthRestApi.ErrorError);
  }
}(this, function(ApiClient, ErrorError) {
  'use strict';

  /**
   * The Error model module.
   * @module model/Error
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorError.constructFromObject(data['error']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ErrorError} error
   */
  exports.prototype['error'] = undefined;




  return exports;
}));

},{"../ApiClient":1,"./ErrorError":5}],5:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.ErrorError = factory(root.AlfrescoAuthRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ErrorError model module.
   * @module model/ErrorError
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ErrorError</code>.
   * @alias module:model/ErrorError
   * @class
   * @param briefSummary
   * @param descriptionURL
   * @param stackTrace
   * @param statusCode
   */
  var exports = function(briefSummary, descriptionURL, stackTrace, statusCode) {


    this['briefSummary'] = briefSummary;
    this['descriptionURL'] = descriptionURL;

    this['stackTrace'] = stackTrace;
    this['statusCode'] = statusCode;
  };

  /**
   * Constructs a <code>ErrorError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorError} obj Optional instance to populate.
   * @return {module:model/ErrorError} The populated <code>ErrorError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorKey')) {
        obj['errorKey'] = ApiClient.convertToType(data['errorKey'], 'String');
      }
      if (data.hasOwnProperty('briefSummary')) {
        obj['briefSummary'] = ApiClient.convertToType(data['briefSummary'], 'String');
      }
      if (data.hasOwnProperty('descriptionURL')) {
        obj['descriptionURL'] = ApiClient.convertToType(data['descriptionURL'], 'String');
      }
      if (data.hasOwnProperty('logId')) {
        obj['logId'] = ApiClient.convertToType(data['logId'], 'String');
      }
      if (data.hasOwnProperty('stackTrace')) {
        obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], 'String');
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {String} errorKey
   */
  exports.prototype['errorKey'] = undefined;

  /**
   * @member {String} briefSummary
   */
  exports.prototype['briefSummary'] = undefined;

  /**
   * @member {String} descriptionURL
   */
  exports.prototype['descriptionURL'] = undefined;

  /**
   * @member {String} logId
   */
  exports.prototype['logId'] = undefined;

  /**
   * @member {String} stackTrace
   */
  exports.prototype['stackTrace'] = undefined;

  /**
   * @member {Integer} statusCode
   */
  exports.prototype['statusCode'] = undefined;




  return exports;
}));

},{"../ApiClient":1}],6:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.LoginRequest = factory(root.AlfrescoAuthRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoginRequest model module.
   * @module model/LoginRequest
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>LoginRequest</code>.
   * @alias module:model/LoginRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>LoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginRequest} obj Optional instance to populate.
   * @return {module:model/LoginRequest} The populated <code>LoginRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;




  return exports;
}));

},{"../ApiClient":1}],7:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LoginTicketEntryEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LoginTicketEntryEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.LoginTicketEntry = factory(root.AlfrescoAuthRestApi.ApiClient, root.AlfrescoAuthRestApi.LoginTicketEntryEntry);
  }
}(this, function(ApiClient, LoginTicketEntryEntry) {
  'use strict';

  /**
   * The LoginTicketEntry model module.
   * @module model/LoginTicketEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>LoginTicketEntry</code>.
   * @alias module:model/LoginTicketEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>LoginTicketEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginTicketEntry} obj Optional instance to populate.
   * @return {module:model/LoginTicketEntry} The populated <code>LoginTicketEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = LoginTicketEntryEntry.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/LoginTicketEntryEntry} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":1,"./LoginTicketEntryEntry":8}],8:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.LoginTicketEntryEntry = factory(root.AlfrescoAuthRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoginTicketEntryEntry model module.
   * @module model/LoginTicketEntryEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>LoginTicketEntryEntry</code>.
   * @alias module:model/LoginTicketEntryEntry
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>LoginTicketEntryEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginTicketEntryEntry} obj Optional instance to populate.
   * @return {module:model/LoginTicketEntryEntry} The populated <code>LoginTicketEntryEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;




  return exports;
}));

},{"../ApiClient":1}],9:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ValidateTicketEntryEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ValidateTicketEntryEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.ValidateTicketEntry = factory(root.AlfrescoAuthRestApi.ApiClient, root.AlfrescoAuthRestApi.ValidateTicketEntryEntry);
  }
}(this, function(ApiClient, ValidateTicketEntryEntry) {
  'use strict';

  /**
   * The ValidateTicketEntry model module.
   * @module model/ValidateTicketEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ValidateTicketEntry</code>.
   * @alias module:model/ValidateTicketEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ValidateTicketEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateTicketEntry} obj Optional instance to populate.
   * @return {module:model/ValidateTicketEntry} The populated <code>ValidateTicketEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = ValidateTicketEntryEntry.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ValidateTicketEntryEntry} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":1,"./ValidateTicketEntryEntry":10}],10:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.ValidateTicketEntryEntry = factory(root.AlfrescoAuthRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidateTicketEntryEntry model module.
   * @module model/ValidateTicketEntryEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ValidateTicketEntryEntry</code>.
   * @alias module:model/ValidateTicketEntryEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ValidateTicketEntryEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateTicketEntryEntry} obj Optional instance to populate.
   * @return {module:model/ValidateTicketEntryEntry} The populated <code>ValidateTicketEntryEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));

},{"../ApiClient":1}],11:[function(require,module,exports){
(function (Buffer){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['superagent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('superagent'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ApiClient = factory(root.superagent);
  }
}(this, function(superagent) {
  'use strict';

  /**
   * @module ApiClient
   * @version 0.1.0
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:ApiClient
   * @class
   */
  var exports = function() {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://localhost/alfresco/api/-default-/public/alfresco/versions/1
     */
    this.basePath = 'https://localhost/alfresco/api/-default-/public/alfresco/versions/1'.replace(/\/+$/, '');

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
      'basicAuth': {type: 'basic'}
    };
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;
  };

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  exports.prototype.paramToString = function(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }
    return param.toString();
  };

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var url = this.basePath + path;
    var _this = this;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
  };

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {Array.<String>} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
   */
  exports.prototype.isFileParam = function(param) {
    // fs.ReadStream in Node.js (but not in runtime like browserify)
    if (typeof window === 'undefined' &&
        typeof require === 'function' &&
        require('fs') &&
        param instanceof require('fs').ReadStream) {
      return true;
    }
    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
      return true;
    }
    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
      return true;
    }
    return false;
  };

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Object.<String, Object>} params The parameters as object properties.
   * @returns {Object.<String, Object>} normalized parameters.
   */
  exports.prototype.normalizeParams = function(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String}
   * @readonly
   */
  exports.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
  };

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
    if (param == null) {
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
        // return the array directly as SuperAgent will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

  /**
   * Applies authentication headers to the request.
   * @param {Object} request The request object created by a <code>superagent()</code> call.
   * @param {Array.<String>} authNames An array of authentication method names.
   */
  exports.prototype.applyAuthToRequest = function(request, authNames) {
    var _this = this;
    authNames.forEach(function(authName) {
      var auth = _this.authentications[authName];
      switch (auth.type) {
        case 'basic':
          if (auth.username || auth.password) {
            request.auth(auth.username || '', auth.password || '');
          }
          break;
        case 'apiKey':
          if (auth.apiKey) {
            var data = {};
            if (auth.apiKeyPrefix) {
              data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
            } else {
              data[auth.name] = auth.apiKey;
            }
            if (auth['in'] === 'header') {
              request.set(data);
            } else {
              request.query(data);
            }
          }
          break;
        case 'oauth2':
          if (auth.accessToken) {
            request.set({'Authorization': 'Bearer ' + auth.accessToken});
          }
          break;
        default:
          throw new Error('Unknown authentication type: ' + auth.type);
      }
    });
  };

  /**
   * Deserializes an HTTP response body into a value of the specified type.
   * @param {Object} response A SuperAgent response object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns A value of the specified type.
   */
  exports.prototype.deserialize = function deserialize(response, returnType) {
    if (response == null || returnType == null) {
      return null;
    }
    // Rely on SuperAgent for parsing response body.
    // See http://visionmedia.github.io/superagent/#parsing-response-bodies
    var data = response.body;
    if (data == null) {
      // SuperAgent does not always produce a body; use the unparsed response as a fallback
      data = response.text;
    }
    return exports.convertToType(data, returnType);
  };

  /**
   * Invokes the REST service using the supplied settings and parameters.
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
  exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
      returnType) {

    var _this = this;
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
    } else if (contentType == 'multipart/form-data') {
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

    return new Promise(function(resolve, reject) {
      request.end(function(error, response) {
        if (error) {
          reject(error);
        } else {
          var data = _this.deserialize(response, returnType);
          resolve(data);
        }
      });
    });
  };

  /**
   * Parses an ISO-8601 string representation of a date value.
   * @param {String} str The date value as a string.
   * @returns {Date} The parsed date object.
   */
  exports.parseDate = function(str) {
    return new Date(str.replace(/T/i, ' '));
  };

  /**
   * Converts a value to the specified type.
   * @param {(String|Object)} data The data to convert, as a string or object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns An instance of the specified type.
   */
  exports.convertToType = function(data, type) {
    switch (type) {
      case 'Boolean':
        return Boolean(data);
      case 'Integer':
        return parseInt(data, 10);
      case 'Number':
        return parseFloat(data);
      case 'String':
        return String(data);
      case 'Date':
        return this.parseDate(String(data));
      default:
        if (type === Object) {
          // generic object, return directly
          return data;
        } else if (typeof type === 'function') {
          // for model type like: User
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          // for array type like: ['String']
          var itemType = type[0];
          return data.map(function(item) {
            return exports.convertToType(item, itemType);
          });
        } else if (typeof type === 'object') {
          // for plain object type like: {'String': 'Integer'}
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }
          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = exports.convertToType(k, keyType);
              var value = exports.convertToType(data[k], valueType);
              result[key] = value;
            }
          }
          return result;
        } else {
          // for unknown type, return the data directly
          return data;
        }
    }
  };

  /**
   * The default API client implementation.
   * @type {module:ApiClient}
   */
  exports.instance = new exports();

  return exports;
}));

}).call(this,require("buffer").Buffer)
},{"buffer":141,"fs":140,"superagent":137}],12:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/AssocTargetBody', '../model/NodeAssocPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/AssocTargetBody'), require('../model/NodeAssocPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.AssociationsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.AssocTargetBody, root.AlfrescoCoreRestApi.NodeAssocPaging);
  }
}(this, function(ApiClient, Error, AssocTargetBody, NodeAssocPaging) {
  'use strict';

  /**
   * Associations service.
   * @module api/AssociationsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new AssociationsApi.
   * @alias module:api/AssociationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add node association
     * Add association, with given association type, between source and target node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {module:model/AssocTargetBody} assocTargetBody The target node id and assoc type.
     */
    this.addAssoc = function(sourceId, assocTargetBody) {
      var postBody = assocTargetBody;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling addAssoc";
      }

      // verify the required parameter 'assocTargetBody' is set
      if (assocTargetBody == undefined || assocTargetBody == null) {
        throw "Missing the required parameter 'assocTargetBody' when calling addAssoc";
      }


      var pathParams = {
        'sourceId': sourceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{sourceId}/targets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List node associations
     * Returns a list of source nodes that point to (ie. are associated with) the current target node.\n
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listSourceNodeAssociations = function(targetId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'targetId' is set
      if (targetId == undefined || targetId == null) {
        throw "Missing the required parameter 'targetId' when calling listSourceNodeAssociations";
      }


      var pathParams = {
        'targetId': targetId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{targetId}/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List node associations
     * Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listTargetAssociations = function(sourceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling listTargetAssociations";
      }


      var pathParams = {
        'sourceId': sourceId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{sourceId}/targets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Remove node association(s)
     * Remove association(s) between source and target node for given association type. \n\nIf association type is not specified then all associations between source and target are removed.\n
     * @param {String} sourceId The identifier of a node.
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    this.removeAssoc = function(sourceId, targetId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling removeAssoc";
      }

      // verify the required parameter 'targetId' is set
      if (targetId == undefined || targetId == null) {
        throw "Missing the required parameter 'targetId' when calling removeAssoc";
      }


      var pathParams = {
        'sourceId': sourceId,
        'targetId': targetId
      };
      var queryParams = {
        'assocType': opts['assocType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{sourceId}/targets/{targetId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/AssocTargetBody":34,"../model/Error":52,"../model/NodeAssocPaging":66}],13:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/AssocTargetBody', '../model/NodeEntry', '../model/NodeBody1', '../model/AssocChildBody', '../model/NodeSharedLinkEntry', '../model/SharedLinkBody', '../model/CopyBody', '../model/RenditionBody', '../model/SiteBody', '../model/SiteEntry', '../model/EmailSharedLinkBody', '../model/NodeSharedLinkPaging', '../model/DeletedNodeEntry', '../model/DeletedNodesPaging', '../model/NodePaging', '../model/RenditionEntry', '../model/RenditionPaging', '../model/NodeAssocPaging', '../model/NodeChildAssocPaging', '../model/MoveBody', '../model/NodeBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/AssocTargetBody'), require('../model/NodeEntry'), require('../model/NodeBody1'), require('../model/AssocChildBody'), require('../model/NodeSharedLinkEntry'), require('../model/SharedLinkBody'), require('../model/CopyBody'), require('../model/RenditionBody'), require('../model/SiteBody'), require('../model/SiteEntry'), require('../model/EmailSharedLinkBody'), require('../model/NodeSharedLinkPaging'), require('../model/DeletedNodeEntry'), require('../model/DeletedNodesPaging'), require('../model/NodePaging'), require('../model/RenditionEntry'), require('../model/RenditionPaging'), require('../model/NodeAssocPaging'), require('../model/NodeChildAssocPaging'), require('../model/MoveBody'), require('../model/NodeBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ChangesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.AssocTargetBody, root.AlfrescoCoreRestApi.NodeEntry, root.AlfrescoCoreRestApi.NodeBody1, root.AlfrescoCoreRestApi.AssocChildBody, root.AlfrescoCoreRestApi.NodeSharedLinkEntry, root.AlfrescoCoreRestApi.SharedLinkBody, root.AlfrescoCoreRestApi.CopyBody, root.AlfrescoCoreRestApi.RenditionBody, root.AlfrescoCoreRestApi.SiteBody, root.AlfrescoCoreRestApi.SiteEntry, root.AlfrescoCoreRestApi.EmailSharedLinkBody, root.AlfrescoCoreRestApi.NodeSharedLinkPaging, root.AlfrescoCoreRestApi.DeletedNodeEntry, root.AlfrescoCoreRestApi.DeletedNodesPaging, root.AlfrescoCoreRestApi.NodePaging, root.AlfrescoCoreRestApi.RenditionEntry, root.AlfrescoCoreRestApi.RenditionPaging, root.AlfrescoCoreRestApi.NodeAssocPaging, root.AlfrescoCoreRestApi.NodeChildAssocPaging, root.AlfrescoCoreRestApi.MoveBody, root.AlfrescoCoreRestApi.NodeBody);
  }
}(this, function(ApiClient, Error, AssocTargetBody, NodeEntry, NodeBody1, AssocChildBody, NodeSharedLinkEntry, SharedLinkBody, CopyBody, RenditionBody, SiteBody, SiteEntry, EmailSharedLinkBody, NodeSharedLinkPaging, DeletedNodeEntry, DeletedNodesPaging, NodePaging, RenditionEntry, RenditionPaging, NodeAssocPaging, NodeChildAssocPaging, MoveBody, NodeBody) {
  'use strict';

  /**
   * Changes service.
   * @module api/ChangesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ChangesApi.
   * @alias module:api/ChangesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add node association
     * Add association, with given association type, between source and target node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {module:model/AssocTargetBody} assocTargetBody The target node id and assoc type.
     */
    this.addAssoc = function(sourceId, assocTargetBody) {
      var postBody = assocTargetBody;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling addAssoc";
      }

      // verify the required parameter 'assocTargetBody' is set
      if (assocTargetBody == undefined || assocTargetBody == null) {
        throw "Missing the required parameter 'assocTargetBody' when calling addAssoc";
      }


      var pathParams = {
        'sourceId': sourceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{sourceId}/targets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a node
     * Creates a node as a (primary) child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody1} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.addNode = function(nodeId, nodeBody, opts) {
      opts = opts || {};
      var postBody = nodeBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling addNode";
      }

      // verify the required parameter 'nodeBody' is set
      if (nodeBody == undefined || nodeBody == null) {
        throw "Missing the required parameter 'nodeBody' when calling addNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'autoRename': opts['autoRename'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Add secondary child
     * Add secondary child association, with given association type, between parent and child node.\n
     * @param {String} parentId The identifier of a node.
     * @param {module:model/AssocChildBody} assocChildBody The child node id and assoc type.
     */
    this.addSecondaryChildAssoc = function(parentId, assocChildBody) {
      var postBody = assocChildBody;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling addSecondaryChildAssoc";
      }

      // verify the required parameter 'assocChildBody' is set
      if (assocChildBody == undefined || assocChildBody == null) {
        throw "Missing the required parameter 'assocChildBody' when calling addSecondaryChildAssoc";
      }


      var pathParams = {
        'parentId': parentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{parentId}/secondary-children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a shared link to a file
     * Create shared link to specfied file identified by **nodeId** in request body.
     * @param {module:model/SharedLinkBody} sharedLinkBody The nodeId to create a shared link for.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    this.addSharedLink = function(sharedLinkBody, opts) {
      opts = opts || {};
      var postBody = sharedLinkBody;

      // verify the required parameter 'sharedLinkBody' is set
      if (sharedLinkBody == undefined || sharedLinkBody == null) {
        throw "Missing the required parameter 'sharedLinkBody' when calling addSharedLink";
      }


      var pathParams = {
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkEntry;

      return this.apiClient.callApi(
        '/shared-links', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Copy a node
     * Copy the node **nodeId** to the parent folder node **targetParentId**. The **targetParentId** is specified in the request body.\n\nThe new node has the same name as the source node unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also copied.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/CopyBody} copyBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.copyNode = function(nodeId, copyBody, opts) {
      opts = opts || {};
      var postBody = copyBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling copyNode";
      }

      // verify the required parameter 'copyBody' is set
      if (copyBody == undefined || copyBody == null) {
        throw "Missing the required parameter 'copyBody' when calling copyNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/copy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create rendition
     * Async request to create a rendition for file with identifier\n**nodeId**. The rendition is specified by name \&quot;id\&quot; in the request body:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;id\&quot;:\&quot;doclib\&quot;\n}\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/RenditionBody} renditionBody The rendition \&quot;id\&quot;.
     */
    this.createRendition = function(nodeId, renditionBody) {
      var postBody = renditionBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling createRendition";
      }

      // verify the required parameter 'renditionBody' is set
      if (renditionBody == undefined || renditionBody == null) {
        throw "Missing the required parameter 'renditionBody' when calling createRendition";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a site
     * Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public site called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a site will *not* work within Share.**\n\nThe addition of the site to the user&#39;s site favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with Site Manager role.\n
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the site should not be added to the user&#39;s site favorites. (default to false)
     * data is of type: {module:model/SiteEntry}
     */
    this.createSite = function(siteBody, opts) {
      opts = opts || {};
      var postBody = siteBody;

      // verify the required parameter 'siteBody' is set
      if (siteBody == undefined || siteBody == null) {
        throw "Missing the required parameter 'siteBody' when calling createSite";
      }


      var pathParams = {
      };
      var queryParams = {
        'skipConfiguration': opts['skipConfiguration'],
        'skipAddToFavorites': opts['skipAddToFavorites']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteEntry;

      return this.apiClient.callApi(
        '/sites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a node
     * Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n\nDeleting a node removes the child associations, ie. both primary and also secondary, if any.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n (default to false)
     */
    this.deleteNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling deleteNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'permanent': opts['permanent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Deletes a shared link
     * Deletes the shared link with identifier **sharedId**.
     * @param {String} sharedId The identifier of a shared link to a file.
     */
    this.deleteSharedLink = function(sharedId) {
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling deleteSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a site
     * Deletes the site with **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    this.deleteSite = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling deleteSite";
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
        'permanent': opts['permanent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/sites/{siteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Email shared link
     * Sends email with app-specific url including identifier **sharedId**.\n\nThe client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com]\n}\n&#x60;&#x60;&#x60;\nA plain text message property can be optionally provided in the request body to customise the sent email.\nAlso, a locale property can be optionally provided in the request body to send the emails in a particular language.\nFor example, to email a shared link with a messages and a locale:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],\n    \&quot;message\&quot;: \&quot;myMessage\&quot;,\n    \&quot;locale\&quot;:\&quot;en-GB\&quot;\n}\n&#x60;&#x60;&#x60;\n**Note:** The client must be registered before you can send a shared link email. See [server documentation]\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {module:model/EmailSharedLinkBody} emailSharedLinkBody The shared link email to send.
     */
    this.emailSharedLink = function(sharedId, emailSharedLinkBody) {
      var postBody = emailSharedLinkBody;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling emailSharedLink";
      }

      // verify the required parameter 'emailSharedLinkBody' is set
      if (emailSharedLinkBody == undefined || emailSharedLinkBody == null) {
        throw "Missing the required parameter 'emailSharedLinkBody' when calling emailSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Find shared links
     * Find (search for) links that current user has read permission on source node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-)\n*   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;)\n*   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;)
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkPaging}
     */
    this.findSharedLinks = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkPaging;

      return this.apiClient.callApi(
        '/shared-links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a deleted node
     * Returns a specific deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * data is of type: {module:model/DeletedNodeEntry}
     */
    this.getDeletedNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getDeletedNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletedNodeEntry;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get deleted nodes
     * Returns a list of deleted nodes for the current user.\nIf the current user is an administrator deleted nodes\nfor all users will be returned.\nThe list of deleted nodes will be ordered with the most recently deleted node at the top of the list.\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * data is of type: {module:model/DeletedNodesPaging}
     */
    this.getDeletedNodes = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletedNodesPaging;

      return this.apiClient.callApi(
        '/deleted-nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get file content
     * Returns the file content of the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getFileContent = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getFileContent";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a node
     * Get information for the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {String} opts.relativePath If specified, returns information on the node resolved by this path.\nThe path is relative to the specified **nodeId**\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.getNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get node children
     * Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return addtional information.\n\nThe list of child nodes includes primary children and also secondary children, if any.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \&quot;orderBy&#x3D;isFolder DESC,name ASC\&quot;.\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy&#x3D;name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   where&#x3D;(isFolder&#x3D;true)\n\n*   where&#x3D;(isFile&#x3D;true)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39;)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39; INCLUDESUBTYPES)\n
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * @param {String} opts.relativePath Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
     * @param {Boolean} opts.includeSource Also include \&quot;source\&quot; (in addition to \&quot;entries\&quot;) with folder information on parent node (either the specified parent \&quot;nodeId\&quot; or as resolved by \&quot;relativePath\&quot;)
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodePaging}
     */
    this.getNodeChildren = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNodeChildren";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
        'includeSource': opts['includeSource'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodePaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get rendition information
     * Returns the rendition information for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * data is of type: {module:model/RenditionEntry}
     */
    this.getRendition = function(nodeId, renditionId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRendition";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getRendition";
      }


      var pathParams = {
        'nodeId': nodeId,
        'renditionId': renditionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenditionEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions/{renditionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get rendition content
     * Returns the rendition content for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getRenditionContent = function(nodeId, renditionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRenditionContent";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getRenditionContent";
      }


      var pathParams = {
        'nodeId': nodeId,
        'renditionId': renditionId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions/{renditionId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List information for renditions
     * Returns the rendition information for the file node with identifier **nodeId**.\nThis will return rendition information, including the rendition id, for each rendition. The\u00A0rendition status is CREATED (ie. available\u00A0to view/download) or NOT_CREATED (ie. rendition can be requested).
     * @param {String} nodeId The identifier of a node.
     * data is of type: {module:model/RenditionPaging}
     */
    this.getRenditions = function(nodeId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRenditions";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenditionPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a shared link
     * Returns minimal information for the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    this.getSharedLink = function(sharedId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkEntry;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get file content
     * Returns the content of the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getSharedLinkContent = function(sharedId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkContent";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get shared link rendition content
     * Returns the rendition content for file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getSharedLinkRenditionContent = function(sharedId, renditionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkRenditionContent";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getSharedLinkRenditionContent";
      }


      var pathParams = {
        'sharedId': sharedId,
        'renditionId': renditionId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/renditions/{renditionId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List information for created renditions
     * Returns the rendition information for the file with shared link identifier **sharedId**.\n\nThis will only return rendition information, including the rendition id, for each rendition\nwhere the rendition status is CREATED (ie. available\u00A0to view/download).\n\n**Note:** No authentication is required to call this endpoint.      \n
     * @param {String} sharedId The identifier of a shared link to a file.
     * data is of type: {module:model/RenditionPaging}
     */
    this.getSharedLinkRenditions = function(sharedId) {
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkRenditions";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenditionPaging;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/renditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List parents
     * Returns a list of parent nodes that point to (ie. are associated with) the current child node. \n\nThis inclues both the primary parent and also secondary parents, if any.\n
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listParents = function(childId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'childId' is set
      if (childId == undefined || childId == null) {
        throw "Missing the required parameter 'childId' when calling listParents";
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{childId}/parents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List secondary children
     * Returns a list of secondary child nodes that are associated with the current parent node, via a secondary child association.\n
     * @param {String} parentId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the returned results to only those of the given association type
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeChildAssocPaging}
     */
    this.listSecondaryChildAssociations = function(parentId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling listSecondaryChildAssociations";
      }


      var pathParams = {
        'parentId': parentId
      };
      var queryParams = {
        'assocType': opts['assocType'],
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeChildAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{parentId}/secondary-children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List node associations
     * Returns a list of source nodes that point to (ie. are associated with) the current target node.\n
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listSourceNodeAssociations = function(targetId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'targetId' is set
      if (targetId == undefined || targetId == null) {
        throw "Missing the required parameter 'targetId' when calling listSourceNodeAssociations";
      }


      var pathParams = {
        'targetId': targetId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{targetId}/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List node associations
     * Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listTargetAssociations = function(sourceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling listTargetAssociations";
      }


      var pathParams = {
        'sourceId': sourceId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{sourceId}/targets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Live search for nodes
     * Returns a list of nodes that match the given search criteria.\n\nThe search term is used to look for nodes that match against name, title, description, full text content and tags.\n\nThe search term\n- must contain a minimum of 3 alphanumeric characters\n- allows \&quot;quoted term\&quot;\n- can optionally use &#39;*&#39; for wildcard matching\n\nBy default, file and folder types will be searched unless a specific type is provided as a query parameter.\n\nBy default, the search will be across the repository unless a specific root node id is provided to start the search from.\n
     * @param {String} term The term to search for.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.rootNodeId The id of the node to start the search from.\n\nSupports the aliases -my-, -root- and -shared-.\n
     * @param {String} opts.nodeType Restrict the returned results to only those of the given node type and it&#39;s sub-types
     * @param {String} opts.include Return additional info, eg. aspectNames, properties, path, isLink
     * @param {String} opts.orderBy The list of results can be ordered by the following:\n* name\n* modifiedAt\n* createdAt\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodePaging}
     */
    this.liveSearchNodes = function(term, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'term' is set
      if (term == undefined || term == null) {
        throw "Missing the required parameter 'term' when calling liveSearchNodes";
      }


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'term': term,
        'rootNodeId': opts['rootNodeId'],
        'nodeType': opts['nodeType'],
        'include': opts['include'],
        'orderBy': opts['orderBy'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodePaging;

      return this.apiClient.callApi(
        '/queries/live-search-nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Move a node
     * Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.\nThe **targetParentId** is specified in the in request body.\n\nThe moved node retains its name unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also moved.\n\nThe move will effectively change the primary parent\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/MoveBody} moveBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.moveNode = function(nodeId, moveBody, opts) {
      opts = opts || {};
      var postBody = moveBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling moveNode";
      }

      // verify the required parameter 'moveBody' is set
      if (moveBody == undefined || moveBody == null) {
        throw "Missing the required parameter 'moveBody' when calling moveNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Purge a deleted node
     * Permanently removes the deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     */
    this.purgeDeletedNode = function(nodeId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling purgeDeletedNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Remove node association(s)
     * Remove association(s) between source and target node for given association type. \n\nIf association type is not specified then all associations between source and target are removed.\n
     * @param {String} sourceId The identifier of a node.
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    this.removeAssoc = function(sourceId, targetId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling removeAssoc";
      }

      // verify the required parameter 'targetId' is set
      if (targetId == undefined || targetId == null) {
        throw "Missing the required parameter 'targetId' when calling removeAssoc";
      }


      var pathParams = {
        'sourceId': sourceId,
        'targetId': targetId
      };
      var queryParams = {
        'assocType': opts['assocType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{sourceId}/targets/{targetId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Remove secondary child (or children)
     * Remove secondary child association(s) between parent and child node for given association type. \n\nIf association type is not specified then all secondary child associations between parent and child are removed.\n
     * @param {String} parentId The identifier of a node.
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    this.removeSecondaryChildAssoc = function(parentId, childId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling removeSecondaryChildAssoc";
      }

      // verify the required parameter 'childId' is set
      if (childId == undefined || childId == null) {
        throw "Missing the required parameter 'childId' when calling removeSecondaryChildAssoc";
      }


      var pathParams = {
        'parentId': parentId,
        'childId': childId
      };
      var queryParams = {
        'assocType': opts['assocType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{parentId}/secondary-children/{childId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Restore a deleted node
     * Attempts to restore the deleted node identified by **nodeId** to its original location.\n
     * @param {String} nodeId The identifier of a node.
     * data is of type: {module:model/NodeEntry}
     */
    this.restoreNode = function(nodeId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling restoreNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}/restore', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update file content
     * Updates the content of the node with identifier **nodeId**.\n\nThe request body for this endpoint can be any text or binary stream. The Content-Type header should be set\ncorrectly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.\n\nThe **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,\na new minor version is created by default.\n\n**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.\nThis is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for\ntooling to accept an arbitary file.\n
     * @param {String} nodeId The identifier of a node.
     * @param {String} contentBody The binary content
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.majorVersion If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n (default to false)
     * @param {String} opts.comment Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.updateFileContent = function(nodeId, contentBody, opts) {
      opts = opts || {};
      var postBody = contentBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling updateFileContent";
      }

      // verify the required parameter 'contentBody' is set
      if (contentBody == undefined || contentBody == null) {
        throw "Missing the required parameter 'contentBody' when calling updateFileContent";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'majorVersion': opts['majorVersion'],
        'comment': opts['comment'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/content', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a node
     * Updates the node with identifier **nodeId**. For example, you can rename a file or folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;,\n}\n&#x60;&#x60;&#x60;\nYou can also set or update one or more properties:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\n**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody} nodeBody The node information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.updateNode = function(nodeId, nodeBody, opts) {
      opts = opts || {};
      var postBody = nodeBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling updateNode";
      }

      // verify the required parameter 'nodeBody' is set
      if (nodeBody == undefined || nodeBody == null) {
        throw "Missing the required parameter 'nodeBody' when calling updateNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/AssocChildBody":32,"../model/AssocTargetBody":34,"../model/CopyBody":44,"../model/DeletedNodeEntry":46,"../model/DeletedNodesPaging":49,"../model/EmailSharedLinkBody":51,"../model/Error":52,"../model/MoveBody":62,"../model/NodeAssocPaging":66,"../model/NodeBody":68,"../model/NodeBody1":69,"../model/NodeChildAssocPaging":72,"../model/NodeEntry":74,"../model/NodePaging":78,"../model/NodeSharedLinkEntry":81,"../model/NodeSharedLinkPaging":82,"../model/RenditionBody":105,"../model/RenditionEntry":106,"../model/RenditionPaging":107,"../model/SharedLinkBody":109,"../model/SiteBody":111,"../model/SiteEntry":115}],14:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/NodeEntry', '../model/NodeBody1', '../model/Error', '../model/AssocChildBody', '../model/NodePaging', '../model/NodeAssocPaging', '../model/NodeChildAssocPaging', '../model/MoveBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NodeEntry'), require('../model/NodeBody1'), require('../model/Error'), require('../model/AssocChildBody'), require('../model/NodePaging'), require('../model/NodeAssocPaging'), require('../model/NodeChildAssocPaging'), require('../model/MoveBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ChildAssociationsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeEntry, root.AlfrescoCoreRestApi.NodeBody1, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.AssocChildBody, root.AlfrescoCoreRestApi.NodePaging, root.AlfrescoCoreRestApi.NodeAssocPaging, root.AlfrescoCoreRestApi.NodeChildAssocPaging, root.AlfrescoCoreRestApi.MoveBody);
  }
}(this, function(ApiClient, NodeEntry, NodeBody1, Error, AssocChildBody, NodePaging, NodeAssocPaging, NodeChildAssocPaging, MoveBody) {
  'use strict';

  /**
   * ChildAssociations service.
   * @module api/ChildAssociationsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ChildAssociationsApi.
   * @alias module:api/ChildAssociationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a node
     * Creates a node as a (primary) child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody1} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.addNode = function(nodeId, nodeBody, opts) {
      opts = opts || {};
      var postBody = nodeBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling addNode";
      }

      // verify the required parameter 'nodeBody' is set
      if (nodeBody == undefined || nodeBody == null) {
        throw "Missing the required parameter 'nodeBody' when calling addNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'autoRename': opts['autoRename'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Add secondary child
     * Add secondary child association, with given association type, between parent and child node.\n
     * @param {String} parentId The identifier of a node.
     * @param {module:model/AssocChildBody} assocChildBody The child node id and assoc type.
     */
    this.addSecondaryChildAssoc = function(parentId, assocChildBody) {
      var postBody = assocChildBody;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling addSecondaryChildAssoc";
      }

      // verify the required parameter 'assocChildBody' is set
      if (assocChildBody == undefined || assocChildBody == null) {
        throw "Missing the required parameter 'assocChildBody' when calling addSecondaryChildAssoc";
      }


      var pathParams = {
        'parentId': parentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{parentId}/secondary-children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a node
     * Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n\nDeleting a node removes the child associations, ie. both primary and also secondary, if any.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n (default to false)
     */
    this.deleteNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling deleteNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'permanent': opts['permanent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get node children
     * Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return addtional information.\n\nThe list of child nodes includes primary children and also secondary children, if any.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \&quot;orderBy&#x3D;isFolder DESC,name ASC\&quot;.\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy&#x3D;name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   where&#x3D;(isFolder&#x3D;true)\n\n*   where&#x3D;(isFile&#x3D;true)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39;)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39; INCLUDESUBTYPES)\n
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * @param {String} opts.relativePath Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
     * @param {Boolean} opts.includeSource Also include \&quot;source\&quot; (in addition to \&quot;entries\&quot;) with folder information on parent node (either the specified parent \&quot;nodeId\&quot; or as resolved by \&quot;relativePath\&quot;)
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodePaging}
     */
    this.getNodeChildren = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNodeChildren";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
        'includeSource': opts['includeSource'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodePaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List parents
     * Returns a list of parent nodes that point to (ie. are associated with) the current child node. \n\nThis inclues both the primary parent and also secondary parents, if any.\n
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listParents = function(childId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'childId' is set
      if (childId == undefined || childId == null) {
        throw "Missing the required parameter 'childId' when calling listParents";
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{childId}/parents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List secondary children
     * Returns a list of secondary child nodes that are associated with the current parent node, via a secondary child association.\n
     * @param {String} parentId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the returned results to only those of the given association type
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeChildAssocPaging}
     */
    this.listSecondaryChildAssociations = function(parentId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling listSecondaryChildAssociations";
      }


      var pathParams = {
        'parentId': parentId
      };
      var queryParams = {
        'assocType': opts['assocType'],
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeChildAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{parentId}/secondary-children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Move a node
     * Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.\nThe **targetParentId** is specified in the in request body.\n\nThe moved node retains its name unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also moved.\n\nThe move will effectively change the primary parent\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/MoveBody} moveBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.moveNode = function(nodeId, moveBody, opts) {
      opts = opts || {};
      var postBody = moveBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling moveNode";
      }

      // verify the required parameter 'moveBody' is set
      if (moveBody == undefined || moveBody == null) {
        throw "Missing the required parameter 'moveBody' when calling moveNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Remove secondary child (or children)
     * Remove secondary child association(s) between parent and child node for given association type. \n\nIf association type is not specified then all secondary child associations between parent and child are removed.\n
     * @param {String} parentId The identifier of a node.
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    this.removeSecondaryChildAssoc = function(parentId, childId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling removeSecondaryChildAssoc";
      }

      // verify the required parameter 'childId' is set
      if (childId == undefined || childId == null) {
        throw "Missing the required parameter 'childId' when calling removeSecondaryChildAssoc";
      }


      var pathParams = {
        'parentId': parentId,
        'childId': childId
      };
      var queryParams = {
        'assocType': opts['assocType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{parentId}/secondary-children/{childId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/AssocChildBody":32,"../model/Error":52,"../model/MoveBody":62,"../model/NodeAssocPaging":66,"../model/NodeBody1":69,"../model/NodeChildAssocPaging":72,"../model/NodeEntry":74,"../model/NodePaging":78}],15:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CommentBody', '../model/CommentEntry', '../model/Error', '../model/CommentPaging', '../model/CommentBody1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CommentBody'), require('../model/CommentEntry'), require('../model/Error'), require('../model/CommentPaging'), require('../model/CommentBody1'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.CommentBody, root.AlfrescoCoreRestApi.CommentEntry, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.CommentPaging, root.AlfrescoCoreRestApi.CommentBody1);
  }
}(this, function(ApiClient, CommentBody, CommentEntry, Error, CommentPaging, CommentBody1) {
  'use strict';

  /**
   * Comments service.
   * @module api/CommentsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new CommentsApi.
   * @alias module:api/CommentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a comment
     * Creates one or more comments on node **nodeId**. You can create more than one comment by \nspecifying a list of comments in the JSON body like this:      \n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;content\&quot;: \&quot;This is a comment\&quot;\n  },\n  {\n    \&quot;content\&quot;: \&quot;This is another comment\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/CommentBody} commentBody The comment text. Note that you can provide an array of comments.
     * data is of type: {module:model/CommentEntry}
     */
    this.addComment = function(nodeId, commentBody) {
      var postBody = commentBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling addComment";
      }

      // verify the required parameter 'commentBody' is set
      if (commentBody == undefined || commentBody == null) {
        throw "Missing the required parameter 'commentBody' when calling addComment";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CommentEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get comments
     * Returns a list of comments for the node identified by **nodeId**, sorted chronologically with the newest comment first.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/CommentPaging}
     */
    this.getComments = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getComments";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CommentPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a comment
     * Removes the comment **commentId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} commentId The identifier of a comment.
     */
    this.removeComment = function(nodeId, commentId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling removeComment";
      }

      // verify the required parameter 'commentId' is set
      if (commentId == undefined || commentId == null) {
        throw "Missing the required parameter 'commentId' when calling removeComment";
      }


      var pathParams = {
        'nodeId': nodeId,
        'commentId': commentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/comments/{commentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a comment
     * Updates an existing comment **commentId** on node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} commentId The identifier of a comment.
     * @param {module:model/CommentBody1} commentBody The JSON representing the comment to be updated.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/CommentEntry}
     */
    this.updateComment = function(nodeId, commentId, commentBody, opts) {
      opts = opts || {};
      var postBody = commentBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling updateComment";
      }

      // verify the required parameter 'commentId' is set
      if (commentId == undefined || commentId == null) {
        throw "Missing the required parameter 'commentId' when calling updateComment";
      }

      // verify the required parameter 'commentBody' is set
      if (commentBody == undefined || commentBody == null) {
        throw "Missing the required parameter 'commentBody' when calling updateComment";
      }


      var pathParams = {
        'nodeId': nodeId,
        'commentId': commentId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CommentEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/comments/{commentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/CommentBody":37,"../model/CommentBody1":38,"../model/CommentEntry":39,"../model/CommentPaging":40,"../model/Error":52}],16:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FavoriteEntry', '../model/FavoriteBody', '../model/Error', '../model/FavoritePaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FavoriteEntry'), require('../model/FavoriteBody'), require('../model/Error'), require('../model/FavoritePaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoritesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteEntry, root.AlfrescoCoreRestApi.FavoriteBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.FavoritePaging);
  }
}(this, function(ApiClient, FavoriteEntry, FavoriteBody, Error, FavoritePaging) {
  'use strict';

  /**
   * Favorites service.
   * @module api/FavoritesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new FavoritesApi.
   * @alias module:api/FavoritesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a favorite
     * Favorite a **site**, **file**, or **folder** in the repository.
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteBody} favoriteBody An object identifying the entity to be favorited. \n\nThe object consists of a single property which is an object with the name &#x60;site&#x60;, &#x60;file&#x60;, or &#x60;folder&#x60;. \nThe content of that object is the &#x60;guid&#x60; of the target entity.\n\nFor example, to favorite a file the following body would be used:\n\n&#x60;&#x60;&#x60;JSON\n{\n   \&quot;target\&quot;: {\n      \&quot;file\&quot;: {\n         \&quot;guid\&quot;: \&quot;abcde-01234\&quot;\n      }\n   }\n}\n&#x60;&#x60;&#x60;\n
     * data is of type: {module:model/FavoriteEntry}
     */
    this.addFavorite = function(personId, favoriteBody) {
      var postBody = favoriteBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling addFavorite";
      }

      // verify the required parameter 'favoriteBody' is set
      if (favoriteBody == undefined || favoriteBody == null) {
        throw "Missing the required parameter 'favoriteBody' when calling addFavorite";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a favorite
     * Returns favorite **favoriteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FavoriteEntry}
     */
    this.getFavorite = function(personId, favoriteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling getFavorite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get favorites
     * Returns a list of favorites for person **personId**.\n\nYou can us the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to get the favorites of the currently authenticated user.\n\nYou can use the **where** parameter to restrict the list in the response\nto entries of a specific kind. The **where** parameter takes a value.\nThe value is a single predicate that can include one or more **EXISTS**\nconditions. The **EXISTS** condition uses a single operand to limit the\nlist to include entries that include that one property. The property values are:\n\n*   &#x60;target/file&#x60;\n*   &#x60;target/folder&#x60;\n*   &#x60;target/site&#x60;\n\nFor example, the following **where** parameter restricts the returned list to the file favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file))\n&#x60;&#x60;&#x60;\nYou can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.\n\n\nFor example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file) OR EXISTS(target/folder))\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FavoritePaging}
     */
    this.getFavorites = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorites";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoritePaging;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a favorite
     * Removes **favoriteId** as a favorite of person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     */
    this.removeFavoriteSite = function(personId, favoriteId) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeFavoriteSite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling removeFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/Error":52,"../model/FavoriteBody":55,"../model/FavoriteEntry":56,"../model/FavoritePaging":57}],17:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PersonNetworkEntry', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PersonNetworkEntry'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NetworksApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PersonNetworkEntry, root.AlfrescoCoreRestApi.Error);
  }
}(this, function(ApiClient, PersonNetworkEntry, Error) {
  'use strict';

  /**
   * Networks service.
   * @module api/NetworksApi
   * @version 0.1.0
   */

  /**
   * Constructs a new NetworksApi.
   * @alias module:api/NetworksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a network
     * Returns information for a network **networkId**.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonNetworkEntry}
     */
    this.getNetwork = function(networkId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getNetwork";
      }


      var pathParams = {
        'networkId': networkId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonNetworkEntry;

      return this.apiClient.callApi(
        '/networks/{networkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/Error":52,"../model/PersonNetworkEntry":91}],18:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/NodeEntry', '../model/NodeBody1', '../model/Error', '../model/CopyBody', '../model/DeletedNodeEntry', '../model/DeletedNodesPaging', '../model/NodePaging', '../model/MoveBody', '../model/NodeBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NodeEntry'), require('../model/NodeBody1'), require('../model/Error'), require('../model/CopyBody'), require('../model/DeletedNodeEntry'), require('../model/DeletedNodesPaging'), require('../model/NodePaging'), require('../model/MoveBody'), require('../model/NodeBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeEntry, root.AlfrescoCoreRestApi.NodeBody1, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.CopyBody, root.AlfrescoCoreRestApi.DeletedNodeEntry, root.AlfrescoCoreRestApi.DeletedNodesPaging, root.AlfrescoCoreRestApi.NodePaging, root.AlfrescoCoreRestApi.MoveBody, root.AlfrescoCoreRestApi.NodeBody);
  }
}(this, function(ApiClient, NodeEntry, NodeBody1, Error, CopyBody, DeletedNodeEntry, DeletedNodesPaging, NodePaging, MoveBody, NodeBody) {
  'use strict';

  /**
   * Nodes service.
   * @module api/NodesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new NodesApi.
   * @alias module:api/NodesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a node
     * Creates a node as a (primary) child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody1} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.addNode = function(nodeId, nodeBody, opts) {
      opts = opts || {};
      var postBody = nodeBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling addNode";
      }

      // verify the required parameter 'nodeBody' is set
      if (nodeBody == undefined || nodeBody == null) {
        throw "Missing the required parameter 'nodeBody' when calling addNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'autoRename': opts['autoRename'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Copy a node
     * Copy the node **nodeId** to the parent folder node **targetParentId**. The **targetParentId** is specified in the request body.\n\nThe new node has the same name as the source node unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also copied.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/CopyBody} copyBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.copyNode = function(nodeId, copyBody, opts) {
      opts = opts || {};
      var postBody = copyBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling copyNode";
      }

      // verify the required parameter 'copyBody' is set
      if (copyBody == undefined || copyBody == null) {
        throw "Missing the required parameter 'copyBody' when calling copyNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/copy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a node
     * Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n\nDeleting a node removes the child associations, ie. both primary and also secondary, if any.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n (default to false)
     */
    this.deleteNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling deleteNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'permanent': opts['permanent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a deleted node
     * Returns a specific deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * data is of type: {module:model/DeletedNodeEntry}
     */
    this.getDeletedNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getDeletedNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletedNodeEntry;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get deleted nodes
     * Returns a list of deleted nodes for the current user.\nIf the current user is an administrator deleted nodes\nfor all users will be returned.\nThe list of deleted nodes will be ordered with the most recently deleted node at the top of the list.\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * data is of type: {module:model/DeletedNodesPaging}
     */
    this.getDeletedNodes = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletedNodesPaging;

      return this.apiClient.callApi(
        '/deleted-nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get file content
     * Returns the file content of the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getFileContent = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getFileContent";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a node
     * Get information for the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {String} opts.relativePath If specified, returns information on the node resolved by this path.\nThe path is relative to the specified **nodeId**\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.getNode = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get node children
     * Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return addtional information.\n\nThe list of child nodes includes primary children and also secondary children, if any.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \&quot;orderBy&#x3D;isFolder DESC,name ASC\&quot;.\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy&#x3D;name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   where&#x3D;(isFolder&#x3D;true)\n\n*   where&#x3D;(isFile&#x3D;true)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39;)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39; INCLUDESUBTYPES)\n
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * @param {String} opts.relativePath Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
     * @param {Boolean} opts.includeSource Also include \&quot;source\&quot; (in addition to \&quot;entries\&quot;) with folder information on parent node (either the specified parent \&quot;nodeId\&quot; or as resolved by \&quot;relativePath\&quot;)
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodePaging}
     */
    this.getNodeChildren = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNodeChildren";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
        'includeSource': opts['includeSource'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodePaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Move a node
     * Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.\nThe **targetParentId** is specified in the in request body.\n\nThe moved node retains its name unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also moved.\n\nThe move will effectively change the primary parent\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/MoveBody} moveBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.moveNode = function(nodeId, moveBody, opts) {
      opts = opts || {};
      var postBody = moveBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling moveNode";
      }

      // verify the required parameter 'moveBody' is set
      if (moveBody == undefined || moveBody == null) {
        throw "Missing the required parameter 'moveBody' when calling moveNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Purge a deleted node
     * Permanently removes the deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     */
    this.purgeDeletedNode = function(nodeId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling purgeDeletedNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Restore a deleted node
     * Attempts to restore the deleted node identified by **nodeId** to its original location.\n
     * @param {String} nodeId The identifier of a node.
     * data is of type: {module:model/NodeEntry}
     */
    this.restoreNode = function(nodeId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling restoreNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}/restore', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update file content
     * Updates the content of the node with identifier **nodeId**.\n\nThe request body for this endpoint can be any text or binary stream. The Content-Type header should be set\ncorrectly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.\n\nThe **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,\na new minor version is created by default.\n\n**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.\nThis is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for\ntooling to accept an arbitary file.\n
     * @param {String} nodeId The identifier of a node.
     * @param {String} contentBody The binary content
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.majorVersion If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n (default to false)
     * @param {String} opts.comment Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.updateFileContent = function(nodeId, contentBody, opts) {
      opts = opts || {};
      var postBody = contentBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling updateFileContent";
      }

      // verify the required parameter 'contentBody' is set
      if (contentBody == undefined || contentBody == null) {
        throw "Missing the required parameter 'contentBody' when calling updateFileContent";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'majorVersion': opts['majorVersion'],
        'comment': opts['comment'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/content', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a node
     * Updates the node with identifier **nodeId**. For example, you can rename a file or folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;,\n}\n&#x60;&#x60;&#x60;\nYou can also set or update one or more properties:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\n**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody} nodeBody The node information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.updateNode = function(nodeId, nodeBody, opts) {
      opts = opts || {};
      var postBody = nodeBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling updateNode";
      }

      // verify the required parameter 'nodeBody' is set
      if (nodeBody == undefined || nodeBody == null) {
        throw "Missing the required parameter 'nodeBody' when calling updateNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/CopyBody":44,"../model/DeletedNodeEntry":46,"../model/DeletedNodesPaging":49,"../model/Error":52,"../model/MoveBody":62,"../model/NodeBody":68,"../model/NodeBody1":69,"../model/NodeEntry":74,"../model/NodePaging":78}],19:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FavoriteEntry', '../model/FavoriteBody', '../model/Error', '../model/SiteMembershipBody', '../model/SiteMembershipRequestEntry', '../model/FavoriteSiteBody', '../model/InlineResponse201', '../model/ActivityPaging', '../model/SiteEntry', '../model/SitePaging', '../model/FavoritePaging', '../model/PersonEntry', '../model/PersonNetworkEntry', '../model/PersonNetworkPaging', '../model/PreferenceEntry', '../model/PreferencePaging', '../model/SiteMembershipRequestPaging', '../model/SiteMembershipBody1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FavoriteEntry'), require('../model/FavoriteBody'), require('../model/Error'), require('../model/SiteMembershipBody'), require('../model/SiteMembershipRequestEntry'), require('../model/FavoriteSiteBody'), require('../model/InlineResponse201'), require('../model/ActivityPaging'), require('../model/SiteEntry'), require('../model/SitePaging'), require('../model/FavoritePaging'), require('../model/PersonEntry'), require('../model/PersonNetworkEntry'), require('../model/PersonNetworkPaging'), require('../model/PreferenceEntry'), require('../model/PreferencePaging'), require('../model/SiteMembershipRequestPaging'), require('../model/SiteMembershipBody1'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PeopleApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteEntry, root.AlfrescoCoreRestApi.FavoriteBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.SiteMembershipBody, root.AlfrescoCoreRestApi.SiteMembershipRequestEntry, root.AlfrescoCoreRestApi.FavoriteSiteBody, root.AlfrescoCoreRestApi.InlineResponse201, root.AlfrescoCoreRestApi.ActivityPaging, root.AlfrescoCoreRestApi.SiteEntry, root.AlfrescoCoreRestApi.SitePaging, root.AlfrescoCoreRestApi.FavoritePaging, root.AlfrescoCoreRestApi.PersonEntry, root.AlfrescoCoreRestApi.PersonNetworkEntry, root.AlfrescoCoreRestApi.PersonNetworkPaging, root.AlfrescoCoreRestApi.PreferenceEntry, root.AlfrescoCoreRestApi.PreferencePaging, root.AlfrescoCoreRestApi.SiteMembershipRequestPaging, root.AlfrescoCoreRestApi.SiteMembershipBody1);
  }
}(this, function(ApiClient, FavoriteEntry, FavoriteBody, Error, SiteMembershipBody, SiteMembershipRequestEntry, FavoriteSiteBody, InlineResponse201, ActivityPaging, SiteEntry, SitePaging, FavoritePaging, PersonEntry, PersonNetworkEntry, PersonNetworkPaging, PreferenceEntry, PreferencePaging, SiteMembershipRequestPaging, SiteMembershipBody1) {
  'use strict';

  /**
   * People service.
   * @module api/PeopleApi
   * @version 0.1.0
   */

  /**
   * Constructs a new PeopleApi.
   * @alias module:api/PeopleApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a favorite
     * Favorite a **site**, **file**, or **folder** in the repository.
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteBody} favoriteBody An object identifying the entity to be favorited. \n\nThe object consists of a single property which is an object with the name &#x60;site&#x60;, &#x60;file&#x60;, or &#x60;folder&#x60;. \nThe content of that object is the &#x60;guid&#x60; of the target entity.\n\nFor example, to favorite a file the following body would be used:\n\n&#x60;&#x60;&#x60;JSON\n{\n   \&quot;target\&quot;: {\n      \&quot;file\&quot;: {\n         \&quot;guid\&quot;: \&quot;abcde-01234\&quot;\n      }\n   }\n}\n&#x60;&#x60;&#x60;\n
     * data is of type: {module:model/FavoriteEntry}
     */
    this.addFavorite = function(personId, favoriteBody) {
      var postBody = favoriteBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling addFavorite";
      }

      // verify the required parameter 'favoriteBody' is set
      if (favoriteBody == undefined || favoriteBody == null) {
        throw "Missing the required parameter 'favoriteBody' when calling addFavorite";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a site membership request
     * Create a site membership request for **personId** and **siteId**. The **personId** will be invited to the site as a SiteConsumer.
     * @param {String} personId The identifier of a person.
     * @param {module:model/SiteMembershipBody} siteMembershipBody Site membership request details
     * data is of type: {module:model/SiteMembershipRequestEntry}
     */
    this.addSiteMembershipRequest = function(personId, siteMembershipBody) {
      var postBody = siteMembershipBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling addSiteMembershipRequest";
      }

      // verify the required parameter 'siteMembershipBody' is set
      if (siteMembershipBody == undefined || siteMembershipBody == null) {
        throw "Missing the required parameter 'siteMembershipBody' when calling addSiteMembershipRequest";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMembershipRequestEntry;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete favorite site
     * Removes site **siteId** from the favorite site list of person **personId**.\n\n**Note This method is deprecated and will be removed in the future.**\nUse &#x60;/people/{personId}/favorites/{favoriteId}&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     */
    this.deleteFavoriteSite = function(personId, siteId) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling deleteFavoriteSite";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling deleteFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/favorite-sites/{siteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Favorite a site
     * Add a favorite site for person **personId**.\n\n**Note: that this method is deprecated and will be removed in the future**.\nUse &#x60;/people/{personId}/favorites&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteSiteBody} favoriteSiteBody The id of the site to favorite.
     * data is of type: {module:model/InlineResponse201}
     */
    this.favoriteSite = function(personId, favoriteSiteBody) {
      var postBody = favoriteSiteBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling favoriteSite";
      }

      // verify the required parameter 'favoriteSiteBody' is set
      if (favoriteSiteBody == undefined || favoriteSiteBody == null) {
        throw "Missing the required parameter 'favoriteSiteBody' when calling favoriteSite";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/people/{personId}/favorite-sites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get activities
     * Returns a list of activities for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.who A filter to include the user&#39;s activities only &#x60;-me-&#x60;, other user&#39;s activities only &#x60;-others-&#x60;&#39;\n
     * @param {String} opts.siteId Include only activity feed entries relating to this site.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ActivityPaging}
     */
    this.getActivities = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getActivities";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'who': opts['who'],
        'siteId': opts['siteId'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ActivityPaging;

      return this.apiClient.callApi(
        '/people/{personId}/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a favorite
     * Returns favorite **favoriteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FavoriteEntry}
     */
    this.getFavorite = function(personId, favoriteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling getFavorite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a favorite site
     * Returns information on favorite site **siteId** of person **personId**.\n\n**Note: This method is deprecated and will be removed in the future.**\nUse &#x60;/people/{personId}/favorites/{favoriteId}&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteEntry}
     */
    this.getFavoriteSite = function(personId, siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavoriteSite";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorite-sites/{siteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get favorite sites
     * Get a person&#39;s favorite sites.\n\n**Note: This method is deprecated and will be removed in the future**.\nUse &#x60;/people/{personId}/favorites&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SitePaging}
     */
    this.getFavoriteSites = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavoriteSites";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SitePaging;

      return this.apiClient.callApi(
        '/people/{personId}/favorite-sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get favorites
     * Returns a list of favorites for person **personId**.\n\nYou can us the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to get the favorites of the currently authenticated user.\n\nYou can use the **where** parameter to restrict the list in the response\nto entries of a specific kind. The **where** parameter takes a value.\nThe value is a single predicate that can include one or more **EXISTS**\nconditions. The **EXISTS** condition uses a single operand to limit the\nlist to include entries that include that one property. The property values are:\n\n*   &#x60;target/file&#x60;\n*   &#x60;target/folder&#x60;\n*   &#x60;target/site&#x60;\n\nFor example, the following **where** parameter restricts the returned list to the file favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file))\n&#x60;&#x60;&#x60;\nYou can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.\n\n\nFor example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file) OR EXISTS(target/folder))\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FavoritePaging}
     */
    this.getFavorites = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorites";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoritePaging;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a person
     * Gets information for the person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonEntry}
     */
    this.getPerson = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPerson";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonEntry;

      return this.apiClient.callApi(
        '/people/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get network information
     * Returns network information on a single network specified by **networkId** for **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonNetworkEntry}
     */
    this.getPersonNetwork = function(personId, networkId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPersonNetwork";
      }

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getPersonNetwork";
      }


      var pathParams = {
        'personId': personId,
        'networkId': networkId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonNetworkEntry;

      return this.apiClient.callApi(
        '/people/{personId}/networks/{networkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get network membership for a person
     * Gets a list of network memberships for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonNetworkPaging}
     */
    this.getPersonNetworks = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPersonNetworks";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonNetworkPaging;

      return this.apiClient.callApi(
        '/people/{personId}/networks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a preference
     * Returns a specific preference for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} preferenceName The name of the preference.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PreferenceEntry}
     */
    this.getPreference = function(personId, preferenceName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPreference";
      }

      // verify the required parameter 'preferenceName' is set
      if (preferenceName == undefined || preferenceName == null) {
        throw "Missing the required parameter 'preferenceName' when calling getPreference";
      }


      var pathParams = {
        'personId': personId,
        'preferenceName': preferenceName
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PreferenceEntry;

      return this.apiClient.callApi(
        '/people/{personId}/preferences/{preferenceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get preferences
     * Returns a list of preferences for person **personId**.\n\nEach preference consists of an **id** and a **value**.\nThe **value** can be of any JSON type.\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PreferencePaging}
     */
    this.getPreferences = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getPreferences";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PreferencePaging;

      return this.apiClient.callApi(
        '/people/{personId}/preferences', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get site membership information
     * Returns a list of site membership information for person **personId**.\nYou can sort the list of sites using the **orderBy** parameter.\n\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve sites ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SitePaging}
     */
    this.getSiteMembership = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getSiteMembership";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SitePaging;

      return this.apiClient.callApi(
        '/people/{personId}/sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a site membership request
     * Returns the site membership request for site **siteId** for person **personId**, if one exists.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMembershipRequestEntry}
     */
    this.getSiteMembershipRequest = function(personId, siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getSiteMembershipRequest";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteMembershipRequest";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMembershipRequestEntry;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests/{siteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get site membership requests
     * Returns the current site membership requests for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMembershipRequestPaging}
     */
    this.getSiteMembershipRequests = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getSiteMembershipRequests";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMembershipRequestPaging;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a favorite
     * Removes **favoriteId** as a favorite of person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     */
    this.removeFavoriteSite = function(personId, favoriteId) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeFavoriteSite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling removeFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Cancel a site membership
     * Cancels the site membership request to site **siteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     */
    this.removeSiteMembershipRequest = function(personId, siteId) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeSiteMembershipRequest";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling removeSiteMembershipRequest";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests/{siteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a site membership request
     * Updates the message for the site membership request to site **siteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteMembershipBody1} siteMembershipBody The new message to display
     */
    this.updateSiteMembershipRequest = function(personId, siteId, siteMembershipBody) {
      var postBody = siteMembershipBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling updateSiteMembershipRequest";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling updateSiteMembershipRequest";
      }

      // verify the required parameter 'siteMembershipBody' is set
      if (siteMembershipBody == undefined || siteMembershipBody == null) {
        throw "Missing the required parameter 'siteMembershipBody' when calling updateSiteMembershipRequest";
      }


      var pathParams = {
        'personId': personId,
        'siteId': siteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/people/{personId}/site-membership-requests/{siteId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/ActivityPaging":30,"../model/Error":52,"../model/FavoriteBody":55,"../model/FavoriteEntry":56,"../model/FavoritePaging":57,"../model/FavoriteSiteBody":59,"../model/InlineResponse201":60,"../model/PersonEntry":89,"../model/PersonNetworkEntry":91,"../model/PersonNetworkPaging":92,"../model/PreferenceEntry":95,"../model/PreferencePaging":96,"../model/SiteEntry":115,"../model/SiteMembershipBody":121,"../model/SiteMembershipBody1":122,"../model/SiteMembershipRequestEntry":124,"../model/SiteMembershipRequestPaging":125,"../model/SitePaging":127}],20:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/RatingEntry', '../model/Error', '../model/RatingPaging', '../model/RatingBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RatingEntry'), require('../model/Error'), require('../model/RatingPaging'), require('../model/RatingBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RatingEntry, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.RatingPaging, root.AlfrescoCoreRestApi.RatingBody);
  }
}(this, function(ApiClient, RatingEntry, Error, RatingPaging, RatingBody) {
  'use strict';

  /**
   * Ratings service.
   * @module api/RatingsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new RatingsApi.
   * @alias module:api/RatingsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a rating
     * Get the specific rating **ratingId** on node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} ratingId The identifier of a rating.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RatingEntry}
     */
    this.getRating = function(nodeId, ratingId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRating";
      }

      // verify the required parameter 'ratingId' is set
      if (ratingId == undefined || ratingId == null) {
        throw "Missing the required parameter 'ratingId' when calling getRating";
      }


      var pathParams = {
        'nodeId': nodeId,
        'ratingId': ratingId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RatingEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/ratings/{ratingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get ratings
     * Get the ratings for node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RatingPaging}
     */
    this.getRatings = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRatings";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RatingPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/ratings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Rate
     * Rate the node with identifier **nodeId**
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/RatingBody} ratingBody For \&quot;myRating\&quot; the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.\n\nFor example, to \&quot;like\&quot; a file the following body would be used:\n\n  &#x60;&#x60;&#x60;JSON\n    {\n      \&quot;id\&quot;: \&quot;likes\&quot;,\n      \&quot;myRating\&quot;: true\n    }\n  &#x60;&#x60;&#x60;\n
     * data is of type: {module:model/RatingEntry}
     */
    this.rate = function(nodeId, ratingBody) {
      var postBody = ratingBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling rate";
      }

      // verify the required parameter 'ratingBody' is set
      if (ratingBody == undefined || ratingBody == null) {
        throw "Missing the required parameter 'ratingBody' when calling rate";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RatingEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/ratings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a rating
     * Removes rating **ratingId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} ratingId The identifier of a rating.
     */
    this.removeRating = function(nodeId, ratingId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling removeRating";
      }

      // verify the required parameter 'ratingId' is set
      if (ratingId == undefined || ratingId == null) {
        throw "Missing the required parameter 'ratingId' when calling removeRating";
      }


      var pathParams = {
        'nodeId': nodeId,
        'ratingId': ratingId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/ratings/{ratingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/Error":52,"../model/RatingBody":100,"../model/RatingEntry":101,"../model/RatingPaging":102}],21:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/RenditionBody', '../model/Error', '../model/RenditionEntry', '../model/RenditionPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RenditionBody'), require('../model/Error'), require('../model/RenditionEntry'), require('../model/RenditionPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RenditionsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RenditionBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.RenditionEntry, root.AlfrescoCoreRestApi.RenditionPaging);
  }
}(this, function(ApiClient, RenditionBody, Error, RenditionEntry, RenditionPaging) {
  'use strict';

  /**
   * Renditions service.
   * @module api/RenditionsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new RenditionsApi.
   * @alias module:api/RenditionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create rendition
     * Async request to create a rendition for file with identifier\n**nodeId**. The rendition is specified by name \&quot;id\&quot; in the request body:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;id\&quot;:\&quot;doclib\&quot;\n}\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/RenditionBody} renditionBody The rendition \&quot;id\&quot;.
     */
    this.createRendition = function(nodeId, renditionBody) {
      var postBody = renditionBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling createRendition";
      }

      // verify the required parameter 'renditionBody' is set
      if (renditionBody == undefined || renditionBody == null) {
        throw "Missing the required parameter 'renditionBody' when calling createRendition";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get rendition information
     * Returns the rendition information for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * data is of type: {module:model/RenditionEntry}
     */
    this.getRendition = function(nodeId, renditionId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRendition";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getRendition";
      }


      var pathParams = {
        'nodeId': nodeId,
        'renditionId': renditionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenditionEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions/{renditionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get rendition content
     * Returns the rendition content for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getRenditionContent = function(nodeId, renditionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRenditionContent";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getRenditionContent";
      }


      var pathParams = {
        'nodeId': nodeId,
        'renditionId': renditionId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions/{renditionId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List information for renditions
     * Returns the rendition information for the file node with identifier **nodeId**.\nThis will return rendition information, including the rendition id, for each rendition. The\u00A0rendition status is CREATED (ie. available\u00A0to view/download) or NOT_CREATED (ie. rendition can be requested).
     * @param {String} nodeId The identifier of a node.
     * data is of type: {module:model/RenditionPaging}
     */
    this.getRenditions = function(nodeId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRenditions";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenditionPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get shared link rendition content
     * Returns the rendition content for file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getSharedLinkRenditionContent = function(sharedId, renditionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkRenditionContent";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getSharedLinkRenditionContent";
      }


      var pathParams = {
        'sharedId': sharedId,
        'renditionId': renditionId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/renditions/{renditionId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List information for created renditions
     * Returns the rendition information for the file with shared link identifier **sharedId**.\n\nThis will only return rendition information, including the rendition id, for each rendition\nwhere the rendition status is CREATED (ie. available\u00A0to view/download).\n\n**Note:** No authentication is required to call this endpoint.      \n
     * @param {String} sharedId The identifier of a shared link to a file.
     * data is of type: {module:model/RenditionPaging}
     */
    this.getSharedLinkRenditions = function(sharedId) {
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkRenditions";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RenditionPaging;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/renditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/Error":52,"../model/RenditionBody":105,"../model/RenditionEntry":106,"../model/RenditionPaging":107}],22:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/NodePaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/NodePaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SearchApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.NodePaging);
  }
}(this, function(ApiClient, Error, NodePaging) {
  'use strict';

  /**
   * Search service.
   * @module api/SearchApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SearchApi.
   * @alias module:api/SearchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Live search for nodes
     * Returns a list of nodes that match the given search criteria.\n\nThe search term is used to look for nodes that match against name, title, description, full text content and tags.\n\nThe search term\n- must contain a minimum of 3 alphanumeric characters\n- allows \&quot;quoted term\&quot;\n- can optionally use &#39;*&#39; for wildcard matching\n\nBy default, file and folder types will be searched unless a specific type is provided as a query parameter.\n\nBy default, the search will be across the repository unless a specific root node id is provided to start the search from.\n
     * @param {String} term The term to search for.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.rootNodeId The id of the node to start the search from.\n\nSupports the aliases -my-, -root- and -shared-.\n
     * @param {String} opts.nodeType Restrict the returned results to only those of the given node type and it&#39;s sub-types
     * @param {String} opts.include Return additional info, eg. aspectNames, properties, path, isLink
     * @param {String} opts.orderBy The list of results can be ordered by the following:\n* name\n* modifiedAt\n* createdAt\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodePaging}
     */
    this.liveSearchNodes = function(term, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'term' is set
      if (term == undefined || term == null) {
        throw "Missing the required parameter 'term' when calling liveSearchNodes";
      }


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'term': term,
        'rootNodeId': opts['rootNodeId'],
        'nodeType': opts['nodeType'],
        'include': opts['include'],
        'orderBy': opts['orderBy'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodePaging;

      return this.apiClient.callApi(
        '/queries/live-search-nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/Error":52,"../model/NodePaging":78}],23:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/NodeSharedLinkEntry', '../model/SharedLinkBody', '../model/EmailSharedLinkBody', '../model/NodeSharedLinkPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/NodeSharedLinkEntry'), require('../model/SharedLinkBody'), require('../model/EmailSharedLinkBody'), require('../model/NodeSharedLinkPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SharedlinksApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.NodeSharedLinkEntry, root.AlfrescoCoreRestApi.SharedLinkBody, root.AlfrescoCoreRestApi.EmailSharedLinkBody, root.AlfrescoCoreRestApi.NodeSharedLinkPaging);
  }
}(this, function(ApiClient, Error, NodeSharedLinkEntry, SharedLinkBody, EmailSharedLinkBody, NodeSharedLinkPaging) {
  'use strict';

  /**
   * Sharedlinks service.
   * @module api/SharedlinksApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SharedlinksApi.
   * @alias module:api/SharedlinksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a shared link to a file
     * Create shared link to specfied file identified by **nodeId** in request body.
     * @param {module:model/SharedLinkBody} sharedLinkBody The nodeId to create a shared link for.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    this.addSharedLink = function(sharedLinkBody, opts) {
      opts = opts || {};
      var postBody = sharedLinkBody;

      // verify the required parameter 'sharedLinkBody' is set
      if (sharedLinkBody == undefined || sharedLinkBody == null) {
        throw "Missing the required parameter 'sharedLinkBody' when calling addSharedLink";
      }


      var pathParams = {
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkEntry;

      return this.apiClient.callApi(
        '/shared-links', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Deletes a shared link
     * Deletes the shared link with identifier **sharedId**.
     * @param {String} sharedId The identifier of a shared link to a file.
     */
    this.deleteSharedLink = function(sharedId) {
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling deleteSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Email shared link
     * Sends email with app-specific url including identifier **sharedId**.\n\nThe client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com]\n}\n&#x60;&#x60;&#x60;\nA plain text message property can be optionally provided in the request body to customise the sent email.\nAlso, a locale property can be optionally provided in the request body to send the emails in a particular language.\nFor example, to email a shared link with a messages and a locale:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],\n    \&quot;message\&quot;: \&quot;myMessage\&quot;,\n    \&quot;locale\&quot;:\&quot;en-GB\&quot;\n}\n&#x60;&#x60;&#x60;\n**Note:** The client must be registered before you can send a shared link email. See [server documentation]\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {module:model/EmailSharedLinkBody} emailSharedLinkBody The shared link email to send.
     */
    this.emailSharedLink = function(sharedId, emailSharedLinkBody) {
      var postBody = emailSharedLinkBody;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling emailSharedLink";
      }

      // verify the required parameter 'emailSharedLinkBody' is set
      if (emailSharedLinkBody == undefined || emailSharedLinkBody == null) {
        throw "Missing the required parameter 'emailSharedLinkBody' when calling emailSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Find shared links
     * Find (search for) links that current user has read permission on source node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-)\n*   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;)\n*   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;)
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkPaging}
     */
    this.findSharedLinks = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkPaging;

      return this.apiClient.callApi(
        '/shared-links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a shared link
     * Returns minimal information for the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    this.getSharedLink = function(sharedId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkEntry;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get file content
     * Returns the content of the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getSharedLinkContent = function(sharedId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkContent";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/EmailSharedLinkBody":51,"../model/Error":52,"../model/NodeSharedLinkEntry":81,"../model/NodeSharedLinkPaging":82,"../model/SharedLinkBody":109}],24:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/SiteMemberEntry', '../model/Error', '../model/SiteMemberBody', '../model/SiteBody', '../model/SiteEntry', '../model/SiteContainerEntry', '../model/SiteContainerPaging', '../model/SiteMemberPaging', '../model/SitePaging', '../model/SiteMemberRoleBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SiteMemberEntry'), require('../model/Error'), require('../model/SiteMemberBody'), require('../model/SiteBody'), require('../model/SiteEntry'), require('../model/SiteContainerEntry'), require('../model/SiteContainerPaging'), require('../model/SiteMemberPaging'), require('../model/SitePaging'), require('../model/SiteMemberRoleBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SitesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteMemberEntry, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.SiteMemberBody, root.AlfrescoCoreRestApi.SiteBody, root.AlfrescoCoreRestApi.SiteEntry, root.AlfrescoCoreRestApi.SiteContainerEntry, root.AlfrescoCoreRestApi.SiteContainerPaging, root.AlfrescoCoreRestApi.SiteMemberPaging, root.AlfrescoCoreRestApi.SitePaging, root.AlfrescoCoreRestApi.SiteMemberRoleBody);
  }
}(this, function(ApiClient, SiteMemberEntry, Error, SiteMemberBody, SiteBody, SiteEntry, SiteContainerEntry, SiteContainerPaging, SiteMemberPaging, SitePaging, SiteMemberRoleBody) {
  'use strict';

  /**
   * Sites service.
   * @module api/SitesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SitesApi.
   * @alias module:api/SitesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a person
     * Adds person **personId** as a member of site **siteId**.\n\nYou can set the **role** to one of four types:\n\n* SiteConsumer\n* SiteCollaborator\n* SiteContributor\n* SiteManager\n
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteMemberBody} siteMemberBody The person to add and their role
     * data is of type: {module:model/SiteMemberEntry}
     */
    this.addSiteMember = function(siteId, siteMemberBody) {
      var postBody = siteMemberBody;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling addSiteMember";
      }

      // verify the required parameter 'siteMemberBody' is set
      if (siteMemberBody == undefined || siteMemberBody == null) {
        throw "Missing the required parameter 'siteMemberBody' when calling addSiteMember";
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMemberEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}/members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a site
     * Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public site called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a site will *not* work within Share.**\n\nThe addition of the site to the user&#39;s site favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with Site Manager role.\n
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the site should not be added to the user&#39;s site favorites. (default to false)
     * data is of type: {module:model/SiteEntry}
     */
    this.createSite = function(siteBody, opts) {
      opts = opts || {};
      var postBody = siteBody;

      // verify the required parameter 'siteBody' is set
      if (siteBody == undefined || siteBody == null) {
        throw "Missing the required parameter 'siteBody' when calling createSite";
      }


      var pathParams = {
      };
      var queryParams = {
        'skipConfiguration': opts['skipConfiguration'],
        'skipAddToFavorites': opts['skipAddToFavorites']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteEntry;

      return this.apiClient.callApi(
        '/sites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a site
     * Deletes the site with **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    this.deleteSite = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling deleteSite";
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
        'permanent': opts['permanent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/sites/{siteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a site
     * Returns information for site **siteId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **sites** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the site **siteId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteEntry}
     */
    this.getSite = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSite";
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a container
     * Returns information on the container **containerId** in site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} containerId The unique identifier of a site container.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteContainerEntry}
     */
    this.getSiteContainer = function(siteId, containerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteContainer";
      }

      // verify the required parameter 'containerId' is set
      if (containerId == undefined || containerId == null) {
        throw "Missing the required parameter 'containerId' when calling getSiteContainer";
      }


      var pathParams = {
        'siteId': siteId,
        'containerId': containerId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteContainerEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}/containers/{containerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get containers
     * Returns a list of containers information for site identified by **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteContainerPaging}
     */
    this.getSiteContainers = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteContainers";
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteContainerPaging;

      return this.apiClient.callApi(
        '/sites/{siteId}/containers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a site member
     * Returns site membership information for person **personId** on site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMemberEntry}
     */
    this.getSiteMember = function(siteId, personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteMember";
      }

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getSiteMember";
      }


      var pathParams = {
        'siteId': siteId,
        'personId': personId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMemberEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}/members/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get members
     * Returns a list of site memberships for site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMemberPaging}
     */
    this.getSiteMembers = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteMembers";
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMemberPaging;

      return this.apiClient.callApi(
        '/sites/{siteId}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get sites
     * Returns a list of sites in this repository. You can sort the list if sites using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve sites ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **sites** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each site:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SitePaging}
     */
    this.getSites = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SitePaging;

      return this.apiClient.callApi(
        '/sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a site member
     * Removes person **personId** as a member of site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     */
    this.removeSiteMember = function(siteId, personId) {
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling removeSiteMember";
      }

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeSiteMember";
      }


      var pathParams = {
        'siteId': siteId,
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/sites/{siteId}/members/{personId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a site member
     * Update the membership of person **personId** in site **siteId**.\n\nYou can set the **role** to one of four types:\n\n* SiteConsumer\n* SiteCollaborator\n* SiteContributor\n* SiteManager\n
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     * @param {module:model/SiteMemberRoleBody} siteMemberRoleBody The persons new role
     * data is of type: {module:model/SiteMemberEntry}
     */
    this.updateSiteMember = function(siteId, personId, siteMemberRoleBody) {
      var postBody = siteMemberRoleBody;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling updateSiteMember";
      }

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling updateSiteMember";
      }

      // verify the required parameter 'siteMemberRoleBody' is set
      if (siteMemberRoleBody == undefined || siteMemberRoleBody == null) {
        throw "Missing the required parameter 'siteMemberRoleBody' when calling updateSiteMember";
      }


      var pathParams = {
        'siteId': siteId,
        'personId': personId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteMemberEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}/members/{personId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/Error":52,"../model/SiteBody":111,"../model/SiteContainerEntry":113,"../model/SiteContainerPaging":114,"../model/SiteEntry":115,"../model/SiteMemberBody":117,"../model/SiteMemberEntry":118,"../model/SiteMemberPaging":119,"../model/SiteMemberRoleBody":120,"../model/SitePaging":127}],25:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TagBody', '../model/Error', '../model/TagEntry', '../model/TagPaging', '../model/TagBody1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TagBody'), require('../model/Error'), require('../model/TagEntry'), require('../model/TagPaging'), require('../model/TagBody1'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.TagBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.TagEntry, root.AlfrescoCoreRestApi.TagPaging, root.AlfrescoCoreRestApi.TagBody1);
  }
}(this, function(ApiClient, TagBody, Error, TagEntry, TagPaging, TagBody1) {
  'use strict';

  /**
   * Tags service.
   * @module api/TagsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TagsApi.
   * @alias module:api/TagsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a tag
     * Adds one or more tags to the node **nodeId**. You can create more than one tag by\nspecifying a list of tags in the JSON body like this:\n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;tag\&quot;:\&quot;test-tag-1\&quot;\n  },\n  {\n    \&quot;tag\&quot;:\&quot;test-tag-2\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/TagBody} tagBody The new tag
     * data is of type: {module:model/TagEntry}
     */
    this.addTag = function(nodeId, tagBody) {
      var postBody = tagBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling addTag";
      }

      // verify the required parameter 'tagBody' is set
      if (tagBody == undefined || tagBody == null) {
        throw "Missing the required parameter 'tagBody' when calling addTag";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get tags
     * Returns a list of tags for node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TagPaging}
     */
    this.getNodeTags = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNodeTags";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a tag
     * Return a specific tag with **tagId**.
     * @param {String} tagId The identifier of a tag.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TagEntry}
     */
    this.getTag = function(tagId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tagId' is set
      if (tagId == undefined || tagId == null) {
        throw "Missing the required parameter 'tagId' when calling getTag";
      }


      var pathParams = {
        'tagId': tagId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagEntry;

      return this.apiClient.callApi(
        '/tags/{tagId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get tags
     * Returns a list of tags in this repository.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TagPaging}
     */
    this.getTags = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagPaging;

      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a tag
     * Removes tag **tagId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} tagId The identifier of a tag.
     */
    this.removeTag = function(nodeId, tagId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling removeTag";
      }

      // verify the required parameter 'tagId' is set
      if (tagId == undefined || tagId == null) {
        throw "Missing the required parameter 'tagId' when calling removeTag";
      }


      var pathParams = {
        'nodeId': nodeId,
        'tagId': tagId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/tags/{tagId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a tag
     * Updates the tag **tagId**.
     * @param {String} tagId The identifier of a tag.
     * @param {module:model/TagBody1} tagBody The updated tag
     * data is of type: {module:model/TagEntry}
     */
    this.updateTag = function(tagId, tagBody) {
      var postBody = tagBody;

      // verify the required parameter 'tagId' is set
      if (tagId == undefined || tagId == null) {
        throw "Missing the required parameter 'tagId' when calling updateTag";
      }

      // verify the required parameter 'tagBody' is set
      if (tagBody == undefined || tagBody == null) {
        throw "Missing the required parameter 'tagBody' when calling updateTag";
      }


      var pathParams = {
        'tagId': tagId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagEntry;

      return this.apiClient.callApi(
        '/tags/{tagId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));

},{"../ApiClient":11,"../model/Error":52,"../model/TagBody":130,"../model/TagBody1":131,"../model/TagEntry":132,"../model/TagPaging":133}],26:[function(require,module,exports){
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Activity', './model/ActivityActivitySummary', './model/ActivityEntry', './model/ActivityPaging', './model/ActivityPagingList', './model/AssocChildBody', './model/AssocInfo', './model/AssocTargetBody', './model/ChildAssocInfo', './model/Comment', './model/CommentBody', './model/CommentBody1', './model/CommentEntry', './model/CommentPaging', './model/CommentPagingList', './model/Company', './model/ContentInfo', './model/CopyBody', './model/DeletedNode', './model/DeletedNodeEntry', './model/DeletedNodeMinimal', './model/DeletedNodeMinimalEntry', './model/DeletedNodesPaging', './model/DeletedNodesPagingList', './model/EmailSharedLinkBody', './model/Error', './model/ErrorError', './model/Favorite', './model/FavoriteBody', './model/FavoriteEntry', './model/FavoritePaging', './model/FavoritePagingList', './model/FavoriteSiteBody', './model/InlineResponse201', './model/InlineResponse201Entry', './model/MoveBody', './model/NetworkQuota', './model/NodeAssocMinimal', './model/NodeAssocMinimalEntry', './model/NodeAssocPaging', './model/NodeAssocPagingList', './model/NodeBody', './model/NodeBody1', './model/NodeChildAssocMinimal', './model/NodeChildAssocMinimalEntry', './model/NodeChildAssocPaging', './model/NodeChildAssocPagingList', './model/NodeEntry', './model/NodeFull', './model/NodeMinimal', './model/NodeMinimalEntry', './model/NodePaging', './model/NodePagingList', './model/NodeSharedLink', './model/NodeSharedLinkEntry', './model/NodeSharedLinkPaging', './model/NodeSharedLinkPagingList', './model/NodesnodeIdchildrenContent', './model/Pagination', './model/PathElement', './model/PathInfo', './model/Person', './model/PersonEntry', './model/PersonNetwork', './model/PersonNetworkEntry', './model/PersonNetworkPaging', './model/PersonNetworkPagingList', './model/Preference', './model/PreferenceEntry', './model/PreferencePaging', './model/PreferencePagingList', './model/Rating', './model/RatingAggregate', './model/RatingBody', './model/RatingEntry', './model/RatingPaging', './model/RatingPagingList', './model/Rendition', './model/RenditionBody', './model/RenditionEntry', './model/RenditionPaging', './model/RenditionPagingList', './model/SharedLinkBody', './model/Site', './model/SiteBody', './model/SiteContainer', './model/SiteContainerEntry', './model/SiteContainerPaging', './model/SiteEntry', './model/SiteMember', './model/SiteMemberBody', './model/SiteMemberEntry', './model/SiteMemberPaging', './model/SiteMemberRoleBody', './model/SiteMembershipBody', './model/SiteMembershipBody1', './model/SiteMembershipRequest', './model/SiteMembershipRequestEntry', './model/SiteMembershipRequestPaging', './model/SiteMembershipRequestPagingList', './model/SitePaging', './model/SitePagingList', './model/Tag', './model/TagBody', './model/TagBody1', './model/TagEntry', './model/TagPaging', './model/TagPagingList', './model/UserInfo', './api/AssociationsApi', './api/ChangesApi', './api/ChildAssociationsApi', './api/CommentsApi', './api/FavoritesApi', './api/NetworksApi', './api/NodesApi', './api/PeopleApi', './api/RatingsApi', './api/RenditionsApi', './api/SearchApi', './api/SharedlinksApi', './api/SitesApi', './api/TagsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Activity'), require('./model/ActivityActivitySummary'), require('./model/ActivityEntry'), require('./model/ActivityPaging'), require('./model/ActivityPagingList'), require('./model/AssocChildBody'), require('./model/AssocInfo'), require('./model/AssocTargetBody'), require('./model/ChildAssocInfo'), require('./model/Comment'), require('./model/CommentBody'), require('./model/CommentBody1'), require('./model/CommentEntry'), require('./model/CommentPaging'), require('./model/CommentPagingList'), require('./model/Company'), require('./model/ContentInfo'), require('./model/CopyBody'), require('./model/DeletedNode'), require('./model/DeletedNodeEntry'), require('./model/DeletedNodeMinimal'), require('./model/DeletedNodeMinimalEntry'), require('./model/DeletedNodesPaging'), require('./model/DeletedNodesPagingList'), require('./model/EmailSharedLinkBody'), require('./model/Error'), require('./model/ErrorError'), require('./model/Favorite'), require('./model/FavoriteBody'), require('./model/FavoriteEntry'), require('./model/FavoritePaging'), require('./model/FavoritePagingList'), require('./model/FavoriteSiteBody'), require('./model/InlineResponse201'), require('./model/InlineResponse201Entry'), require('./model/MoveBody'), require('./model/NetworkQuota'), require('./model/NodeAssocMinimal'), require('./model/NodeAssocMinimalEntry'), require('./model/NodeAssocPaging'), require('./model/NodeAssocPagingList'), require('./model/NodeBody'), require('./model/NodeBody1'), require('./model/NodeChildAssocMinimal'), require('./model/NodeChildAssocMinimalEntry'), require('./model/NodeChildAssocPaging'), require('./model/NodeChildAssocPagingList'), require('./model/NodeEntry'), require('./model/NodeFull'), require('./model/NodeMinimal'), require('./model/NodeMinimalEntry'), require('./model/NodePaging'), require('./model/NodePagingList'), require('./model/NodeSharedLink'), require('./model/NodeSharedLinkEntry'), require('./model/NodeSharedLinkPaging'), require('./model/NodeSharedLinkPagingList'), require('./model/NodesnodeIdchildrenContent'), require('./model/Pagination'), require('./model/PathElement'), require('./model/PathInfo'), require('./model/Person'), require('./model/PersonEntry'), require('./model/PersonNetwork'), require('./model/PersonNetworkEntry'), require('./model/PersonNetworkPaging'), require('./model/PersonNetworkPagingList'), require('./model/Preference'), require('./model/PreferenceEntry'), require('./model/PreferencePaging'), require('./model/PreferencePagingList'), require('./model/Rating'), require('./model/RatingAggregate'), require('./model/RatingBody'), require('./model/RatingEntry'), require('./model/RatingPaging'), require('./model/RatingPagingList'), require('./model/Rendition'), require('./model/RenditionBody'), require('./model/RenditionEntry'), require('./model/RenditionPaging'), require('./model/RenditionPagingList'), require('./model/SharedLinkBody'), require('./model/Site'), require('./model/SiteBody'), require('./model/SiteContainer'), require('./model/SiteContainerEntry'), require('./model/SiteContainerPaging'), require('./model/SiteEntry'), require('./model/SiteMember'), require('./model/SiteMemberBody'), require('./model/SiteMemberEntry'), require('./model/SiteMemberPaging'), require('./model/SiteMemberRoleBody'), require('./model/SiteMembershipBody'), require('./model/SiteMembershipBody1'), require('./model/SiteMembershipRequest'), require('./model/SiteMembershipRequestEntry'), require('./model/SiteMembershipRequestPaging'), require('./model/SiteMembershipRequestPagingList'), require('./model/SitePaging'), require('./model/SitePagingList'), require('./model/Tag'), require('./model/TagBody'), require('./model/TagBody1'), require('./model/TagEntry'), require('./model/TagPaging'), require('./model/TagPagingList'), require('./model/UserInfo'), require('./api/AssociationsApi'), require('./api/ChangesApi'), require('./api/ChildAssociationsApi'), require('./api/CommentsApi'), require('./api/FavoritesApi'), require('./api/NetworksApi'), require('./api/NodesApi'), require('./api/PeopleApi'), require('./api/RatingsApi'), require('./api/RenditionsApi'), require('./api/SearchApi'), require('./api/SharedlinksApi'), require('./api/SitesApi'), require('./api/TagsApi'));
  }
}(function(ApiClient, Activity, ActivityActivitySummary, ActivityEntry, ActivityPaging, ActivityPagingList, AssocChildBody, AssocInfo, AssocTargetBody, ChildAssocInfo, Comment, CommentBody, CommentBody1, CommentEntry, CommentPaging, CommentPagingList, Company, ContentInfo, CopyBody, DeletedNode, DeletedNodeEntry, DeletedNodeMinimal, DeletedNodeMinimalEntry, DeletedNodesPaging, DeletedNodesPagingList, EmailSharedLinkBody, Error, ErrorError, Favorite, FavoriteBody, FavoriteEntry, FavoritePaging, FavoritePagingList, FavoriteSiteBody, InlineResponse201, InlineResponse201Entry, MoveBody, NetworkQuota, NodeAssocMinimal, NodeAssocMinimalEntry, NodeAssocPaging, NodeAssocPagingList, NodeBody, NodeBody1, NodeChildAssocMinimal, NodeChildAssocMinimalEntry, NodeChildAssocPaging, NodeChildAssocPagingList, NodeEntry, NodeFull, NodeMinimal, NodeMinimalEntry, NodePaging, NodePagingList, NodeSharedLink, NodeSharedLinkEntry, NodeSharedLinkPaging, NodeSharedLinkPagingList, NodesnodeIdchildrenContent, Pagination, PathElement, PathInfo, Person, PersonEntry, PersonNetwork, PersonNetworkEntry, PersonNetworkPaging, PersonNetworkPagingList, Preference, PreferenceEntry, PreferencePaging, PreferencePagingList, Rating, RatingAggregate, RatingBody, RatingEntry, RatingPaging, RatingPagingList, Rendition, RenditionBody, RenditionEntry, RenditionPaging, RenditionPagingList, SharedLinkBody, Site, SiteBody, SiteContainer, SiteContainerEntry, SiteContainerPaging, SiteEntry, SiteMember, SiteMemberBody, SiteMemberEntry, SiteMemberPaging, SiteMemberRoleBody, SiteMembershipBody, SiteMembershipBody1, SiteMembershipRequest, SiteMembershipRequestEntry, SiteMembershipRequestPaging, SiteMembershipRequestPagingList, SitePaging, SitePagingList, Tag, TagBody, TagBody1, TagEntry, TagPaging, TagPagingList, UserInfo, AssociationsApi, ChangesApi, ChildAssociationsApi, CommentsApi, FavoritesApi, NetworksApi, NodesApi, PeopleApi, RatingsApi, RenditionsApi, SearchApi, SharedlinksApi, SitesApi, TagsApi) {
  'use strict';

  /**
   * Provides access to the core features of Alfresco.\n\nThis API uses the term **entity** to refer to an object in an Alfresco repository.\nAn **entity** is of a specific **type**, and has a unique **id**.\n\n* The **id** of an entity of type **node** is the **NodeRef** with the &#x60;workspace://SpacesStore&#x60; prefix removed.\n* The **id** of an entity of type **site** is the site&#39;s short name.\n* The **id** for an entity of type **person** is the person&#39;s username.\n.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoCoreRestApi = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoCoreRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoCoreRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AlfrescoCoreRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AlfrescoCoreRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Activity model constructor.
     * @property {module:model/Activity}
     */
    Activity: Activity,
    /**
     * The ActivityActivitySummary model constructor.
     * @property {module:model/ActivityActivitySummary}
     */
    ActivityActivitySummary: ActivityActivitySummary,
    /**
     * The ActivityEntry model constructor.
     * @property {module:model/ActivityEntry}
     */
    ActivityEntry: ActivityEntry,
    /**
     * The ActivityPaging model constructor.
     * @property {module:model/ActivityPaging}
     */
    ActivityPaging: ActivityPaging,
    /**
     * The ActivityPagingList model constructor.
     * @property {module:model/ActivityPagingList}
     */
    ActivityPagingList: ActivityPagingList,
    /**
     * The AssocChildBody model constructor.
     * @property {module:model/AssocChildBody}
     */
    AssocChildBody: AssocChildBody,
    /**
     * The AssocInfo model constructor.
     * @property {module:model/AssocInfo}
     */
    AssocInfo: AssocInfo,
    /**
     * The AssocTargetBody model constructor.
     * @property {module:model/AssocTargetBody}
     */
    AssocTargetBody: AssocTargetBody,
    /**
     * The ChildAssocInfo model constructor.
     * @property {module:model/ChildAssocInfo}
     */
    ChildAssocInfo: ChildAssocInfo,
    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment: Comment,
    /**
     * The CommentBody model constructor.
     * @property {module:model/CommentBody}
     */
    CommentBody: CommentBody,
    /**
     * The CommentBody1 model constructor.
     * @property {module:model/CommentBody1}
     */
    CommentBody1: CommentBody1,
    /**
     * The CommentEntry model constructor.
     * @property {module:model/CommentEntry}
     */
    CommentEntry: CommentEntry,
    /**
     * The CommentPaging model constructor.
     * @property {module:model/CommentPaging}
     */
    CommentPaging: CommentPaging,
    /**
     * The CommentPagingList model constructor.
     * @property {module:model/CommentPagingList}
     */
    CommentPagingList: CommentPagingList,
    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company: Company,
    /**
     * The ContentInfo model constructor.
     * @property {module:model/ContentInfo}
     */
    ContentInfo: ContentInfo,
    /**
     * The CopyBody model constructor.
     * @property {module:model/CopyBody}
     */
    CopyBody: CopyBody,
    /**
     * The DeletedNode model constructor.
     * @property {module:model/DeletedNode}
     */
    DeletedNode: DeletedNode,
    /**
     * The DeletedNodeEntry model constructor.
     * @property {module:model/DeletedNodeEntry}
     */
    DeletedNodeEntry: DeletedNodeEntry,
    /**
     * The DeletedNodeMinimal model constructor.
     * @property {module:model/DeletedNodeMinimal}
     */
    DeletedNodeMinimal: DeletedNodeMinimal,
    /**
     * The DeletedNodeMinimalEntry model constructor.
     * @property {module:model/DeletedNodeMinimalEntry}
     */
    DeletedNodeMinimalEntry: DeletedNodeMinimalEntry,
    /**
     * The DeletedNodesPaging model constructor.
     * @property {module:model/DeletedNodesPaging}
     */
    DeletedNodesPaging: DeletedNodesPaging,
    /**
     * The DeletedNodesPagingList model constructor.
     * @property {module:model/DeletedNodesPagingList}
     */
    DeletedNodesPagingList: DeletedNodesPagingList,
    /**
     * The EmailSharedLinkBody model constructor.
     * @property {module:model/EmailSharedLinkBody}
     */
    EmailSharedLinkBody: EmailSharedLinkBody,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorError model constructor.
     * @property {module:model/ErrorError}
     */
    ErrorError: ErrorError,
    /**
     * The Favorite model constructor.
     * @property {module:model/Favorite}
     */
    Favorite: Favorite,
    /**
     * The FavoriteBody model constructor.
     * @property {module:model/FavoriteBody}
     */
    FavoriteBody: FavoriteBody,
    /**
     * The FavoriteEntry model constructor.
     * @property {module:model/FavoriteEntry}
     */
    FavoriteEntry: FavoriteEntry,
    /**
     * The FavoritePaging model constructor.
     * @property {module:model/FavoritePaging}
     */
    FavoritePaging: FavoritePaging,
    /**
     * The FavoritePagingList model constructor.
     * @property {module:model/FavoritePagingList}
     */
    FavoritePagingList: FavoritePagingList,
    /**
     * The FavoriteSiteBody model constructor.
     * @property {module:model/FavoriteSiteBody}
     */
    FavoriteSiteBody: FavoriteSiteBody,
    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201: InlineResponse201,
    /**
     * The InlineResponse201Entry model constructor.
     * @property {module:model/InlineResponse201Entry}
     */
    InlineResponse201Entry: InlineResponse201Entry,
    /**
     * The MoveBody model constructor.
     * @property {module:model/MoveBody}
     */
    MoveBody: MoveBody,
    /**
     * The NetworkQuota model constructor.
     * @property {module:model/NetworkQuota}
     */
    NetworkQuota: NetworkQuota,
    /**
     * The NodeAssocMinimal model constructor.
     * @property {module:model/NodeAssocMinimal}
     */
    NodeAssocMinimal: NodeAssocMinimal,
    /**
     * The NodeAssocMinimalEntry model constructor.
     * @property {module:model/NodeAssocMinimalEntry}
     */
    NodeAssocMinimalEntry: NodeAssocMinimalEntry,
    /**
     * The NodeAssocPaging model constructor.
     * @property {module:model/NodeAssocPaging}
     */
    NodeAssocPaging: NodeAssocPaging,
    /**
     * The NodeAssocPagingList model constructor.
     * @property {module:model/NodeAssocPagingList}
     */
    NodeAssocPagingList: NodeAssocPagingList,
    /**
     * The NodeBody model constructor.
     * @property {module:model/NodeBody}
     */
    NodeBody: NodeBody,
    /**
     * The NodeBody1 model constructor.
     * @property {module:model/NodeBody1}
     */
    NodeBody1: NodeBody1,
    /**
     * The NodeChildAssocMinimal model constructor.
     * @property {module:model/NodeChildAssocMinimal}
     */
    NodeChildAssocMinimal: NodeChildAssocMinimal,
    /**
     * The NodeChildAssocMinimalEntry model constructor.
     * @property {module:model/NodeChildAssocMinimalEntry}
     */
    NodeChildAssocMinimalEntry: NodeChildAssocMinimalEntry,
    /**
     * The NodeChildAssocPaging model constructor.
     * @property {module:model/NodeChildAssocPaging}
     */
    NodeChildAssocPaging: NodeChildAssocPaging,
    /**
     * The NodeChildAssocPagingList model constructor.
     * @property {module:model/NodeChildAssocPagingList}
     */
    NodeChildAssocPagingList: NodeChildAssocPagingList,
    /**
     * The NodeEntry model constructor.
     * @property {module:model/NodeEntry}
     */
    NodeEntry: NodeEntry,
    /**
     * The NodeFull model constructor.
     * @property {module:model/NodeFull}
     */
    NodeFull: NodeFull,
    /**
     * The NodeMinimal model constructor.
     * @property {module:model/NodeMinimal}
     */
    NodeMinimal: NodeMinimal,
    /**
     * The NodeMinimalEntry model constructor.
     * @property {module:model/NodeMinimalEntry}
     */
    NodeMinimalEntry: NodeMinimalEntry,
    /**
     * The NodePaging model constructor.
     * @property {module:model/NodePaging}
     */
    NodePaging: NodePaging,
    /**
     * The NodePagingList model constructor.
     * @property {module:model/NodePagingList}
     */
    NodePagingList: NodePagingList,
    /**
     * The NodeSharedLink model constructor.
     * @property {module:model/NodeSharedLink}
     */
    NodeSharedLink: NodeSharedLink,
    /**
     * The NodeSharedLinkEntry model constructor.
     * @property {module:model/NodeSharedLinkEntry}
     */
    NodeSharedLinkEntry: NodeSharedLinkEntry,
    /**
     * The NodeSharedLinkPaging model constructor.
     * @property {module:model/NodeSharedLinkPaging}
     */
    NodeSharedLinkPaging: NodeSharedLinkPaging,
    /**
     * The NodeSharedLinkPagingList model constructor.
     * @property {module:model/NodeSharedLinkPagingList}
     */
    NodeSharedLinkPagingList: NodeSharedLinkPagingList,
    /**
     * The NodesnodeIdchildrenContent model constructor.
     * @property {module:model/NodesnodeIdchildrenContent}
     */
    NodesnodeIdchildrenContent: NodesnodeIdchildrenContent,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The PathElement model constructor.
     * @property {module:model/PathElement}
     */
    PathElement: PathElement,
    /**
     * The PathInfo model constructor.
     * @property {module:model/PathInfo}
     */
    PathInfo: PathInfo,
    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person: Person,
    /**
     * The PersonEntry model constructor.
     * @property {module:model/PersonEntry}
     */
    PersonEntry: PersonEntry,
    /**
     * The PersonNetwork model constructor.
     * @property {module:model/PersonNetwork}
     */
    PersonNetwork: PersonNetwork,
    /**
     * The PersonNetworkEntry model constructor.
     * @property {module:model/PersonNetworkEntry}
     */
    PersonNetworkEntry: PersonNetworkEntry,
    /**
     * The PersonNetworkPaging model constructor.
     * @property {module:model/PersonNetworkPaging}
     */
    PersonNetworkPaging: PersonNetworkPaging,
    /**
     * The PersonNetworkPagingList model constructor.
     * @property {module:model/PersonNetworkPagingList}
     */
    PersonNetworkPagingList: PersonNetworkPagingList,
    /**
     * The Preference model constructor.
     * @property {module:model/Preference}
     */
    Preference: Preference,
    /**
     * The PreferenceEntry model constructor.
     * @property {module:model/PreferenceEntry}
     */
    PreferenceEntry: PreferenceEntry,
    /**
     * The PreferencePaging model constructor.
     * @property {module:model/PreferencePaging}
     */
    PreferencePaging: PreferencePaging,
    /**
     * The PreferencePagingList model constructor.
     * @property {module:model/PreferencePagingList}
     */
    PreferencePagingList: PreferencePagingList,
    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating: Rating,
    /**
     * The RatingAggregate model constructor.
     * @property {module:model/RatingAggregate}
     */
    RatingAggregate: RatingAggregate,
    /**
     * The RatingBody model constructor.
     * @property {module:model/RatingBody}
     */
    RatingBody: RatingBody,
    /**
     * The RatingEntry model constructor.
     * @property {module:model/RatingEntry}
     */
    RatingEntry: RatingEntry,
    /**
     * The RatingPaging model constructor.
     * @property {module:model/RatingPaging}
     */
    RatingPaging: RatingPaging,
    /**
     * The RatingPagingList model constructor.
     * @property {module:model/RatingPagingList}
     */
    RatingPagingList: RatingPagingList,
    /**
     * The Rendition model constructor.
     * @property {module:model/Rendition}
     */
    Rendition: Rendition,
    /**
     * The RenditionBody model constructor.
     * @property {module:model/RenditionBody}
     */
    RenditionBody: RenditionBody,
    /**
     * The RenditionEntry model constructor.
     * @property {module:model/RenditionEntry}
     */
    RenditionEntry: RenditionEntry,
    /**
     * The RenditionPaging model constructor.
     * @property {module:model/RenditionPaging}
     */
    RenditionPaging: RenditionPaging,
    /**
     * The RenditionPagingList model constructor.
     * @property {module:model/RenditionPagingList}
     */
    RenditionPagingList: RenditionPagingList,
    /**
     * The SharedLinkBody model constructor.
     * @property {module:model/SharedLinkBody}
     */
    SharedLinkBody: SharedLinkBody,
    /**
     * The Site model constructor.
     * @property {module:model/Site}
     */
    Site: Site,
    /**
     * The SiteBody model constructor.
     * @property {module:model/SiteBody}
     */
    SiteBody: SiteBody,
    /**
     * The SiteContainer model constructor.
     * @property {module:model/SiteContainer}
     */
    SiteContainer: SiteContainer,
    /**
     * The SiteContainerEntry model constructor.
     * @property {module:model/SiteContainerEntry}
     */
    SiteContainerEntry: SiteContainerEntry,
    /**
     * The SiteContainerPaging model constructor.
     * @property {module:model/SiteContainerPaging}
     */
    SiteContainerPaging: SiteContainerPaging,
    /**
     * The SiteEntry model constructor.
     * @property {module:model/SiteEntry}
     */
    SiteEntry: SiteEntry,
    /**
     * The SiteMember model constructor.
     * @property {module:model/SiteMember}
     */
    SiteMember: SiteMember,
    /**
     * The SiteMemberBody model constructor.
     * @property {module:model/SiteMemberBody}
     */
    SiteMemberBody: SiteMemberBody,
    /**
     * The SiteMemberEntry model constructor.
     * @property {module:model/SiteMemberEntry}
     */
    SiteMemberEntry: SiteMemberEntry,
    /**
     * The SiteMemberPaging model constructor.
     * @property {module:model/SiteMemberPaging}
     */
    SiteMemberPaging: SiteMemberPaging,
    /**
     * The SiteMemberRoleBody model constructor.
     * @property {module:model/SiteMemberRoleBody}
     */
    SiteMemberRoleBody: SiteMemberRoleBody,
    /**
     * The SiteMembershipBody model constructor.
     * @property {module:model/SiteMembershipBody}
     */
    SiteMembershipBody: SiteMembershipBody,
    /**
     * The SiteMembershipBody1 model constructor.
     * @property {module:model/SiteMembershipBody1}
     */
    SiteMembershipBody1: SiteMembershipBody1,
    /**
     * The SiteMembershipRequest model constructor.
     * @property {module:model/SiteMembershipRequest}
     */
    SiteMembershipRequest: SiteMembershipRequest,
    /**
     * The SiteMembershipRequestEntry model constructor.
     * @property {module:model/SiteMembershipRequestEntry}
     */
    SiteMembershipRequestEntry: SiteMembershipRequestEntry,
    /**
     * The SiteMembershipRequestPaging model constructor.
     * @property {module:model/SiteMembershipRequestPaging}
     */
    SiteMembershipRequestPaging: SiteMembershipRequestPaging,
    /**
     * The SiteMembershipRequestPagingList model constructor.
     * @property {module:model/SiteMembershipRequestPagingList}
     */
    SiteMembershipRequestPagingList: SiteMembershipRequestPagingList,
    /**
     * The SitePaging model constructor.
     * @property {module:model/SitePaging}
     */
    SitePaging: SitePaging,
    /**
     * The SitePagingList model constructor.
     * @property {module:model/SitePagingList}
     */
    SitePagingList: SitePagingList,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The TagBody model constructor.
     * @property {module:model/TagBody}
     */
    TagBody: TagBody,
    /**
     * The TagBody1 model constructor.
     * @property {module:model/TagBody1}
     */
    TagBody1: TagBody1,
    /**
     * The TagEntry model constructor.
     * @property {module:model/TagEntry}
     */
    TagEntry: TagEntry,
    /**
     * The TagPaging model constructor.
     * @property {module:model/TagPaging}
     */
    TagPaging: TagPaging,
    /**
     * The TagPagingList model constructor.
     * @property {module:model/TagPagingList}
     */
    TagPagingList: TagPagingList,
    /**
     * The UserInfo model constructor.
     * @property {module:model/UserInfo}
     */
    UserInfo: UserInfo,
    /**
     * The AssociationsApi service constructor.
     * @property {module:api/AssociationsApi}
     */
    AssociationsApi: AssociationsApi,
    /**
     * The ChangesApi service constructor.
     * @property {module:api/ChangesApi}
     */
    ChangesApi: ChangesApi,
    /**
     * The ChildAssociationsApi service constructor.
     * @property {module:api/ChildAssociationsApi}
     */
    ChildAssociationsApi: ChildAssociationsApi,
    /**
     * The CommentsApi service constructor.
     * @property {module:api/CommentsApi}
     */
    CommentsApi: CommentsApi,
    /**
     * The FavoritesApi service constructor.
     * @property {module:api/FavoritesApi}
     */
    FavoritesApi: FavoritesApi,
    /**
     * The NetworksApi service constructor.
     * @property {module:api/NetworksApi}
     */
    NetworksApi: NetworksApi,
    /**
     * The NodesApi service constructor.
     * @property {module:api/NodesApi}
     */
    NodesApi: NodesApi,
    /**
     * The PeopleApi service constructor.
     * @property {module:api/PeopleApi}
     */
    PeopleApi: PeopleApi,
    /**
     * The RatingsApi service constructor.
     * @property {module:api/RatingsApi}
     */
    RatingsApi: RatingsApi,
    /**
     * The RenditionsApi service constructor.
     * @property {module:api/RenditionsApi}
     */
    RenditionsApi: RenditionsApi,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The SharedlinksApi service constructor.
     * @property {module:api/SharedlinksApi}
     */
    SharedlinksApi: SharedlinksApi,
    /**
     * The SitesApi service constructor.
     * @property {module:api/SitesApi}
     */
    SitesApi: SitesApi,
    /**
     * The TagsApi service constructor.
     * @property {module:api/TagsApi}
     */
    TagsApi: TagsApi
  };

  return exports;
}));

},{"./ApiClient":11,"./api/AssociationsApi":12,"./api/ChangesApi":13,"./api/ChildAssociationsApi":14,"./api/CommentsApi":15,"./api/FavoritesApi":16,"./api/NetworksApi":17,"./api/NodesApi":18,"./api/PeopleApi":19,"./api/RatingsApi":20,"./api/RenditionsApi":21,"./api/SearchApi":22,"./api/SharedlinksApi":23,"./api/SitesApi":24,"./api/TagsApi":25,"./model/Activity":27,"./model/ActivityActivitySummary":28,"./model/ActivityEntry":29,"./model/ActivityPaging":30,"./model/ActivityPagingList":31,"./model/AssocChildBody":32,"./model/AssocInfo":33,"./model/AssocTargetBody":34,"./model/ChildAssocInfo":35,"./model/Comment":36,"./model/CommentBody":37,"./model/CommentBody1":38,"./model/CommentEntry":39,"./model/CommentPaging":40,"./model/CommentPagingList":41,"./model/Company":42,"./model/ContentInfo":43,"./model/CopyBody":44,"./model/DeletedNode":45,"./model/DeletedNodeEntry":46,"./model/DeletedNodeMinimal":47,"./model/DeletedNodeMinimalEntry":48,"./model/DeletedNodesPaging":49,"./model/DeletedNodesPagingList":50,"./model/EmailSharedLinkBody":51,"./model/Error":52,"./model/ErrorError":53,"./model/Favorite":54,"./model/FavoriteBody":55,"./model/FavoriteEntry":56,"./model/FavoritePaging":57,"./model/FavoritePagingList":58,"./model/FavoriteSiteBody":59,"./model/InlineResponse201":60,"./model/InlineResponse201Entry":61,"./model/MoveBody":62,"./model/NetworkQuota":63,"./model/NodeAssocMinimal":64,"./model/NodeAssocMinimalEntry":65,"./model/NodeAssocPaging":66,"./model/NodeAssocPagingList":67,"./model/NodeBody":68,"./model/NodeBody1":69,"./model/NodeChildAssocMinimal":70,"./model/NodeChildAssocMinimalEntry":71,"./model/NodeChildAssocPaging":72,"./model/NodeChildAssocPagingList":73,"./model/NodeEntry":74,"./model/NodeFull":75,"./model/NodeMinimal":76,"./model/NodeMinimalEntry":77,"./model/NodePaging":78,"./model/NodePagingList":79,"./model/NodeSharedLink":80,"./model/NodeSharedLinkEntry":81,"./model/NodeSharedLinkPaging":82,"./model/NodeSharedLinkPagingList":83,"./model/NodesnodeIdchildrenContent":84,"./model/Pagination":85,"./model/PathElement":86,"./model/PathInfo":87,"./model/Person":88,"./model/PersonEntry":89,"./model/PersonNetwork":90,"./model/PersonNetworkEntry":91,"./model/PersonNetworkPaging":92,"./model/PersonNetworkPagingList":93,"./model/Preference":94,"./model/PreferenceEntry":95,"./model/PreferencePaging":96,"./model/PreferencePagingList":97,"./model/Rating":98,"./model/RatingAggregate":99,"./model/RatingBody":100,"./model/RatingEntry":101,"./model/RatingPaging":102,"./model/RatingPagingList":103,"./model/Rendition":104,"./model/RenditionBody":105,"./model/RenditionEntry":106,"./model/RenditionPaging":107,"./model/RenditionPagingList":108,"./model/SharedLinkBody":109,"./model/Site":110,"./model/SiteBody":111,"./model/SiteContainer":112,"./model/SiteContainerEntry":113,"./model/SiteContainerPaging":114,"./model/SiteEntry":115,"./model/SiteMember":116,"./model/SiteMemberBody":117,"./model/SiteMemberEntry":118,"./model/SiteMemberPaging":119,"./model/SiteMemberRoleBody":120,"./model/SiteMembershipBody":121,"./model/SiteMembershipBody1":122,"./model/SiteMembershipRequest":123,"./model/SiteMembershipRequestEntry":124,"./model/SiteMembershipRequestPaging":125,"./model/SiteMembershipRequestPagingList":126,"./model/SitePaging":127,"./model/SitePagingList":128,"./model/Tag":129,"./model/TagBody":130,"./model/TagBody1":131,"./model/TagEntry":132,"./model/TagPaging":133,"./model/TagPagingList":134,"./model/UserInfo":135}],27:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ActivityActivitySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityActivitySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Activity = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ActivityActivitySummary);
  }
}(this, function(ApiClient, ActivityActivitySummary) {
  'use strict';

  /**
   * The Activity model module.
   * @module model/Activity
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Activity</code>.
   * Activities describe any past activity in a site,\nfor example creating an item of content, commenting on a node,\nliking an item of content.\n
   * @alias module:model/Activity
   * @class
   * @param postPersonId
   * @param id
   * @param feedPersonId
   * @param activityType
   */
  var exports = function(postPersonId, id, feedPersonId, activityType) {

    this['postPersonId'] = postPersonId;
    this['id'] = id;


    this['feedPersonId'] = feedPersonId;

    this['activityType'] = activityType;
  };

  /**
   * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Activity} obj Optional instance to populate.
   * @return {module:model/Activity} The populated <code>Activity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('postPersonId')) {
        obj['postPersonId'] = ApiClient.convertToType(data['postPersonId'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
      }
      if (data.hasOwnProperty('postedAt')) {
        obj['postedAt'] = ApiClient.convertToType(data['postedAt'], 'Date');
      }
      if (data.hasOwnProperty('feedPersonId')) {
        obj['feedPersonId'] = ApiClient.convertToType(data['feedPersonId'], 'String');
      }
      if (data.hasOwnProperty('activitySummary')) {
        obj['activitySummary'] = ActivityActivitySummary.constructFromObject(data['activitySummary']);
      }
      if (data.hasOwnProperty('activityType')) {
        obj['activityType'] = ApiClient.convertToType(data['activityType'], 'String');
      }
    }
    return obj;
  }


  /**
   * The id of the person who performed the activity
   * @member {String} postPersonId
   */
  exports.prototype['postPersonId'] = undefined;

  /**
   * The unique id of the activity
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The unique id of the site on which the activity was performed
   * @member {String} siteId
   */
  exports.prototype['siteId'] = undefined;

  /**
   * The date time at which the activity was performed
   * @member {Date} postedAt
   */
  exports.prototype['postedAt'] = undefined;

  /**
   * The feed on which this activity was posted
   * @member {String} feedPersonId
   */
  exports.prototype['feedPersonId'] = undefined;

  /**
   * @member {module:model/ActivityActivitySummary} activitySummary
   */
  exports.prototype['activitySummary'] = undefined;

  /**
   * The feed on which this activity was posted
   * @member {module:model/Activity.ActivityTypeEnum} activityType
   */
  exports.prototype['activityType'] = undefined;


  /**
   * Allowed values for the <code>activityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActivityTypeEnum = {
    /**
     * value: org.alfresco.comments.comment-created
     * @const
     */
    COMMENTS_COMMENT_CREATED: "org.alfresco.comments.comment-created",

    /**
     * value: org.alfresco.comments.comment-updated
     * @const
     */
    COMMENTS_COMMENT_UPDATED: "org.alfresco.comments.comment-updated",

    /**
     * value: org.alfresco.comments.comment-deleted
     * @const
     */
    COMMENTS_COMMENT_DELETED: "org.alfresco.comments.comment-deleted",

    /**
     * value: org.alfresco.documentlibrary.files-added
     * @const
     */
    DOCUMENTLIBRARY_FILES_ADDED: "org.alfresco.documentlibrary.files-added",

    /**
     * value: org.alfresco.documentlibrary.files-updated
     * @const
     */
    DOCUMENTLIBRARY_FILES_UPDATED: "org.alfresco.documentlibrary.files-updated",

    /**
     * value: org.alfresco.documentlibrary.files-deleted
     * @const
     */
    DOCUMENTLIBRARY_FILES_DELETED: "org.alfresco.documentlibrary.files-deleted",

    /**
     * value: org.alfresco.documentlibrary.file-added
     * @const
     */
    DOCUMENTLIBRARY_FILE_ADDED: "org.alfresco.documentlibrary.file-added",

    /**
     * value: org.alfresco.documentlibrary.file-created
     * @const
     */
    DOCUMENTLIBRARY_FILE_CREATED: "org.alfresco.documentlibrary.file-created",

    /**
     * value: org.alfresco.documentlibrary.file-deleted
     * @const
     */
    DOCUMENTLIBRARY_FILE_DELETED: "org.alfresco.documentlibrary.file-deleted",

    /**
     * value: org.alfresco.documentlibrary.file-downloaded
     * @const
     */
    DOCUMENTLIBRARY_FILE_DOWNLOADED: "org.alfresco.documentlibrary.file-downloaded",

    /**
     * value: org.alfresco.documentlibrary.file-liked
     * @const
     */
    DOCUMENTLIBRARY_FILE_LIKED: "org.alfresco.documentlibrary.file-liked",

    /**
     * value: org.alfresco.documentlibrary.file-previewed
     * @const
     */
    DOCUMENTLIBRARY_FILE_PREVIEWED: "org.alfresco.documentlibrary.file-previewed",

    /**
     * value: org.alfresco.documentlibrary.inline-edit
     * @const
     */
    DOCUMENTLIBRARY_INLINE_EDIT: "org.alfresco.documentlibrary.inline-edit",

    /**
     * value: org.alfresco.documentlibrary.folder-liked
     * @const
     */
    DOCUMENTLIBRARY_FOLDER_LIKED: "org.alfresco.documentlibrary.folder-liked",

    /**
     * value: org.alfresco.site.user-joined
     * @const
     */
    SITE_USER_JOINED: "org.alfresco.site.user-joined",

    /**
     * value: org.alfresco.site.user-left
     * @const
     */
    SITE_USER_LEFT: "org.alfresco.site.user-left",

    /**
     * value: org.alfresco.site.user-role-changed
     * @const
     */
    SITE_USER_ROLE_CHANGED: "org.alfresco.site.user-role-changed",

    /**
     * value: org.alfresco.site.group-added
     * @const
     */
    SITE_GROUP_ADDED: "org.alfresco.site.group-added",

    /**
     * value: org.alfresco.site.group-removed
     * @const
     */
    SITE_GROUP_REMOVED: "org.alfresco.site.group-removed",

    /**
     * value: org.alfresco.site.group-role-changed
     * @const
     */
    SITE_GROUP_ROLE_CHANGED: "org.alfresco.site.group-role-changed",

    /**
     * value: org.alfresco.discussions.reply-created
     * @const
     */
    DISCUSSIONS_REPLY_CREATED: "org.alfresco.discussions.reply-created",

    /**
     * value: org.alfresco.subscriptions.followed
     * @const
     */
    SUBSCRIPTIONS_FOLLOWED: "org.alfresco.subscriptions.followed",

    /**
     * value: org.alfresco.subscriptions.subscribed
     * @const
     */
    SUBSCRIPTIONS_SUBSCRIBED: "org.alfresco.subscriptions.subscribed"
  };

  return exports;
}));

},{"../ApiClient":11,"./ActivityActivitySummary":28}],28:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ActivityActivitySummary = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ActivityActivitySummary model module.
   * @module model/ActivityActivitySummary
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ActivityActivitySummary</code>.
   * An object summarizing the activity
   * @alias module:model/ActivityActivitySummary
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ActivityActivitySummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityActivitySummary} obj Optional instance to populate.
   * @return {module:model/ActivityActivitySummary} The populated <code>ActivityActivitySummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('parentObjectId')) {
        obj['parentObjectId'] = ApiClient.convertToType(data['parentObjectId'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;

  /**
   * @member {String} parentObjectId
   */
  exports.prototype['parentObjectId'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],29:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Activity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Activity'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ActivityEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Activity);
  }
}(this, function(ApiClient, Activity) {
  'use strict';

  /**
   * The ActivityEntry model module.
   * @module model/ActivityEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ActivityEntry</code>.
   * @alias module:model/ActivityEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ActivityEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityEntry} obj Optional instance to populate.
   * @return {module:model/ActivityEntry} The populated <code>ActivityEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Activity.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Activity} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Activity":27}],30:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ActivityPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ActivityPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ActivityPagingList);
  }
}(this, function(ApiClient, ActivityPagingList) {
  'use strict';

  /**
   * The ActivityPaging model module.
   * @module model/ActivityPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ActivityPaging</code>.
   * @alias module:model/ActivityPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ActivityPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityPaging} obj Optional instance to populate.
   * @return {module:model/ActivityPaging} The populated <code>ActivityPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ActivityPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ActivityPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ActivityPagingList":31}],31:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ActivityEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ActivityPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ActivityEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, ActivityEntry, Pagination) {
  'use strict';

  /**
   * The ActivityPagingList model module.
   * @module model/ActivityPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ActivityPagingList</code>.
   * @alias module:model/ActivityPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>ActivityPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityPagingList} obj Optional instance to populate.
   * @return {module:model/ActivityPagingList} The populated <code>ActivityPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [ActivityEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/ActivityEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ActivityEntry":29,"./Pagination":85}],32:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.AssocChildBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AssocChildBody model module.
   * @module model/AssocChildBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AssocChildBody</code>.
   * @alias module:model/AssocChildBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>AssocChildBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssocChildBody} obj Optional instance to populate.
   * @return {module:model/AssocChildBody} The populated <code>AssocChildBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('childId')) {
        obj['childId'] = ApiClient.convertToType(data['childId'], 'String');
      }
      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} childId
   */
  exports.prototype['childId'] = undefined;

  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],33:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.AssocInfo = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AssocInfo model module.
   * @module model/AssocInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AssocInfo</code>.
   * @alias module:model/AssocInfo
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AssocInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssocInfo} obj Optional instance to populate.
   * @return {module:model/AssocInfo} The populated <code>AssocInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],34:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.AssocTargetBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AssocTargetBody model module.
   * @module model/AssocTargetBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AssocTargetBody</code>.
   * @alias module:model/AssocTargetBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>AssocTargetBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssocTargetBody} obj Optional instance to populate.
   * @return {module:model/AssocTargetBody} The populated <code>AssocTargetBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targetId')) {
        obj['targetId'] = ApiClient.convertToType(data['targetId'], 'String');
      }
      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} targetId
   */
  exports.prototype['targetId'] = undefined;

  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],35:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ChildAssocInfo = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChildAssocInfo model module.
   * @module model/ChildAssocInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ChildAssocInfo</code>.
   * @alias module:model/ChildAssocInfo
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ChildAssocInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChildAssocInfo} obj Optional instance to populate.
   * @return {module:model/ChildAssocInfo} The populated <code>ChildAssocInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
      if (data.hasOwnProperty('isPrimary')) {
        obj['isPrimary'] = ApiClient.convertToType(data['isPrimary'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;

  /**
   * @member {Boolean} isPrimary
   */
  exports.prototype['isPrimary'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],36:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Person'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Comment = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Person);
  }
}(this, function(ApiClient, Person) {
  'use strict';

  /**
   * The Comment model module.
   * @module model/Comment
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Comment</code>.
   * @alias module:model/Comment
   * @class
   * @param id
   * @param content
   * @param createdBy
   * @param createdAt
   * @param edited
   * @param modifiedBy
   * @param modifiedAt
   * @param canEdit
   * @param canDelete
   */
  var exports = function(id, content, createdBy, createdAt, edited, modifiedBy, modifiedAt, canEdit, canDelete) {

    this['id'] = id;
    this['content'] = content;
    this['createdBy'] = createdBy;
    this['createdAt'] = createdAt;
    this['edited'] = edited;
    this['modifiedBy'] = modifiedBy;
    this['modifiedAt'] = modifiedAt;
    this['canEdit'] = canEdit;
    this['canDelete'] = canDelete;
  };

  /**
   * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Comment} obj Optional instance to populate.
   * @return {module:model/Comment} The populated <code>Comment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = Person.constructFromObject(data['createdBy']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('edited')) {
        obj['edited'] = ApiClient.convertToType(data['edited'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = Person.constructFromObject(data['modifiedBy']);
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('canEdit')) {
        obj['canEdit'] = ApiClient.convertToType(data['canEdit'], 'Boolean');
      }
      if (data.hasOwnProperty('canDelete')) {
        obj['canDelete'] = ApiClient.convertToType(data['canDelete'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {module:model/Person} createdBy
   */
  exports.prototype['createdBy'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {Boolean} edited
   */
  exports.prototype['edited'] = undefined;

  /**
   * @member {module:model/Person} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {Boolean} canEdit
   */
  exports.prototype['canEdit'] = undefined;

  /**
   * @member {Boolean} canDelete
   */
  exports.prototype['canDelete'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Person":88}],37:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CommentBody model module.
   * @module model/CommentBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentBody</code>.
   * @alias module:model/CommentBody
   * @class
   * @param content
   */
  var exports = function(content) {

    this['content'] = content;
  };

  /**
   * Constructs a <code>CommentBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentBody} obj Optional instance to populate.
   * @return {module:model/CommentBody} The populated <code>CommentBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],38:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentBody1 = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CommentBody1 model module.
   * @module model/CommentBody1
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentBody1</code>.
   * @alias module:model/CommentBody1
   * @class
   * @param content
   */
  var exports = function(content) {

    this['content'] = content;
  };

  /**
   * Constructs a <code>CommentBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentBody1} obj Optional instance to populate.
   * @return {module:model/CommentBody1} The populated <code>CommentBody1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],39:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Comment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Comment'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Comment);
  }
}(this, function(ApiClient, Comment) {
  'use strict';

  /**
   * The CommentEntry model module.
   * @module model/CommentEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentEntry</code>.
   * @alias module:model/CommentEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>CommentEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentEntry} obj Optional instance to populate.
   * @return {module:model/CommentEntry} The populated <code>CommentEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Comment.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Comment} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Comment":36}],40:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CommentPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.CommentPagingList);
  }
}(this, function(ApiClient, CommentPagingList) {
  'use strict';

  /**
   * The CommentPaging model module.
   * @module model/CommentPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentPaging</code>.
   * @alias module:model/CommentPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>CommentPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentPaging} obj Optional instance to populate.
   * @return {module:model/CommentPaging} The populated <code>CommentPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = CommentPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/CommentPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./CommentPagingList":41}],41:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CommentEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.CommentEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, CommentEntry, Pagination) {
  'use strict';

  /**
   * The CommentPagingList model module.
   * @module model/CommentPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentPagingList</code>.
   * @alias module:model/CommentPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>CommentPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentPagingList} obj Optional instance to populate.
   * @return {module:model/CommentPagingList} The populated <code>CommentPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [CommentEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/CommentEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./CommentEntry":39,"./Pagination":85}],42:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Company = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Company model module.
   * @module model/Company
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Company</code>.
   * @alias module:model/Company
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Company} obj Optional instance to populate.
   * @return {module:model/Company} The populated <code>Company</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('address3')) {
        obj['address3'] = ApiClient.convertToType(data['address3'], 'String');
      }
      if (data.hasOwnProperty('postcode')) {
        obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
      }
      if (data.hasOwnProperty('telephone')) {
        obj['telephone'] = ApiClient.convertToType(data['telephone'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} organization
   */
  exports.prototype['organization'] = undefined;

  /**
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;

  /**
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;

  /**
   * @member {String} address3
   */
  exports.prototype['address3'] = undefined;

  /**
   * @member {String} postcode
   */
  exports.prototype['postcode'] = undefined;

  /**
   * @member {String} telephone
   */
  exports.prototype['telephone'] = undefined;

  /**
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],43:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ContentInfo = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContentInfo model module.
   * @module model/ContentInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ContentInfo</code>.
   * @alias module:model/ContentInfo
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>ContentInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentInfo} obj Optional instance to populate.
   * @return {module:model/ContentInfo} The populated <code>ContentInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('mimeTypeName')) {
        obj['mimeTypeName'] = ApiClient.convertToType(data['mimeTypeName'], 'String');
      }
      if (data.hasOwnProperty('sizeInBytes')) {
        obj['sizeInBytes'] = ApiClient.convertToType(data['sizeInBytes'], 'Integer');
      }
      if (data.hasOwnProperty('encoding')) {
        obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;

  /**
   * @member {String} mimeTypeName
   */
  exports.prototype['mimeTypeName'] = undefined;

  /**
   * @member {Integer} sizeInBytes
   */
  exports.prototype['sizeInBytes'] = undefined;

  /**
   * @member {String} encoding
   */
  exports.prototype['encoding'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],44:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CopyBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CopyBody model module.
   * @module model/CopyBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CopyBody</code>.
   * @alias module:model/CopyBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CopyBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CopyBody} obj Optional instance to populate.
   * @return {module:model/CopyBody} The populated <code>CopyBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targetParentId')) {
        obj['targetParentId'] = ApiClient.convertToType(data['targetParentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} targetParentId
   */
  exports.prototype['targetParentId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],45:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo', './NodeFull', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'), require('./NodeFull'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNode = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.NodeFull, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, NodeFull, UserInfo) {
  'use strict';

  /**
   * The DeletedNode model module.
   * @module model/DeletedNode
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNode</code>.
   * @alias module:model/DeletedNode
   * @class
   * @extends module:model/NodeFull
   * @param archivedByUser
   * @param archivedAt
   */
  var exports = function(archivedByUser, archivedAt) {
    NodeFull.call(this);
    this['archivedByUser'] = archivedByUser;
    this['archivedAt'] = archivedAt;
  };

  /**
   * Constructs a <code>DeletedNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNode} obj Optional instance to populate.
   * @return {module:model/DeletedNode} The populated <code>DeletedNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      NodeFull.constructFromObject(data, obj);
      if (data.hasOwnProperty('archivedByUser')) {
        obj['archivedByUser'] = UserInfo.constructFromObject(data['archivedByUser']);
      }
      if (data.hasOwnProperty('archivedAt')) {
        obj['archivedAt'] = ApiClient.convertToType(data['archivedAt'], 'Date');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NodeFull.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/UserInfo} archivedByUser
   */
  exports.prototype['archivedByUser'] = undefined;

  /**
   * @member {Date} archivedAt
   */
  exports.prototype['archivedAt'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ContentInfo":43,"./NodeFull":75,"./UserInfo":135}],46:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeletedNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeletedNode'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodeEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNode);
  }
}(this, function(ApiClient, DeletedNode) {
  'use strict';

  /**
   * The DeletedNodeEntry model module.
   * @module model/DeletedNodeEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodeEntry</code>.
   * @alias module:model/DeletedNodeEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeletedNodeEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodeEntry} obj Optional instance to populate.
   * @return {module:model/DeletedNodeEntry} The populated <code>DeletedNodeEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = DeletedNode.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/DeletedNode} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./DeletedNode":45}],47:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo', './NodeMinimal', './PathElement', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'), require('./NodeMinimal'), require('./PathElement'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodeMinimal = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.NodeMinimal, root.AlfrescoCoreRestApi.PathElement, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, NodeMinimal, PathElement, UserInfo) {
  'use strict';

  /**
   * The DeletedNodeMinimal model module.
   * @module model/DeletedNodeMinimal
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodeMinimal</code>.
   * @alias module:model/DeletedNodeMinimal
   * @class
   * @extends module:model/NodeMinimal
   * @param archivedByUser
   * @param archivedAt
   */
  var exports = function(archivedByUser, archivedAt) {
    NodeMinimal.call(this);
    this['archivedByUser'] = archivedByUser;
    this['archivedAt'] = archivedAt;
  };

  /**
   * Constructs a <code>DeletedNodeMinimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodeMinimal} obj Optional instance to populate.
   * @return {module:model/DeletedNodeMinimal} The populated <code>DeletedNodeMinimal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      NodeMinimal.constructFromObject(data, obj);
      if (data.hasOwnProperty('archivedByUser')) {
        obj['archivedByUser'] = UserInfo.constructFromObject(data['archivedByUser']);
      }
      if (data.hasOwnProperty('archivedAt')) {
        obj['archivedAt'] = ApiClient.convertToType(data['archivedAt'], 'Date');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NodeMinimal.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/UserInfo} archivedByUser
   */
  exports.prototype['archivedByUser'] = undefined;

  /**
   * @member {Date} archivedAt
   */
  exports.prototype['archivedAt'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ContentInfo":43,"./NodeMinimal":76,"./PathElement":86,"./UserInfo":135}],48:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeletedNodeMinimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeletedNodeMinimal'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodeMinimalEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNodeMinimal);
  }
}(this, function(ApiClient, DeletedNodeMinimal) {
  'use strict';

  /**
   * The DeletedNodeMinimalEntry model module.
   * @module model/DeletedNodeMinimalEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodeMinimalEntry</code>.
   * @alias module:model/DeletedNodeMinimalEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeletedNodeMinimalEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodeMinimalEntry} obj Optional instance to populate.
   * @return {module:model/DeletedNodeMinimalEntry} The populated <code>DeletedNodeMinimalEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = DeletedNodeMinimal.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/DeletedNodeMinimal} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./DeletedNodeMinimal":47}],49:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeletedNodesPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeletedNodesPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodesPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNodesPagingList);
  }
}(this, function(ApiClient, DeletedNodesPagingList) {
  'use strict';

  /**
   * The DeletedNodesPaging model module.
   * @module model/DeletedNodesPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodesPaging</code>.
   * @alias module:model/DeletedNodesPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeletedNodesPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodesPaging} obj Optional instance to populate.
   * @return {module:model/DeletedNodesPaging} The populated <code>DeletedNodesPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = DeletedNodesPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/DeletedNodesPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./DeletedNodesPagingList":50}],50:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeletedNodeMinimalEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeletedNodeMinimalEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodesPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNodeMinimalEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, DeletedNodeMinimalEntry, Pagination) {
  'use strict';

  /**
   * The DeletedNodesPagingList model module.
   * @module model/DeletedNodesPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodesPagingList</code>.
   * @alias module:model/DeletedNodesPagingList
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DeletedNodesPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodesPagingList} obj Optional instance to populate.
   * @return {module:model/DeletedNodesPagingList} The populated <code>DeletedNodesPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [DeletedNodeMinimalEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/DeletedNodeMinimalEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./DeletedNodeMinimalEntry":48,"./Pagination":85}],51:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.EmailSharedLinkBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailSharedLinkBody model module.
   * @module model/EmailSharedLinkBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>EmailSharedLinkBody</code>.
   * @alias module:model/EmailSharedLinkBody
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>EmailSharedLinkBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailSharedLinkBody} obj Optional instance to populate.
   * @return {module:model/EmailSharedLinkBody} The populated <code>EmailSharedLinkBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client')) {
        obj['client'] = ApiClient.convertToType(data['client'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('recipientEmails')) {
        obj['recipientEmails'] = ApiClient.convertToType(data['recipientEmails'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {String} client
   */
  exports.prototype['client'] = undefined;

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;

  /**
   * @member {Array.<String>} recipientEmails
   */
  exports.prototype['recipientEmails'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],52:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ErrorError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorError'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Error = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ErrorError);
  }
}(this, function(ApiClient, ErrorError) {
  'use strict';

  /**
   * The Error model module.
   * @module model/Error
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorError.constructFromObject(data['error']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ErrorError} error
   */
  exports.prototype['error'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ErrorError":53}],53:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ErrorError = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ErrorError model module.
   * @module model/ErrorError
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ErrorError</code>.
   * @alias module:model/ErrorError
   * @class
   * @param briefSummary
   * @param descriptionURL
   * @param stackTrace
   * @param statusCode
   */
  var exports = function(briefSummary, descriptionURL, stackTrace, statusCode) {


    this['briefSummary'] = briefSummary;
    this['descriptionURL'] = descriptionURL;

    this['stackTrace'] = stackTrace;
    this['statusCode'] = statusCode;
  };

  /**
   * Constructs a <code>ErrorError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorError} obj Optional instance to populate.
   * @return {module:model/ErrorError} The populated <code>ErrorError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorKey')) {
        obj['errorKey'] = ApiClient.convertToType(data['errorKey'], 'String');
      }
      if (data.hasOwnProperty('briefSummary')) {
        obj['briefSummary'] = ApiClient.convertToType(data['briefSummary'], 'String');
      }
      if (data.hasOwnProperty('descriptionURL')) {
        obj['descriptionURL'] = ApiClient.convertToType(data['descriptionURL'], 'String');
      }
      if (data.hasOwnProperty('logId')) {
        obj['logId'] = ApiClient.convertToType(data['logId'], 'String');
      }
      if (data.hasOwnProperty('stackTrace')) {
        obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], 'String');
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {String} errorKey
   */
  exports.prototype['errorKey'] = undefined;

  /**
   * @member {String} briefSummary
   */
  exports.prototype['briefSummary'] = undefined;

  /**
   * @member {String} descriptionURL
   */
  exports.prototype['descriptionURL'] = undefined;

  /**
   * @member {String} logId
   */
  exports.prototype['logId'] = undefined;

  /**
   * @member {String} stackTrace
   */
  exports.prototype['stackTrace'] = undefined;

  /**
   * @member {Integer} statusCode
   */
  exports.prototype['statusCode'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],54:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Favorite = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Favorite model module.
   * @module model/Favorite
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Favorite</code>.
   * A favorite describes an Alfresco entity that a person has marked as a favorite.\nThe target can be a site, file or folder.\n
   * @alias module:model/Favorite
   * @class
   * @param targetGuid
   * @param target
   */
  var exports = function(targetGuid, target) {

    this['targetGuid'] = targetGuid;

    this['target'] = target;
  };

  /**
   * Constructs a <code>Favorite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Favorite} obj Optional instance to populate.
   * @return {module:model/Favorite} The populated <code>Favorite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targetGuid')) {
        obj['targetGuid'] = ApiClient.convertToType(data['targetGuid'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], Object);
      }
    }
    return obj;
  }


  /**
   * The guid of the object that is a favorite.
   * @member {String} targetGuid
   */
  exports.prototype['targetGuid'] = undefined;

  /**
   * The time the object was made a favorite.
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {Object} target
   */
  exports.prototype['target'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],55:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoriteBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FavoriteBody model module.
   * @module model/FavoriteBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FavoriteBody</code>.
   * @alias module:model/FavoriteBody
   * @class
   * @param target
   */
  var exports = function(target) {

    this['target'] = target;
  };

  /**
   * Constructs a <code>FavoriteBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteBody} obj Optional instance to populate.
   * @return {module:model/FavoriteBody} The populated <code>FavoriteBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], Object);
      }
    }
    return obj;
  }


  /**
   * @member {Object} target
   */
  exports.prototype['target'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],56:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Favorite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Favorite'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoriteEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Favorite);
  }
}(this, function(ApiClient, Favorite) {
  'use strict';

  /**
   * The FavoriteEntry model module.
   * @module model/FavoriteEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FavoriteEntry</code>.
   * @alias module:model/FavoriteEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>FavoriteEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteEntry} obj Optional instance to populate.
   * @return {module:model/FavoriteEntry} The populated <code>FavoriteEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Favorite.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Favorite} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Favorite":54}],57:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FavoritePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FavoritePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoritePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoritePagingList);
  }
}(this, function(ApiClient, FavoritePagingList) {
  'use strict';

  /**
   * The FavoritePaging model module.
   * @module model/FavoritePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FavoritePaging</code>.
   * @alias module:model/FavoritePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>FavoritePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoritePaging} obj Optional instance to populate.
   * @return {module:model/FavoritePaging} The populated <code>FavoritePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = FavoritePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/FavoritePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./FavoritePagingList":58}],58:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FavoriteEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FavoriteEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoritePagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, FavoriteEntry, Pagination) {
  'use strict';

  /**
   * The FavoritePagingList model module.
   * @module model/FavoritePagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FavoritePagingList</code>.
   * @alias module:model/FavoritePagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>FavoritePagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoritePagingList} obj Optional instance to populate.
   * @return {module:model/FavoritePagingList} The populated <code>FavoritePagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [FavoriteEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/FavoriteEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./FavoriteEntry":56,"./Pagination":85}],59:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoriteSiteBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FavoriteSiteBody model module.
   * @module model/FavoriteSiteBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FavoriteSiteBody</code>.
   * @alias module:model/FavoriteSiteBody
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>FavoriteSiteBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteSiteBody} obj Optional instance to populate.
   * @return {module:model/FavoriteSiteBody} The populated <code>FavoriteSiteBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],60:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './InlineResponse201Entry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse201Entry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.InlineResponse201 = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.InlineResponse201Entry);
  }
}(this, function(ApiClient, InlineResponse201Entry) {
  'use strict';

  /**
   * The InlineResponse201 model module.
   * @module model/InlineResponse201
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InlineResponse201</code>.
   * @alias module:model/InlineResponse201
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201} obj Optional instance to populate.
   * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = InlineResponse201Entry.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/InlineResponse201Entry} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./InlineResponse201Entry":61}],61:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.InlineResponse201Entry = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse201Entry model module.
   * @module model/InlineResponse201Entry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InlineResponse201Entry</code>.
   * @alias module:model/InlineResponse201Entry
   * @class
   * @param id
   */
  var exports = function(id) {

    this['id'] = id;
  };

  /**
   * Constructs a <code>InlineResponse201Entry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201Entry} obj Optional instance to populate.
   * @return {module:model/InlineResponse201Entry} The populated <code>InlineResponse201Entry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],62:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.MoveBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MoveBody model module.
   * @module model/MoveBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>MoveBody</code>.
   * @alias module:model/MoveBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>MoveBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoveBody} obj Optional instance to populate.
   * @return {module:model/MoveBody} The populated <code>MoveBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targetParentId')) {
        obj['targetParentId'] = ApiClient.convertToType(data['targetParentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} targetParentId
   */
  exports.prototype['targetParentId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],63:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NetworkQuota = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworkQuota model module.
   * @module model/NetworkQuota
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NetworkQuota</code>.
   * Limits and usage of each quota. A network will have quotas for File space,\nthe number of sites in the network, the number of people in the network,\nand the number of network administrators\n
   * @alias module:model/NetworkQuota
   * @class
   * @param id
   * @param limit
   * @param usage
   */
  var exports = function(id, limit, usage) {

    this['id'] = id;
    this['limit'] = limit;
    this['usage'] = usage;
  };

  /**
   * Constructs a <code>NetworkQuota</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkQuota} obj Optional instance to populate.
   * @return {module:model/NetworkQuota} The populated <code>NetworkQuota</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Integer');
      }
      if (data.hasOwnProperty('usage')) {
        obj['usage'] = ApiClient.convertToType(data['usage'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} limit
   */
  exports.prototype['limit'] = undefined;

  /**
   * @member {Integer} usage
   */
  exports.prototype['usage'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],64:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AssocInfo', './ContentInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssocInfo'), require('./ContentInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssocMinimal = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.AssocInfo, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, AssocInfo, ContentInfo, UserInfo) {
  'use strict';

  /**
   * The NodeAssocMinimal model module.
   * @module model/NodeAssocMinimal
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssocMinimal</code>.
   * @alias module:model/NodeAssocMinimal
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>NodeAssocMinimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssocMinimal} obj Optional instance to populate.
   * @return {module:model/NodeAssocMinimal} The populated <code>NodeAssocMinimal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('isFolder')) {
        obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('isFile')) {
        obj['isFile'] = ApiClient.convertToType(data['isFile'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = UserInfo.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('createdByUser')) {
        obj['createdByUser'] = UserInfo.constructFromObject(data['createdByUser']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('association')) {
        obj['association'] = AssocInfo.constructFromObject(data['association']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {Boolean} isFolder
   */
  exports.prototype['isFolder'] = undefined;

  /**
   * @member {Boolean} isFile
   */
  exports.prototype['isFile'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/UserInfo} createdByUser
   */
  exports.prototype['createdByUser'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {module:model/AssocInfo} association
   */
  exports.prototype['association'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./AssocInfo":33,"./ContentInfo":43,"./UserInfo":135}],65:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeAssocMinimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeAssocMinimal'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssocMinimalEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeAssocMinimal);
  }
}(this, function(ApiClient, NodeAssocMinimal) {
  'use strict';

  /**
   * The NodeAssocMinimalEntry model module.
   * @module model/NodeAssocMinimalEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssocMinimalEntry</code>.
   * @alias module:model/NodeAssocMinimalEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeAssocMinimalEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssocMinimalEntry} obj Optional instance to populate.
   * @return {module:model/NodeAssocMinimalEntry} The populated <code>NodeAssocMinimalEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeAssocMinimal.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeAssocMinimal} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeAssocMinimal":64}],66:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeAssocPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeAssocPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssocPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeAssocPagingList);
  }
}(this, function(ApiClient, NodeAssocPagingList) {
  'use strict';

  /**
   * The NodeAssocPaging model module.
   * @module model/NodeAssocPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssocPaging</code>.
   * @alias module:model/NodeAssocPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NodeAssocPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssocPaging} obj Optional instance to populate.
   * @return {module:model/NodeAssocPaging} The populated <code>NodeAssocPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodeAssocPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeAssocPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeAssocPagingList":67}],67:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeAssocMinimalEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeAssocMinimalEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssocPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeAssocMinimalEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, NodeAssocMinimalEntry, Pagination) {
  'use strict';

  /**
   * The NodeAssocPagingList model module.
   * @module model/NodeAssocPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssocPagingList</code>.
   * @alias module:model/NodeAssocPagingList
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>NodeAssocPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssocPagingList} obj Optional instance to populate.
   * @return {module:model/NodeAssocPagingList} The populated <code>NodeAssocPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [NodeAssocMinimalEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/NodeAssocMinimalEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeAssocMinimalEntry":65,"./Pagination":85}],68:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NodeBody model module.
   * @module model/NodeBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeBody</code>.
   * @alias module:model/NodeBody
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>NodeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeBody} obj Optional instance to populate.
   * @return {module:model/NodeBody} The populated <code>NodeBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('aspectNames')) {
        obj['aspectNames'] = ApiClient.convertToType(data['aspectNames'], ['String']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
    }
    return obj;
  }


  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {Array.<String>} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;

  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],69:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodesnodeIdchildrenContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodesnodeIdchildrenContent'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeBody1 = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodesnodeIdchildrenContent);
  }
}(this, function(ApiClient, NodesnodeIdchildrenContent) {
  'use strict';

  /**
   * The NodeBody1 model module.
   * @module model/NodeBody1
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeBody1</code>.
   * @alias module:model/NodeBody1
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>NodeBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeBody1} obj Optional instance to populate.
   * @return {module:model/NodeBody1} The populated <code>NodeBody1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('relativePath')) {
        obj['relativePath'] = ApiClient.convertToType(data['relativePath'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = NodesnodeIdchildrenContent.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('aspectNames')) {
        obj['aspectNames'] = ApiClient.convertToType(data['aspectNames'], ['String']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
    }
    return obj;
  }


  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {String} relativePath
   */
  exports.prototype['relativePath'] = undefined;

  /**
   * @member {module:model/NodesnodeIdchildrenContent} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {Array.<String>} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;

  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodesnodeIdchildrenContent":84}],70:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ChildAssocInfo', './ContentInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChildAssocInfo'), require('./ContentInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssocMinimal = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ChildAssocInfo, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ChildAssocInfo, ContentInfo, UserInfo) {
  'use strict';

  /**
   * The NodeChildAssocMinimal model module.
   * @module model/NodeChildAssocMinimal
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssocMinimal</code>.
   * @alias module:model/NodeChildAssocMinimal
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>NodeChildAssocMinimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssocMinimal} obj Optional instance to populate.
   * @return {module:model/NodeChildAssocMinimal} The populated <code>NodeChildAssocMinimal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('isFolder')) {
        obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('isFile')) {
        obj['isFile'] = ApiClient.convertToType(data['isFile'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = UserInfo.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('createdByUser')) {
        obj['createdByUser'] = UserInfo.constructFromObject(data['createdByUser']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('association')) {
        obj['association'] = ChildAssocInfo.constructFromObject(data['association']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {Boolean} isFolder
   */
  exports.prototype['isFolder'] = undefined;

  /**
   * @member {Boolean} isFile
   */
  exports.prototype['isFile'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/UserInfo} createdByUser
   */
  exports.prototype['createdByUser'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {module:model/ChildAssocInfo} association
   */
  exports.prototype['association'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ChildAssocInfo":35,"./ContentInfo":43,"./UserInfo":135}],71:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeChildAssocMinimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeChildAssocMinimal'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssocMinimalEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeChildAssocMinimal);
  }
}(this, function(ApiClient, NodeChildAssocMinimal) {
  'use strict';

  /**
   * The NodeChildAssocMinimalEntry model module.
   * @module model/NodeChildAssocMinimalEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssocMinimalEntry</code>.
   * @alias module:model/NodeChildAssocMinimalEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeChildAssocMinimalEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssocMinimalEntry} obj Optional instance to populate.
   * @return {module:model/NodeChildAssocMinimalEntry} The populated <code>NodeChildAssocMinimalEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeChildAssocMinimal.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeChildAssocMinimal} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeChildAssocMinimal":70}],72:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeChildAssocPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeChildAssocPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssocPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeChildAssocPagingList);
  }
}(this, function(ApiClient, NodeChildAssocPagingList) {
  'use strict';

  /**
   * The NodeChildAssocPaging model module.
   * @module model/NodeChildAssocPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssocPaging</code>.
   * @alias module:model/NodeChildAssocPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NodeChildAssocPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssocPaging} obj Optional instance to populate.
   * @return {module:model/NodeChildAssocPaging} The populated <code>NodeChildAssocPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodeChildAssocPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeChildAssocPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeChildAssocPagingList":73}],73:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeChildAssocMinimalEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeChildAssocMinimalEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssocPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeChildAssocMinimalEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, NodeChildAssocMinimalEntry, Pagination) {
  'use strict';

  /**
   * The NodeChildAssocPagingList model module.
   * @module model/NodeChildAssocPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssocPagingList</code>.
   * @alias module:model/NodeChildAssocPagingList
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>NodeChildAssocPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssocPagingList} obj Optional instance to populate.
   * @return {module:model/NodeChildAssocPagingList} The populated <code>NodeChildAssocPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [NodeChildAssocMinimalEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/NodeChildAssocMinimalEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeChildAssocMinimalEntry":71,"./Pagination":85}],74:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeFull'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeFull'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeFull);
  }
}(this, function(ApiClient, NodeFull) {
  'use strict';

  /**
   * The NodeEntry model module.
   * @module model/NodeEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeEntry</code>.
   * @alias module:model/NodeEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeEntry} obj Optional instance to populate.
   * @return {module:model/NodeEntry} The populated <code>NodeEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeFull.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeFull} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeFull":75}],75:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeFull = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, UserInfo) {
  'use strict';

  /**
   * The NodeFull model module.
   * @module model/NodeFull
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeFull</code>.
   * @alias module:model/NodeFull
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>NodeFull</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeFull} obj Optional instance to populate.
   * @return {module:model/NodeFull} The populated <code>NodeFull</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('isFolder')) {
        obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('isFile')) {
        obj['isFile'] = ApiClient.convertToType(data['isFile'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = UserInfo.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('createdByUser')) {
        obj['createdByUser'] = UserInfo.constructFromObject(data['createdByUser']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('aspectNames')) {
        obj['aspectNames'] = ApiClient.convertToType(data['aspectNames'], ['String']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
      if (data.hasOwnProperty('allowableOperations')) {
        obj['allowableOperations'] = ApiClient.convertToType(data['allowableOperations'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {Boolean} isFolder
   */
  exports.prototype['isFolder'] = undefined;

  /**
   * @member {Boolean} isFile
   */
  exports.prototype['isFile'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/UserInfo} createdByUser
   */
  exports.prototype['createdByUser'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {Array.<String>} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;

  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;

  /**
   * @member {Array.<String>} allowableOperations
   */
  exports.prototype['allowableOperations'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ContentInfo":43,"./UserInfo":135}],76:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo', './PathElement', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'), require('./PathElement'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeMinimal = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.PathElement, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, PathElement, UserInfo) {
  'use strict';

  /**
   * The NodeMinimal model module.
   * @module model/NodeMinimal
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeMinimal</code>.
   * @alias module:model/NodeMinimal
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>NodeMinimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeMinimal} obj Optional instance to populate.
   * @return {module:model/NodeMinimal} The populated <code>NodeMinimal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('isFolder')) {
        obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('isFile')) {
        obj['isFile'] = ApiClient.convertToType(data['isFile'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = UserInfo.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('createdByUser')) {
        obj['createdByUser'] = UserInfo.constructFromObject(data['createdByUser']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = PathElement.constructFromObject(data['path']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {Boolean} isFolder
   */
  exports.prototype['isFolder'] = undefined;

  /**
   * @member {Boolean} isFile
   */
  exports.prototype['isFile'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/UserInfo} createdByUser
   */
  exports.prototype['createdByUser'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {module:model/PathElement} path
   */
  exports.prototype['path'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ContentInfo":43,"./PathElement":86,"./UserInfo":135}],77:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeMinimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeMinimal'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeMinimalEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeMinimal);
  }
}(this, function(ApiClient, NodeMinimal) {
  'use strict';

  /**
   * The NodeMinimalEntry model module.
   * @module model/NodeMinimalEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeMinimalEntry</code>.
   * @alias module:model/NodeMinimalEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeMinimalEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeMinimalEntry} obj Optional instance to populate.
   * @return {module:model/NodeMinimalEntry} The populated <code>NodeMinimalEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeMinimal.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeMinimal} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeMinimal":76}],78:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodePagingList);
  }
}(this, function(ApiClient, NodePagingList) {
  'use strict';

  /**
   * The NodePaging model module.
   * @module model/NodePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodePaging</code>.
   * @alias module:model/NodePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NodePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodePaging} obj Optional instance to populate.
   * @return {module:model/NodePaging} The populated <code>NodePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodePagingList":79}],79:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeMinimalEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeMinimalEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodePagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeMinimalEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, NodeMinimalEntry, Pagination) {
  'use strict';

  /**
   * The NodePagingList model module.
   * @module model/NodePagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodePagingList</code>.
   * @alias module:model/NodePagingList
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>NodePagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodePagingList} obj Optional instance to populate.
   * @return {module:model/NodePagingList} The populated <code>NodePagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [NodeMinimalEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/NodeMinimalEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeMinimalEntry":77,"./Pagination":85}],80:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeSharedLink = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, UserInfo) {
  'use strict';

  /**
   * The NodeSharedLink model module.
   * @module model/NodeSharedLink
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeSharedLink</code>.
   * @alias module:model/NodeSharedLink
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>NodeSharedLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeSharedLink} obj Optional instance to populate.
   * @return {module:model/NodeSharedLink} The populated <code>NodeSharedLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('nodeId')) {
        obj['nodeId'] = ApiClient.convertToType(data['nodeId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = UserInfo.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('sharedByUser')) {
        obj['sharedByUser'] = UserInfo.constructFromObject(data['sharedByUser']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('allowableOperations')) {
        obj['allowableOperations'] = ApiClient.convertToType(data['allowableOperations'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} nodeId
   */
  exports.prototype['nodeId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {module:model/UserInfo} sharedByUser
   */
  exports.prototype['sharedByUser'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {Array.<String>} allowableOperations
   */
  exports.prototype['allowableOperations'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ContentInfo":43,"./UserInfo":135}],81:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeSharedLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeSharedLink'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeSharedLinkEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeSharedLink);
  }
}(this, function(ApiClient, NodeSharedLink) {
  'use strict';

  /**
   * The NodeSharedLinkEntry model module.
   * @module model/NodeSharedLinkEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeSharedLinkEntry</code>.
   * @alias module:model/NodeSharedLinkEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeSharedLinkEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeSharedLinkEntry} obj Optional instance to populate.
   * @return {module:model/NodeSharedLinkEntry} The populated <code>NodeSharedLinkEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeSharedLink.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeSharedLink} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeSharedLink":80}],82:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeSharedLinkPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeSharedLinkPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeSharedLinkPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeSharedLinkPagingList);
  }
}(this, function(ApiClient, NodeSharedLinkPagingList) {
  'use strict';

  /**
   * The NodeSharedLinkPaging model module.
   * @module model/NodeSharedLinkPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeSharedLinkPaging</code>.
   * @alias module:model/NodeSharedLinkPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NodeSharedLinkPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeSharedLinkPaging} obj Optional instance to populate.
   * @return {module:model/NodeSharedLinkPaging} The populated <code>NodeSharedLinkPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodeSharedLinkPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeSharedLinkPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeSharedLinkPagingList":83}],83:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeSharedLinkEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeSharedLinkEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeSharedLinkPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeSharedLinkEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, NodeSharedLinkEntry, Pagination) {
  'use strict';

  /**
   * The NodeSharedLinkPagingList model module.
   * @module model/NodeSharedLinkPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeSharedLinkPagingList</code>.
   * @alias module:model/NodeSharedLinkPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>NodeSharedLinkPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeSharedLinkPagingList} obj Optional instance to populate.
   * @return {module:model/NodeSharedLinkPagingList} The populated <code>NodeSharedLinkPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [NodeSharedLinkEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/NodeSharedLinkEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./NodeSharedLinkEntry":81,"./Pagination":85}],84:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodesnodeIdchildrenContent = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NodesnodeIdchildrenContent model module.
   * @module model/NodesnodeIdchildrenContent
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodesnodeIdchildrenContent</code>.
   * @alias module:model/NodesnodeIdchildrenContent
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>NodesnodeIdchildrenContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodesnodeIdchildrenContent} obj Optional instance to populate.
   * @return {module:model/NodesnodeIdchildrenContent} The populated <code>NodesnodeIdchildrenContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('encoding')) {
        obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;

  /**
   * @member {String} encoding
   */
  exports.prototype['encoding'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],85:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Pagination = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Pagination model module.
   * @module model/Pagination
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:model/Pagination
   * @class
   * @param count
   * @param hasMoreItems
   * @param skipCount
   * @param maxItems
   */
  var exports = function(count, hasMoreItems, skipCount, maxItems) {

    this['count'] = count;
    this['hasMoreItems'] = hasMoreItems;

    this['skipCount'] = skipCount;
    this['maxItems'] = maxItems;
  };

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('hasMoreItems')) {
        obj['hasMoreItems'] = ApiClient.convertToType(data['hasMoreItems'], 'Boolean');
      }
      if (data.hasOwnProperty('totalItems')) {
        obj['totalItems'] = ApiClient.convertToType(data['totalItems'], 'Integer');
      }
      if (data.hasOwnProperty('skipCount')) {
        obj['skipCount'] = ApiClient.convertToType(data['skipCount'], 'Integer');
      }
      if (data.hasOwnProperty('maxItems')) {
        obj['maxItems'] = ApiClient.convertToType(data['maxItems'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * The number of objects in the entries array.\n
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;

  /**
   * A boolean value which is **true** if there are more entities in the collection\nbeyond those in this response. A true value means a request with a larger value\nfor the **skipCount** or the **maxItems** parameter will return more entities.\n
   * @member {Boolean} hasMoreItems
   */
  exports.prototype['hasMoreItems'] = undefined;

  /**
   * An integer describing the total number of entities in the collection.\nThe API might not be able to determine this value,\nin which case this property will not be present.\n
   * @member {Integer} totalItems
   */
  exports.prototype['totalItems'] = undefined;

  /**
   * An integer describing how many entities exist in the collection before\nthose included in this list.\n
   * @member {Integer} skipCount
   */
  exports.prototype['skipCount'] = undefined;

  /**
   * The value of the **maxItems** parameter used to generate this list,\nor if there was no **maxItems** parameter the default value, 10\n
   * @member {Integer} maxItems
   */
  exports.prototype['maxItems'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],86:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PathElement = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PathElement model module.
   * @module model/PathElement
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PathElement</code>.
   * @alias module:model/PathElement
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>PathElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathElement} obj Optional instance to populate.
   * @return {module:model/PathElement} The populated <code>PathElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],87:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PathElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PathElement'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PathInfo = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PathElement);
  }
}(this, function(ApiClient, PathElement) {
  'use strict';

  /**
   * The PathInfo model module.
   * @module model/PathInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PathInfo</code>.
   * @alias module:model/PathInfo
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>PathInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathInfo} obj Optional instance to populate.
   * @return {module:model/PathInfo} The populated <code>PathInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], [PathElement]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('isComplete')) {
        obj['isComplete'] = ApiClient.convertToType(data['isComplete'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/PathElement>} elements
   */
  exports.prototype['elements'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Boolean} isComplete
   */
  exports.prototype['isComplete'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./PathElement":86}],88:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Company'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Company'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Person = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Company);
  }
}(this, function(ApiClient, Company) {
  'use strict';

  /**
   * The Person model module.
   * @module model/Person
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Person</code>.
   * @alias module:model/Person
   * @class
   * @param id
   * @param firstName
   * @param lastName
   * @param email
   * @param enabled
   */
  var exports = function(id, firstName, lastName, email, enabled) {

    this['id'] = id;
    this['firstName'] = firstName;
    this['lastName'] = lastName;


    this['email'] = email;










    this['enabled'] = enabled;

  };

  /**
   * Constructs a <code>Person</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Person} obj Optional instance to populate.
   * @return {module:model/Person} The populated <code>Person</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('avatarId')) {
        obj['avatarId'] = ApiClient.convertToType(data['avatarId'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('skypeId')) {
        obj['skypeId'] = ApiClient.convertToType(data['skypeId'], 'String');
      }
      if (data.hasOwnProperty('googleId')) {
        obj['googleId'] = ApiClient.convertToType(data['googleId'], 'String');
      }
      if (data.hasOwnProperty('instantMessageId')) {
        obj['instantMessageId'] = ApiClient.convertToType(data['instantMessageId'], 'String');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = Company.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
      }
      if (data.hasOwnProperty('telephone')) {
        obj['telephone'] = ApiClient.convertToType(data['telephone'], 'String');
      }
      if (data.hasOwnProperty('statusUpdatedAt')) {
        obj['statusUpdatedAt'] = ApiClient.convertToType(data['statusUpdatedAt'], 'Date');
      }
      if (data.hasOwnProperty('userStatus')) {
        obj['userStatus'] = ApiClient.convertToType(data['userStatus'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('emailNotificationsEnabled')) {
        obj['emailNotificationsEnabled'] = ApiClient.convertToType(data['emailNotificationsEnabled'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {String} avatarId
   */
  exports.prototype['avatarId'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {String} skypeId
   */
  exports.prototype['skypeId'] = undefined;

  /**
   * @member {String} googleId
   */
  exports.prototype['googleId'] = undefined;

  /**
   * @member {String} instantMessageId
   */
  exports.prototype['instantMessageId'] = undefined;

  /**
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;

  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;

  /**
   * @member {module:model/Company} company
   */
  exports.prototype['company'] = undefined;

  /**
   * @member {String} mobile
   */
  exports.prototype['mobile'] = undefined;

  /**
   * @member {String} telephone
   */
  exports.prototype['telephone'] = undefined;

  /**
   * @member {Date} statusUpdatedAt
   */
  exports.prototype['statusUpdatedAt'] = undefined;

  /**
   * @member {String} userStatus
   */
  exports.prototype['userStatus'] = undefined;

  /**
   * @member {Boolean} enabled
   * @default true
   */
  exports.prototype['enabled'] = true;

  /**
   * @member {Boolean} emailNotificationsEnabled
   */
  exports.prototype['emailNotificationsEnabled'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Company":42}],89:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Person'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Person);
  }
}(this, function(ApiClient, Person) {
  'use strict';

  /**
   * The PersonEntry model module.
   * @module model/PersonEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonEntry</code>.
   * @alias module:model/PersonEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>PersonEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonEntry} obj Optional instance to populate.
   * @return {module:model/PersonEntry} The populated <code>PersonEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Person.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Person} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Person":88}],90:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NetworkQuota'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworkQuota'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonNetwork = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NetworkQuota);
  }
}(this, function(ApiClient, NetworkQuota) {
  'use strict';

  /**
   * The PersonNetwork model module.
   * @module model/PersonNetwork
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonNetwork</code>.
   * A network is the group of users and sites that belong to an organization.\nNetworks are organized by email domain. When a user signs up for an\nAlfresco account , their email domain becomes their Home Network.\n
   * @alias module:model/PersonNetwork
   * @class
   * @param id
   * @param isEnabled
   */
  var exports = function(id, isEnabled) {

    this['id'] = id;

    this['isEnabled'] = isEnabled;




  };

  /**
   * Constructs a <code>PersonNetwork</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonNetwork} obj Optional instance to populate.
   * @return {module:model/PersonNetwork} The populated <code>PersonNetwork</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('homeNetwork')) {
        obj['homeNetwork'] = ApiClient.convertToType(data['homeNetwork'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('paidNetwork')) {
        obj['paidNetwork'] = ApiClient.convertToType(data['paidNetwork'], 'Boolean');
      }
      if (data.hasOwnProperty('subscriptionLevel')) {
        obj['subscriptionLevel'] = ApiClient.convertToType(data['subscriptionLevel'], 'String');
      }
      if (data.hasOwnProperty('quotas')) {
        obj['quotas'] = ApiClient.convertToType(data['quotas'], [NetworkQuota]);
      }
    }
    return obj;
  }


  /**
   * This network's unique id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Is this the home network?
   * @member {Boolean} homeNetwork
   */
  exports.prototype['homeNetwork'] = undefined;

  /**
   * @member {Boolean} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {Boolean} paidNetwork
   */
  exports.prototype['paidNetwork'] = undefined;

  /**
   * @member {module:model/PersonNetwork.SubscriptionLevelEnum} subscriptionLevel
   */
  exports.prototype['subscriptionLevel'] = undefined;

  /**
   * @member {Array.<module:model/NetworkQuota>} quotas
   */
  exports.prototype['quotas'] = undefined;


  /**
   * Allowed values for the <code>subscriptionLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SubscriptionLevelEnum = {
    /**
     * value: Free
     * @const
     */
    FREE: "Free",

    /**
     * value: Standard
     * @const
     */
    STANDARD: "Standard",

    /**
     * value: Enterprise
     * @const
     */
    ENTERPRISE: "Enterprise"
  };

  return exports;
}));

},{"../ApiClient":11,"./NetworkQuota":63}],91:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PersonNetwork'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonNetwork'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonNetworkEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PersonNetwork);
  }
}(this, function(ApiClient, PersonNetwork) {
  'use strict';

  /**
   * The PersonNetworkEntry model module.
   * @module model/PersonNetworkEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonNetworkEntry</code>.
   * @alias module:model/PersonNetworkEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>PersonNetworkEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonNetworkEntry} obj Optional instance to populate.
   * @return {module:model/PersonNetworkEntry} The populated <code>PersonNetworkEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = PersonNetwork.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/PersonNetwork} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./PersonNetwork":90}],92:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PersonNetworkPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonNetworkPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonNetworkPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PersonNetworkPagingList);
  }
}(this, function(ApiClient, PersonNetworkPagingList) {
  'use strict';

  /**
   * The PersonNetworkPaging model module.
   * @module model/PersonNetworkPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonNetworkPaging</code>.
   * @alias module:model/PersonNetworkPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>PersonNetworkPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonNetworkPaging} obj Optional instance to populate.
   * @return {module:model/PersonNetworkPaging} The populated <code>PersonNetworkPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = PersonNetworkPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/PersonNetworkPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./PersonNetworkPagingList":93}],93:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './PersonNetworkEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./PersonNetworkEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonNetworkPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.PersonNetworkEntry);
  }
}(this, function(ApiClient, Pagination, PersonNetworkEntry) {
  'use strict';

  /**
   * The PersonNetworkPagingList model module.
   * @module model/PersonNetworkPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonNetworkPagingList</code>.
   * @alias module:model/PersonNetworkPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>PersonNetworkPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonNetworkPagingList} obj Optional instance to populate.
   * @return {module:model/PersonNetworkPagingList} The populated <code>PersonNetworkPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [PersonNetworkEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/PersonNetworkEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Pagination":85,"./PersonNetworkEntry":91}],94:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Preference = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Preference model module.
   * @module model/Preference
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Preference</code>.
   * A specific preference.\n
   * @alias module:model/Preference
   * @class
   * @param id
   * @param value
   */
  var exports = function(id, value) {

    this['id'] = id;
    this['value'] = value;
  };

  /**
   * Constructs a <code>Preference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Preference} obj Optional instance to populate.
   * @return {module:model/Preference} The populated <code>Preference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }


  /**
   * The unique id of the preference
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The value of the preference. Note that this can be of any JSON type.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],95:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Preference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Preference'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PreferenceEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Preference);
  }
}(this, function(ApiClient, Preference) {
  'use strict';

  /**
   * The PreferenceEntry model module.
   * @module model/PreferenceEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PreferenceEntry</code>.
   * @alias module:model/PreferenceEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>PreferenceEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreferenceEntry} obj Optional instance to populate.
   * @return {module:model/PreferenceEntry} The populated <code>PreferenceEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Preference.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Preference} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Preference":94}],96:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PreferencePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PreferencePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PreferencePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PreferencePagingList);
  }
}(this, function(ApiClient, PreferencePagingList) {
  'use strict';

  /**
   * The PreferencePaging model module.
   * @module model/PreferencePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PreferencePaging</code>.
   * @alias module:model/PreferencePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>PreferencePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreferencePaging} obj Optional instance to populate.
   * @return {module:model/PreferencePaging} The populated <code>PreferencePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = PreferencePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/PreferencePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./PreferencePagingList":97}],97:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './PreferenceEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./PreferenceEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PreferencePagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.PreferenceEntry);
  }
}(this, function(ApiClient, Pagination, PreferenceEntry) {
  'use strict';

  /**
   * The PreferencePagingList model module.
   * @module model/PreferencePagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PreferencePagingList</code>.
   * @alias module:model/PreferencePagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>PreferencePagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreferencePagingList} obj Optional instance to populate.
   * @return {module:model/PreferencePagingList} The populated <code>PreferencePagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [PreferenceEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/PreferenceEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Pagination":85,"./PreferenceEntry":95}],98:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RatingAggregate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RatingAggregate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Rating = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RatingAggregate);
  }
}(this, function(ApiClient, RatingAggregate) {
  'use strict';

  /**
   * The Rating model module.
   * @module model/Rating
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Rating</code>.
   * A person can rate an item of content by liking it. They can also remove\ntheir like of an item of content. API methods exist to get a list of\nratings and to add a new rating.\n
   * @alias module:model/Rating
   * @class
   * @param id
   */
  var exports = function(id) {

    this['id'] = id;



  };

  /**
   * Constructs a <code>Rating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rating} obj Optional instance to populate.
   * @return {module:model/Rating} The populated <code>Rating</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('aggregate')) {
        obj['aggregate'] = RatingAggregate.constructFromObject(data['aggregate']);
      }
      if (data.hasOwnProperty('ratedAt')) {
        obj['ratedAt'] = ApiClient.convertToType(data['ratedAt'], 'Date');
      }
      if (data.hasOwnProperty('myRating')) {
        obj['myRating'] = ApiClient.convertToType(data['myRating'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {module:model/RatingAggregate} aggregate
   */
  exports.prototype['aggregate'] = undefined;

  /**
   * @member {Date} ratedAt
   */
  exports.prototype['ratedAt'] = undefined;

  /**
   * The rating. The type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.
   * @member {String} myRating
   */
  exports.prototype['myRating'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./RatingAggregate":99}],99:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingAggregate = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RatingAggregate model module.
   * @module model/RatingAggregate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingAggregate</code>.
   * @alias module:model/RatingAggregate
   * @class
   * @param numberOfRatings
   */
  var exports = function(numberOfRatings) {


    this['numberOfRatings'] = numberOfRatings;
  };

  /**
   * Constructs a <code>RatingAggregate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingAggregate} obj Optional instance to populate.
   * @return {module:model/RatingAggregate} The populated <code>RatingAggregate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('average')) {
        obj['average'] = ApiClient.convertToType(data['average'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfRatings')) {
        obj['numberOfRatings'] = ApiClient.convertToType(data['numberOfRatings'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} average
   */
  exports.prototype['average'] = undefined;

  /**
   * @member {Integer} numberOfRatings
   */
  exports.prototype['numberOfRatings'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],100:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RatingBody model module.
   * @module model/RatingBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingBody</code>.
   * @alias module:model/RatingBody
   * @class
   * @param id
   * @param myRating
   */
  var exports = function(id, myRating) {

    this['id'] = id;
    this['myRating'] = myRating;
  };

  /**
   * Constructs a <code>RatingBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingBody} obj Optional instance to populate.
   * @return {module:model/RatingBody} The populated <code>RatingBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('myRating')) {
        obj['myRating'] = ApiClient.convertToType(data['myRating'], 'String');
      }
    }
    return obj;
  }


  /**
   * The rating scheme type. Possible values are likes and fiveStar.
   * @member {module:model/RatingBody.IdEnum} id
   * @default 'likes'
   */
  exports.prototype['id'] = 'likes';

  /**
   * The rating. The type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar
   * @member {String} myRating
   */
  exports.prototype['myRating'] = undefined;


  /**
   * Allowed values for the <code>id</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IdEnum = {
    /**
     * value: likes
     * @const
     */
    LIKES: "likes",

    /**
     * value: fiveStar
     * @const
     */
    FIVESTAR: "fiveStar"
  };

  return exports;
}));

},{"../ApiClient":11}],101:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Rating'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rating'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Rating);
  }
}(this, function(ApiClient, Rating) {
  'use strict';

  /**
   * The RatingEntry model module.
   * @module model/RatingEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingEntry</code>.
   * @alias module:model/RatingEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>RatingEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingEntry} obj Optional instance to populate.
   * @return {module:model/RatingEntry} The populated <code>RatingEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Rating.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Rating} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Rating":98}],102:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RatingPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RatingPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RatingPagingList);
  }
}(this, function(ApiClient, RatingPagingList) {
  'use strict';

  /**
   * The RatingPaging model module.
   * @module model/RatingPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingPaging</code>.
   * @alias module:model/RatingPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>RatingPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingPaging} obj Optional instance to populate.
   * @return {module:model/RatingPaging} The populated <code>RatingPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = RatingPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/RatingPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./RatingPagingList":103}],103:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './RatingEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./RatingEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.RatingEntry);
  }
}(this, function(ApiClient, Pagination, RatingEntry) {
  'use strict';

  /**
   * The RatingPagingList model module.
   * @module model/RatingPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingPagingList</code>.
   * @alias module:model/RatingPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>RatingPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingPagingList} obj Optional instance to populate.
   * @return {module:model/RatingPagingList} The populated <code>RatingPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [RatingEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/RatingEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Pagination":85,"./RatingEntry":101}],104:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Rendition = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo);
  }
}(this, function(ApiClient, ContentInfo) {
  'use strict';

  /**
   * The Rendition model module.
   * @module model/Rendition
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Rendition</code>.
   * @alias module:model/Rendition
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Rendition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rendition} obj Optional instance to populate.
   * @return {module:model/Rendition} The populated <code>Rendition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./ContentInfo":43}],105:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RenditionBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RenditionBody model module.
   * @module model/RenditionBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RenditionBody</code>.
   * @alias module:model/RenditionBody
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>RenditionBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionBody} obj Optional instance to populate.
   * @return {module:model/RenditionBody} The populated <code>RenditionBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],106:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Rendition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rendition'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RenditionEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Rendition);
  }
}(this, function(ApiClient, Rendition) {
  'use strict';

  /**
   * The RenditionEntry model module.
   * @module model/RenditionEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RenditionEntry</code>.
   * @alias module:model/RenditionEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>RenditionEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionEntry} obj Optional instance to populate.
   * @return {module:model/RenditionEntry} The populated <code>RenditionEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Rendition.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Rendition} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Rendition":104}],107:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RenditionPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RenditionPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RenditionPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RenditionPagingList);
  }
}(this, function(ApiClient, RenditionPagingList) {
  'use strict';

  /**
   * The RenditionPaging model module.
   * @module model/RenditionPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RenditionPaging</code>.
   * @alias module:model/RenditionPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>RenditionPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionPaging} obj Optional instance to populate.
   * @return {module:model/RenditionPaging} The populated <code>RenditionPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = RenditionPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/RenditionPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./RenditionPagingList":108}],108:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './RenditionEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./RenditionEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RenditionPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.RenditionEntry);
  }
}(this, function(ApiClient, Pagination, RenditionEntry) {
  'use strict';

  /**
   * The RenditionPagingList model module.
   * @module model/RenditionPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RenditionPagingList</code>.
   * @alias module:model/RenditionPagingList
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>RenditionPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionPagingList} obj Optional instance to populate.
   * @return {module:model/RenditionPagingList} The populated <code>RenditionPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [RenditionEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/RenditionEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Pagination":85,"./RenditionEntry":106}],109:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SharedLinkBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SharedLinkBody model module.
   * @module model/SharedLinkBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SharedLinkBody</code>.
   * @alias module:model/SharedLinkBody
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SharedLinkBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SharedLinkBody} obj Optional instance to populate.
   * @return {module:model/SharedLinkBody} The populated <code>SharedLinkBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nodeId')) {
        obj['nodeId'] = ApiClient.convertToType(data['nodeId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} nodeId
   */
  exports.prototype['nodeId'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],110:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Site = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Site model module.
   * @module model/Site
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Site</code>.
   * @alias module:model/Site
   * @class
   * @param id
   * @param guid
   * @param title
   * @param visibility
   */
  var exports = function(id, guid, title, visibility) {

    this['id'] = id;
    this['guid'] = guid;
    this['title'] = title;

    this['visibility'] = visibility;

  };

  /**
   * Constructs a <code>Site</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Site} obj Optional instance to populate.
   * @return {module:model/Site} The populated <code>Site</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {module:model/Site.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;

  /**
   * @member {String} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: PRIVATE
     * @const
     */
    PRIVATE: "PRIVATE",

    /**
     * value: MODERATED
     * @const
     */
    MODERATED: "MODERATED",

    /**
     * value: PUBLIC
     * @const
     */
    PUBLIC: "PUBLIC"
  };

  return exports;
}));

},{"../ApiClient":11}],111:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteBody model module.
   * @module model/SiteBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteBody</code>.
   * @alias module:model/SiteBody
   * @class
   * @param title
   * @param visibility
   */
  var exports = function(title, visibility) {


    this['title'] = title;

    this['visibility'] = visibility;
  };

  /**
   * Constructs a <code>SiteBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteBody} obj Optional instance to populate.
   * @return {module:model/SiteBody} The populated <code>SiteBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {module:model/SiteBody.VisibilityEnum} visibility
   * @default 'PUBLIC'
   */
  exports.prototype['visibility'] = 'PUBLIC';


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: PUBLIC
     * @const
     */
    PUBLIC: "PUBLIC",

    /**
     * value: PRIVATE
     * @const
     */
    PRIVATE: "PRIVATE",

    /**
     * value: MODERATED
     * @const
     */
    MODERATED: "MODERATED"
  };

  return exports;
}));

},{"../ApiClient":11}],112:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteContainer = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteContainer model module.
   * @module model/SiteContainer
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteContainer</code>.
   * @alias module:model/SiteContainer
   * @class
   * @param id
   * @param folderId
   */
  var exports = function(id, folderId) {

    this['id'] = id;
    this['folderId'] = folderId;
  };

  /**
   * Constructs a <code>SiteContainer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteContainer} obj Optional instance to populate.
   * @return {module:model/SiteContainer} The populated <code>SiteContainer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('folderId')) {
        obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} folderId
   */
  exports.prototype['folderId'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],113:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SiteContainer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteContainer'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteContainerEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteContainer);
  }
}(this, function(ApiClient, SiteContainer) {
  'use strict';

  /**
   * The SiteContainerEntry model module.
   * @module model/SiteContainerEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteContainerEntry</code>.
   * @alias module:model/SiteContainerEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteContainerEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteContainerEntry} obj Optional instance to populate.
   * @return {module:model/SiteContainerEntry} The populated <code>SiteContainerEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = SiteContainer.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteContainer} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./SiteContainer":112}],114:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SitePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SitePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteContainerPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SitePagingList);
  }
}(this, function(ApiClient, SitePagingList) {
  'use strict';

  /**
   * The SiteContainerPaging model module.
   * @module model/SiteContainerPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteContainerPaging</code>.
   * @alias module:model/SiteContainerPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SiteContainerPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteContainerPaging} obj Optional instance to populate.
   * @return {module:model/SiteContainerPaging} The populated <code>SiteContainerPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = SitePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SitePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./SitePagingList":128}],115:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Site);
  }
}(this, function(ApiClient, Site) {
  'use strict';

  /**
   * The SiteEntry model module.
   * @module model/SiteEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteEntry</code>.
   * @alias module:model/SiteEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteEntry} obj Optional instance to populate.
   * @return {module:model/SiteEntry} The populated <code>SiteEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Site.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Site} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Site":110}],116:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Person'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMember = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Person);
  }
}(this, function(ApiClient, Person) {
  'use strict';

  /**
   * The SiteMember model module.
   * @module model/SiteMember
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMember</code>.
   * @alias module:model/SiteMember
   * @class
   * @param id
   * @param person
   * @param role
   */
  var exports = function(id, person, role) {

    this['id'] = id;
    this['person'] = person;
    this['role'] = role;
  };

  /**
   * Constructs a <code>SiteMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMember} obj Optional instance to populate.
   * @return {module:model/SiteMember} The populated <code>SiteMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('person')) {
        obj['person'] = Person.constructFromObject(data['person']);
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {module:model/Person} person
   */
  exports.prototype['person'] = undefined;

  /**
   * @member {module:model/SiteMember.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: SiteConsumer
     * @const
     */
    SITECONSUMER: "SiteConsumer",

    /**
     * value: SiteCollaborator
     * @const
     */
    SITECOLLABORATOR: "SiteCollaborator",

    /**
     * value: SiteContributor
     * @const
     */
    SITECONTRIBUTOR: "SiteContributor",

    /**
     * value: SiteManager
     * @const
     */
    SITEMANAGER: "SiteManager"
  };

  return exports;
}));

},{"../ApiClient":11,"./Person":88}],117:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMemberBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteMemberBody model module.
   * @module model/SiteMemberBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMemberBody</code>.
   * @alias module:model/SiteMemberBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>SiteMemberBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMemberBody} obj Optional instance to populate.
   * @return {module:model/SiteMemberBody} The populated <code>SiteMemberBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMemberBody.RoleEnum} role
   */
  exports.prototype['role'] = undefined;

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: SiteConsumer
     * @const
     */
    SITECONSUMER: "SiteConsumer",

    /**
     * value: SiteCollaborator
     * @const
     */
    SITECOLLABORATOR: "SiteCollaborator",

    /**
     * value: SiteContributor
     * @const
     */
    SITECONTRIBUTOR: "SiteContributor",

    /**
     * value: SiteManager
     * @const
     */
    SITEMANAGER: "SiteManager"
  };

  return exports;
}));

},{"../ApiClient":11}],118:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SiteMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteMember'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMemberEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteMember);
  }
}(this, function(ApiClient, SiteMember) {
  'use strict';

  /**
   * The SiteMemberEntry model module.
   * @module model/SiteMemberEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMemberEntry</code>.
   * @alias module:model/SiteMemberEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteMemberEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMemberEntry} obj Optional instance to populate.
   * @return {module:model/SiteMemberEntry} The populated <code>SiteMemberEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = SiteMember.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMember} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./SiteMember":116}],119:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SitePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SitePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMemberPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SitePagingList);
  }
}(this, function(ApiClient, SitePagingList) {
  'use strict';

  /**
   * The SiteMemberPaging model module.
   * @module model/SiteMemberPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMemberPaging</code>.
   * @alias module:model/SiteMemberPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SiteMemberPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMemberPaging} obj Optional instance to populate.
   * @return {module:model/SiteMemberPaging} The populated <code>SiteMemberPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = SitePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SitePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./SitePagingList":128}],120:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMemberRoleBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteMemberRoleBody model module.
   * @module model/SiteMemberRoleBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMemberRoleBody</code>.
   * @alias module:model/SiteMemberRoleBody
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SiteMemberRoleBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMemberRoleBody} obj Optional instance to populate.
   * @return {module:model/SiteMemberRoleBody} The populated <code>SiteMemberRoleBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMemberRoleBody.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: SiteConsumer
     * @const
     */
    SITECONSUMER: "SiteConsumer",

    /**
     * value: SiteCollaborator
     * @const
     */
    SITECOLLABORATOR: "SiteCollaborator",

    /**
     * value: SiteContributor
     * @const
     */
    SITECONTRIBUTOR: "SiteContributor",

    /**
     * value: SiteManager
     * @const
     */
    SITEMANAGER: "SiteManager"
  };

  return exports;
}));

},{"../ApiClient":11}],121:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteMembershipBody model module.
   * @module model/SiteMembershipBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipBody</code>.
   * @alias module:model/SiteMembershipBody
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>SiteMembershipBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipBody} obj Optional instance to populate.
   * @return {module:model/SiteMembershipBody} The populated <code>SiteMembershipBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],122:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipBody1 = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteMembershipBody1 model module.
   * @module model/SiteMembershipBody1
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipBody1</code>.
   * @alias module:model/SiteMembershipBody1
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SiteMembershipBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipBody1} obj Optional instance to populate.
   * @return {module:model/SiteMembershipBody1} The populated <code>SiteMembershipBody1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],123:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipRequest = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Site);
  }
}(this, function(ApiClient, Site) {
  'use strict';

  /**
   * The SiteMembershipRequest model module.
   * @module model/SiteMembershipRequest
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipRequest</code>.
   * @alias module:model/SiteMembershipRequest
   * @class
   * @param id
   * @param createdAt
   * @param entry
   */
  var exports = function(id, createdAt, entry) {

    this['id'] = id;
    this['createdAt'] = createdAt;
    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteMembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipRequest} obj Optional instance to populate.
   * @return {module:model/SiteMembershipRequest} The populated <code>SiteMembershipRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Site.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/Site} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Site":110}],124:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SiteMembershipRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteMembershipRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipRequestEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteMembershipRequest);
  }
}(this, function(ApiClient, SiteMembershipRequest) {
  'use strict';

  /**
   * The SiteMembershipRequestEntry model module.
   * @module model/SiteMembershipRequestEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipRequestEntry</code>.
   * @alias module:model/SiteMembershipRequestEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteMembershipRequestEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipRequestEntry} obj Optional instance to populate.
   * @return {module:model/SiteMembershipRequestEntry} The populated <code>SiteMembershipRequestEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = SiteMembershipRequest.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMembershipRequest} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./SiteMembershipRequest":123}],125:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SiteMembershipRequestPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteMembershipRequestPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipRequestPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteMembershipRequestPagingList);
  }
}(this, function(ApiClient, SiteMembershipRequestPagingList) {
  'use strict';

  /**
   * The SiteMembershipRequestPaging model module.
   * @module model/SiteMembershipRequestPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipRequestPaging</code>.
   * @alias module:model/SiteMembershipRequestPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SiteMembershipRequestPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipRequestPaging} obj Optional instance to populate.
   * @return {module:model/SiteMembershipRequestPaging} The populated <code>SiteMembershipRequestPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = SiteMembershipRequestPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMembershipRequestPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./SiteMembershipRequestPagingList":126}],126:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './SiteMembershipRequestEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./SiteMembershipRequestEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipRequestPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.SiteMembershipRequestEntry);
  }
}(this, function(ApiClient, Pagination, SiteMembershipRequestEntry) {
  'use strict';

  /**
   * The SiteMembershipRequestPagingList model module.
   * @module model/SiteMembershipRequestPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipRequestPagingList</code>.
   * @alias module:model/SiteMembershipRequestPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>SiteMembershipRequestPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipRequestPagingList} obj Optional instance to populate.
   * @return {module:model/SiteMembershipRequestPagingList} The populated <code>SiteMembershipRequestPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [SiteMembershipRequestEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/SiteMembershipRequestEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Pagination":85,"./SiteMembershipRequestEntry":124}],127:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SitePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SitePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SitePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SitePagingList);
  }
}(this, function(ApiClient, SitePagingList) {
  'use strict';

  /**
   * The SitePaging model module.
   * @module model/SitePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SitePaging</code>.
   * @alias module:model/SitePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SitePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitePaging} obj Optional instance to populate.
   * @return {module:model/SitePaging} The populated <code>SitePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = SitePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SitePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./SitePagingList":128}],128:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SitePagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, Pagination) {
  'use strict';

  /**
   * The SitePagingList model module.
   * @module model/SitePagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SitePagingList</code>.
   * @alias module:model/SitePagingList
   * @class
   * @param pagination
   */
  var exports = function(pagination) {

    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>SitePagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitePagingList} obj Optional instance to populate.
   * @return {module:model/SitePagingList} The populated <code>SitePagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Pagination":85}],129:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Tag = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Tag model module.
   * @module model/Tag
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:model/Tag
   * @class
   * @param id
   * @param tag
   */
  var exports = function(id, tag) {

    this['id'] = id;
    this['tag'] = tag;
  };

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tag} obj Optional instance to populate.
   * @return {module:model/Tag} The populated <code>Tag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],130:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TagBody model module.
   * @module model/TagBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagBody</code>.
   * @alias module:model/TagBody
   * @class
   * @param tag
   */
  var exports = function(tag) {

    this['tag'] = tag;
  };

  /**
   * Constructs a <code>TagBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagBody} obj Optional instance to populate.
   * @return {module:model/TagBody} The populated <code>TagBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],131:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagBody1 = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TagBody1 model module.
   * @module model/TagBody1
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagBody1</code>.
   * @alias module:model/TagBody1
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TagBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagBody1} obj Optional instance to populate.
   * @return {module:model/TagBody1} The populated <code>TagBody1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],132:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Tag);
  }
}(this, function(ApiClient, Tag) {
  'use strict';

  /**
   * The TagEntry model module.
   * @module model/TagEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagEntry</code>.
   * @alias module:model/TagEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>TagEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagEntry} obj Optional instance to populate.
   * @return {module:model/TagEntry} The populated <code>TagEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Tag.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Tag} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Tag":129}],133:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TagPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TagPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.TagPagingList);
  }
}(this, function(ApiClient, TagPagingList) {
  'use strict';

  /**
   * The TagPaging model module.
   * @module model/TagPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagPaging</code>.
   * @alias module:model/TagPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TagPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagPaging} obj Optional instance to populate.
   * @return {module:model/TagPaging} The populated <code>TagPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = TagPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/TagPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./TagPagingList":134}],134:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './TagEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./TagEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination, root.AlfrescoCoreRestApi.TagEntry);
  }
}(this, function(ApiClient, Pagination, TagEntry) {
  'use strict';

  /**
   * The TagPagingList model module.
   * @module model/TagPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagPagingList</code>.
   * @alias module:model/TagPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>TagPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagPagingList} obj Optional instance to populate.
   * @return {module:model/TagPagingList} The populated <code>TagPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [TagEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/TagEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));

},{"../ApiClient":11,"./Pagination":85,"./TagEntry":132}],135:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.UserInfo = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserInfo model module.
   * @module model/UserInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UserInfo</code>.
   * @alias module:model/UserInfo
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfo} obj Optional instance to populate.
   * @return {module:model/UserInfo} The populated <code>UserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));

},{"../ApiClient":11}],136:[function(require,module,exports){
(function (global){
var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index.js');
var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');

global.AlfrescoApi = AlfrescoCoreRestApi; //legacy
global.AlfrescoApi.Auth = AlfrescoAuthRestApi;
global.AlfrescoApi.Core = AlfrescoCoreRestApi;

global.AlfrescoApi.getClientWithTicket = function (basePath, ticket) {
    var defaultClient = new AlfrescoApi.ApiClient();
    defaultClient.basePath = basePath;
    // Configure HTTP basic authorization: basicAuth
    var basicAuth = defaultClient.authentications['basicAuth'];
    basicAuth.username = 'ROLE_TICKET';
    basicAuth.password = ticket;
    return defaultClient;
};

global.AlfrescoApi.getClientWithAuthentication = function (basePath, username, password) {
    var defaultClient = new AlfrescoApi.ApiClient();
    defaultClient.basePath = basePath;
    // Configure HTTP basic authorization: basicAuth
    var basicAuth = defaultClient.authentications['basicAuth'];
    basicAuth.username = username;
    basicAuth.password = password;
    return defaultClient;
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./alfresco-auth-rest-api/src/index.js":3,"./alfresco-core-rest-api/src/index.js":26}],137:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  root = this;
}

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

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
  return false;
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
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

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
    if (null != obj[key]) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
        }
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
  if (Array.isArray(val)) {
    return val.forEach(function(v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  }
  pairs.push(encodeURIComponent(key)
    + '=' + encodeURIComponent(val));
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
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
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
  xml: 'application/xml',
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
   'application/json': JSON.stringify
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
  'application/json': JSON.parse
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

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
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
  return /[\/+]json\b/.test(mime);
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

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

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
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

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

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

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
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

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
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
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
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
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
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
      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
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

Request.prototype.set = function(field, val){
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
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

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
 * Force given parser
 *
 * Sets the body parser no matter type.
 *
 * @param {Function}
 * @api public
 */

Request.prototype.parse = function(fn){
  this._parser = fn;
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
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
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
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(field, file, filename || file.name);
  return this;
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

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
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

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
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
  var fn = this._callback;
  this.clearTimeout();
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

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
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

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = 'download';
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this.getHeader('Content-Type');
    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

Request.prototype.then = function (fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

function del(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":138,"reduce":139}],138:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

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

},{}],139:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }

  return curr;
};
},{}],140:[function(require,module,exports){

},{}],141:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

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

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
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

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    this.length = 0
    this.parent = undefined
  }

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(array)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
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
} else {
  // pre-set for values that may exist in the future
  Buffer.prototype.length = undefined
  Buffer.prototype.parent = undefined
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
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
    case 'binary':
    case 'base64':
    case 'raw':
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
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
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

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

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

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
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
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
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

function binaryWrite (buf, string, offset, length) {
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
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
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

      case 'binary':
        return binaryWrite(this, string, offset, length)

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

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
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
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

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
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

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
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

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
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
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
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
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
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
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
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
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
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
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
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
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

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
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

  for (var i = 0; i < length; i++) {
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
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
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
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":142,"ieee754":143,"isarray":144}],142:[function(require,module,exports){
'use strict'

exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

function init () {
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }

  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
}

init()

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],143:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
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
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

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
  var eLen = nBytes * 8 - mLen - 1
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
      m = (value * c - 1) * Math.pow(2, mLen)
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

},{}],144:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}]},{},[136]);
