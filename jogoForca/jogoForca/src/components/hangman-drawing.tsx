import styled from "styled-components"


const Wrapper = styled.div`
  position: relative;
`

const BaseLine = styled.div`
  height: 10px;
  width: 250px;
  background: white;
  margin-left: 80px;

`

const VerticalLine = styled.div`
  height: 250px;
  width: 10px;
  background: white;
  margin-left: 130px;
`

const VerticalLineSmall = styled.div`
  height: 40px;
  width: 10px;
  background: white;
  margin-left: 130px;
  position: absolute;
  top: 0;
  right: 70px;

`

const HorizontalLine = styled.div`
  height: 10px;
  width: 120px;
  background: white;
  position: absolute;
  right: 80px;
  top: 0;
  margin-left: 100px;
`

const Head = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 5px solid white;
  position: absolute;
  top: 39px;
  right: 55px;

`

const Body = styled.div`
  height: 80px;
  width: 10px;
  background: white;
  position: absolute;
  top: 77px;
  right: 70px;

`

const LeftArm = styled.div`
  height: 10px;
  width: 50px;
  background: white;
  position: absolute;
  top: 95px;
  right: 70px;
  rotate: -30deg;
`
const RightArm = styled.div`
  height: 10px;
  width: 50px;
  background: white;
  position: absolute;
  top: 95px;
  right: 30px;
  rotate: 30deg;

`

const LeftLeg = styled.div`
  height: 10px;
  width: 50px;
  background: white;
  position: absolute;
  top: 160px;
  right: 70px;
  rotate: -30deg;
`
const RightLeg = styled.div`
  height: 10px;
  width: 50px;
  background: white;
  position: absolute;
  top: 160px;
  right: 30px;
  rotate: 30deg;

`
const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

interface HangmanDrawingProps {
    numberOfGuesses: number
}
export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <Wrapper>
            {bodyParts.slice(0,numberOfGuesses).map((BodyPart,index) => {
                return <>
                    <BodyPart key={index}/>
                </>
            })}
            
            <VerticalLineSmall />
            <HorizontalLine />
            <VerticalLine />
            <BaseLine />
        </Wrapper>
    )
}