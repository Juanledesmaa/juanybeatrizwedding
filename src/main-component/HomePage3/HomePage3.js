import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero3 from '../../components/hero3/Hero3';
import Scrollbar from '../../components/scrollbar'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import RSVP2 from '../../components/RSVP2/RSVP2';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton';
import VideoSection from "../../components/VideoSection";
import StorySection from '../../components/StorySection/StorySection';



const HomePage3 =() => {

    return(
        <Fragment>
            <Navbar2/>
            <Hero3/>
            <PortfolioSection2 gClass={'pt-40'}/>
            <EventSection/>
            <StorySection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage3;