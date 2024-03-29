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
    define(['ApiClient', 'model/CreateUserSuccessResponseDataPerson'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateUserSuccessResponseDataPerson'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.CreateUserSuccessResponseData = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.CreateUserSuccessResponseDataPerson);
  }
}(this, function(ApiClient, CreateUserSuccessResponseDataPerson) {
  'use strict';




  /**
   * The CreateUserSuccessResponseData model module.
   * @module model/CreateUserSuccessResponseData
   * @version 9.0.000.91.4963
   */

  /**
   * Constructs a new <code>CreateUserSuccessResponseData</code>.
   * @alias module:model/CreateUserSuccessResponseData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CreateUserSuccessResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserSuccessResponseData} obj Optional instance to populate.
   * @return {module:model/CreateUserSuccessResponseData} The populated <code>CreateUserSuccessResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('person')) {
        obj['person'] = CreateUserSuccessResponseDataPerson.constructFromObject(data['person']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/CreateUserSuccessResponseDataPerson} person
   */
  exports.prototype['person'] = undefined;



  return exports;
}));


