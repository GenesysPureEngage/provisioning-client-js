/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.40.3017
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModifyOptionsDataData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModifyOptionsDataData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ModifyOptionsData = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ModifyOptionsDataData);
  }
}(this, function(ApiClient, ModifyOptionsDataData) {
  'use strict';




  /**
   * The ModifyOptionsData model module.
   * @module model/ModifyOptionsData
   * @version 9.0.000.40.3017
   */

  /**
   * Constructs a new <code>ModifyOptionsData</code>.
   * @alias module:model/ModifyOptionsData
   * @class
   * @param data {module:model/ModifyOptionsDataData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>ModifyOptionsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModifyOptionsData} obj Optional instance to populate.
   * @return {module:model/ModifyOptionsData} The populated <code>ModifyOptionsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ModifyOptionsDataData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ModifyOptionsDataData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


