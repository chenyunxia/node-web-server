var	http = require('http');
var path = require('path');
// var ejs = require('ejs');
var staticPath = path.normalize('./public');
// var server = http.createServer();

// var data = {
// 	name: 'cyx'
// }

// var str = '<html><body><h1>Hello, <%= name %>!</h1></body></html>';

// server.on('request', function(req, res){
	// var url = res.url;
	// console.log(url)

	// res.end(ejs.render(str, {name: 'cyx'}));
// });

// server.listen(8888);

http.createServer(function(req, res){
	console.log('server start');
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('hello world');
	res.end();


}).listen(8888);
console.log('server running');












	// express = require('express'),
	// app = require('express')();


// setting listening port
// var server = app.listen(8090);
// app.set('port', process.env.PORT || 9090);

// 设置静态资源的目录，可同时设置多个目录，访问文件的时候会按照顺序进行查找
// app.use(express.static('public'));
// app.use(express.static('files'));


// router list
// app.get('/list', function(req, res){
//   res.send({
//     'code': '0',
//     'msg': '成功',
//     'data': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
//   })
// })


// createServer
// http.createServer(app).listen(app.get('port'), function(){  
//   console.log('listening: ' + app.get('port'));  
// });
// console.log('server running');
