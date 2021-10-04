import React from 'react'
import { Container } from './styles'

const AboutSection = () => {
    return (
        <Container id='sobre-nos'>
            <h1>Quem Somos</h1>
            
            <span>
                Fundada na cidade de João Pessoa, a Mais Proteção tem por objetivo proporcionar comodidade, tranquilidade e segurança para os nossos associados.
                <br/>
                <br/>
                Somos uma associação sem finalidade lucrativa e todos os recursos são voltados para o bem-estar e melhoria da qualidade de vida daqueles que fazem parte da nossa base.
                <br/>
                <br/>
                Em toda nossa estrutura prezamos pela ética, eficiência, empatia, agilidade, responsabilidade social, transparência e respeito.
                <br/>
                <br/>
                Além disso, não medimos esforços para que os nossos associados disponham do melhor que estiver ao nosso alcance.
                <br/>
                <br/>
                Somos a Mais Proteção Associados.
            </span>
            
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
