/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.48.3266
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.UpdateOptionsDataData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateOptionsDataData model module.
   * @module model/UpdateOptionsDataData
   * @version 9.0.000.48.3266
   */

  /**
   * Constructs a new <code>UpdateOptionsDataData</code>.
   * @alias module:model/UpdateOptionsDataData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UpdateOptionsDataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateOptionsDataData} obj Optional instance to populate.
   * @return {module:model/UpdateOptionsDataData} The populated <code>UpdateOptionsDataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('application')) {
        obj['application'] = ApiClient.convertToType(data['application'], 'String');
      }
      if (data.hasOwnProperty('newOptions')) {
        obj['newOptions'] = ApiClient.convertToType(data['newOptions'], Object);
      }
      if (data.hasOwnProperty('changedOptions')) {
        obj['changedOptions'] = ApiClient.convertToType(data['changedOptions'], Object);
      }
      if (data.hasOwnProperty('deletedOptions')) {
        obj['deletedOptions'] = ApiClient.convertToType(data['deletedOptions'], Object);
      }
    }
    return obj;
  }

  /**
   * The name of the application where the options should be updated. This value is set to `CloudCluster` by default. 
   * @member {String} application
   */
  exports.prototype['application'] = undefined;
  /**
   * The options to add in the application. 
   * @member {Object} newOptions
   */
  exports.prototype['newOptions'] = undefined;
  /**
   * The option values to update in the application. 
   * @member {Object} changedOptions
   */
  exports.prototype['changedOptions'] = undefined;
  /**
   * The options to delete in the application. 
   * @member {Object} deletedOptions
   */
  exports.prototype['deletedOptions'] = undefined;



  return exports;
}));


