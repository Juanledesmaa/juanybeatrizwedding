import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';


const Header2 = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu2 />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand logo" to='/'><small>Juan</small>&<small>Beatriz</small></Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/gallery">Nosotros</Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/event">Cuando y Donde</Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/rsvp">Confirmar asistencia</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header2;