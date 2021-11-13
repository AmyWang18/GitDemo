//1
const express  = require('express');
//2
const app = express();
//3
app.get('/', (request, response) => {
	response.send("Hello, express");
});

//4
app.listen(8000, () =>{
	console.log('Service is on, port 8000 is listened....');
});
