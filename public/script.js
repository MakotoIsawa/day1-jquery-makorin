$(function(){
    $(".hoge1").css("color", "blue")
});

//サンプル2A
$(function(){
	$(".hoge2A").click(function(){
		$(this).css("background-color","green")
	});
});


//サンプル2B
$(function(){
	$(".hoge2B").toggle(function(){
			$(this).css("background-color","green")
		},function(){
			$(this).css("background-color","yellow")
		},function(){
			$(this).css("background-color","red")
		},function(){
			$(this).css("background-color","orange")
		});
	});	

$(function(){
	$(".hoge2C").click(function(){
		$(this).hide()
	});
});


//サンプル2D
$(function(){
	$(".hoge2D").click(function(){
		$(this).fadeOut(2000)
	});
});
