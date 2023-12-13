// Create web server
// Run: node comments.js
// View at: http://localhost:8080

var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    // Parse the request