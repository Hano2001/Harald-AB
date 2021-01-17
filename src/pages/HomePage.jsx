import React, { useEffect, useContext } from "react";
import { ContextInfo } from "../contexts/ContextInfo";
import NavBar from "../components/NavBar";
import {Welcome, Img} from "../components/StyledHomePage";
import img from "../images/self.jpg";


export default function HomePage({ token }) {
  const { setCustomerList } = useContext(ContextInfo);
  console.log(token);

  function getCustomers() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    console.log(token);

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  useEffect(() => {
    if (token) {
      getCustomers();
    } else {
      console.log("ERROR");
    }
  }, [token]);
  return (
    <div>
      <NavBar />
      <Welcome> WELCOME TO HARALD AB</Welcome>
      <div className="container d-flex justify-content-center">
        <Img src={img}/>
        </div>
      
    </div>
  );
}
