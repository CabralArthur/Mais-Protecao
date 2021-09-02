import React from 'react'
import Header from '../../Elements/Header'
import {LandingPageMain} from './styles'
import CarouselSection from '../CarouselSection'
import HomeSection from '../HomeSection'
import CardsContainer from '../CardsContainer'
import ForYouSection from '../ForYouSection'
import FormSection from '../FormSection'
import ContactSection from '../ContactSection'
import Footer from '../Footer'

const LandingPage = () => {
    return (
        <>
            <LandingPageMain>
                <Header/>
                <HomeSection/>
                <CarouselSection/>
                <CardsContainer/>
                <ForYouSection/>
                <FormSection/>
                <ContactSection/>
                <Footer/>
            </LandingPageMain>
        </>
    )
}

export default LandingPage
