"use strict";
// var env = require('../env.json');
var env = {
    "development": {
        "PORT": "8000",
        "FOO": "dev"
    },
    "production": {
        "PORT": "8888",
        "FOO": "prod"
    }
};
exports.config = function () {
    var node_env = process.env.NODE_ENV || 'development';
    node_env = node_env.trim();
    console.log('node_env = ' + node_env);
    return env[node_env];
};
//# sourceMappingURL=common.js.map