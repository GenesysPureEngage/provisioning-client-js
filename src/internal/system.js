
const provisioning = require('./code-gen/provisioning-api');


class SystemApi {
	
	constructor(client, log) {
		this._systemApi = new provisioning.SystemApi(client);
		this._log = log;
	}
	
	/**
     * execute service method on Node to avoid excessive requests from client
     * This operation will execute service method on Node
     * @param {String} serviceName Service name, just for human-readability of URL
     * @param {Object} body Body data.
     * @param {String} body.service Service name.
     * @param {String} body.method Method name.
     * @param {String} body.args Optional method arguments array.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}.
     */
	async executeServiceMethod(serviceName, body) {
		this._log(`Executing Method: ${body.method}`);
		return await this._systemApi.executeServiceMethod(serviceName, body);
	}
	
}

module.exports = SystemApi;