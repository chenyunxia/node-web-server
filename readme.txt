root
 |-app.js
 |-public
 	|-css
 	|-js
 	|-images
 	|-index.html
 	|-rs-config.js


基于express


1.npm install express --save

2.app.js
	1引入express
	2实例化express = app
	3设置静态资源目录express.static()，可同时设置多个，访问静态资源的时候会按顺序查找
	4write router model
	5setting listening Port
3.node app.js
