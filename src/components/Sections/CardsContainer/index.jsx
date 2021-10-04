import React from 'react'
import SectionCard from '../../Elements/SectionCard'
import { FaTaxi } from 'react-icons/fa'
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
                text="
                Se você taxista, mototaxista ou motorista de aplicativo e está procurando proteção para o seu veículo, a MAIS Proteção pode te ajudar com as melhores condições!
                "/>

                <SectionCard
                src="https://cdn.discordapp.com/attachments/859989475417522217/894605719448481823/car-driving-vehicle-drive-mobile-phone-sports-car-167000-pxhere_1.jpg"
                component={ <MdPhoneAndroid/> }
                title="Proteção Para Motoristas de App's"
                text="Lorem ipsum dolor sit amet."/>
            </Container>
        </MainContainer>
    )
}

export default CardsContainer
