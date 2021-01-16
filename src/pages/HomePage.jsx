import React, { useEffect, useContext } from "react";
import { ContextInfo } from "../contexts/ContextInfo";
import NavBar from "../components/NavBar";

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
      <h1>HARALD AB</h1>
    </div>
  );
}
