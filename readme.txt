root
 |-app.js
 |-view
 	|-index.ejs
 	|-list.jade
 |-public
 	|-css
 	|-js
 	|-images


基于express


1.npm install express --save
2.npm install ejs --save
3.app.js
	1引入express
	2实例化express = app
	3设置静态资源目录express.static()，可同时设置多个，访问静态资源的时候会按顺序查找
	4write router model
	5setting listening Port
4.node app.js
