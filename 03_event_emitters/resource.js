var util = require("util");
var EventEmitter = require("events").EventEmitter;

var Resource = function (c) {
    var self = this;
    // next tick of the event loop
    // emulate async function
    process.nextTick(function () {
        var count = 0;
        self.emit("start");
        var t = setInterval(function () {
            self.emit("data", ++count);
            if (count === c) {
                self.emit("end", count);
                clearInterval(t);
            }
        }, 100);
    });
};

util.inherits(Resource, EventEmitter);

module.exports = Resource;