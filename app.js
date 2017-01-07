var	express = require('express'),
	app = require('express')();

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


// setting listening port
var server = app.listen(8090);

console.log('server running');
// var server = app.listen(8090, function () {

//     var host = server.address().address
//     var port = server.address().port

//     console.log("running", host, port)
// })