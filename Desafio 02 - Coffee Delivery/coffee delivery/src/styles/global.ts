import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
    }

    body{
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['text']};
        -webkit-font-smoothing: antialiased;
        margin: 0 160px;
        border: 1px solid red;
    
    }

    body, input, textarea, button{
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    

`