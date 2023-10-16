import styled from 'styled-components'
import './App.css'
import { HangmanDrawing } from './components/hangman-drawing'
import { HangmanWord } from './components/hangman-word'
import { Keyboard } from './components/keyboard'
import { useState } from 'react'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 335px;
`

const words = [
  "pesquisa",
  "natureza",
  "objetivos",
  "procedimentos",
  "primaria",
  "secundaria",
  "terciaria",
  "exploratoria",
  "descritiva",
  "explicativa",
  "design",
  "bibliografica",
  "documental",
  "experimental",
  "levantamento",
  "etnografica",
  "ciencia",
  "tecnologia",
  "computacao",
  "hipotese",
  "empirica",
  "formal",
  "teoria",
  "wazlawick",
  "raul",
  "metodos",
  "pesquisador",
  "ideias",
  "algoritmo",
  "prototipo",
  "processo"]

function App() {

  const [wordtoGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters] = useState([])

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordtoGuess.includes(letter)
  )
  return (
    <>
      <Wrapper>
        <h1>Jogo da Forca</h1>
        <HangmanDrawing numberOfGuesses = {incorrectGuesses.length}/>
        <HangmanWord word={wordtoGuess}/>
        <Keyboard />
      </Wrapper>
      
    </>
    
    
  )
}

export default App
