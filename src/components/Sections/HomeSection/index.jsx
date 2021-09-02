import React from 'react'
import PrismaSource from '../../../assets/img/prisma-png.png'
import { Container, Content, ButtonForm } from './styles'

const HomeSection = () => {
    return (
        <Container id='home'>
            <Content>
                <div>
                    <h1>
                        Tenha seus benefícios
                        na palma de sua mão!
                    </h1>
                    <p>
                        A <b>Mais</b> Proteção é uma associação que preza 
                        pela assistência transparente, eficaz e agil.
                    </p>
                    <ButtonForm>
                        Solicitar Cotação
                    </ButtonForm>
                </div>
                <img src={ PrismaSource } alt='Carro'/>
            </Content>
        </Container>
    )
}

export default HomeSection
