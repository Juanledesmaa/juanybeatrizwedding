import React from 'react'

const SectionTitle = (props) => {
    const iconClass = props.IconClass || 'flaticon-gallery';

    return(
        <div className="wpo-section-title">
            <div className="section-title-icon">
                <i className={`fi ${iconClass}`}></i>
            </div>
            <h1>{props.MainTitle}</h1>
        </div>
    )
}

export default SectionTitle;