import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {ContextInfo} from '../contexts/ContextInfo'
import styled from 'styled-components'

const Div = styled.div
`   height:300px;
    width: 400px;
    text-align: center;
    margin-left: 40%;
    margin-right: 40%;
    border: solid white;
    color: white;
`

const Input = styled.input`
margin-left: 25%;
margin-right: 25%;
margin-bottom: 10px
`

const Button = styled.button`
margin-top: 40px;
`

export default function LoginPage() {
    
    const {loginData, setLoginData} = useContext(ContextInfo)
    const history = useHistory();

  //   function test()
  //  { history.push('/home')}
    
    function handleOnChange(e){
        
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    function handleOnSubmit(e){
        e.preventDefault();
        const url = "https://frebi.willandskill.eu/api-token-auth/";
        const payLoad = {
          email: loginData.email,
          password: loginData.password
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: { "Content-Type": "application/json" },
          })
            .then((res) => res.json())
            .then((data) => {
              
              localStorage.setItem("HARALDAB", data.token);
            })
            .then(history.push('/home'))
            
            
        
        
    }

    return (
      
        <Div>
            <form onSubmit={handleOnSubmit}>
             <label>Email:</label>
             <Input name="email" value={loginData.email} onChange={handleOnChange} type="text"/>
             <label>Password:</label>
             <Input name="password" value={loginData.password} onChange={handleOnChange} type="text"/>
             <Button className="btn-danger" type="submit">Login</Button>
            </form>

            {/* <button onClick={test}>TEST</button> */}
          </Div>

          

        
    )
}
