import React from 'react'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import SectionTitle from '../SectionTitle'


import pImg1 from '../../images/agregadas/engagement/engagement-1.png'
import pImg2 from '../../images/agregadas/engagement/engagement-2.png'
import pImg3 from '../../images/agregadas/engagement/engagement-3.png'
// import pImg4 from '../../images/agregadas/portfolio/4.jpg'
// import pImg5 from '../../images/agregadas/portfolio/5.jpg'


const Portfolios = [
    {
        Pimg:pImg1,
    },
    {
        Pimg:pImg2,
    },
    {
        Pimg:pImg3,
    },
    // {
    //     Pimg:pImg4,
    // },
    // {
    //     Pimg:pImg5,
    // }
] 

const PortfolioSection2 = (props) => {
    return(
        <section className={`wpo-portfolio-section section-padding ${props.gClass}`} id="gallery">
            <div className="container">
                <SectionTitle MainTitle={'Nosotros'}/>
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Portfolios.map((portfolio, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <ReactFancyBox
                                                thumbnail={portfolio.Pimg}
                                                image={portfolio.Pimg}
                                                />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection2;