var	http = require('http'),
	express = require('express'),
	app = require('express')();

// setting listening port
// var server = app.listen(8090);
app.set('port', process.env.PORT || 8090);

// 设置静态资源的目录
app.use(express.static('public'));


// router list
app.get('/list', function(req, res){
  res.send({
    'code': '0',
    'msg': '成功',
    'data': ['a', 'b', 'c', 'd', 'e', 'f']
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