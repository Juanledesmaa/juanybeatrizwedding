import React, {Fragment} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Scrollbar from '../../components/scrollbar'
import StorySection from '../../components/StorySection/StorySection';
import VideoSection from '../../components/VideoSection';

const StoryPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Preguntas frecuentes'} pagesub={'Preguntas-frecuentes'}/> 
            <StorySection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default StoryPage;
