import React from 'react'


const SectionTitleS2 = (props) => {

    const iconClass = props.IconClass || 'flaticon-gallery';

    return(
        <div className="wpo-section-title-s2">
            <div className="section-title-icon">
            <i className={`fi ${iconClass}`}></i>
            </div>
            <h2>{props.MainTitle}</h2>
        </div>
    )
}

export default SectionTitleS2;
