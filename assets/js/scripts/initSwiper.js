import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initSwiper() {
	new Swiper('.level__slider', {
		modules: [Navigation],
		loop: true,
		slidesPerView: 1.2,
		centeredSlides: true,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			993: {
				slidesPerView: 2.2,
			},
			769: {
				slidesPerView: 1.5,
			},
		},
	});

	new Swiper('.events__slider', {
		modules: [Navigation],
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			993: {
				slidesPerView: 3,
			},
			769: {
				slidesPerView: 2,
			},
		},
	});
}
