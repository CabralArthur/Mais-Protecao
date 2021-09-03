import React from 'react'
import BenefitCard from '../../Elements/BenefitCard'
import { Container, Content, MainTitle, Cards } from './styles'

import { GiWarpPipe, GiElectric, GiFlatTire, GiMechanicGarage, GiVacuumCleaner, GiCrackedGlass, GiThreeKeys } from 'react-icons/gi'
import { FaGasPump, FaHotel, FaTrailer, FaCross } from 'react-icons/fa'
import { AiFillCar, AiTwotoneHome } from 'react-icons/ai'
import { ImHammer2 } from 'react-icons/im'
import { BiCabinet } from 'react-icons/bi'
import { CgScreen } from 'react-icons/cg'
import { GoKey } from 'react-icons/go'

const ForYouSection = () => {
    return (
        <Container id="para-voce">
            <Content>

                <MainTitle>
                    Para Você
                </MainTitle>

                <Cards>

                    <BenefitCard
                        component={<ImHammer2 />}
                        title="Consulta Jurídica"
                    />

                    <BenefitCard
                        component={<GiMechanicGarage />}
                        title="Socorro Elétrico ou Mecânico"
                    />

                    <BenefitCard
                        component={<FaTrailer />}
                        title="Reboque Do Veículo"
                    />

                    <BenefitCard
                        component={<GiFlatTire />}
                        title="Troca De Pneu"
                    />

                    <BenefitCard
                        component={<GiElectric />}
                        title="Eletricista"
                    />

                    <BenefitCard
                        component={<GiWarpPipe />}
                        title="Encanador"
                    />

                    <BenefitCard
                        component={<GiCrackedGlass />}
                        title="Vidraceiro"
                    />

                    <BenefitCard
                        component={<FaGasPump />}
                        title="Falta De Combustível"
                    />

                    <BenefitCard
                        component={<GoKey />}
                        title="Chaveiro"
                    />

                    <BenefitCard
                        component={<AiFillCar />}
                        title="Transporte Alternativo"
                    />

                    <BenefitCard
                        component={<CgScreen />}
                        title="Concerto De Eletrodomésticos"
                    />

                    <BenefitCard
                        component={<FaHotel />}
                        title="Hospedagem"
                    />

                    <BenefitCard
                        component={<AiFillCar />}
                        title="Retorno Ao Domicílio"
                    />

                    <BenefitCard
                        component={<AiTwotoneHome />}
                        title="Guarda Domiciliar"
                    />

                    <BenefitCard
                        component={<BiCabinet />}
                        title="Mudança e Guarda Móveis"
                    />

                    <BenefitCard
                        component={<GiVacuumCleaner />}
                        title="Faxineira Em Caso De Hospitalização"
                    />

                    <BenefitCard
                        component={<FaCross />}
                        title="Translado De Corpos"
                    />

                    <BenefitCard
                        component={<GiThreeKeys />}
                        title="Chaveiros"
                    />

                </Cards>
            </Content>
        </Container>
    )
}

export default ForYouSection
