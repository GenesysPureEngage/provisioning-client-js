/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.78.4173
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
    define(['ApiClient', 'model/ApiAsyncSuccessResponse', 'model/ApiErrorResponse', 'model/DeleteUsers', 'model/GetSubResponse', 'model/PostCheckImportStatus', 'model/PostCheckInactivity', 'model/PostImportResponse', 'model/PostUsers', 'model/PostValidateImportResponse', 'model/PutUsers', 'model/WatchObjData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiAsyncSuccessResponse'), require('../model/ApiErrorResponse'), require('../model/DeleteUsers'), require('../model/GetSubResponse'), require('../model/PostCheckImportStatus'), require('../model/PostCheckInactivity'), require('../model/PostImportResponse'), require('../model/PostUsers'), require('../model/PostValidateImportResponse'), require('../model/PutUsers'), require('../model/WatchObjData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.OperationsApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiAsyncSuccessResponse, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.DeleteUsers, root.ProvisioningApi.GetSubResponse, root.ProvisioningApi.PostCheckImportStatus, root.ProvisioningApi.PostCheckInactivity, root.ProvisioningApi.PostImportResponse, root.ProvisioningApi.PostUsers, root.ProvisioningApi.PostValidateImportResponse, root.ProvisioningApi.PutUsers, root.ProvisioningApi.WatchObjData);
  }
}(this, function(ApiClient, ApiAsyncSuccessResponse, ApiErrorResponse, DeleteUsers, GetSubResponse, PostCheckImportStatus, PostCheckInactivity, PostImportResponse, PostUsers, PostValidateImportResponse, PutUsers, WatchObjData) {
  'use strict';

  /**
   * Operations service.
   * @module api/OperationsApi
   * @version 9.0.000.78.4173
   */

  /**
   * Constructs a new OperationsApi. 
   * @alias module:api/OperationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Inactivity.
     * Inactivity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostCheckInactivity} and HTTP response
     */
    this.checkInactivityWithHttpInfo = function() {
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
      var returnType = PostCheckInactivity;

      return this.apiClient.callApi(
        '/operations/inactivity', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Inactivity.
     * Inactivity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostCheckInactivity}
     */
    this.checkInactivity = function() {
      return this.checkInactivityWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete users.
     * deleteUsers
     * @param {String} dbid The user&#39;s DBID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteUsers} and HTTP response
     */
    this.deleteUsersWithHttpInfo = function(dbid) {
      var postBody = null;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling deleteUsers");
      }


      var pathParams = {
        'dbid': dbid
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
      var returnType = DeleteUsers;

      return this.apiClient.callApi(
        '/operations/delete-users/{dbid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete users.
     * deleteUsers
     * @param {String} dbid The user&#39;s DBID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteUsers}
     */
    this.deleteUsers = function(dbid) {
      return this.deleteUsersWithHttpInfo(dbid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove subscription from objects changes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSubResponse} and HTTP response
     */
    this.deleteWatchObjectsWithHttpInfo = function() {
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
      var returnType = GetSubResponse;

      return this.apiClient.callApi(
        '/operations/watch-objects', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove subscription from objects changes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSubResponse}
     */
    this.deleteWatchObjects = function() {
      return this.deleteWatchObjectsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get sub.
     * Sub
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSubResponse} and HTTP response
     */
    this.getSubWithHttpInfo = function() {
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
      var returnType = GetSubResponse;

      return this.apiClient.callApi(
        '/operations/stub', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get sub.
     * Sub
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSubResponse}
     */
    this.getSub = function() {
      return this.getSubWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get used skills
     * Get all [CfgSkill](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgSkill) objects that are linked to existing [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects. 
     * @param {String} aioId A unique ID generated on the client (browser) when sending an API request that returns an asynchronous response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiAsyncSuccessResponse} and HTTP response
     */
    this.getUsedSkillsAsyncWithHttpInfo = function(aioId) {
      var postBody = null;

      // verify the required parameter 'aioId' is set
      if (aioId === undefined || aioId === null) {
        throw new Error("Missing the required parameter 'aioId' when calling getUsedSkillsAsync");
      }


      var pathParams = {
      };
      var queryParams = {
        '_aioId': aioId,
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
      var returnType = ApiAsyncSuccessResponse;

      return this.apiClient.callApi(
        '/operations/get-used-skills', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get used skills
     * Get all [CfgSkill](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgSkill) objects that are linked to existing [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects. 
     * @param {String} aioId A unique ID generated on the client (browser) when sending an API request that returns an asynchronous response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiAsyncSuccessResponse}
     */
    this.getUsedSkillsAsync = function(aioId) {
      return this.getUsedSkillsAsyncWithHttpInfo(aioId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get users
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @param {String} aioId A unique ID generated on the client (browser) when sending an API request that returns an asynchronous response.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of users the Provisioning API returns.
     * @param {Number} opts.offset The number of matches the Provisioning API skips in the returned users.
     * @param {module:model/String} opts.order The sort order.
     * @param {String} opts.sortBy A comma-separated list of fields to sort on. Possible values are &#x60;firstName&#x60;, &#x60;lastName&#x60;, and &#x60;userName&#x60;. 
     * @param {module:model/String} opts.filterName The name of a filter to use on the results.
     * @param {String} opts.filterParameters A part of the users first or last name, if you use the &#x60;FirstNameOrLastNameMatches&#x60; filter. 
     * @param {String} opts.roles Return only return users who have these Workspace Web Edition roles. The roles can be specified in a comma-separated list. Possible values are &#x60;ROLE_AGENT&#x60;, &#x60;ROLE_ADMIN&#x60;, and &#x60;ROLE_SUPERVISOR&#x60;. 
     * @param {String} opts.skills Return only users who have these skills. The skills can be specified in a comma-separated list. 
     * @param {Boolean} opts.userEnabled Return only enabled or disabled users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiAsyncSuccessResponse} and HTTP response
     */
    this.getUsersAsyncWithHttpInfo = function(aioId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'aioId' is set
      if (aioId === undefined || aioId === null) {
        throw new Error("Missing the required parameter 'aioId' when calling getUsersAsync");
      }


      var pathParams = {
      };
      var queryParams = {
        '_aioId': aioId,
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order': opts['order'],
        'sortBy': opts['sortBy'],
        'filterName': opts['filterName'],
        'filterParameters': opts['filterParameters'],
        'roles': opts['roles'],
        'skills': opts['skills'],
        'userEnabled': opts['userEnabled'],
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
      var returnType = ApiAsyncSuccessResponse;

      return this.apiClient.callApi(
        '/operations/get-users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get users
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @param {String} aioId A unique ID generated on the client (browser) when sending an API request that returns an asynchronous response.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of users the Provisioning API returns.
     * @param {Number} opts.offset The number of matches the Provisioning API skips in the returned users.
     * @param {module:model/String} opts.order The sort order.
     * @param {String} opts.sortBy A comma-separated list of fields to sort on. Possible values are &#x60;firstName&#x60;, &#x60;lastName&#x60;, and &#x60;userName&#x60;. 
     * @param {module:model/String} opts.filterName The name of a filter to use on the results.
     * @param {String} opts.filterParameters A part of the users first or last name, if you use the &#x60;FirstNameOrLastNameMatches&#x60; filter. 
     * @param {String} opts.roles Return only return users who have these Workspace Web Edition roles. The roles can be specified in a comma-separated list. Possible values are &#x60;ROLE_AGENT&#x60;, &#x60;ROLE_ADMIN&#x60;, and &#x60;ROLE_SUPERVISOR&#x60;. 
     * @param {String} opts.skills Return only users who have these skills. The skills can be specified in a comma-separated list. 
     * @param {Boolean} opts.userEnabled Return only enabled or disabled users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiAsyncSuccessResponse}
     */
    this.getUsersAsync = function(aioId, opts) {
      return this.getUsersAsyncWithHttpInfo(aioId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Check import status
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiAsyncSuccessResponse} and HTTP response
     */
    this.postCheckImportStatusWithHttpInfo = function() {
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
      var returnType = ApiAsyncSuccessResponse;

      return this.apiClient.callApi(
        '/operations/check-import-status', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Check import status
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiAsyncSuccessResponse}
     */
    this.postCheckImportStatus = function() {
      return this.postCheckImportStatusWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PostImport.
     * postImport
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostImportResponse} and HTTP response
     */
    this.postImportWithHttpInfo = function() {
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
      var returnType = PostImportResponse;

      return this.apiClient.callApi(
        '/operations/import', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PostImport.
     * postImport
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostImportResponse}
     */
    this.postImport = function() {
      return this.postImportWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post users.
     * postUsers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostUsers} and HTTP response
     */
    this.postUsersWithHttpInfo = function() {
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
      var returnType = PostUsers;

      return this.apiClient.callApi(
        '/operations/post-users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post users.
     * postUsers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostUsers}
     */
    this.postUsers = function() {
      return this.postUsersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post Validate Import.
     * post validate import
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostValidateImportResponse} and HTTP response
     */
    this.postValidateImportWithHttpInfo = function() {
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
      var returnType = PostValidateImportResponse;

      return this.apiClient.callApi(
        '/operations/validate-import', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post Validate Import.
     * post validate import
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostValidateImportResponse}
     */
    this.postValidateImport = function() {
      return this.postValidateImportWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Subscribe to objects changes.
     * @param {module:model/WatchObjData} body The list of object to subscribe.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSubResponse} and HTTP response
     */
    this.postWatchObjectsWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postWatchObjects");
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
      var returnType = GetSubResponse;

      return this.apiClient.callApi(
        '/operations/watch-objects', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subscribe to objects changes.
     * @param {module:model/WatchObjData} body The list of object to subscribe.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSubResponse}
     */
    this.postWatchObjects = function(body) {
      return this.postWatchObjectsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Put users.
     * putUsers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PutUsers} and HTTP response
     */
    this.putUsersWithHttpInfo = function() {
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
      var returnType = PutUsers;

      return this.apiClient.callApi(
        '/operations/put-users', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Put users.
     * putUsers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PutUsers}
     */
    this.putUsers = function() {
      return this.putUsersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
