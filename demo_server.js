var fs = require("fs");
var host = "127.0.0.1";
var port = 3008;
var express = require("express");

var app = express();
app.use(express.static(__dirname));
app.listen(port, host);
