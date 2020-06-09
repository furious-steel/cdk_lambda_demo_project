const https = require('https');
const apiUrl = process.env.TC_API;

const api_client = {
  getAppVersion: function (message) {
    return new Promise(function (resolve, reject) {
      console.log("Get App version for the message : " + message);
      https.get(apiUrl + '/tc/api/2.0/util/version', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          const response = JSON.parse(data);
          console.log(response);
          return resolve(response);
        });

      }).on("error", (err) => {
        console.log("Error: " + err.message);
        return reject(err);
      });
    });
  }
};

module.exports = api_client;

