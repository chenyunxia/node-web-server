define(function(require, exports, module){
	var Tmpl = require('template');
	var $ = require('jquery');

	var tmpl = new Tmpl(require('text!js/view/list.tmpl'));

	// var tmpl = new Tmpl('views/index.txt');
	var data = 'tmpl tmpl';

	var html = tmpl.render({
        data: data
    })

    $('.list').html(html);

	// document.querySelector('.list').innerHTML = html;
})