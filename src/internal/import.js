
const provisioning = require('./code-gen/provisioning-api');


class ImportApi {
	
	constructor(client, log) {
		this._importApi = new provisioning.ImportApi(client);
		this._log = log;
	}
	
	/**
     * Import users.
     * Import users in the specified CSV/XLS file.
     * @param {Object} opts Optional parameters.
     * @param {File} opts.csvfile The CSV/XLS file to import.
     * @param {Boolean} opts.validateBeforeImport Specifies whether the Provisioning API should validate the file before the actual import takes place. The default is `false`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}.
     */
	async importFile(opts) {
		this._log(`Importing File`);
		return this._importApi.importFile(opts);
	}
	
	/**
     * Get import status.
     * Get all active imports for the specified tenant.
     * @param {String} adminName The login name of an administrator for the tenant.
     * @param {String} tenantName The name of the tenant.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing the import status.
     */
	async getStatus(adminName, tenantName) {
		this._log(`Getting Import Status [adminName: ${adminName}]`);
		return (await this._importApi.getImportStatus(adminName, tenantName)).data;
	}
	
	/**
     * Stop the import.
     * Terminates the current user import operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}.
     */
	async terminate() {
		this._log(`Terminating Import`);
		return await this._importApi.terminateImport();
	}
	
	/**
     * Validate the import file.
     * Performs pre-validation on the specified CSV/XLS file.
     * @param {Object} opts Optional parameters.
     * @param {File} opts.csvfile The CSV/XLS file to import.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}.
     */
	async validateFile() {
		this._log(`Validating Import File`);
		return await this._importApi.validateImportFile();
	}
	
	
	
}

module.exports = ImportApi;