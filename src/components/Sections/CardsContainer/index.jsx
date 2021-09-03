import React from 'react'
import SectionCard from '../../Elements/SectionCard'
import { FaTaxi } from 'react-icons/fa'
import { FaUber } from 'react-icons/fa'
import { MdPhoneAndroid } from 'react-icons/md'
import { Container, MainContainer, MainTitle } from './styles'

const CardsContainer = () => {
    return (
        <MainContainer id="para-seu-negocio">
            <MainTitle>Para Seu Negócio</MainTitle>
            <Container>
                <SectionCard
                src="http://seudescontolegal.com.br/wp-content/uploads/2018/05/new-york-2998786_1280.jpg"
                component={<FaTaxi/>}
                title="Proteção Taxi"
                text="Lorem ipsum dolor sit amet."/>

                <SectionCard
                src="https://www.apvs.org.br/assets/images/xprotecao-moto.jpg.pagespeed.ic._3tyd9cUxl.webp"
                component={ <MdPhoneAndroid/> }
                title="Proteção Para Motoristas de App's"
                text="Lorem ipsum dolor sit amet."/>
                
                <SectionCard
                src="https://www.maxpixel.net/static/photo/1x/Transportation-Driver-Car-Taxi-Uber-Driving-Urban-4885228.jpg"
                component={<FaUber/>}
                title="Proteção Uber"
                text="Lorem ipsum dolor sit amet."/>
            </Container>
        </MainContainer>
    )
}

export default CardsContainer
