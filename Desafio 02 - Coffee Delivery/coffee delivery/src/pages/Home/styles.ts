import styled from "styled-components"

export const IntroContainer = styled.div`

    display: flex;
    margin-top: 12rem;
    
    gap: 56px;
    border: 1px solid red;
    

    img {
        width: 476px;
        height: 360px;
        margin: 92px 0;
    }

`

export const Informations = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    width: 570px;

    strong {
        font-size: 48px;
        color: ${(props) => props.theme['title']};
        font-weight: 800;
        font-family: "Baloo 2", sans-serif;
        margin-top: 94px;
    }

    p {
        color: ${(props) => props.theme['subtitle']};
    }


`

export const Items = styled.div`
    display: grid;


`