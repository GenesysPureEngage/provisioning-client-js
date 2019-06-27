/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.54.3393
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
    define(['ApiClient', 'model/DynconfigGetConfigResponseConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DynconfigGetConfigResponseConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.DynconfigGetConfigResponse = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.DynconfigGetConfigResponseConfig);
  }
}(this, function(ApiClient, DynconfigGetConfigResponseConfig) {
  'use strict';




  /**
   * The DynconfigGetConfigResponse model module.
   * @module model/DynconfigGetConfigResponse
   * @version 9.0.000.54.3393
   */

  /**
   * Constructs a new <code>DynconfigGetConfigResponse</code>.
   * @alias module:model/DynconfigGetConfigResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DynconfigGetConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DynconfigGetConfigResponse} obj Optional instance to populate.
   * @return {module:model/DynconfigGetConfigResponse} The populated <code>DynconfigGetConfigResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('config')) {
        obj['config'] = DynconfigGetConfigResponseConfig.constructFromObject(data['config']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DynconfigGetConfigResponseConfig} config
   */
  exports.prototype['config'] = undefined;



  return exports;
}));


