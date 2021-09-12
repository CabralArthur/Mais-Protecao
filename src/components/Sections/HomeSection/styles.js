import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6rem;
    margin-top: 4rem;
`

export const Content = styled.div`
    display: flex;
    max-width: 900px;
    flex-wrap: wrap;
    div{
        max-width: 400px;
        margin: 2rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        h1{
            font-size: 1.5rem;
            color: #015FEA;
        }
        p{
            color: #727272;
        }
    }
    img{
        max-width: 400px;
        object-fit: cover;
        @media all and (max-width: 900px) {
            display: none;
        }
    }
    @media all and (max-width: 900px) {
        text-align: center;
    }
`

export const ButtonForm = styled.a`
    width: 12rem;
    padding: .5rem 1.5rem;
    text-align: center;
    background-color: #015FEA;
    color: #FFFFFF;
    border-radius: 10px;
    transition: all .2s;
    text-decoration: none;
    &:hover{
        color: #015FEA;
        cursor: pointer;
        background-color: #FFFFFF;
        transform: scale(1.1);
    }
    &:hover:before{
        width: 0;
    }
    @media all and (max-width: 900px) {
        margin: 0 auto;
    }
`