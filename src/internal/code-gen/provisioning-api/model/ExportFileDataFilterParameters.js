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
    root.ProvisioningApi.ExportFileDataFilterParameters = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExportFileDataFilterParameters model module.
   * @module model/ExportFileDataFilterParameters
   * @version 9.0.000.91.4963
   */

  /**
   * Constructs a new <code>ExportFileDataFilterParameters</code>.
   * A map containing parameters to filter and sort users. Only users that match the filter are exported. 
   * @alias module:model/ExportFileDataFilterParameters
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ExportFileDataFilterParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportFileDataFilterParameters} obj Optional instance to populate.
   * @return {module:model/ExportFileDataFilterParameters} The populated <code>ExportFileDataFilterParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentGroupFilter')) {
        obj['agentGroupFilter'] = ApiClient.convertToType(data['agentGroupFilter'], ['String']);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('sortBy')) {
        obj['sortBy'] = ApiClient.convertToType(data['sortBy'], ['String']);
      }
      if (data.hasOwnProperty('subresources')) {
        obj['subresources'] = ApiClient.convertToType(data['subresources'], 'String');
      }
    }
    return obj;
  }

  /**
   * An array of agent group names in which the user is included.
   * @member {Array.<String>} agentGroupFilter
   */
  exports.prototype['agentGroupFilter'] = undefined;
  /**
   * The sort order, either Ascending or Descending.
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * A comma-separated list of fields used to sort the exported users.
   * @member {Array.<String>} sortBy
   */
  exports.prototype['sortBy'] = undefined;
  /**
   * A comma-separated list of subresources (for example, skills) to include in the export.
   * @member {String} subresources
   * @default 'skills,devices'
   */
  exports.prototype['subresources'] = 'skills,devices';



  return exports;
}));


