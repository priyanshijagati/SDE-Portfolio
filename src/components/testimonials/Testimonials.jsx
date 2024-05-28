import React from 'react';
import './Testimonials.css';

import Image4 from '../../assets/testmo.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Peeyush Gupta",
			subtitle: "Founder @ Zamghat",
			comment: "Priyanshi worked at Zamghat as a Website developer and a Graphic Designer. She made it impressive and had a real eye for design. If there was ever a time where we had to change frontend or needed  new graphics or want something innovative - Priyanshi was our goto person!",
		},
		
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials