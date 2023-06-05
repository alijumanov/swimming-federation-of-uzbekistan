import React from 'react';
import Header from '../components/home/Header';
import OurLife from '../components/home/OurLife';
import Partners from '../components/home/Partners';
import HomeAbout from '../components/home/HomeAbout';
import WaterPolo from '../components/home/WaterPolo';
import KidsFederation from '../components/home/KidsFederation';

function HomeRouter() {
    return (
        <>
            <Header />
            <HomeAbout />
            <WaterPolo />
            <KidsFederation />
            <OurLife />
            <Partners />
        </>
    )
}

export default HomeRouter
