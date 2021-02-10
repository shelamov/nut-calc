




//Фиксация меню при прокрутки
$(window).on("scroll", function () {
	// Если высота больше 200px
	// Добавляем классу header класс fixed
	if ($(window).scrollTop() > 50) $('header').addClass('header-fixed');
	// Иначе удаляем класс fixed
	else $('header').removeClass('header-fixed');

});

// $(document).ready(function() {
//   var windowHeight = $(window).height();

//   $(document).on('scroll', function() {
//     $('#about-us').each(function() {
//       var self = $(this),
//       height = self.offset().top + self.height();
//       if ($(document).scrollTop() + windowHeight >= height) {
//         self.addClass('visible')
//       }
//     });
//   });
// });

$(document).ready(function () {
	//nav menu
	$('.menu-burger__header').click(function () {
		$('.menu-burger__header').toggleClass('open-menu');
		$('.header__nav').toggleClass('open-menu');
		if ($('.menu-burger__header').hasClass('open-menu') && $('.header__nav').hasClass('open-menu')) {
			$('.logo-img').addClass('logo-img-open-menu')

		}
		else {
			$('.logo-img').removeClass('logo-img-open-menu')
		}
	});
	//Открытие мини корзины
	$('.cart-mini').click(function () {
		$('#cart-block').slideToggle(300);
		return false;
	});


	//изменение логотипа при открытии корзины
	$(".cart-mini").click(function (e) {
		e.preventDefault();
		$(".cart-mini").not(this).removeClass('active');
		$(this).toggleClass('active');

		if ($('.cart-mini').hasClass('active')) {
			document.querySelector(".cart-mini").style.background = "#262626"
			$('.logo-img').addClass('logo-img-open-menu')

		}
		else {
			let lc = localStorage.getItem("cartItems")
			if (lc == null) {
				document.querySelector(".cart-mini").style.background = "#262626";
			} else {
				document.querySelector(".cart-mini").style.background = "#d92c37";
			}

			$('.logo-img').removeClass('logo-img-open-menu')
		}
	})
	//Плавный переход по якорным ссылкамq

	if (location.pathname != "/") {

		document.querySelector('.menu').querySelectorAll("a").forEach(el => {

			el.addEventListener("click", ev => {
				document.title = ev.target.textContent
				let hash = ev.target.getAttribute('href');
				location.href = "/" + hash
			}
			)
		})
	} else {
		$(".menu").on("click", "a", function (event) {
			document.title = event.target.textContent
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 1500);
		});

	}

	var windowHeight = $(window).height();

	$(document).on('scroll', function () {
		$('#about-us').each(function () {
			var self = $(this),
				height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('visible')
			}
		});
		$('#block-img').each(function () {
			var self = $(this),
				height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('fixed')
			}
		});
		$('#production').each(function () {
			var self = $(this),
				height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('animate')
			}
		});
	});

});
//   var $block = $("#block-img") // блок, который должен зафиксироваться при скролле
// var scrollTreshold = 1500 // позиция скролла, при которой блок должен остановиться
// var fixedClass = "fixed" // класс css, который должен фиксирует блок
// $(window).scroll(function(){if($(window).scrollTop()>scrollTreshold){$block.addClass(fixedClass)}else{$block.removeClass(fixedClass)}})




$("#phone").mask("9(999) 999-9999");


function initSlick() {
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 576,
				settings: { slidesToShow: 1, }
			},

		]
	});

	$('.recom-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					dots: true,
					arrows: false,
				}
			},

		]
	});

}

setTimeout(initSlick, 400);



//клонирование блока на странице продукта
//$('.description').clone(true).unwrap().appendTo( $('.descrClone').empty() );
//



//Маска номера телефона




//if ($("div").is("#cart")
document.querySelector('#cart') && document.querySelector('.cart').classList.add('cart-none')










//увеличение изображение
$(function () {
	$('.minimized').click(function (event) {
		var i_path = $(this).attr('src');
		$('body').append('<div id="overlay"></div><div id="magnify"><div class="block"><div class="magnify-img"><img src="' + i_path + '"><a id="close-popup" class="del-product" href="#"><span>+</span></a></div></div></div>');
		$('#magnify').css({
			//left: ($(document).width() - $('#magnify').outerWidth())/2,
			// top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
			//top: ($(window).height() - $('#magnify').outerHeight())/2
		});
		$('#overlay, #magnify').fadeIn('fast');
	});

	$('body').on('click', '#close-popup, #overlay', function (event) {
		event.preventDefault();
		$('#overlay, #magnify').fadeOut('fast', function () {
			$('#close-popup, #magnify, #overlay').remove();
		});
	});
});

