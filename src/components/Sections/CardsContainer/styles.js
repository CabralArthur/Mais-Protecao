import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100%;
    padding: 9rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const MainTitle = styled.h1`
    padding: 2rem 0;
    color: #015FEA;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: 4.8rem;
        top: 20px;
        width: 150px;
        border-top: 3px solid #015FEA;
    }
    &::after{
        content: "";
        position: absolute;
        left: 4.1rem;
        top: 85px;
        width: 175px;
        border-top: 3px solid #015FEA;
    }
`
export const Container = styled.div`
    display: flex;
    gap: .5rem;
    @media all and (max-width: 1028px){
        width: 100vw;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }
`