import React from 'react'
import LogoSource from '../../../assets/img/logo-empresa.svg'
import { MainHeader, Container, ContactButton } from './styles'

const Header = () => {
    return (
        <MainHeader>
            <Container>
                <img
                src={LogoSource}
                alt='Logo'
                />
                <ul>
                    <li>
                        <a href='#clube-de-beneficios'>Clube De Benefícios</a>
                    </li>
                    <li>
                        <a href='#para-seu-negocio'>Para Seu Negócio</a>
                    </li>
                    <li>
                        <a href='#para-voce'>Para Você</a>
                    </li>
                    <li>
                        <a href='#solicitar-cotacao'>Solicitar Cotação</a>
                    </li>
                    <li>
                        <ContactButton href='#contato'>
                            Contato
                        </ContactButton>
                    </li>
                </ul>
            </Container>
        </MainHeader>
    )
}

export default Header
