import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    padding: 14rem;

    gap: 5rem;

    display: flex;

    align-items: center;
    
    flex-direction: column;
    justify-content: center;

    @media all and (max-width: 900px) {
        text-align: center;
        padding: 0;
    }
`

export const MainTitle = styled.h1`
    font-size: 2rem;
    color: #015FEA;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: .5rem;
        top: -8px;
        width: 120px;
        border-top: 3px solid #015FEA;
    }
    &::after{
        content: "";
        position: absolute;
        left: -0.75rem;
        top: 50px;
        width: 160px;
        border-top: 3px solid #015FEA;
    }
`

export const Content = styled.div`
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    div{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: .5rem;
        h2{
            color: #015FEA;
        }
        p{
            color: #A8A9B0;
            line-height: 2;
        }
        iframe{
            text-align: center;
        }
        @media all and (max-width: 900px) {
            text-align: center;
            align-items: center;
        }
    }

`

export const ButtonWhatsapp = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 9.5rem;
    height: 2.8rem;

    background-color: #015FEA;
    color: #FFFFFF;
    
    border-radius: 5px;
    
    gap: .5rem;
    padding: .5rem;
    &:hover{
        background-color: #0559D4;
        cursor: pointer;
    }

`