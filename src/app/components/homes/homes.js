import React from 'react';
import HeroSection from './heroSection';
import Promation from './promation';
import NewProducts from './NewProducts';
import Payday from './Payday';
import SignupSection from './Singupsection';

const homes = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Promation></Promation>
            <NewProducts></NewProducts>
            <Payday></Payday>
            <SignupSection></SignupSection>
        </div>
    );
};

export default homes;