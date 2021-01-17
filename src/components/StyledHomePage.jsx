import React from "react"
import styled,{keyframes} from "styled-components"

const Rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
const Welcome = styled.h1`
text-align: center;
font-size: 5em;
color: lime;
font-family: fantasy;
font-weight: bold;
border: solid green;
box-shadow: 10px 10px 5px green;
`
const Img = styled.img`
justify-content: center;
height: 400px;
width 200px;
border-radius: 10%;
margin: 75px;
animation: ${Rotate} 5s linear infinite;

`
export {Welcome, Img}
            