import React from 'react'
import { MainFooter, Content, LeftSide, RightSide } from './styles'
import LogoSource from '../../../assets/img/logo-empresa.svg'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const Footer = () => {
    return (
        <MainFooter>
            <Content>
                <LeftSide>
                    <img src={LogoSource} alt="Logo" />
                    <span>
                        Nós estamos no Instagram e Facebook acesse os links abaixo para seguir a Mais Proteção nas redes Sociais.
                    </span>
                    <div>
                        <AiFillInstagram />
                        <AiFillFacebook />
                        <IoLogoGooglePlaystore />
                    </div>
                </LeftSide>
                <RightSide>
                    <h2>Nossos Contatos</h2>
                    <br/>
                    (83) 3507-1001
                    <br/>
                    (83) 3013-0300
                    <br/>
                    (83) 99643-4011
                    <br/>
                    Av. Pres. Epitácio Pessoa, 4940 - Loja 208, Cabo Branco
                    <br/>
                    João Pessoa-PB | CEP: 58033-455.
                </RightSide>
            </Content>
        </MainFooter>
    )
}

export default Footer
