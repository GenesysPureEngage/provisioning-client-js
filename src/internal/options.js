
const provisioning = require("./code-gen/provisioning-api");

class OptionsApi {
	
	constructor(client, log) {
		this._optionsApi = new provisioning.OptionsApi(client);
		this._log = log;
	}
	
	async get(opts) {
		this._log(`Getting Options`);
		return (await this._optionsApi.getOptions(opts)).data;
	}
	
	async modify(application, options) {
		this._log(`Modifying Options`);
		return (await this._optionsApi.modifyOptions({data: {application: application, options: options}})).data;
	}
	
	async update(application, newOptions, changedOptions,  deletedOptions) {
		this._log(`Updating Options`);
		return (await this._optionsApi.modifyOptions({data: {application: application, newOptions: newOptions, changedOptions: changedOptions, deletedOptions: deletedOptions}})).data;
	}
	
}

module.exports = OptionsApi;