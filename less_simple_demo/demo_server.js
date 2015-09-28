var express = require("express");
var app = express();

app.use(express.static(__dirname));

var server = app.listen(3008, "127.0.0.1");
var io = require('socket.io').listen(server);

// listen for room connections. only 2 people can join
io.on('connection', function(socket){
	  socket.on('join', function(room){
		var clients = io.sockets.adapter.rooms[room];
		console.log(io.sockets.adapter.rooms);
		console.log(room);
		var numClients = (typeof clients !== 'undefined') ? Object.keys(clients).length : 0;

		if (typeof clients === "undefined" || numClients == 0) {
			console.log("joining room: ", room);
			socket.join(room);
		} else if (numClients == 1) {
			console.log("someone's in here too: ", room);
			socket.join(room);
			socket.emit('ready', room);
			socket.broadcast.emit('ready', room);
		} else {
			console.log("this rooms full dawg: ", room);
			socket.emit('full', room);
		}
	});

	  socket.on('candidate', function(candidate){
	    	socket.broadcast.emit('candidate', candidate);
	  });

	  socket.on('offer', function(offer){
	    socket.broadcast.emit('offer', offer);
	  });

	  socket.on('answer', function(answer){
    	socket.broadcast.emit('answer', answer);
	  });
});
