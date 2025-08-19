import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initSwiper(selector = '.swiper') {
	return new Swiper(selector, {
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
}
