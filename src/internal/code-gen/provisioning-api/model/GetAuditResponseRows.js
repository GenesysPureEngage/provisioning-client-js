/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.50.3296
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
    define(['ApiClient', 'model/GetAuditResponseMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAuditResponseMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.GetAuditResponseRows = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.GetAuditResponseMessage);
  }
}(this, function(ApiClient, GetAuditResponseMessage) {
  'use strict';




  /**
   * The GetAuditResponseRows model module.
   * @module model/GetAuditResponseRows
   * @version 9.0.000.50.3296
   */

  /**
   * Constructs a new <code>GetAuditResponseRows</code>.
   * @alias module:model/GetAuditResponseRows
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>GetAuditResponseRows</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAuditResponseRows} obj Optional instance to populate.
   * @return {module:model/GetAuditResponseRows} The populated <code>GetAuditResponseRows</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdat')) {
        obj['createdat'] = ApiClient.convertToType(data['createdat'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'String');
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = GetAuditResponseMessage.constructFromObject(data['message']);
      }
    }
    return obj;
  }

  /**
   * Date when record creaded.
   * @member {String} createdat
   */
  exports.prototype['createdat'] = undefined;
  /**
   * Record id.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Record level.
   * @member {String} level
   */
  exports.prototype['level'] = undefined;
  /**
   * Full message.
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;
  /**
   * Username of User that created record.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {module:model/GetAuditResponseMessage} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


