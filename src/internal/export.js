
const provisioning = require('./code-gen/provisioning-api');
const request = require('request');
const Promise = require('promise');

class ExportApi {
	
	constructor(client, log, apiKey, sessionId) {
		this._exportApi = new provisioning.ExportApi(client);
		this._log = log;
		this._apiKey = apiKey;
		this._sessionId = sessionId;
	}
	
	async exportFile(exportFileData) {
		this._log(`Exporting File: '${exportFileData.name}'`);
		return (await this._exportApi.exportFile(exportFileData)).data.id;
	}
	
	async getStatus(id) {
		this._log(`Getting Export Status [ID: ${id}]`);
		return (await this._exportApi.getExportStatus(id)).data;
	}
	
	getDownloadUrl(id) {
		return this._exportApi.apiClient.basePath + `/export-users/?id=${id}&download=true`;
	}
	
	async downloadExport(id) {
		return new Promise((resolve, reject) => {
			request({
				headers: {
					"x-api-key": this._apiKey,
					"Cookie": this._sessionId
				},
				uri: this.getDownloadUrl(id),
				method: 'GET'
			}, (err, res, body) => {
				if(err) {
					reject(err);
				} else {
					resolve(body);
				}
				
			});
		});
	}
	
}

module.exports = ExportApi;