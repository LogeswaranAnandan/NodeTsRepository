var http = require('http');
var url = require('url');

function onRequest(request, response) {
    console.log('request for : ' + request.url);
    var page = url.parse(request.url).pathname;
    console.log('page = ' + page);
    response.writeHead(200, { 'content-type': 'text/html' });
    if (page == '/') {
        response.write('You\'re at the reception desk. How can I help you?');
    }
    else if (page == '/basement') {
        response.write('You\'re in the wine cellar. These bottles are mine!');
    }
    else if (page == '/floor/1/bedroom') {
        response.write('Hey, this is a private area!');
    } else {
        response.write('inside default stmt');
    }
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log('server is started');