import React from 'react'
import {Link}  from 'react-router-dom'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

  return(

    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="widget-title">
                                <Link onClick={ClickHandler} className="logo" to="/"><small>Juan</small>&<small>Beatriz</small></Link>
                            </div>
                            {/* <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Información</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/gallery">Nosotros</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Cuando y Donde</Link></li>
                                <li><Link onClick={ClickHandler} to="/rsvp">Confirmar asistencia</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contacto</h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-email"></i>beatrizpg997@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+1 (787) 3933477</li>
                                    <li><i className="fi flaticon-maps-and-flags"></i>2903 Rn Martin Street, East Point, GA, 30344
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2023 Boda Juan & Beatriz. Designed By <Link onClick={ClickHandler}
                                to="/">Juan Ledesma</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;