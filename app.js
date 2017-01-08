var	http = require('http'),
	express = require('express'),
	app = require('express')(),
    path = require('path');

var routes = require('./routers/router');


// setting listening port
// var server = app.listen(8090);
app.set('port', process.env.PORT || 9090);

// 设置静态资源的目录，可同时设置多个目录，访问文件的时候会按照顺序进行查找
app.use(express.static('public'));
// app.use(express.static('files'));


// setting template path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', routes);

// router list
app.get('/list', function(req, res){
  res.send({
    'code': '0',
    'msg': '成功',
    'data': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
  })
})


// createServer
http.createServer(app).listen(app.get('port'), function(){  
  console.log('listening: ' + app.get('port'));  
});
console.log('server running');


// var server = app.listen(8090, function () {

//     var host = server.address().address
//     var port = server.address().port

//     console.log("running", host, port)
// })