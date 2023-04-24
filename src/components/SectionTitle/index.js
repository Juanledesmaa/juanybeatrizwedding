import React from 'react'


const SectionTitle = (props) => {
    return(
        <div className="wpo-section-title">
            <div className="section-title-icon">
                <i className="fi flaticon-gallery"></i>
            </div>
            <h1>{props.MainTitle}</h1>
        </div>
    )
}

export default SectionTitle;