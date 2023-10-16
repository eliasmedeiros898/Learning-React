import styled from "styled-components"
const keys = [
 'a',
 'b',
 'c',
 'd',
 'e',
 'f',
 'g',
 'h',
 'i',
 'j',
 'k',
 'l',
 'm',
 'n',
 'o',
 'p',
 'q',
 'r',
 's',
 't',
 'u',
 'v',
 'w',
 'x',
 'y',
 'z'
]

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 0.5rem;
  
`
const ButtonStyled = styled.button<{ isActive : boolean}>`
  opacity: ${(props) => props.isActive ? 'null' : '0.3'};
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  transition: 0.3s;

  &:hover {
    background: gray;
  }

  &:focus:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:focus-visible:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:hover:disabled{
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
    background: #1A1A1A;
  }
`



export function Keyboard(){
    return(
        <Wrapper>
            {keys.map((letter) => (
                <ButtonStyled  isActive = {true} key={letter}>{letter.toUpperCase()}</ButtonStyled>
            ))}
            
        </Wrapper>
         
    )
}