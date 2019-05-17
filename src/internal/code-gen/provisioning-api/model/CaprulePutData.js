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
    root.ProvisioningApi.CaprulePutData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CaprulePutData model module.
   * @module model/CaprulePutData
   * @version 9.0.000.48.3266
   */

  /**
   * Constructs a new <code>CaprulePutData</code>.
   * @alias module:model/CaprulePutData
   * @class
   * @param name {String} CfgScript name 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;


  };

  /**
   * Constructs a <code>CaprulePutData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaprulePutData} obj Optional instance to populate.
   * @return {module:model/CaprulePutData} The populated <code>CaprulePutData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('mediaRules')) {
        obj['mediaRules'] = ApiClient.convertToType(data['mediaRules'], Object);
      }
      if (data.hasOwnProperty('deletedMediaRules')) {
        obj['deletedMediaRules'] = ApiClient.convertToType(data['deletedMediaRules'], ['String']);
      }
    }
    return obj;
  }

  /**
   * CfgScript name 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Key/values pairs with media type capacities. 
   * @member {Object} mediaRules
   */
  exports.prototype['mediaRules'] = undefined;
  /**
   * A list of media types that should be deleted 
   * @member {Array.<String>} deletedMediaRules
   */
  exports.prototype['deletedMediaRules'] = undefined;



  return exports;
}));


