import React from 'react'
import TimeCountDown from '../countdown';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from '../../images/agregadas/image_banner.png'
import hero2 from '../../images/agregadas/image_banner2.jpg'
import hero3 from '../../images/agregadas/image_banner3.jpg'
import { Link } from "react-router-dom";

const Hero3 = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return (
        <section className="wpo-hero-slider wpo-hero-style-3">
            <div className="wedding-announcement">
                <div className="couple-text">
                    <h2>Juan & Beatriz</h2>
                    <p>Nos vamos a casar en Octubre 19, 2023</p>
                    <div className="wpo-wedding-date">
                        <div className="clock-grids">
                            <TimeCountDown/>
                        </div>

                        <section className={`wpo-team-section confirm-button-area`}>
                            <div className="container">
                                <div className="wpo-team-wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-12 text-center">
                                            <div className="confirm-area">
                                            <Link onClick={ClickHandler} className="theme-btn confirm-btn no-padding" to="/rsvp">Confirmar asistencia</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Swiper
                grabCursor={true}
                modules={[Navigation, Pagination, A11y, Autoplay, EffectCreative]}
                spaceBetween={0}
                slidesPerView={1}
                effect="creative"
                creativeEffect={{
                    prev: {
                        shadow: true,
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                autoplay={{ delay: 3000 }}
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