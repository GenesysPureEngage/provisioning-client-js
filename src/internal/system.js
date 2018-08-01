
const provisioning = require('./code-gen/provisioning-api');


class SystemApi {
	
	constructor(client, log) {
		this._systemApi = new provisioning.SystemApi(client);
		this._log = log;
	}
	
	async executeServiceMethod(serviceName, body) {
		this._log(`Executing Method: ${body.method}`);
		return await this._systemApi.executeServiceMethod(serviceName, body);
	}
	
}

module.exports = SystemApi;