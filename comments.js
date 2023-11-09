//// Create web server
//var express = require('express');
//var app = express();
//app.use(express.logger());
//app.use(express.static(__dirname + '/public'));
//app.listen(8080);
//// Create socket server
//var io = require('socket.io').listen(app);
//io.sockets.on('connection', function(socket) {
//    socket.on('message', function(message) {
//        console.log('Received message:', message);
//        socket.broadcast.emit('message', message);
//    });
//});
//// Create Redis client
//var redis = require('redis');
//var redisClient = redis.createClient();
//redisClient.subscribe('message');
//redisClient.on('message', function(channel, message) {
//    console.log('Message:', message);
//    io.sockets.emit(channel, message);
//});
//// Create MongoDB client
//var mongo = require('mongodb');
//var mongoClient = mongo.MongoClient;
//mongoClient.connect('mongodb://