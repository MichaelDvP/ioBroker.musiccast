//server to emulate the musiccast responses
const http = require('http');
const fs = require('fs');

const YSP1600_v1_responses = fs.readFileSync('./data/WX30_v1.json');

let server;

let deviceresp = [];

function getObjects(Obj, where, what) {
	const foundObjects = [];
	for (const prop in Obj) {
		if (Obj[prop][where] == what) {
			foundObjects.push(Obj[prop]);
		}
	}
	return foundObjects;
}

function setupHttpServer(callback) {
	//We need a function which handles requests and send response
	//Create a server
	server = http.createServer(handleHttpRequest);
	//Lets start our server
	server.listen(3311, function() {
		//Callback triggered when server is successfully listening. Hurray!
		console.log('Musiccast listening on: http://localhost:%s', 3311);
		callback();
	});
}

//Antworten des MusicCast Gerätes

deviceresp = JSON.parse(YSP1600_v1_responses.toString());

function handleHttpRequest(request, answer) {
	console.log('HTTP-Server: Request: ' + request.method + ' ' + request.url);
	const req = request.url.replace('/YamahaExtendedControl/v1', '');
	console.log(req);
	const respavail = getObjects(deviceresp, 'request', req);
	console.log('DEVICE ANSWER ', respavail);

	if (respavail.length !== 0) {
		answer.writeHead(200, { 'Content-Type': 'application/json' });
		answer.write(JSON.stringify(respavail[0].responses));
		answer.end();
	} else {
		answer.writeHead(200, { 'Content-Type': 'application/json' });
		answer.write(JSON.stringify({ response_code: 3 }));
		answer.end();
	}
}

setupHttpServer(function() {});
