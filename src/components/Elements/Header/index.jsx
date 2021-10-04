import React, { useState } from 'react'
import LogoSource from '../../../assets/img/logo-empresa.svg'
import { MainHeader, Container, MobileUL, Hamburger } from './styles'

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
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#para-voce'>Para Você</a>
                    </li>
                    <li>
                        <a href='#para-seu-negocio'>Para Seu Negócio</a>
                    </li>
                    <li>
                        <a href='#solicitar-cotacao'>Solicitar Cotação</a>
                    </li>
                    <li>
                        <a href='#sobre-nos'>Quem Somos</a>
                    </li>
                    <li>
                        <a href='#contato'>Contato</a>
                    </li>
                </ul>
                <Hamburger onClick={handleMenu} />
            </Container>

            <MobileUL style={{display: open === false ? 'none' : 'flex'}}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#para-voce'>Para Você</a>
                    </li>
                    <li>
                        <a href='#para-seu-negocio'>Para Seu Negócio</a>
                    </li>
                    <li>
                        <a href='#solicitar-cotacao'>Solicitar Cotação</a>
                    </li>
                    <li>
                        <a href='#sobre-nos'>Quem Somos</a>
                    </li>
                    <li>
                        <a href='#contato'>Contato</a>
                    </li>
            </MobileUL>
        </MainHeader>
    )
}

export default Header
