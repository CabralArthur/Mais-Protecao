import React from 'react'
import { Card, DivIcon, Content } from './styles'

const SectionCard = (props) => {
    return (
        <Content>
            <Card>
                <img src={props.src} alt={props.alt} />
                <DivIcon>
                    {props.component}
                </DivIcon>
            </Card>
            <div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </Content>
    )
}

export default SectionCard
