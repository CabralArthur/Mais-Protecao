import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi'

export const MainHeader = styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
    background-color: #F8F8F8;
`

export const Container = styled.nav`
    max-width: 1030px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ul{
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
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
        @media all and (max-width: 760px) {
            display: none;
        }
    }
    `

export const Hamburger = styled(GiHamburgerMenu)`
    color: #015FEA;
    display: none;
    @media all and (max-width: 760px){
        display: block;
        font-size: 2rem;
        margin: 0 2rem;
    }
`

export const MobileUL = styled.ul`
    width: 100%;
    padding: 1rem 2rem;
    height: 230px;
    line-height: 2.5;
    text-align: right;
    display: none;
    background-color: #015FEA;
    @media all and (max-width: 760px){
        flex-direction: column;
        a{
            color: #FFFFFF;
            text-decoration: none;
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
    @media all and (max-width: 760px){
        background-color: #FFFFFF;
        color: #015FEA !important;
    }
`