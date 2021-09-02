import styled from "styled-components";

export const MainHeader = styled.header`
    width: 100%;
    height: 80px;
    background-color: #F8F8F8;
`

export const Container = styled.nav`
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ul{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        a{
            text-decoration: none;
            position: relative;
            color: #727272;
            &:before{
                content: "";
                position: absolute;
                bottom: -0.5rem;
                left: 50%;
                background-color: #727272;
                height: 5%;
                width: 0;
                transform: translateX(-50%);
                transition: all 0.1s linear;
            }
            &:hover{
                color: #015FEA;
            }
            &:hover:before{
                width: 100%;
                background-color: #015FEA;
            }
        }
    }
`

export const ContactButton = styled.a`
    padding: .5rem 1.5rem;
    background-color: #015FEA;
    color: #FFFFFF !important;
    border-radius: 10px;
    transition: all .2s;
    &:hover{
        color: #015FEA !important;
        background-color: #FFFFFF;
        transform: scale(.4);
    }
    &:hover:before{
        width: 0 !important;
    }
`