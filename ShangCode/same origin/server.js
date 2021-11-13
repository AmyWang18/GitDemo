const { response } = require('express');
const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    //response a website
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
    response.send("User's Data");
});

//JSONP

app.all('/jsonp-server',(request, response) =>{
	//response.setHeader('Access-Control-Allow-Origin', '*');
	//response.setHeader('Access-Control-Allow-Headers', '*');

	response.send(console.log('hello, jsonp'));
});

app.listen(9000, ()=>{
    console.log('Service is running.....port:9000');
});