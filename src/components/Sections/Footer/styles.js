import styled from "styled-components";

export const MainFooter = styled.footer`
    padding: 5rem 0;
    background-color: #F2F2F2;
    margin: 30px 0 0 0;
    p{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 300px;
        img{
            max-width: 75px;
        }
        div{
            display: flex;
            gap: 1rem;
            font-size: 2rem;
            color: #015FEA;
        }
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
    img{
        max-width: 75px;
    }
    div{
        display: flex;
        gap: 1rem;
        font-size: 2rem;
        color: #015FEA;
        @media all and (max-width: 900px) {
            justify-content: center;
        }
    }
    @media all and (max-width: 900px) {
        align-items: center;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    text-align: right;
    line-height: 2;
    h2{
        color: #015FEA;
    }
    img{
        max-width: 75px;
    }
    div{
        display: flex;
        gap: 1rem;
        font-size: 2rem;
        color: #015FEA;
    }
    @media all and (max-width: 900px) {
        text-align: center;
    }
`

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    @media all and (max-width: 900px) {
        flex-direction: column;
        text-align: center;
    }
`