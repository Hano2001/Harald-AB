import React, {useEffect, useContext} from 'react'
import {ContextInfo} from '../contexts/ContextInfo'
import NavBar from '../components/NavBar'

export default function HomePage() {
    const {setCustomerList} = useContext(ContextInfo);
    const token = localStorage.getItem("HARALDAB");
    
    
    function getCustomers()
        
    {   
        
    
         const key = token;
        
        
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        
        
        fetch(url, {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setCustomerList(data.results))
        
        
        
    }

    
    
    useEffect(()=>{
        
        getCustomers();
        
    }, [])
    return (
        <div>
            <NavBar/>
            <h1>HARALD AB</h1>
            
            
        </div>
    )
}
