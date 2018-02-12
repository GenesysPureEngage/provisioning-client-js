/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.08.1664
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/InitProvData', 'model/LoginSuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/InitProvData'), require('../model/LoginSuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.SessionApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse, root.ProvisioningApi.InitProvData, root.ProvisioningApi.LoginSuccessResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, InitProvData, LoginSuccessResponse) {
  'use strict';

  /**
   * Session service.
   * @module api/SessionApi
   * @version 9.0.000.08.1664
   */

  /**
   * Constructs a new SessionApi. 
   * @alias module:api/SessionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Authenticate user
     * Initialize-provisioning operation will create a new sessionId and set default.yml:common.cookieName cookie (PROVISIONING_SESSIONID by default). 
     * @param {module:model/InitProvData} code Authentication code recieved from the Auth service
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoginSuccessResponse} and HTTP response
     */
    this.initializeProvisioningWithHttpInfo = function(code) {
      var postBody = code;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling initializeProvisioning");
      }


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
      var returnType = LoginSuccessResponse;

      return this.apiClient.callApi(
        '/initialize-provisioning', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Authenticate user
     * Initialize-provisioning operation will create a new sessionId and set default.yml:common.cookieName cookie (PROVISIONING_SESSIONID by default). 
     * @param {module:model/InitProvData} code Authentication code recieved from the Auth service
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoginSuccessResponse}
     */
    this.initializeProvisioning = function(code) {
      return this.initializeProvisioningWithHttpInfo(code)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logout the user.
     * Logout the user by deleting the session and removing the associated cookie. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.logoutWithHttpInfo = function() {
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
        '/logout', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Logout the user.
     * Logout the user by deleting the session and removing the associated cookie. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.logout = function() {
      return this.logoutWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
