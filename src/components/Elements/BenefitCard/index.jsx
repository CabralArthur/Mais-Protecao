import React from 'react'
import { Card, DivIcon } from './styles'

const BenefitCard = (props) => {
    return (
        <Card>
            <DivIcon>
                {props.component}
            </DivIcon>
            <div>
                <h2>{props.title}</h2>
            </div>
        </Card>
    )
}

export default BenefitCard
