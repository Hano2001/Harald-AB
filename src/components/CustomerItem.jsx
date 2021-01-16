import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Item = styled.h5`
font-family: fantasy;
background: white;
border-radius: 20px;
color: black;
width: 500px;
margin-left: 37%;

`
const Div = styled.div`
justify-content: center;
`

export default function CustomerItem({customerData}) {
   
    return (
        <Div>
           
                <Link to={`customers/${customerData.id}`}>
                <Item>{customerData.name}</Item>
                </Link>
        </Div>
    )
}
