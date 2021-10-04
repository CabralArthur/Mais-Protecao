import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding: 9rem 0;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        position: relative;
        color: #015FEA;
        text-align: center;
        margin-bottom: 2rem;
    }
    span{
        text-align: center;
        max-width: 800px;
    }
    section{
        display: flex;
        flex-wrap: wrap;
        div{
            max-width: 300px;
            border: 2px solid #C6CCE0;
            border-radius: 10px;
            padding: 1rem 0;
            margin: .5rem;
            header{
                h3{
                    padding-left: .5rem;
                }
                width: 100%;
                color: #015FEA;
                padding: 1rem 0;
                margin-bottom: 1rem;
            }
            p{
                max-width:600px;
                padding: .5rem;
            }
        }
    }
`;
