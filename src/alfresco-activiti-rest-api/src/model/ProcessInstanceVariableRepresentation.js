(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../../alfrescoApiClient'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../../alfrescoApiClient'));
    } else {
        // Browser globals (root is window)
        if (!root.ActivitiPublicRestApi) {
            root.ActivitiPublicRestApi = {};
        }
        root.ActivitiPublicRestApi.ProcessInstanceVariableRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';




    /**
     * The ProcessInstanceVariableRepresentation model module.
     * @module model/ProcessInstanceVariableRepresentation
     * @version 1.4.0
     */

    /**
     * Constructs a new <code>ProcessInstanceVariableRepresentation</code>.
     * @alias module:model/ProcessInstanceVariableRepresentation
     * @class
     */
    var exports = function() {
        var _this = this;

    };

    /**
     * Constructs a <code>ProcessInstanceVariableRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessInstanceVariableRepresentation} obj Optional instance to populate.
     * @return {module:model/ProcessInstanceVariableRepresentation} The populated <code>ProcessInstanceVariableRepresentation</code> instance.
     */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = data || new exports();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }

    /**
     * @member {String} id
     */
    exports.prototype['id'] = undefined;
    /**
     * @member {String} type
     */
    exports.prototype['type'] = undefined;
    /**
     * @member {Object} processDefinitionCategory
     */
    exports.prototype['value'] = undefined;


    return exports;
}));


