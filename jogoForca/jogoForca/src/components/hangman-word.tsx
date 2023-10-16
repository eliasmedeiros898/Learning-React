import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: monospace;

`
const Letter = styled.span`
  border-bottom: 0.1em solid white;
  
`
interface HangmanWordProps {
    word: string
}

export function HangmanWord({word} : HangmanWordProps){

    const guessedLetters = ['s']
    return(
        <Wrapper>
            {word.split("").map((letter, index) => (
                <Letter key={index}>
                    <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
                
                </Letter>
            ))}
        </Wrapper>
    )
}