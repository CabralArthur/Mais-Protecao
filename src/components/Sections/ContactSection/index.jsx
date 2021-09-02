import React from 'react'
import { Container, MainTitle, Content, TextDiv, ButtonWhatsapp } from './styles'
import { IoLogoWhatsapp } from 'react-icons/io'

const ContactSection = () => {
    return (
        <Container>
            <MainTitle id='contato'>
                Contato
            </MainTitle>
            <Content>
                <TextDiv>
                    <div>
                        <h2>
                            Atendimento
                        </h2>
                        <p>
                            Segunda à Sexta - 08:00 às 18:00
                            <br/>
                            Sábado - 08:00 às 12:00
                        </p>
                    </div>

                    <div>
                        <h2>
                            Assistência 24hs
                        </h2>
                        <p>
                            0800 841 7070
                            <br/>
                        </p>
                    </div>

                    <div>
                        <h2>
                            Whatsapp
                        </h2>
                        <ButtonWhatsapp>
                            <IoLogoWhatsapp/> 83 3023-7625
                        </ButtonWhatsapp>
                    </div>

                </TextDiv>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.063771784277!2d-34.84403878522603!3d-7.118608594859509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd49b5901fb5%3A0x2bddbfee07f020d9!2sAv.%20Sen.%20Ruy%20Carneiro%2C%20201%20-%20Brisamar%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058086-100!5e0!3m2!1sen!2sbr!4v1630606973437!5m2!1sen!2sbr" width="320" height="300" style={{ border:0, borderRadius: '10px' }}  title='Local Map' loading="lazy"></iframe>
                </div>
            </Content>
        </Container>
    )
}

export default ContactSection
