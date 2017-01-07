define(function(require, exports, module) {
    "use strict"

    var $ = require('jquery');
    var Tmpl = require('template');

    var listTmpl = new Tmpl(require('text!js/view/list.tmpl'));

    var getList = function (){

	    $.ajax({
	    	url: '/list', 
	    	type: 'GET',
	    	success: function(data){
	    		console.log(data);

	    		if(data.code == 0){

		    		var list = data.data;

		    		var html = listTmpl.render({
		    			list: list
		    		})

		    		$('.list').html(html);
	    		}

	    	},
	    	error: function(){
	    		console.log('error');
	    	}
	    })
    };

    getList();
    
})