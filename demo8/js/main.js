require.config({
	paths:{
		jquery: 'jquery.min'
	}
})

require(['jquery','window'],function($,w){
	$("#a").click(function(){
		new w.Window().alert({
			content: "welcome",
			handler: function(){
				 alert("you click the button");
			},
			width: 300,
			height: 300,
			y: 50,
			title: '菜单',
			hasCloseBtn: true,
			Skin: 'window_skin_a',
			handlerCloseBtn: function(){
				alert('xxx');
			}
			
		})
	})
})
