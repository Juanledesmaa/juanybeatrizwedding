import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import SectionTitle from '../../components/SectionTitle'
import shape1 from '../../images/rsvp/shape1.png'
import shape2 from '../../images/rsvp/shape2.png'
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const RSVP = (props) => {

    const scrollTopHandler = () =>{
        window.scrollTo(10, 0);
     }

    const [selectedOption, setSelectedOption] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setForms(prevForms => ({
            ...prevForms,
            confirma: event.target.value,
        }));
    };

    const [forms, setForms] = useState({
        nombre: '',
        tipo_paella: '',
        confirma: 'SI',
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setIsLoading(true);
            try {
                const valuesArray = Object.values(forms);


                // USE GOOGLE SHEETS
                // var myHeaders = new Headers();
                // myHeaders.append("Content-Type", "application/json");
                // var requestOptions = {
                //     method: "post",
                //     headers: myHeaders,
                //     redirect: "follow",
                //     body: JSON.stringify([valuesArray])
                // };

                // fetch("https://v1.nocodeapi.com/juanledesma/google_sheets/wmAKvxjiEzQWfkyQ?tabId=hoja1", requestOptions)
                //     .then(response => response.text())
                //     .then(result => {
                //         validator.hideMessages()
                //         setForms({ ...forms, nombre: '', tipo_paella: '', confirma: 'SI' });
                //         console.log(result)
                //         navigate('/success');
                //     })
                //     .catch(error => console.log('error', error));


                // USE AIRTABLE
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var requestOptions = {
                    method: "post",
                    headers: myHeaders,
                    redirect: "follow",
                    body: JSON.stringify([forms])
                };

                fetch("https://v1.nocodeapi.com/juanledesma/airtable/SiNOefhYVqxXQsjs?tableName=lista_principal", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        validator.hideMessages()
                        setForms({ ...forms, nombre: '', tipo_paella: '', confirma: 'SI' });
                        scrollTopHandler();
                        navigate('/success'); 
                    })
                    .catch(error => console.log('error', error));

            } catch (error) {
                navigate('/404');
            }

        } else {
            validator.showMessages();
        }
    };

    return (
        <section className={`wpo-contact-section ${props.pt}`} id="RSVP">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="wpo-contact-form-area">

                        {isLoading ? (
                            <SectionTitle MainTitle={'Cargando...'} IconClass={'flaticon-wedding'} />
                        ) : (
                            <>
                                <SectionTitle MainTitle={'¿Vienes a nuestra boda?'} IconClass={'flaticon-wedding'} />

                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                    <div className="form-field">
                                        <input
                                            value={forms.nombre}
                                            type="text"
                                            name="nombre"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                            className="form-control"
                                            placeholder="Tu nombre completo" />
                                        {validator.message('nombre', forms.nombre, 'required|alpha_space')}
                                    </div>
                                    <div className="radio-buttons">
                                        <p>
                                            <input type="radio" value="SI" id="confirma" name="radio-group" onChange={handleOptionChange} defaultChecked />
                                            <label htmlFor="confirma">Sí, asistiré</label>
                                        </p>
                                        <p>
                                            <input type="radio" value="NO" id="not" name="radio-group" onChange={handleOptionChange} />
                                            <label htmlFor="not">Lo siento, no podré asistir</label>
                                        </p>
                                    </div>
                                    <div className="form-field">
                                        <select
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                            value={forms.tipo_paella}
                                            type="text"
                                            className="form-control"
                                            name="tipo_paella">
                                            <option>Preferencias del menu</option>
                                            <option>Paella española (Contiene mariscos)</option>
                                            <option>Paella vegetariana</option>
                                        </select>
                                        {validator.message('tipo_paella', forms.tipo_paella, 'required')}
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn">Enviar</button>
                                    </div>
                                </form >
                            </>
                        )}

                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={shape1} alt=""/>
            </div>
            <div className="shape-2">
                <img src={shape2} alt=""/>
            </div>
        </section>
    )
}
export default RSVP;
