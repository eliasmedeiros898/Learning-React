import {styled} from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: ${(props) => props.theme['base-background']};
    padding: 32px;
    gap: 72rem;

    #navlink {
        border: none;
        cursor: pointer;

        &:focus {
            box-shadow: 0 0 0 0;
        }
    }

    
`

export const LocationCartContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    
    
    

`

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    padding: 8px;
    border-radius: 6px;
    height: 48px;
    

`

export const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['yellow-light']};
    height: 48px;
    width: 48px;
    border-radius: 6px;


    img {
        width: 25px;
    }

    #navlink {
        border: none;
        cursor: pointer;

        &:focus {
            box-shadow: 0 0 0 0;
        }
    }

`