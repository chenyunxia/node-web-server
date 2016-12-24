var http = require('http'),
	fs = require('fs'),
	url = require('url');

// 创建服务
http.createServer(function (req, res){

	// 将一个字符串转为对象
	var path = url.parse(req.url).pathname;
	console.log(path);
	console.log(path.substr(1));

	// 从文件系统中读取请求的文件内容
	fs.readFile(path.substr(1), function (err, data){
		if(err){
			console.log(err);
			res.writeHead(404, {'Content-Type': 'text/plain'});
		}else{

			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
		}
			
		// 发送响应数据
		res.end();
	})

}).listen(8090);

console.log('server running');