import styled from "styled-components";

export const Container  = styled.div`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media all and (max-width: 900px) {
        text-align: center;
    }
`

export const MainTitle = styled.h1`
    padding: 2rem 0;
    color: #015FEA;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: 5.5rem;
        top: 20px;
        width: 150px;
        border-top: 3px solid #015FEA;
        @media all and (max-width: 900px) {
            display: none
        }
    }
    &::after{
        content: "";
        position: absolute;
        left: 5rem;
        top: 85px;
        width: 175px;
        border-top: 3px solid #015FEA;
        @media all and (max-width: 900px) {
            display: none;
        }
    }
`