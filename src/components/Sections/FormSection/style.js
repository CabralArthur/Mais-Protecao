import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    padding: 5rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5rem;
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        flex-wrap: wrap;
        align-items: center;
        div{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 1rem;
            input, select{
                border: 1px solid #C3C5CD;
                background-color: #F1F1F1;
                border-radius: 3px;
            }

            label, select{
                color: #015FEA;
            }

            input, select{
                min-width: 320px;
                padding: .5rem;
            }
        }
        input.button{
            padding: .5rem 2rem;
            background-color: #015FEA;
            color: #FFFFFF;
            border-radius: 10px;
            border: none;
            &:hover{
                background-color: #025BDE;
                cursor: pointer;
            }
        }
    }
`

export const TitleMain = styled.h1`
    font-size: 2rem;
    color: #015FEA;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: 4.5rem;
        top: -8px;
        width: 120px;
        border-top: 3px solid #015FEA;
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        top: 50px;
        width: 200px;
        border-top: 3px solid #015FEA;
    }
`