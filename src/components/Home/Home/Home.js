import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import ApointmentMaking from '../ApointmentMaking/ApointmentMaking';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <ApointmentMaking></ApointmentMaking>
            <Doctors></Doctors>
            <Reviews></Reviews>
            <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;