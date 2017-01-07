root
 |-app.js
 |-view
 	|-index.tmpl
 	|-list.tmpl
 |-public
 	|-css
 	|-js
 	|-images


基于express


1.npm install express --save
2.app.js
	引入express
	实例化express = app
	设置静态资源目录express.static()
	write router model
	setting listening Port
3.node app.js
