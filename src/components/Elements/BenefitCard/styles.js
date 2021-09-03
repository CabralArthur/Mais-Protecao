import styled from "styled-components";

export const Card = styled.div`
    height: 170px;
    width: 170px;
    
    display: flex;
    padding: .5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: .5rem;
    
    text-align: center;
    background-color: #015FEA;
    border-radius: 10px;
    
    h2{
        font-size: 1.25rem;
        color: #FFFFFF;
    }
    
    p{
        color: #727272;
    }
    
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    transition: all .5s;
    margin: 1rem;

    &:hover{
        transform: scale(1.2);
    }

    div{
        h2{
            margin-bottom: 1rem;
            font-size: .75rem;
        }
    }

    @media all and (max-width: 1028px){
        padding: 0;
    }
`

export const DivIcon = styled.div`
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 4rem;
    color: white;

`