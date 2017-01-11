define(function(require, exports, module) {
    "use strict"

    var $ = require('jquery');
    var Tmpl = require('template');

    var listTmpl = new Tmpl(require('text!view/list.tmpl'));

    var list = ['a', 'b', 'c', 'd', 'e', 'f'];

    var html = listTmpl.render({
    	list: list
    })

    $('.list').html(html);
    
})