/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.75.4131
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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/GetLogout', 'model/InitProvData', 'model/LoginSuccessResponse', 'model/ModifyLoginData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/GetLogout'), require('../model/InitProvData'), require('../model/LoginSuccessResponse'), require('../model/ModifyLoginData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.SessionApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse, root.ProvisioningApi.GetLogout, root.ProvisioningApi.InitProvData, root.ProvisioningApi.LoginSuccessResponse, root.ProvisioningApi.ModifyLoginData);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, GetLogout, InitProvData, LoginSuccessResponse, ModifyLoginData) {
  'use strict';

  /**
   * Session service.
   * @module api/SessionApi
   * @version 9.0.000.75.4131
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
     * Login (HTTP session only)
     * Starts the OAuth 2 flow for the Authorization Code grant type and returns a redirect to the Authentication service. For more information, see the [Authentication API](/reference/authentication/).
     * @param {String} redirectUri The URI the Authentication API uses to redirect the user after authentication.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeState Flag denoting whether a state parameter should be generated and included in the redirect.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getLoginWithHttpInfo = function(redirectUri, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling getLogin");
      }


      var pathParams = {
      };
      var queryParams = {
        'redirect_uri': redirectUri,
        'include_state': opts['includeState'],
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
      var returnType = null;

      return this.apiClient.callApi(
        '/login', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Login (HTTP session only)
     * Starts the OAuth 2 flow for the Authorization Code grant type and returns a redirect to the Authentication service. For more information, see the [Authentication API](/reference/authentication/).
     * @param {String} redirectUri The URI the Authentication API uses to redirect the user after authentication.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeState Flag denoting whether a state parameter should be generated and included in the redirect.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getLogin = function(redirectUri, opts) {
      return this.getLoginWithHttpInfo(redirectUri, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logout the user
     * Logout the user by deleting the session and removing the associated cookie.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLogout} and HTTP response
     */
    this.getLogoutWithHttpInfo = function() {
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
      var returnType = GetLogout;

      return this.apiClient.callApi(
        '/logout', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Logout the user
     * Logout the user by deleting the session and removing the associated cookie.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLogout}
     */
    this.getLogout = function() {
      return this.getLogoutWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Init Session
     * The GET operation will init user session. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.initProvisioningWithHttpInfo = function() {
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
        '/init-provisioning', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Init Session
     * The GET operation will init user session. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.initProvisioning = function() {
      return this.initProvisioningWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Authenticate a user
     * Create a new session and the associated cookie, which is default.yml:common.cookieName (PROVISIONING_SESSIONID by default). 
     * @param {Object} opts Optional parameters
     * @param {module:model/InitProvData} opts.authenticationCode The authentication code received from the [Authentication API](/reference/authentication/).
     * @param {String} opts.authorization Bearer authorization. For example, &#39;Bearer access_token&#39;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoginSuccessResponse} and HTTP response
     */
    this.initializeProvisioningWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['authenticationCode'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
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
     * Authenticate a user
     * Create a new session and the associated cookie, which is default.yml:common.cookieName (PROVISIONING_SESSIONID by default). 
     * @param {Object} opts Optional parameters
     * @param {module:model/InitProvData} opts.authenticationCode The authentication code received from the [Authentication API](/reference/authentication/).
     * @param {String} opts.authorization Bearer authorization. For example, &#39;Bearer access_token&#39;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoginSuccessResponse}
     */
    this.initializeProvisioning = function(opts) {
      return this.initializeProvisioningWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Login (HTTP session only)
     * Starts the OAuth 2 flow for the Authorization Code grant type and returns a redirect to the Authentication service. For more information, see the [Authentication API](/reference/authentication/).
     * @param {module:model/ModifyLoginData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.loginWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling login");
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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Login (HTTP session only)
     * Starts the OAuth 2 flow for the Authorization Code grant type and returns a redirect to the Authentication service. For more information, see the [Authentication API](/reference/authentication/).
     * @param {module:model/ModifyLoginData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.login = function(body) {
      return this.loginWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logout the user
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
     * Logout the user
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
