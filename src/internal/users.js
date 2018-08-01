
const provisioning = require("./code-gen/provisioning-api");

class UsersApi {
	
	constructor(client, log) {
		this._usersApi = new provisioning.UsersApi(client);
		this._log = log;
	}
	
	async addUser(user) {
		this._log(`Adding user: '${user.userName}'`);
		return await this._usersApi.addUser(user);
	}
	
	async updateUser(dbid, user) {
		this._log(`Updating user: '${user.userName}' [dbid: ${dbid}]`);
		return await this._usersApi.updateUser(dbid, user);
	}
	
	async deleteUser(dbid, keepPlaces) {
		this._log(`Deleting user, dbid: ${dbid})`);
		return await this._usersApi.deleteUser(dbid, {keepPlaces: keepPlaces});
	}
	
	async getCurrentUser() {
		this._log(`Getting current user`);
		return (await this._usersApi.getCurrentUser()).data.user;
	}
	
	async getUser(dbid) {
		this._log(`Getting user, dbid: ${dbid})`);
		return (await this._usersApi.getUser(dbid)).data.user;
	}
	
	async getUsers(opts) {
		this._log(`Getting users`);
		return (await this._usersApi.getUsers(opts)).data.users;
	}
	
}

module.exports = UsersApi;