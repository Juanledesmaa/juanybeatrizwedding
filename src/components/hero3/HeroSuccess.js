import React from 'react'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from '../../images/agregadas/image_success.png'

import { Link } from "react-router-dom";

const imageUrls = [hero1];

const HeroSuccess = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-hero-slider wpo-hero-style-3 hero-success">
            <div className="wedding-announcement">
                <div className="couple-text">
                <h2>Gracias por confirmar</h2>
                    {props.confirma === 'SI' ? (
                        <p className="down-here">Baja para encontrar más detalles acerca de este día</p>
                    ) : (
                        <p className="down-here">Aunque no estes en persona, pronto recibirás más detalles para la transmisión en vivo del evento. ¡Esperamos que puedas unirte y disfrutar desde donde estés!</p>
                    )}
                    <div className="wpo-wedding-date">
                        <section className={`wpo-team-section confirm-button-area`}>
                            <div className="container">
                                <div className="wpo-team-wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-12 text-center">
                                            <div className="arrow-container">
                                                <div className="arrow arrow-first"></div>
                                                <div className="arrow arrow-second"></div>
                                            </div>
                                            {/* <div className="confirm-area">
                                                <Link onClick={ClickHandler} className="theme-btn confirm-btn no-padding" to="/rsvp">Volver a la pagina principal</Link>
                                            </div> */}
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
                parallax={true}
                className='hero-success'
            >
                {imageUrls.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                        </div>
                    </SwiperSlide>
                ))}
                ...
            </Swiper>

        </section>
    )
}

export default HeroSuccess;