/*Swiper*/
const swiperCertificates = new Swiper('.swiper.swiper-certificates', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.swiper-certificates .swiper-button-next',
        prevEl: '.swiper-certificates .swiper-button-prev',
    },
});

const swiperReviews = new Swiper('.swiper.swiper-reviews', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.swiper-reviews .swiper-button-next',
        prevEl: '.swiper-reviews .swiper-button-prev',
    },
});

/*Links*/
$('a[href^="#"]').on('click', function() {
    let href = $(this).attr('href')
      $('html, body').animate({
          scrollTop: $(href).offset().top - 80
      })
    return false
});

/*Popup*/

const heightBlock = window.screen.height * 0.8;
const popupMain = Array.from(document.querySelectorAll('.popup-content'))

popupMain.forEach((e) => {
    e.style.height = heightBlock + 'px'
})

const horoscopeBtn = Array.from(document.querySelectorAll('.horoscope-btn'))
const horoscopePopup = document.querySelector('.horoscope')

horoscopeBtn.forEach((e) => {
    e.addEventListener('click', () => {
        horoscopePopup.classList.add('_active')
        document.body.classList.add('_popup-active')
    })
})

const crossBtn = Array.from(document.querySelectorAll('.popup-top-cross'))
const popup = Array.from(document.querySelectorAll('.popup'))


for(let i = 0; i < crossBtn.length; i++){
    crossBtn[i].addEventListener('click', () => {
        popup[i].classList.remove('_active')
        document.body.classList.remove('_popup-active')
    })
}

$(document).ready(function() {
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/php/mail.php", //Change
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

});
