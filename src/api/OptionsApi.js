/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.06.1279
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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/GetOptionsResponse', 'model/ModifyOptionsData', 'model/UpdateOptionsData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/GetOptionsResponse'), require('../model/ModifyOptionsData'), require('../model/UpdateOptionsData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.OptionsApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse, root.ProvisioningApi.GetOptionsResponse, root.ProvisioningApi.ModifyOptionsData, root.ProvisioningApi.UpdateOptionsData);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, GetOptionsResponse, ModifyOptionsData, UpdateOptionsData) {
  'use strict';

  /**
   * Options service.
   * @module api/OptionsApi
   * @version 9.0.000.06.1279
   */

  /**
   * Constructs a new OptionsApi. 
   * @alias module:api/OptionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get options.
     * Get options for a specified application and merge them with the person and agent group annexes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.personDbid The DBID of a person. Options are merged with the person&#39;s annex and the annexes of the person&#39;s agent groups. Mutual with agent_group_dbid.
     * @param {String} opts.agentGroupDbid The DBID of an agent group. Options are merged with the agent group&#39;s annex. Mutual with person_dbid.
     * @param {String} opts.application The name of an application. This value is set to CloudCluster by default.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetOptionsResponse} and HTTP response
     */
    this.getOptionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'person_dbid': opts['personDbid'],
        'agent_group_dbid': opts['agentGroupDbid'],
        'application': opts['application'],
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
      var returnType = GetOptionsResponse;

      return this.apiClient.callApi(
        '/options', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get options.
     * Get options for a specified application and merge them with the person and agent group annexes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.personDbid The DBID of a person. Options are merged with the person&#39;s annex and the annexes of the person&#39;s agent groups. Mutual with agent_group_dbid.
     * @param {String} opts.agentGroupDbid The DBID of an agent group. Options are merged with the agent group&#39;s annex. Mutual with person_dbid.
     * @param {String} opts.application The name of an application. This value is set to CloudCluster by default.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetOptionsResponse}
     */
    this.getOptions = function(opts) {
      return this.getOptionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify options.
     * Replace the existing application options with the specified new values.
     * @param {module:model/ModifyOptionsData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.modifyOptionsWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyOptions");
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
        '/options', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modify options.
     * Replace the existing application options with the specified new values.
     * @param {module:model/ModifyOptionsData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.modifyOptions = function(body) {
      return this.modifyOptionsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add, edit or delete options values.
     * Add, edit or delete option values for the specified application.
     * @param {module:model/UpdateOptionsData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.updateOptionsWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOptions");
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
        '/options', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add, edit or delete options values.
     * Add, edit or delete option values for the specified application.
     * @param {module:model/UpdateOptionsData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.updateOptions = function(body) {
      return this.updateOptionsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
