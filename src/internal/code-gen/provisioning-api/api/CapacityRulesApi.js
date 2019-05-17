/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.48.3263
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
    define(['ApiClient', 'model/CapRulesDeleteResponseError', 'model/CapRulesDeleteResponseSuccess', 'model/CapRulesGetResponseError', 'model/CapRulesGetResponseSuccess', 'model/CaprulePost', 'model/CaprulePut', 'model/CaprulesPostResponseStatusError', 'model/CaprulesPostResponseStatusSuccess', 'model/CaprulesPutResponseStatusError', 'model/CaprulesPutResponseStatusSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CapRulesDeleteResponseError'), require('../model/CapRulesDeleteResponseSuccess'), require('../model/CapRulesGetResponseError'), require('../model/CapRulesGetResponseSuccess'), require('../model/CaprulePost'), require('../model/CaprulePut'), require('../model/CaprulesPostResponseStatusError'), require('../model/CaprulesPostResponseStatusSuccess'), require('../model/CaprulesPutResponseStatusError'), require('../model/CaprulesPutResponseStatusSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.CapacityRulesApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.CapRulesDeleteResponseError, root.ProvisioningApi.CapRulesDeleteResponseSuccess, root.ProvisioningApi.CapRulesGetResponseError, root.ProvisioningApi.CapRulesGetResponseSuccess, root.ProvisioningApi.CaprulePost, root.ProvisioningApi.CaprulePut, root.ProvisioningApi.CaprulesPostResponseStatusError, root.ProvisioningApi.CaprulesPostResponseStatusSuccess, root.ProvisioningApi.CaprulesPutResponseStatusError, root.ProvisioningApi.CaprulesPutResponseStatusSuccess);
  }
}(this, function(ApiClient, CapRulesDeleteResponseError, CapRulesDeleteResponseSuccess, CapRulesGetResponseError, CapRulesGetResponseSuccess, CaprulePost, CaprulePut, CaprulesPostResponseStatusError, CaprulesPostResponseStatusSuccess, CaprulesPutResponseStatusError, CaprulesPutResponseStatusSuccess) {
  'use strict';

  /**
   * CapacityRules service.
   * @module api/CapacityRulesApi
   * @version 9.0.000.48.3263
   */

  /**
   * Constructs a new CapacityRulesApi. 
   * @alias module:api/CapacityRulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get capacity rules.
     * The GET operation will return CfgScript objects of CFGCapacityRule type
     * @param {Object} opts Optional parameters
     * @param {String} opts.scriptDbid DBID of a script
     * @param {String} opts.name Name of a script
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CapRulesGetResponseSuccess} and HTTP response
     */
    this.capRulesGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'script_dbid': opts['scriptDbid'],
        'name': opts['name'],
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
      var returnType = CapRulesGetResponseSuccess;

      return this.apiClient.callApi(
        '/capacity-rules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get capacity rules.
     * The GET operation will return CfgScript objects of CFGCapacityRule type
     * @param {Object} opts Optional parameters
     * @param {String} opts.scriptDbid DBID of a script
     * @param {String} opts.name Name of a script
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CapRulesGetResponseSuccess}
     */
    this.capRulesGet = function(opts) {
      return this.capRulesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create capacity rule.
     * The POST operation will create a CfgScript object of CFGCapacityRule type
     * @param {module:model/CaprulePost} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CaprulesPostResponseStatusSuccess} and HTTP response
     */
    this.capRulesPostWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling capRulesPost");
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
      var returnType = CaprulesPostResponseStatusSuccess;

      return this.apiClient.callApi(
        '/capacity-rules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create capacity rule.
     * The POST operation will create a CfgScript object of CFGCapacityRule type
     * @param {module:model/CaprulePost} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CaprulesPostResponseStatusSuccess}
     */
    this.capRulesPost = function(body) {
      return this.capRulesPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update capacity rule.
     * The PUT operation will update annex of a CfgScript object
     * @param {module:model/CaprulePut} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CaprulesPutResponseStatusSuccess} and HTTP response
     */
    this.capRulesPutWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling capRulesPut");
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
      var returnType = CaprulesPutResponseStatusSuccess;

      return this.apiClient.callApi(
        '/capacity-rules', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update capacity rule.
     * The PUT operation will update annex of a CfgScript object
     * @param {module:model/CaprulePut} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CaprulesPutResponseStatusSuccess}
     */
    this.capRulesPut = function(body) {
      return this.capRulesPutWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a capacity rule.
     * The DELETE operation will remove a CfgScript object
     * @param {String} scriptDbid DBID of a script
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CapRulesDeleteResponseSuccess} and HTTP response
     */
    this.capruleDeleteWithHttpInfo = function(scriptDbid) {
      var postBody = null;

      // verify the required parameter 'scriptDbid' is set
      if (scriptDbid === undefined || scriptDbid === null) {
        throw new Error("Missing the required parameter 'scriptDbid' when calling capruleDelete");
      }


      var pathParams = {
        'script_dbid': scriptDbid
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
      var returnType = CapRulesDeleteResponseSuccess;

      return this.apiClient.callApi(
        '/capacity-rules', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a capacity rule.
     * The DELETE operation will remove a CfgScript object
     * @param {String} scriptDbid DBID of a script
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CapRulesDeleteResponseSuccess}
     */
    this.capruleDelete = function(scriptDbid) {
      return this.capruleDeleteWithHttpInfo(scriptDbid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
