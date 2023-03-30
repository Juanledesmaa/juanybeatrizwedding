import React from 'react'
import TimeCountDown from '../countdown';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero1 from '../../images/agregadas/banner_1.png'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'

const Hero3 = (props) => {
    return (
        <section className="wpo-hero-slider wpo-hero-style-3">
            <div className="wedding-announcement">
                <div className="couple-text">
                    <h2>Juan & Beatriz</h2>
                    <p>Nos vamos a casar en Octurbre 19, 2023</p>
                    <div className="wpo-wedding-date">
                        <div className="clock-grids">
                            <TimeCountDown/>
                        </div>

                        <button className="theme-btn confirm-btn">Confirmar asistencia</button>
                    </div>
                </div>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>

        </section>
    )
}

export default Hero3;