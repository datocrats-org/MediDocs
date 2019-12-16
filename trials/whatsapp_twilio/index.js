var express = require('express');
var app = express();

const config = require("./config");

const accountSid = config.accountSid;
const authToken = config.authToken;
const client = require('twilio')(accountSid, authToken);

app.get('/', function (req, res) {
  //console.log('Temperature Change');
  //console.log(req.query.temperature)
  //console.log(req.query.location)

  client.messages
        .create({
          body: 'Record Created!',
          from: 'whatsapp:+10000000000',
          to: 'whatsapp:+100000000000'
        })
        .then(message => console.log(message.sid))
        .done();
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});