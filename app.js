var express = require('express');
var app = express();
var fs = require('fs');

var key = fs.readFileSync('encryption/webapp.key');
var cert = fs.readFileSync( 'encryption/webapp.crt' );

var options = {
  key: key,
  cert: cert
};

var https = require('https');
https.createServer(options, app).listen(443);

