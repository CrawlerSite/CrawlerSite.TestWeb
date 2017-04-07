
var express = require("express");
var app = express();
var path = require('path');
var http = require('http').Server(app);
var fs = require('fs');
var bodyParser = require('body-parser');
var cors = require('cors');
var open = require('open');

var port = 3502;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies
app.use(cors());


app.engine('html', require('ejs').renderFile);
app.set("view options", { layout: false });

app.use(express.static(path.join(__dirname, ''))); //  "public" off of current is root

app.get('/', function (req, res) {
    res.render("index.html");
});

var normalizePort = function (val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

var normalizedPort = normalizePort(process.env.PORT || port);

app.listen(normalizedPort);

open('http://localhost:' + normalizedPort);