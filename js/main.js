
new WOW().init();

// Меняет фон страницы
const chk = document.getElementById('check1');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});



// Прокрутка "Последние проекты"
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.projects-pagination',
      bulletClass: 'projects-bullet',
      bulletActiveClass: 'projects-bullet-active',
      clickable: true,
    },
    autoplay: {
      delay: 7000,
    }
});

// Прокрутка "Еще больше"
var mySwiper = new Swiper('.swiper-container-more', {
  pagination: {
    clickable: true,
  }
});


// Прокрутка страницы по якорям
$(document).ready(function () {

	$('a[href^="#"]').click(function () {
		//Сохраняем значение атрибута href в переменной:
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top //можно вычесть высоту меню
		}, 1100);
		return false;
	});

});
