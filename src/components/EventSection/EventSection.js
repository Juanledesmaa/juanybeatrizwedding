import React from 'react'
import LocationMap from '../Modal'
import SectionTitleS2 from '../SectionTitleS2'


const Events = [
    {
        title:'La ceremonia y la celebración',
        li1:'Jueves, 19 Oct, 2023 3:45 PM – 10:00 PM',
        li2:'Atlanta Utility Works By Cultured South',
        li3:'2903 Rn Martin Street, East Point, GA, 30344'
    },
]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitleS2 MainTitle={'Cuando y Donde'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col-md-6 offset-md-3 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li><LocationMap/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;