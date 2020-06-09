const api_client = require("api_client.js");

exports.handler = async (event) => {
    // TODO implement
    console.log(event);
    var message = event.Records[0].Sns.Message;
    message = JSON.parse(message);
    console.log('Message received from SNS:', message);
    if (message.id == "DEMO_APP_VERSION")
        await api_client.getAppVersion(message.source[0].data);
    else
        console.log("API call skipped !!!");
};