import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer/Footer';
import HeroSuccess from '../../components/hero3/HeroSuccess';
import StorySection from '../../components/StorySection/StorySection';
import { useLocation } from 'react-router-dom';

const SuccessPage =() => {
    const {state} = useLocation();
    const { confirma } = state; // Read values passed on state
    return(
        <Fragment>
            <Navbar2/>
            <HeroSuccess confirma={confirma}/>
            <StorySection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SuccessPage;

