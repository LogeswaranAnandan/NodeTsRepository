"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tedious_1 = require("tedious");
// Create connection to database
var config = {
    userName: 'sa',
    password: 'asdf@123',
    server: '192.168.99.100',
    options: {
        database: 'SampleDB'
    }
};
var connection = new tedious_1.Connection(config);
// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected');
    }
});
//# sourceMappingURL=mssql.js.map