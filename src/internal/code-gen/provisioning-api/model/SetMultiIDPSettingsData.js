/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.91.4963
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
    root.ProvisioningApi.SetMultiIDPSettingsData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SetMultiIDPSettingsData model module.
   * @module model/SetMultiIDPSettingsData
   * @version 9.0.000.91.4963
   */

  /**
   * Constructs a new <code>SetMultiIDPSettingsData</code>.
   * @alias module:model/SetMultiIDPSettingsData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SetMultiIDPSettingsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetMultiIDPSettingsData} obj Optional instance to populate.
   * @return {module:model/SetMultiIDPSettingsData} The populated <code>SetMultiIDPSettingsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serviceProviderBaseURL')) {
        obj['serviceProviderBaseURL'] = ApiClient.convertToType(data['serviceProviderBaseURL'], 'String');
      }
      if (data.hasOwnProperty('IDPs')) {
        obj['IDPs'] = ApiClient.convertToType(data['IDPs'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {String} serviceProviderBaseURL
   */
  exports.prototype['serviceProviderBaseURL'] = undefined;
  /**
   * @member {Array.<Object>} IDPs
   */
  exports.prototype['IDPs'] = undefined;



  return exports;
}));


