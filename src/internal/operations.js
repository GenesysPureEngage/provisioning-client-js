
const provisioning = require('./code-gen/provisioning-api');
const uuid = require('uuid');


class OperationsApi {
	
	constructor(client, log) {
		this._operationsApi = new provisioning.OperationsApi(client);
		this._log = log;
		this._asyncCallbacks = {};
	}
	
	_onAsyncResponse(id, response) {
		if(this._asyncCallbacks[id])
			this._asyncCallbacks[id](response);
	}
	
	async getUsers(opts, callback) {
		const aioId = uuid();
		this._asyncCallbacks[aioId] = callback;
		this._log(`Getting Users Async [aioId: ${aioId}]`);
		return await this._operationsApi.getUsersAsync(aioId, opts);
	}
	
	async getUsedSkills(callback) {
		const aioId = uuid();
		this._asyncCallbacks[aioId] = callback;
		this._log(`Getting used Skills Async [aioId: ${aioId}]`);
		return await this._operationsApi.getUsedSkillsAsync(aioId);
	}
	
	
}

module.exports = OperationsApi;