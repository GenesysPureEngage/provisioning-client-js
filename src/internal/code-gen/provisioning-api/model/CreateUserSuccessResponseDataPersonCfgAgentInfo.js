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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.CreateUserSuccessResponseDataPersonCfgAgentInfo = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateUserSuccessResponseDataPersonCfgAgentInfo model module.
   * @module model/CreateUserSuccessResponseDataPersonCfgAgentInfo
   * @version 9.0.000.40.3017
   */

  /**
   * Constructs a new <code>CreateUserSuccessResponseDataPersonCfgAgentInfo</code>.
   * @alias module:model/CreateUserSuccessResponseDataPersonCfgAgentInfo
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CreateUserSuccessResponseDataPersonCfgAgentInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserSuccessResponseDataPersonCfgAgentInfo} obj Optional instance to populate.
   * @return {module:model/CreateUserSuccessResponseDataPersonCfgAgentInfo} The populated <code>CreateUserSuccessResponseDataPersonCfgAgentInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('placeDBID')) {
        obj['placeDBID'] = ApiClient.convertToType(data['placeDBID'], 'String');
      }
      if (data.hasOwnProperty('siteDBID')) {
        obj['siteDBID'] = ApiClient.convertToType(data['siteDBID'], 'String');
      }
      if (data.hasOwnProperty('contractDBID')) {
        obj['contractDBID'] = ApiClient.convertToType(data['contractDBID'], 'String');
      }
      if (data.hasOwnProperty('capacityRuleDBID')) {
        obj['capacityRuleDBID'] = ApiClient.convertToType(data['capacityRuleDBID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} placeDBID
   */
  exports.prototype['placeDBID'] = undefined;
  /**
   * @member {String} siteDBID
   */
  exports.prototype['siteDBID'] = undefined;
  /**
   * @member {String} contractDBID
   */
  exports.prototype['contractDBID'] = undefined;
  /**
   * @member {String} capacityRuleDBID
   */
  exports.prototype['capacityRuleDBID'] = undefined;



  return exports;
}));


