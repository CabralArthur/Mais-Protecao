import React from 'react'
import PrismaSource from '../../../assets/img/prisma-png.png'
import { Container, Content, ButtonForm } from './styles'

const HomeSection = () => {
    return (
        <Container id='home'>
            <Content>
                <div>
                    <h1>
                        A Mais Proteção é uma associação que preza 
                        pela assistência transparente, eficaz e agil.
                    </h1>
                    <p>
                        Seu veículo protegido contra roubo, furto e colisão,
                        com rastreamento assistência 24 horas e vários outros benefícios
                    </p>
                    <ButtonForm href='#solicitar-cotacao'>
                        Solicitar Cotação
                    </ButtonForm>
                </div>
                <img src={ PrismaSource } alt='Carro'/>
            </Content>
        </Container>
    )
}

export default HomeSection
