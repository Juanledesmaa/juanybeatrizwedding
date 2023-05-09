import React from 'react';
import SectionTitle from '../SectionTitle'
import shape1 from '../../images/rsvp/shape1.png'
import shape2 from '../../images/rsvp/shape2.png'

const Questions = [
    {
        question: '¿QUÉ NOS GUSTARÍA DE REGALO?',
        answer: 'Agradecemos tu generosidad, puedes usar cualquier de los siguientes metodos de pago. ¡Gracias por su cariño y apoyo!',
        payments: [
            {
            name: "Zelle",
            message: "jlmanuel8540@gmail.com"
            },
            {
                name: "ATH Mobile",
                message: "787 393-3477"
            },
            {
                name: "PayPal",
                message: "Beatrizpg997@gmail.com"
            }
        ]
    },
    {
        question: '¿CUÁL ES EL CÓDIGO DE VESTIMENTA?',
        answer: 'El código de vestimenta para nuestra boda es cóctel/formal. Se sugieren colores de otoño, no blanco y hombres evitar jeans.'
    },
    {
        question: '¿HAY SITIO DE ESTACIONAMIENTO?',
        answer: '¡Sí, por supuesto! El lugar cuenta con suficiente espacio de estacionamiento para todos los invitados.'
    },
    {
        question: '¿CÓMO LLEGO AL LUGAR DEL EVENTO?',
        answer: 'Nos complace informarles que tanto la ceremonia como la recepción se llevarán a cabo en la dirección 2903 RN Martin St # R, East Point, GA 30344, en una antigua fábrica conocida anteriormente como Atlanta Utility Works.'
    },
    {
        question: '¿PUEDO LLEVAR ACOMPAÑANTE?',
        answer: 'Lamentablemente, no podemos acomodar acompañantes adicionales en nuestra boda, ya que queremos mantener la celebración muy íntima y cada asiento ya se encuentra asignado.'
    },
    {
        question: '¿A QUE HORA COMIENZA LA CEREMONIA?',
        answer: 'Queremos recordarles que la ceremonia dará inicio puntualmente a las 3:45pm y les solicitamos respetuosamente que lleguen a tiempo. Agradecemos de antemano su puntualidad.'
    },
    {
        question: 'RECOMENDACIONES GENERALES',
        answer: 'Debido a posibles vientos, se sugiere llevar una pashmina o algún abrigo ligero para estar cómodo durante la ceremonia y la recepción. Además, para mantener a nuestros invitados seguros y cómodos en nuestro entorno rústico, se sugiere evitar los tacones de punta. Gracias por tomarte el tiempo para considerar nuestras sugerencias. ¡Esperamos verte en nuestro gran día!'
    },
];

const StorySection = (props) => {
    return (
        <section className="story-section" id="story">
            <div className="container">
                <div className="row">
                    <SectionTitle MainTitle={'Preguntas frecuentes'} IconClass={'flaticon-left-quote'} />
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            {Questions.map((question, index) => (
                                <div className="story-timeline-item s1 d-flex justify-content-center" key={index}>
                                    <div className="row align-items-center">
                                        <div className="col col-12">
                                            <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                                                <h3>{question.question}</h3>
                                                <div className="line-shape">
                                                    <div className="outer-ball">
                                                        <div className="inner-ball"></div>
                                                    </div>
                                                </div>
                                                <p>{question.answer}</p>
                                                {question.payments && question.payments.length > 0 && (
                                                    <ul>
                                                        {question.payments.map((listItem, listItemIndex) => (
                                                            <li key={listItemIndex}>
                                                                <strong>{listItem.name}</strong>: {listItem.message}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <div className="sticky-shape">
                    <img src={shape1} alt=""/>
                </div>
            </div>
            <div className="shape-2">
                <div className="sticky-shape">
                    <img src={shape2} alt=""/>
                </div>
            </div>
        </section>
    )
}


export default StorySection;