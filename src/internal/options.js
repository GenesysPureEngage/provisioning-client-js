const provisioning = require("./code-gen/provisioning-api");

class OptionsApi {

    /**
     * Options  API. Initialized internally by {@link ProvisioningApi}. Call {@link ProvisioningApi.options} to access this API.
     * @param {Object} client ProvisioningAPI client object.
     * @param {Object} log Default logger.
     */
    constructor(client, log) {
        this._optionsApi = new provisioning.OptionsApi(client);
        this._log = log;
    }

    /**
     * Get CloudCluster/Options and merges it with person and agent groups annexes..
     * @param {Object} opts Optional parameters.
     * @param {String} opts.personDbid The DBID of a person. Options are merged with the person&#39;s annex and the annexes of the person&#39;s agent groups. Mutual with **agentGroupDbid**.
     * @param {String} opts.agentGroupDbid The DBID of an agent group. Options are merged with the agent group&#39;s annex. Mutual with **personDbid**.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise} containing the options.
     */
    async get(opts) {
        this._log(`Getting Options`);
        return (await this._optionsApi.optionsGet(opts)).data;
    }

    /**
     * Replace the existing options with the specified new values in CloudCluster/Options.
     * @param {Object} options The new options.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}.
     */
    async modify(options) {
        this._log(`Modifying Options in CloudCluster application`);
        return (await this._optionsApi.optionsPost({data: {options: options}}));
    }

    /**
     * Add, edit or delete option values in CloudCluster/Options.
     * @param {Object} newOptions The options to add in the application.
     * @param {Object} changedOptions The option values to update in the application.
     * @param {Object} deletedOptions The options to delete in the application.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}.
     */
    async update(newOptions, changedOptions, deletedOptions) {
        this._log(`Updating Options in CloudCluster application`);
        return (await this._optionsApi.optionsPut({
            data: {
                newOptions: newOptions,
                changedOptions: changedOptions,
                deletedOptions: deletedOptions
            }
        }));
    }

}

module.exports = OptionsApi;
