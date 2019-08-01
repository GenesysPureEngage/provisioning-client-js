const provisioning = require("./code-gen/provisioning-api");

class ObjectsApi {

    constructor(client, log) {
        this._objectsApi = new provisioning.ObjectsApi(client);
        this._log = log;
    }

    /**
     * Get DNs (directory numbers) from Configuration Server with the specified filters.
     * @param {Object} opts Optional parameters.
     * @param {String} opts.dnType The type of DN - for example, CFGRoutingPoint. For possible values, see [CfgDNType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDNType) in the Platform SDK documentation.
     * @param {Array.<String>} opts.dnGroups A list of DN group names to filter DNs.
     * @param {Number} opts.limit The number of objects the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned objects.
     * @param {String} opts.searchTerm The term that you want to search for in the object keys. The Provisioning API searches for the this term in the value of the key you specify in **searchKey**.
     * @param {String} opts.searchKey The key you want the Provisioning API to use when searching for the term you specified in **searchTerm**. You can find valid key names in the Platform SDK documentation for [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN) and [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup).
     * @param {String} opts.matchMethod The method the Provisioning API should use to match the **searchTerm**. Possible values are `includes`, `startsWith`, `endsWith`, and `isEqual`. The default is `includes`.
     * @param {String} opts.sortKey A key in [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN), [CfgSkill](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgSkill) or [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup) to sort the search results.
     * @param {Boolean} opts.sortAscending Specifies whether to sort the search results in ascending or descending order. The default is `true`.
     * @param {String} opts.sortMethod Specifies the sort method. Possible values are `caseSensitive`, `caseInsensitive` or `numeric`. The default is `caseSensitive`.
     * @param {String} opts.dbids Comma-separated list of DNs to be fetched.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing the list of DNs and the total count.
     */
    async getDns(opts) {
        this._log(`Getting Dns`);

        return (await this._objectsApi.getObject("dns", opts)).data;
    }

    /**
     * Get agent groups from Configuration Server with the specified filters.
     * @param {Object} opts Optional parameters.
     * @param {String} opts.groupType The agent group type.
     * @param {Number} opts.limit The number of objects the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned objects.
     * @param {String} opts.searchTerm The term that you want to search for in the object keys. The Provisioning API searches for the this term in the value of the key you specify in **searchKey**.
     * @param {String} opts.searchKey The key you want the Provisioning API to use when searching for the term you specified in **searchTerm**. You can find valid key names in the Platform SDK documentation for [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN) and [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup).
     * @param {String} opts.matchMethod The method the Provisioning API should use to match the **searchTerm**. Possible values are `includes`, `startsWith`, `endsWith`, and `isEqual`. The default is `includes`.
     * @param {String} opts.sortKey A key in [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN), [CfgSkill](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgSkill) or [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup) to sort the search results.
     * @param {Boolean} opts.sortAscending Specifies whether to sort the search results in ascending or descending order. The default is `true`.
     * @param {String} opts.sortMethod Specifies the sort method. Possible values are `caseSensitive`, `caseInsensitive` or `numeric`. The default is `caseSensitive`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing the list of agent groups and the total count.
     */
    async getAgentGroups(opts) {
        this._log(`Getting Agent Groups`);

        return (await this._objectsApi.getObject("agent-groups", opts)).data;
    }

    /**
     * Get DN groups from Configuration Server with the specified filters.
     * @param {Object} opts Optional parameters.
     * @param {Number} opts.limit The number of objects the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned objects.
     * @param {String} opts.searchTerm The term that you want to search for in the object keys. The Provisioning API searches for the this term in the value of the key you specify in **searchKey**.
     * @param {String} opts.searchKey The key you want the Provisioning API to use when searching for the term you specified in **searchTerm**. You can find valid key names in the Platform SDK documentation for [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN) and [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup).
     * @param {String} opts.matchMethod The method the Provisioning API should use to match the **searchTerm**. Possible values are `includes`, `startsWith`, `endsWith`, and `isEqual`. The default is `includes`.
     * @param {String} opts.sortKey A key in [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN), [CfgSkill](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgSkill) or [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup) to sort the search results.
     * @param {Boolean} opts.sortAscending Specifies whether to sort the search results in ascending or descending order. The default is `true`.
     * @param {String} opts.sortMethod Specifies the sort method. Possible values are `caseSensitive`, `caseInsensitive` or `numeric`. The default is `caseSensitive`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing the list of DN groups and the total count.
     */
    async getDnGroups(opts) {
        this._log(`Getting Dn Groups`);

        return (await this._objectsApi.getObject("dn-groups", opts)).data;
    }

    /**
     * Get skills from Configuration Server with the specified filters.
     * @param {Object} opts Optional parameters.
     * @param {Number} opts.limit The number of objects the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned objects.
     * @param {String} opts.searchTerm The term that you want to search for in the object keys. The Provisioning API searches for the this term in the value of the key you specify in **searchKey**.
     * @param {String} opts.searchKey The key you want the Provisioning API to use when searching for the term you specified in **searchTerm**. You can find valid key names in the Platform SDK documentation for [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN) and [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup).
     * @param {String} opts.matchMethod The method the Provisioning API should use to match the **searchTerm**. Possible values are `includes`, `startsWith`, `endsWith`, and `isEqual`. The default is `includes`.
     * @param {String} opts.sortKey A key in [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN), [CfgSkill](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgSkill) or [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup) to sort the search results.
     * @param {Boolean} opts.sortAscending Specifies whether to sort the search results in ascending or descending order. The default is `true`.
     * @param {String} opts.sortMethod Specifies the sort method. Possible values are `caseSensitive`, `caseInsensitive` or `numeric`. The default is `caseSensitive`.
     * @param {Boolean} opts.inUse Specifies whether to return only skills actually assigned to agents. The default is `false`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing the list of Skills and the total count.
     */
    async getSkills(opts) {
        this._log(`Getting Skills`);

        return (await this._objectsApi.getObject("skills", opts)).data;
    }

}

module.exports = ObjectsApi;