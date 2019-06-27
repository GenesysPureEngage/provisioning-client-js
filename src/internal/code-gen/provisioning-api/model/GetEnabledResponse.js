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
    define(['ApiClient', 'model/GetEnabledResponseData', 'model/GetLocationResponseStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetEnabledResponseData'), require('./GetLocationResponseStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.GetEnabledResponse = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.GetEnabledResponseData, root.ProvisioningApi.GetLocationResponseStatus);
  }
}(this, function(ApiClient, GetEnabledResponseData, GetLocationResponseStatus) {
  'use strict';




  /**
   * The GetEnabledResponse model module.
   * @module model/GetEnabledResponse
   * @version 9.0.000.54.3393
   */

  /**
   * Constructs a new <code>GetEnabledResponse</code>.
   * @alias module:model/GetEnabledResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetEnabledResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetEnabledResponse} obj Optional instance to populate.
   * @return {module:model/GetEnabledResponse} The populated <code>GetEnabledResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = GetLocationResponseStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = GetEnabledResponseData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetLocationResponseStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/GetEnabledResponseData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


