# Provisioning Client Library

The Provisioning Client Library is a Node.js wrapper for the [Provisioning API](/api/reference/provisioning/) that makes it easier to code against the API. The library provides much of the supporting code needed to make HTTP requests and process HTTP responses.

The library is hosted on [GitHub](https://github.com/GenesysPureEngage/provisioning-client-js) and Genesys welcomes pull requests for corrections.

## Install

Genesys recommends that you install the Provisioning Client Library for Node.js with [NPM](https://npmjs.org/). Run the following command to install the library:

~~~
npm i genesys-provisioning-client-js
~~~

## Related Links

* The following Provisioning API tutorials demonstrate some ways you can use this library:
  * [Create user](/tutorials/create-user-provisioning-nodejs/)
* Learn more about the [Provisioning API](/api/reference/provisioning/).
* Learn more about the [Provisioning Client Library](/api/client-libraries/provisioning/).

## Classes

The Provisioning Client Library includes the following classes:

* [ExportApi](/api/client-libraries/provisioning/js/ExportApi/index.html)
* [ImportApi](/api/client-libraries/provisioning/js/ImportApi/index.html)
* [ObjectsApi](/api/client-libraries/provisioning/js/ObjectsApi/index.html)
* [OperationsApi](/api/client-libraries/provisioning/js/OperationsApi/index.html)
* [OptionsApi](/api/client-libraries/provisioning/js/OptionsApi/index.html)
* [SessionApi](/api/client-libraries/provisioning/js/SessionApi/index.html)
* [UsersApi](/api/client-libraries/provisioning/js/UsersApi/index.html)

These classes contains all the resources and events that are part of the Provisioning API, along with all the methods you need to access the API functionality.

## Examples

Here's an example of how you can use the Provisioning Client Library to create a new user.

~~~ javascript
const provisioning = require('genesys-provisioning-client-js');

const apiKey = "<apiKey>";
const username = "<username>";
const password = "<password>";
const apiUrl = "<apiUrl>";

const provisioningUrl = `${apiUrl}/provisioning/v3`;

//Create and setup ApiClient instance with your ApiKey and Provisioning API URL.
const provisioningClient = new provisioning.ApiClient();
provisioningClient.basePath = provisioningUrl;
provisioningClient.defaultHeaders = { 'x-api-key': apiKey };

//Creating instance of SessionApi using the ApiClient.
const sessionApi = new provisioning.SessionApi(provisioningClient);

//Logging in using our username and password
sessionApi.login({
    domain_username: username,
    password: password
}).then(resp => {
    if(resp.status.code !== 0) {
        throw new Error('Cannot log in');
    }

    return resp.data;
}).then(resp => {
    //Obtaining sessionId and setting PROVISIONING_SESSIONID cookie to the client
    const sessionId = resp.sessionId;
    provisioningClient.defaultHeaders.Cookie = `PROVISIONING_SESSIONID=${sessionId};`;

    //Creating instance of UsersApi using the ApiClient
    const usersApi = new provisioning.UsersApi(provisioningClient);

    //Creating a user using UsersApi instance
    const user = {
        userName: "<agentUsername>",
        firstName: "<agentFirstName>",
        lastName: "<agentLastName>",
        password: "<agentPassword>",
        accessGroup: [ "<agentAccessGroup>" ]
    };

    return usersApi.addUser(user);
}).then(resp => {
    if(resp.status.code !== 0) {
        throw new Error("Cannot create user");
    }

    return resp.data;
}).then(data => {
    //Ending our Provisioning API session
    sessionApi.logout();
}).catch(err => {
    console.error(err);
});
~~~

For usage examples for each method available in the library, see the documentation for the classes.