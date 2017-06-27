/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model.  The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.00.646
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['provisioning/ApiClient', 'provisioning/model/ApiErrorResponse', 'provisioning/model/ApiSuccessResponse', 'provisioning/model/Login', 'provisioning/model/LoginSuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/Login'), require('../model/LoginSuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.LoginApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse, root.ProvisioningApi.Login, root.ProvisioningApi.LoginSuccessResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, Login, LoginSuccessResponse) {
  'use strict';

  /**
   * Login service.
   * @module provisioning/api/LoginApi
   * @version 9.0.000.00.646
   */

  /**
   * Constructs a new LoginApi. 
   * @alias module:provisioning/api/LoginApi
   * @class
   * @param {module:provisioning/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:provisioning/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the login operation.
     * @callback module:provisioning/api/LoginApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:provisioning/model/LoginSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate user
     * Login operation will create a new sessionId and set default.yml:common.cookieName cookie (PROVISIONING_SESSIONID by default).
     * @param {module:provisioning/model/Login} body Authentication Data
     * @param {module:provisioning/api/LoginApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:provisioning/model/LoginSuccessResponse}
     */
    this.login = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling login");
      }


      var pathParams = {
      };
      var queryParams = {
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
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:provisioning/api/LoginApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {module:provisioning/model/ApiSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout user
     * The POST operation will delete a session and remove associated cookie 
     * @param {module:provisioning/api/LoginApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:provisioning/model/ApiSuccessResponse}
     */
    this.logout = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
