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