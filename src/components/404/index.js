import React from 'react'
import {Link} from 'react-router-dom'
import erimg from '../../images/error-404.svg'


const Error = (props) => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Ha ocurrido un error!</h3>
                                <p>Vuelve a intentarlo mas tarde.</p>
                                <Link to="/" className="theme-btn-s3">Volver a la pagina principal</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;