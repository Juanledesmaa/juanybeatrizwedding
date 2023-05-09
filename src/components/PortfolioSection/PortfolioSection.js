import React from 'react'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import SectionTitle from '../SectionTitle'

import pImg1 from '../../images/agregadas/engagement/engagement-1.png'
import pImg2 from '../../images/agregadas/engagement/engagement-2.png'
import pImg3 from '../../images/agregadas/engagement/engagement-3.png'
import galleryImage5 from '../../images/agregadas/engagement/galeria-5.jpg';
import galleryImage6 from '../../images/agregadas/engagement/galeria-6.jpg';
import galleryImage8 from '../../images/agregadas/engagement/galeria-8.jpg';
import galleryImage9 from '../../images/agregadas/engagement/galeria-9.jpg';
import galleryImage14 from '../../images/agregadas/engagement/galeria-14.jpg';
import galleryImage16 from '../../images/agregadas/engagement/galeria-16.jpg';
import galleryImage18 from '../../images/agregadas/engagement/galeria-18.jpg';
import galleryImage20 from '../../images/agregadas/engagement/galeria-20.jpg';
import galleryImage23 from '../../images/agregadas/engagement/galeria-23.jpg';
import galleryImage25 from '../../images/agregadas/engagement/galeria-25.jpg';
import galleryImage26 from '../../images/agregadas/engagement/galeria-26.jpg';
import galleryImage29 from '../../images/agregadas/engagement/galeria-29.jpg';
import galleryImage31 from '../../images/agregadas/engagement/galeria-31.jpg';
import galleryImage32 from '../../images/agregadas/engagement/galeria-32.jpg';
import galleryImage33 from '../../images/agregadas/engagement/galeria-33.jpg';
import galleryImage34 from '../../images/agregadas/engagement/galeria-34.jpg';
import galleryImage35 from '../../images/agregadas/engagement/galeria-28.jpg';

const Portfolios = [
    { Pimg: pImg1 },
    { Pimg: pImg2 },
    { Pimg: pImg3 },
    { Pimg: galleryImage5 },
    { Pimg: galleryImage6 },
    { Pimg: galleryImage8 },
    { Pimg: galleryImage9 },
    { Pimg: galleryImage14 },
    { Pimg: galleryImage16 },
    { Pimg: galleryImage18 },
    { Pimg: galleryImage20 },
    { Pimg: galleryImage23 },
    { Pimg: galleryImage25 },
    { Pimg: galleryImage26 },
    { Pimg: galleryImage29 },
    { Pimg: galleryImage31 },
    { Pimg: galleryImage32 },
    { Pimg: galleryImage34 },
    { Pimg: galleryImage35 },
];

const PortfolioSection = (props) => {
    
    return(
        <section className={`wpo-portfolio-section section-padding ${props.pSclass}`} id="gallery">
            <div className="container">
                <SectionTitle MainTitle={'Nosotros'}/>
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Portfolios.map((portfolio, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                        <img src={portfolio.Pimg} alt="Image" />
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

export default PortfolioSection;