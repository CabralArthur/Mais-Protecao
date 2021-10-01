import React from 'react'
import { Container } from './styles'

const AboutSection = () => {
    return (
        <Container id='sobre-nos'>
            <h1>Sobre Nós</h1>
            <section>
                <div>
                    <header> <h3>- Missão</h3></header>
                    <p>Garantir auxílio ao bem estar e a qualidade de vida dos nossos associados, prezando por uma assistência transparente, eficaz e ágil.</p>
                </div>
                <div>
                    <header> <h3>- Visão</h3></header>
                    <p>Se consolidar no nordeste como a melhor associação da região, mantendo altos níveis de excelência na relação com os associados.</p>
                </div>
                <div>
                    <header> <h3>- Valores</h3></header>
                    <p>Ética, eficiência, empatia, agilidade, responsabilidade social, transparência e respeito.</p>
                </div>
            </section>
        </Container>
    )
}

export default AboutSection
