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
    define(['ApiClient', 'model/PostStorage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PostStorage'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.StorageApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.PostStorage);
  }
}(this, function(ApiClient, PostStorage) {
  'use strict';

  /**
   * Storage service.
   * @module api/StorageApi
   * @version 9.0.000.91.4963
   */

  /**
   * Constructs a new StorageApi. 
   * @alias module:api/StorageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Temporary storage update
     * Upload data to a temporary storage
     * @param {Object} opts Optional parameters
     * @param {File} opts.storageFile Content of this file will be placed to the temporary storage
     * @param {Number} opts.ttl Time to live in seconds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostStorage} and HTTP response
     */
    this.updateStorageWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'storage_file': opts['storageFile'],
        'ttl': opts['ttl']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = PostStorage;

      return this.apiClient.callApi(
        '/temporary-storage', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Temporary storage update
     * Upload data to a temporary storage
     * @param {Object} opts Optional parameters
     * @param {File} opts.storageFile Content of this file will be placed to the temporary storage
     * @param {Number} opts.ttl Time to live in seconds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostStorage}
     */
    this.updateStorage = function(opts) {
      return this.updateStorageWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
