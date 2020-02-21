/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.78.4173
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
    define(['ApiClient', 'model/RecCertGetResponseStatusSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecCertGetResponseStatusSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.RecCertGetResponseSuccess = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.RecCertGetResponseStatusSuccess);
  }
}(this, function(ApiClient, RecCertGetResponseStatusSuccess) {
  'use strict';




  /**
   * The RecCertGetResponseSuccess model module.
   * @module model/RecCertGetResponseSuccess
   * @version 9.0.000.78.4173
   */

  /**
   * Constructs a new <code>RecCertGetResponseSuccess</code>.
   * @alias module:model/RecCertGetResponseSuccess
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RecCertGetResponseSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecCertGetResponseSuccess} obj Optional instance to populate.
   * @return {module:model/RecCertGetResponseSuccess} The populated <code>RecCertGetResponseSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Object]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = RecCertGetResponseStatusSuccess.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:model/RecCertGetResponseStatusSuccess} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


