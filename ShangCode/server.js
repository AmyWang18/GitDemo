//1
const { response, request } = require('express');
const express  = require('express');
//const { request } = require('node:http');
//2
const app = express();
//3
 //all kinds of request
 
app.all('/server', (request, response) => {
	//设置相应Header， 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	//设置相应体
	response.send("Hello, Ajax POST");
});

// POST
app.all('/json-server', (request, response) => {
	//设置相应Header， 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	//响应数据
	const data = {
		name: 'Jamses'
	};
	//对Json data进行一个转换 send（）只能接受string and buffer
	let str = JSON.stringify(data);
	
	//设置响应体
	response.send("Hello, Ajax JSON-2");
	//response.send(data);
});

//For IE caching
app.all('/ie', (request, response) => {
	//设置相应Header， 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	//设置相应体
	response.send("Hello, IE-2");
});

//For Timeout:set delay response
app.all('/delay', (request, response) => {
	//设置相应Header， 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	//set timeout
	setTimeout(()=>{
		//设置相应体
		response.send("Delay Response...");
	}, 3000);
});

//Jquery Ajax request
app.all('/jquery-server', (request, response) => {
	//设置相应Header， 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	const data = {name: 'Amy'};
	//设置相应体
	//response.send("Hello, Ajax jQuery");
	response.send(JSON.stringify(data));
});

//axios server
//Jquery Ajax request
app.all('/axios-server', (request, response) => {
	//设置相应Header， 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	const data = {name: 'Amy'};
	//设置相应体
	//response.send("Hello, Ajax jQuery");
	response.send(JSON.stringify(data));
});

//
//Fetch()
app.all('/fetch-server', (request, response) => {
	//设置相应Header， 设置允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	const data = {name: 'Amy'};
	//设置相应体
	//response.send("Hello, Ajax jQuery");
	response.send(JSON.stringify(data));
});

//JSONP

app.all('/jsonp-server',(request, response) =>{
	response.setHeader('Access-Control-Allow-Origin', '*');
	//response.setHeader('Access-Control-Allow-Headers', '*');
	const data = {
		name: "Amy_Shang"
	};
	//transfer data to string
	let str = JSON.stringify(data);
	//return result
	response.end(`handle(${str})`);

	//response.send(console.log('hello, jsonp'));
});

//check the username

app.all('/check-username',(request, response) =>{
	//response.setHeader('Access-Control-Allow-Origin', '*');
	//response.setHeader('Access-Control-Allow-Headers', '*');
	const data = {
		exist: 1,
		msg: "this username already exists."
	};
	//transfer data to string
	let str = JSON.stringify(data);
	//return result
	response.end(`handle(${str})`);

	//response.send(console.log('hello, jsonp'));
});

//jQuery Jsonp
app.all('/jquery-jsonp-server',(request, response) =>{
	response.setHeader('Access-Control-Allow-Origin', '*');
	//response.setHeader('Access-Control-Allow-Headers', '*');
	const data = {
		name: 'Hua',
		city: ['CA', 'NY', 'WA']
	};
	//transfer data to string
	let str = JSON.stringify(data);
	//receive callback function's parameter
	let cb = request.query.callback;

	//return result
	response.end(`${cb}(${str})`);

	//response.send(console.log('hello, jsonp'));
});

//CORS
app.all('/cors-server', (request, response)=>{
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	response.setHeader('Access-Control-Allow-Method', '*');

	response.send('hello, CORS');
});
//4
app.listen(8000, () =>{
	console.log('Service is on, port 8000 is listened....');
});




