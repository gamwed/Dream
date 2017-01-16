$('button').click(function(){
	if ($(this).hasClass('wihte-butt')) {
		$(this).addClass('active')
		$('body').css('background','#000')
		$('.css-b').attr('href','css/style1.css')
		$('.pizza-ufo').attr('src','imeg/pizza-ufo-b.png')
		$('.ass').attr('src','imeg/ass-b.png')
		$('#smock').attr('src','imeg/smok-ufo-b.jpg')
		$('#minion').attr('src','imeg/minion-b.png')
		$('#hat').attr('src','imeg/hat-b.jpg')
		$('#finger').attr('src','imeg/fingers-b.png')
		$('#skuns').attr('src','imeg/skuns-b.png')
	}

	else {
		$(this).addClass('buttoni').removeClass('active')
		$('body').css('background','#fff')
		$('.css-b').attr('href','css/style.css')
		$('.pizza-ufo').attr('src','imeg/pizza-ufo.png')
		$('.ass').attr('src','imeg/ass.png')	
		$('#smock').attr('src','imeg/smok-ufo.jpg')
		$('#minion').attr('src','imeg/minion.png')
		$('#hat').attr('src','imeg/hat.jpg')
		$('#finger').attr('src','imeg/fingers.png')
		$('#skuns').attr('src','imeg/skuns.png')
	}
});
	

$('#js-button').on('click', function(){
    if ($(this).hasClass('black-butt')) {
        $(this).removeClass('black-butt').addClass('wihte-butt').html('OFF');
        return
    }
    $(this).removeClass('wihte-butt').addClass('black-butt').html('ON');
}); 

