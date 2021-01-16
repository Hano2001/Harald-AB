import React, {useEffect, useContext} from 'react'
import NavBar from '../components/NavBar';
import { ContextInfo } from '../contexts/ContextInfo'
import styled from 'styled-components'

const Div1 = styled.div`
background: rgb(53, 112, 250);
color: black;
width: 650px;
height: 50px;
padding: 10px;
text-align: center;
border: solid rgb(6, 213, 54) 4px;
margin: 15px;

p{  
    background:white;
    padding: 2px;
    color:black;
    font-family: fantasy;
}
`

const Div2 = styled(Div1)`
background: rgb(255, 123, 0);


`
const Div3 = styled(Div1)`
background: Red;

`
const Div4 = styled(Div1)`
background: purple;

`

const P = styled.p`
float: left;
`
const P2 = styled.p`
float: right;
margin-top: -30px;

`

const P3 = styled(P2)`

margin-left: 100px;

`

const LeftEye = styled.div`
background: rgba(0, 0, 0, 0.900);
border: solid rgba(255, 255, 255, 0.890) 7px;
border-radius: 100%;
height: 29px;
width: 20px;
float: left;

`
const RightEye = styled(LeftEye)`
float: right;
`

const EyeDiv = styled.div`
width: 75px;
margin-left: 40%;
margin-right: 40%;

position: relative;
`

export default function ProfilePage() {
    const {profileData, setProfileData, token} = useContext(ContextInfo);
    const key = token;
    console.log(key);
    
    function getProfile(){
        const url = "https://frebi.willandskill.eu/api/v1/me/"
        

            fetch(url, {
            headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${key}`
            }
        })
        .then(res=> res.json())
        .then(data=>setProfileData(data))
        
        
        }

        

        useEffect(()=>{
            getProfile()
        }, [])

    
    return (
        <div>
        <NavBar/>
        <Div1 >
        <P>FIRST NAME:</P>
        <EyeDiv>
            <LeftEye></LeftEye>
            <RightEye></RightEye>
        </EyeDiv>
        <P2> {profileData.firstName}</P2>
        </Div1>

        <Div2>
        <P>LAST NAME:</P>
        <EyeDiv>
            <LeftEye></LeftEye>
            <RightEye></RightEye>
        </EyeDiv>
        <P2>{profileData.lastName}</P2>
        </Div2>

        <Div3>
        <P>E-MAIL:</P>
        <EyeDiv>
            <LeftEye></LeftEye>
            <RightEye></RightEye>
        </EyeDiv>
         <P2>{profileData.email}</P2>
        </Div3>

        <Div4>
        <P>ID:</P>
        <EyeDiv>
            <LeftEye></LeftEye>
            <RightEye></RightEye>
        </EyeDiv>
        <P3>{profileData.id}</P3>
        </Div4>
        </div>
        
    
       
    )
}
