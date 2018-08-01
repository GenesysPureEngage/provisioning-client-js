
const provisioning = require('./code-gen/provisioning-api');


class ImportApi {
	
	constructor(client, log) {
		this._importApi = new provisioning.ImportApi(client);
		this._log = log;
	}
	
	async importFile(opts) {
		this._log(`Importing File`);
		return this._importApi.importFile(opts);
	}
	
	async getStatus(adminName, tenantName) {
		this._log(`Getting Import Status [adminName: ${adminName}]`);
		return (await this._importApi.getImportStatus(adminName, tenantName)).data;
	}
	
	async terminate() {
		this._log(`Terminating Import`);
		return await this._importApi.terminateImport();
	}
	
	async validateFile() {
		this._log(`Validating Import File`);
		return await this._importApi.validateImportFile();
	}
	
	
	
}

module.exports = ImportApi;