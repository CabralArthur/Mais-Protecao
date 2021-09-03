import React, { useState } from 'react'
import LogoSource from '../../../assets/img/logo-empresa.svg'
import { MainHeader, Container, ContactButton, MobileUL, Hamburger } from './styles'

const Header = () => {

    const [open, setOpen] =  useState(false);

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <MainHeader>
            <Container>
                <a href="/">
                    <img
                    src={LogoSource}
                    alt='Logo'
                    />
                </a>
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
                <Hamburger onClick={handleMenu} />
            </Container>

            <MobileUL style={{display: open === false ? 'none' : 'flex'}}>
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
            </MobileUL>
        </MainHeader>
    )
}

export default Header
