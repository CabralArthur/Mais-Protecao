import React from 'react'
import { MainFooter, Content, LeftSide, RightSide } from './styles'
import LogoSource from '../../../assets/img/logo-empresa.svg'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
    return (
        <MainFooter id='contato'>
            <Content>
                <LeftSide>
                    <img src={LogoSource} alt="Logo" />
                    <span>
                        Nós estamos no Instagram e Facebook acesse os links abaixo para seguir a Mais Proteção nas redes Sociais.
                    </span>
                    <div>
                        <a href="https://www.instagram.com/maisprotecaoassociados/" target='_blank' rel='noreferrer'>
                            <AiFillInstagram />
                        </a>
                        <a href="https://www.facebook.com/maisprotecaoassociados" target='_blank' rel='noreferrer'>
                            <AiFillFacebook />
                        </a>
                    </div>
                </LeftSide>
                <RightSide>
                    <h2>Nossos Contatos</h2>
                    <br/>
                    Assistência 24 horas
                    <br/>
                    0800 841 7070
                    <br/>
                    Sede
                    <br/>
                    83 3023-7625
                    <br/>
                    Avenida Senador Ruy Carneiro, 201 - Brisamar, João Pessoa - PB, 58032-100
                    <br/>
                </RightSide>
            </Content>
        </MainFooter>
    )
}

export default Footer
