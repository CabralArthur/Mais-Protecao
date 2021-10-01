import styled from "styled-components";

export const Content = styled.div`
    height: 350px;
    width: 280px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    &:hover{
        transform: scale(1.2);
    }
    transition: all .5s;
    div{
        h2, p{
            color: #015FEA;
        }
    }
`

export const Card = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 3rem;

    position: relative;
    h2{
        color: #015FEA;
    }
    p{
        color: #727272;
    }
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        @media all and (max-width: 900px) {
            height: 250px;
        }
    }
`

export const DivIcon = styled.div`
    position: absolute;

    width: 75px;
    height: 75px;

    border-radius: 50%;
    
    background-color: #015FEA;
    color: white;
    
    display: flex;
    align-items: center;
    justify-content: center;

    left: 105px;
    top: 150px;

    font-size: 2rem;

    @media all and (max-width: 900px) {
        top: 200px;
    }
`