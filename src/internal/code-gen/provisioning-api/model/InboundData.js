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
    root.ProvisioningApi.InboundData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InboundData model module.
   * @module model/InboundData
   * @version 9.0.000.91.4963
   */

  /**
   * Constructs a new <code>InboundData</code>.
   * @alias module:model/InboundData
   * @class
   * @param name {String} The name of an inbound corporate mailbox. 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;








  };

  /**
   * Constructs a <code>InboundData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InboundData} obj Optional instance to populate.
   * @return {module:model/InboundData} The populated <code>InboundData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('maxMessageSize')) {
        obj['maxMessageSize'] = ApiClient.convertToType(data['maxMessageSize'], 'Number');
      }
      if (data.hasOwnProperty('mailbox')) {
        obj['mailbox'] = ApiClient.convertToType(data['mailbox'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('connectionSecurity')) {
        obj['connectionSecurity'] = ApiClient.convertToType(data['connectionSecurity'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The name of an inbound corporate mailbox. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The maximum size (in MB) of an incoming message. 
   * @member {Number} maxMessageSize
   */
  exports.prototype['maxMessageSize'] = undefined;
  /**
   * The login name associated with the POP/IMAP account. 
   * @member {String} mailbox
   */
  exports.prototype['mailbox'] = undefined;
  /**
   * The password associated with this account. 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The host name or IP address of the corporate email server on which the account resides. 
   * @member {String} host
   */
  exports.prototype['host'] = undefined;
  /**
   * The port number for connecting to the corporate email server. 
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * Specifies how the connection to the corporate email server is secured. If set to `start-tls`, the Provisioning API uses the STARTTLS command (if supported by the server) to switch to a TLS-protected connection before issuing any login commands. If a TLS connection is not available, a plain-text connection is used. If set to `start-tls-required`, the API uses the STARTTLS command and if a TLS connection is not available, the connection is aborted. If set to `ssl-tls`, the API uses Secure Sockets Layer (SSL) encryption when connecting to the corporate email server. 
   * @member {String} connectionSecurity
   */
  exports.prototype['connectionSecurity'] = undefined;
  /**
   * The protocol used to retrieve incoming messages from the corporate email server. Possible values are `POP3`, `IMAP`, or `EWS`. 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Specifies if the inbound client is enabled. 
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;



  return exports;
}));


