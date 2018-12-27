/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.35.2826
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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/GetObjectsSuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/GetObjectsSuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ObjectsApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.GetObjectsSuccessResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, GetObjectsSuccessResponse) {
  'use strict';

  /**
   * Objects service.
   * @module api/ObjectsApi
   * @version 9.0.000.35.2826
   */

  /**
   * Constructs a new ObjectsApi. 
   * @alias module:api/ObjectsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get DNs or agent groups.
     * Get DNs (directory numbers) or agent groups from Configuration Server with the specified filters.
     * @param {String} objectType The type of object. Possible values are dns, skills, dn-groups or agent-groups.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dnType If the object_type is &#39;dns&#39;, then you need to specify the DN type (for example, CFGRoutingPoint). For possible values, see [CfgDNType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDNType) in the Platform SDK documentation. 
     * @param {Array.<String>} opts.dnGroups If the object_type is &#39;dns&#39;, may contain a list of DN group names to filter DNs.
     * @param {module:model/String} opts.groupType If the object_type is &#39;agent-groups&#39;, then you need to specify the agent group type.
     * @param {Number} opts.limit The number of objects the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned objects.
     * @param {String} opts.searchTerm The term that you want to search for in the object keys. The Provisioning API searches for the this term in the value of the key you specify in &#39;search_key&#39;. 
     * @param {String} opts.searchKey The key you want the Provisioning API to use when searching for the term you specified in &#39;search_term&#39;. You can find valid key names in the Platform SDK documentation for [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN) and [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup). 
     * @param {String} opts.matchMethod The method the Provisioning API should use to match the &#39;search_term&#39;. Possible values are includes, startsWith, endsWith, and isEqual.  (default to includes)
     * @param {String} opts.sortKey A key in [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN), [CfgSkill](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgSkill) or [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup) to sort the search results. 
     * @param {Boolean} opts.sortAscending Specifies whether to sort the search results in ascending or descending order.  (default to true)
     * @param {String} opts.sortMethod Specifies the sort method. Possible values are caseSensitive, caseInsensitive or numeric.  (default to caseSensitive)
     * @param {String} opts.dbids Comma-separated list of DNs to be fetched. 
     * @param {Boolean} opts.inUse Specifies whether to return only skills actually assigned to agents.  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetObjectsSuccessResponse} and HTTP response
     */
    this.getObjectWithHttpInfo = function(objectType, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getObject");
      }


      var pathParams = {
        'object_type': objectType
      };
      var queryParams = {
        'dn_type': opts['dnType'],
        'group_type': opts['groupType'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'search_term': opts['searchTerm'],
        'search_key': opts['searchKey'],
        'match_method': opts['matchMethod'],
        'sort_key': opts['sortKey'],
        'sort_ascending': opts['sortAscending'],
        'sort_method': opts['sortMethod'],
        'dbids': opts['dbids'],
        'in_use': opts['inUse'],
      };
      var collectionQueryParams = {
        'dn_groups': {
          value: opts['dnGroups'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetObjectsSuccessResponse;

      return this.apiClient.callApi(
        '/objects/{object_type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get DNs or agent groups.
     * Get DNs (directory numbers) or agent groups from Configuration Server with the specified filters.
     * @param {String} objectType The type of object. Possible values are dns, skills, dn-groups or agent-groups.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dnType If the object_type is &#39;dns&#39;, then you need to specify the DN type (for example, CFGRoutingPoint). For possible values, see [CfgDNType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDNType) in the Platform SDK documentation. 
     * @param {Array.<String>} opts.dnGroups If the object_type is &#39;dns&#39;, may contain a list of DN group names to filter DNs.
     * @param {module:model/String} opts.groupType If the object_type is &#39;agent-groups&#39;, then you need to specify the agent group type.
     * @param {Number} opts.limit The number of objects the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned objects.
     * @param {String} opts.searchTerm The term that you want to search for in the object keys. The Provisioning API searches for the this term in the value of the key you specify in &#39;search_key&#39;. 
     * @param {String} opts.searchKey The key you want the Provisioning API to use when searching for the term you specified in &#39;search_term&#39;. You can find valid key names in the Platform SDK documentation for [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN) and [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup). 
     * @param {String} opts.matchMethod The method the Provisioning API should use to match the &#39;search_term&#39;. Possible values are includes, startsWith, endsWith, and isEqual.  (default to includes)
     * @param {String} opts.sortKey A key in [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN), [CfgSkill](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgSkill) or [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup) to sort the search results. 
     * @param {Boolean} opts.sortAscending Specifies whether to sort the search results in ascending or descending order.  (default to true)
     * @param {String} opts.sortMethod Specifies the sort method. Possible values are caseSensitive, caseInsensitive or numeric.  (default to caseSensitive)
     * @param {String} opts.dbids Comma-separated list of DNs to be fetched. 
     * @param {Boolean} opts.inUse Specifies whether to return only skills actually assigned to agents.  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetObjectsSuccessResponse}
     */
    this.getObject = function(objectType, opts) {
      return this.getObjectWithHttpInfo(objectType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));