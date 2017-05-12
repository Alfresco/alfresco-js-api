/**
 * Alfresco Content Services REST API
 * **Authentication API**  Provides access to the authentication features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlfrescoAuthRestApi);
  }
}(this, function(expect, AlfrescoAuthRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlfrescoAuthRestApi.ValidTicketEntry();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ValidTicketEntry', function() {
    it('should create an instance of ValidTicketEntry', function() {
      // uncomment below and update the code to test ValidTicketEntry
      //var instane = new AlfrescoAuthRestApi.ValidTicketEntry();
      //expect(instance).to.be.a(AlfrescoAuthRestApi.ValidTicketEntry);
    });

    it('should have the property entry (base name: "entry")', function() {
      // uncomment below and update the code to test the property entry
      //var instane = new AlfrescoAuthRestApi.ValidTicketEntry();
      //expect(instance).to.be();
    });

  });

}));
