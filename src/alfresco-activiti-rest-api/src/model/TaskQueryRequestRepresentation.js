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
        root.ActivitiPublicRestApi.TaskQueryRequestRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';




    /**
     * The TaskQueryRequestRepresentation model module.
     * @module model/TaskQueryRequestRepresentation
     * @version 1.4.0
     */

    /**
     * Constructs a new <code>TaskQueryRequestRepresentation</code>.
     * @alias module:model/TaskQueryRequestRepresentation
     * @class
     */
    var exports = function() {
        var _this = this;

    };

    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = data || new exports();

            if (data.hasOwnProperty('processInstanceId')) {
                obj['processInstanceId'] = ApiClient.convertToType(data['processInstanceId'], 'Integer');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = TaskFilterRepresentation.constructFromObject(data['text'], 'String');
            }
            if (data.hasOwnProperty('assignment')) {
                obj['assignment'] = ApiClient.convertToType(data['assignment']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Integer');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
            }
        }
        return obj;
    }

    /**
     * @member {Integer} processInstanceId
     */
    exports.prototype['processInstanceId'] = undefined;
    /**
     * @member {String} text
     */
    exports.prototype['text'] = undefined;
    /**
     * @member {assignment} assignment
     */
    exports.prototype['assignment'] = undefined;
    /**
     * @member {String} state
     */
    exports.prototype['state'] = undefined;
    /**
     * @member {String} sort
     */
    exports.prototype['sort'] = undefined;
    /**
     * @member {Integer} page
     */
    exports.prototype['page'] = undefined;
    /**
     * @member {Integer} size
     */
    exports.prototype['size'] = undefined;


    return exports;
}));


