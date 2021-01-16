import React, {useState, useEffect, useContext} from 'react'
import {useHistory,Link} from 'react-router-dom'
import NavBar from '../components/NavBar';
import { ContextInfo } from "../contexts/ContextInfo";
import styled from 'styled-components'


const Div = styled.div`
border: solid red;
width: 600px;
justify-content: center;
margin: 10px;
padding: 30px;
text-align: center;
`
const H4 = styled.h4`
    color: white;
    font-weight: bold;

    
`

const Table = styled.table`
margin-right: 20%;
margin-left: 20%;
td{
    background: white;
    border: solid red;
    padding-right: 10px;
    font-weight: bold;
    
}
`

const DeleteButton = styled.button`
    float: left;
`

const EditButton = styled(DeleteButton)`
float: right;
`


export default function CustomerDetailPage(props) {
    const customerId = props.match.params.id;
    const { setCustomerList} = useContext(ContextInfo);
    const token = localStorage.getItem("HARALDAB");
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    const listUrl = `https://frebi.willandskill.eu/api/v1/customers/`
    //const token = localStorage.getItem("INDIEUPPGIFT");
    const[customerItem, setCustomerItem] = useState({})
    const history = useHistory();

        function getCustomers(){
        fetch(listUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setCustomerList(data.results));
    }

    function getCustomerDetails(){
        
        fetch(url, {
            headers:{ 
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }
        })
        .then(res=> res.json())
        .then(data=>setCustomerItem(data))
    }

    function customerDelete(){
        fetch(url, {
            method: "DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
                }
        })
            
            .then(getCustomers())
            .then(history.push('/customers'))
            }
        
    
   

    useEffect(()=>
    {
        getCustomerDetails()
    },[])   

    
    return (
        <div>
            <>
            <NavBar/>
            </>
            {customerItem
            ?
            (
            <Div>
            <H4>{customerItem.name}</H4>
            <Table>
                    <tbody>
                    <tr>
                            <td>Organisation Number:</td>
                            <td>{customerItem.organisationNr}</td>
                        </tr>

                        <tr>
                            <td>Payment Term:</td>
                            <td>{customerItem.paymentTerm}</td>
                        </tr>

                        <tr>
                            <td>Phone Number:</td>
                            <td>{customerItem.phoneNumber}</td>
                        </tr>

                        <tr>
                            <td>Reference:</td>
                            <td>{customerItem.reference}</td>
                        </tr>

                        <tr>
                            <td>VAT Number:</td>
                            <td>{customerItem.vatNr}</td>
                        </tr>

                        <tr>
                            <td>E-Mail:</td>
                            <td>{customerItem.email}</td>
                        </tr>

                        <tr>
                            <td>Website:</td>
                            <td>
                                <a href={customerItem.website} target="_blank">
                                    {customerItem.website}
                                </a>
                            </td>
                        </tr>
                    </tbody>
            </Table>
            <DeleteButton className="btn btn-danger" onClick={customerDelete}>DELETE</DeleteButton>
            <EditButton className="btn btn-danger"><Link to={`/customers/${customerId}/edit`}>Edit</Link></EditButton>
            </Div>
        
        )
        :
        (<span>Laddar...</span>)
        }
    </div>     
    )
}
