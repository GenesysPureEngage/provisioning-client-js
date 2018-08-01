
const provisioning = require("./code-gen/provisioning-api");

class ObjectsApi {
	
	constructor(client, log) {
		this._objectsApi = new provisioning.ObjectsApi(client);
		this._log = log;
	}
	
	async getDns(opts) {
		this._log(`Getting Dns`);
		
		return (await this._objectsApi.getObject("dns", opts)).data;
	}
	
	async getAgentGroups(opts) {
		this._log(`Getting Agent Groups`);
		
		return (await this._objectsApi.getObject("agent-groups", opts)).data;
	}
	
	async getDnGroups(opts) {
		this._log(`Getting Dn Groups`);
		
		return (await this._objectsApi.getObject("dn-groups", opts)).data;
	}
	
	async getSkills(opts) {
		this._log(`Getting Skills`);
		
		return (await this._objectsApi.getObject("skills", opts)).data;
	}
	
}

module.exports = ObjectsApi;