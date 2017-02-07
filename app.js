var http = require('http'),
	fs = require('fs'),
	url = require('url');

// url为list的时候，返回index页面
var list = '/views/list.html';
var error = '/views/error.html';

var getFiles = function(res, path){

	var type = path.slice(path.lastIndexOf('.') + 1);
	console.log(type);

	// 从文件系统中读取请求的文件内容
	fs.readFile(path.substr(1), function (err, data){
		if(err){
			// console.log(err);
			res.writeHead(404, {'Content-Type': 'text/plain'});
		}else{

			// 打开不同的文件
			switch (type)
			{
				case 'html':
					res.writeHead(200, {'Content-Type': 'text/html'});
				    break;
				case 'jpg':
					res.writeHead(200, {'Content-Type': 'image/jpeg'});
				    break;
				case 'png':
					res.writeHead(200, {'Content-Type': 'image/png'});
				    break;
				case 'css':
					res.writeHead(200, {'Content-Type': 'text/css'});
				    break;
			    case 'js':
					res.writeHead(200, {'Content-Type': 'text/javascript'});
				    break;
				default:
					res.writeHead(200, {'Content-Type': 'text/html'});
			}
			
			res.write(data);
		}
			
		// 发送响应数据
		res.end();
	})
}

// 创建服务
http.createServer(function (req, res){

	var reqUrl = req.url;

	// 有后缀名
	if(reqUrl.indexOf('.') > -1){
		getFiles(res, reqUrl);
	}else{

		console.log(reqUrl);

		if(reqUrl == '/list'){
			getFiles(res, list);

		}else if(reqUrl == '/error'){
			getFiles(res, error);
		}
	}

}).listen(8090);

console.log('server running 8090');