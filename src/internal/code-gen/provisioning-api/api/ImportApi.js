/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.45.3143
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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/GetImportStatusResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/GetImportStatusResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ImportApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse, root.ProvisioningApi.GetImportStatusResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, GetImportStatusResponse) {
  'use strict';

  /**
   * Import service.
   * @module api/ImportApi
   * @version 9.0.000.45.3143
   */

  /**
   * Constructs a new ImportApi. 
   * @alias module:api/ImportApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get import status.
     * Get all active imports for the specified tenant.
     * @param {String} adminName The login name of an administrator for the tenant.
     * @param {String} tenantName The name of the tenant.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetImportStatusResponse} and HTTP response
     */
    this.getImportStatusWithHttpInfo = function(adminName, tenantName) {
      var postBody = null;

      // verify the required parameter 'adminName' is set
      if (adminName === undefined || adminName === null) {
        throw new Error("Missing the required parameter 'adminName' when calling getImportStatus");
      }

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling getImportStatus");
      }


      var pathParams = {
      };
      var queryParams = {
        'adminName': adminName,
        'tenantName': tenantName,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetImportStatusResponse;

      return this.apiClient.callApi(
        '/import-users/check-status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get import status.
     * Get all active imports for the specified tenant.
     * @param {String} adminName The login name of an administrator for the tenant.
     * @param {String} tenantName The name of the tenant.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetImportStatusResponse}
     */
    this.getImportStatus = function(adminName, tenantName) {
      return this.getImportStatusWithHttpInfo(adminName, tenantName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Import users.
     * Import users in the specified CSV/XLS file.
     * @param {Object} opts Optional parameters
     * @param {File} opts.csvfile The CSV/XLS file to import.
     * @param {Boolean} opts.validateBeforeImport Specifies whether the Provisioning API should validate the file before the actual import takes place. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.importFileWithHttpInfo = function(opts) {
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
        'csvfile': opts['csvfile'],
        'validateBeforeImport': opts['validateBeforeImport']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/import-users/csv', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Import users.
     * Import users in the specified CSV/XLS file.
     * @param {Object} opts Optional parameters
     * @param {File} opts.csvfile The CSV/XLS file to import.
     * @param {Boolean} opts.validateBeforeImport Specifies whether the Provisioning API should validate the file before the actual import takes place. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.importFile = function(opts) {
      return this.importFileWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Stop import.
     * Terminates the current user import operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.terminateImportWithHttpInfo = function() {
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
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/import-users/csv', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Stop import.
     * Terminates the current user import operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.terminateImport = function() {
      return this.terminateImportWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validate the import file.
     * Performs pre-validation on the specified CSV/XLS file.
     * @param {Object} opts Optional parameters
     * @param {File} opts.csvfile The CSV/XLS file to import.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.validateImportFileWithHttpInfo = function(opts) {
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
        'csvfile': opts['csvfile']
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/import-users/validate-csv', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate the import file.
     * Performs pre-validation on the specified CSV/XLS file.
     * @param {Object} opts Optional parameters
     * @param {File} opts.csvfile The CSV/XLS file to import.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.validateImportFile = function(opts) {
      return this.validateImportFileWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
