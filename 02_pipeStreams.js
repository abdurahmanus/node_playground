var request = require("request");
var zlib = require("zlib");
var fs = require("fs");

//request("http://www.pluralsight.com/").pipe(fs.createWriteStream("pluralsight.html"));
request("http://www.pluralsight.com/").pipe(zlib.createGzip()).pipe(fs.createWriteStream("./data/pluralsight.html.gz"));