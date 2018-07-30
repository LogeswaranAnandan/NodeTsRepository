"use strict";
var env = require('env.json');
exports.config = function () {
    var node_env = process.env.NODE_ENV || 'development';
    console.log('inside env.js');
    console.log(env[node_env]);
    return env[node_env];
};
//# sourceMappingURL=env.js.map