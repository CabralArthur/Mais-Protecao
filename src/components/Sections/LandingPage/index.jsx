import React from 'react'
import Header from '../../Elements/Header'
import {LandingPageMain} from './styles'
import CarouselSection from '../CarouselSection'
import HomeSection from '../HomeSection'
import CardsContainer from '../CardsContainer'
import ForYouSection from '../ForYouSection'
import FormSection from '../FormSection'
import Footer from '../Footer'
import AboutSection from '../AboutSection'

const LandingPage = () => {
    return (
        <>
            <Header/>
            <LandingPageMain>
                <HomeSection/>
                <ForYouSection/>
                <CardsContainer/>
                <FormSection/>
                <AboutSection/>
                <CarouselSection/>
                <Footer/>
            </LandingPageMain>
        </>
    )
}

export default LandingPage
