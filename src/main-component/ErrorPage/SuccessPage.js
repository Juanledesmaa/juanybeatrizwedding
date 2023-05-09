import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';
import HeroSuccess from '../../components/hero3/HeroSuccess';
import StorySection from '../../components/StorySection/StorySection';

const SuccessPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <HeroSuccess/>
            <StorySection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SuccessPage;

