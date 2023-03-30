import React from "react";
import SectionTitle from '../SectionTitle'


const ConfirmButton = (props) => {
    return (
        <section className={`wpo-team-section confirm-button-area`}>
            <div className="container">
            <div className="row">
                    <SectionTitle MainTitle={'Confirma tu asistencia!'} />
                </div>
                <div className="wpo-team-wrap">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                        <div className="confirm-area">
                            <button className="theme-btn confirm-btn">Enviar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    }

export default ConfirmButton;