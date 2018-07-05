/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.18.2300
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddUserData', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/GetUsersSuccessResponse', 'model/UpdateUserData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddUserData'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/GetUsersSuccessResponse'), require('../model/UpdateUserData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.UsersApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.AddUserData, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse, root.ProvisioningApi.GetUsersSuccessResponse, root.ProvisioningApi.UpdateUserData);
  }
}(this, function(ApiClient, AddUserData, ApiErrorResponse, ApiSuccessResponse, GetUsersSuccessResponse, UpdateUserData) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 9.0.000.18.2300
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a user.
     * Create a user ([CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) with the specified attributes.
     * @param {module:model/AddUserData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.addUserWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addUser");
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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a user.
     * Create a user ([CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) with the specified attributes.
     * @param {module:model/AddUserData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.addUser = function(body) {
      return this.addUserWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a user.
     * Remove the specified user, along with their associated login, places, and DNs. This removes the [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object and any associated [CfgAgentLogin](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentLogin), [CfgPlace](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPlace), [CfgDN](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgDN) objects. 
     * @param {String} dbid The users&#39; DBID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.keepPlaces If &#x60;true&#x60; or absent, the user&#39;s places and DNs are not deleted. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deleteUserWithHttpInfo = function(dbid, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling deleteUser");
      }


      var pathParams = {
        'dbid': dbid
      };
      var queryParams = {
        'keep_places': opts['keepPlaces']
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
        '/users/{dbid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a user.
     * Remove the specified user, along with their associated login, places, and DNs. This removes the [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object and any associated [CfgAgentLogin](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentLogin), [CfgPlace](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPlace), [CfgDN](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgDN) objects. 
     * @param {String} dbid The users&#39; DBID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.keepPlaces If &#x60;true&#x60; or absent, the user&#39;s places and DNs are not deleted. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deleteUser = function(dbid, opts) {
      return this.deleteUserWithHttpInfo(dbid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the logged in user.
     * Get the [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object for the currently logged in user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getCurrentUserWithHttpInfo = function() {
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
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/users/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the logged in user.
     * Get the [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object for the currently logged in user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getCurrentUser = function() {
      return this.getCurrentUserWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a user.
     * Get the specified [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object.
     * @param {String} dbid The user&#39;s DBID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getUserWithHttpInfo = function(dbid) {
      var postBody = null;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling getUser");
      }


      var pathParams = {
        'dbid': dbid
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
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/users/{dbid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a user.
     * Get the specified [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object.
     * @param {String} dbid The user&#39;s DBID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getUser = function(dbid) {
      return this.getUserWithHttpInfo(dbid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get users.
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the number of users the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned users.
     * @param {module:model/String} opts.order The sort order.
     * @param {String} opts.sortBy A comma-separated list of fields to sort on. Possible values are firstName, lastName, and userName. 
     * @param {module:model/String} opts.filterName The name of a filter to use on the results.
     * @param {String} opts.filterParameters A part of the users first or last name, if you use the FirstNameOrLastNameMatches filter. 
     * @param {String} opts.roles Return only users who have the Workspace Web Edition roles. The roles can be specified in a comma-separated list. Possible values are ROLE_AGENT and ROLE_ADMIN,ROLE_SUPERVISOR. 
     * @param {String} opts.skills Return only users who have these skills. The skills can be specified in a comma-separated list. 
     * @param {Boolean} opts.userEnabled Return only enabled or disabled users.
     * @param {module:model/String} opts.userValid Return only valid or invalid users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getUsersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order': opts['order'],
        'sortBy': opts['sortBy'],
        'filterName': opts['filterName'],
        'filterParameters': opts['filterParameters'],
        'roles': opts['roles'],
        'skills': opts['skills'],
        'userEnabled': opts['userEnabled'],
        'userValid': opts['userValid']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get users.
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the number of users the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned users.
     * @param {module:model/String} opts.order The sort order.
     * @param {String} opts.sortBy A comma-separated list of fields to sort on. Possible values are firstName, lastName, and userName. 
     * @param {module:model/String} opts.filterName The name of a filter to use on the results.
     * @param {String} opts.filterParameters A part of the users first or last name, if you use the FirstNameOrLastNameMatches filter. 
     * @param {String} opts.roles Return only users who have the Workspace Web Edition roles. The roles can be specified in a comma-separated list. Possible values are ROLE_AGENT and ROLE_ADMIN,ROLE_SUPERVISOR. 
     * @param {String} opts.skills Return only users who have these skills. The skills can be specified in a comma-separated list. 
     * @param {Boolean} opts.userEnabled Return only enabled or disabled users.
     * @param {module:model/String} opts.userValid Return only valid or invalid users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getUsers = function(opts) {
      return this.getUsersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a user.
     * Update a user ([CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) with the specified attributes.
     * @param {String} dbid The user&#39;s DBID.
     * @param {module:model/UpdateUserData} updateUserData Update user data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.updateUserWithHttpInfo = function(dbid, updateUserData) {
      var postBody = updateUserData;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling updateUser");
      }

      // verify the required parameter 'updateUserData' is set
      if (updateUserData === undefined || updateUserData === null) {
        throw new Error("Missing the required parameter 'updateUserData' when calling updateUser");
      }


      var pathParams = {
        'dbid': dbid
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
        '/users/{dbid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a user.
     * Update a user ([CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) with the specified attributes.
     * @param {String} dbid The user&#39;s DBID.
     * @param {module:model/UpdateUserData} updateUserData Update user data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.updateUser = function(dbid, updateUserData) {
      return this.updateUserWithHttpInfo(dbid, updateUserData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
