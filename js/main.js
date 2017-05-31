$(function(){

	$(".carousel").owlCarousel({
    	singleItem: true,
    	navigation: true,
    	navigationText: false
    });

    var mixer = mixitup('.mix_box');

    //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

		$("#menu, #top_btn, #links").on("click","a", function (event) {
	 //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

		$('.btn_menu').click(function(){
		$('.menu_1 ul, .menu_2 ul').slideToggle();
	});

});