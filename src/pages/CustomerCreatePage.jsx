import React, { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";

import { ContextInfo } from "../contexts/ContextInfo";

const Div = styled.div`
background: tomato;
height: 40px
text-shadow: orchid;
justify-content: center;
`;

const Input = styled.input`
  float: right;
`;
const H6 = styled.h6`
  font-family: fantasy;
`;
export default function CustomerCreatePage() {
  const url = "https://frebi.willandskill.eu/api/v1/customers/";
  const { setCustomerList } = useContext(ContextInfo);
  const token = localStorage.getItem("HARALDAB");
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const vatRef = useRef();

  function getCustomers() {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  function renderVatInput(name, label, type) {
    return (
      <Div className="col-sm-4 m-2">
        <label>
          <H6>{label}</H6>
        </label>
        <Input
          type={type || "text"}
          name={name}
          onChange={handleOnChange}
          ref={vatRef}
        />
      </Div>
    );
  }

  function handleOnSubmit(e) {
    validVat(e);
  }

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function renderInput(name, label, type) {
    return (
      <Div className="col-sm-4 m-2">
        <label>
          <H6>{label}</H6>
        </label>

        <Input type={type || "text"} name={name} onChange={handleOnChange} />
      </Div>
    );
  }

  function validVat(e) {
    const vatNumber = vatRef.current.value;

    e.preventDefault();
    if (vatNumber.length === 12) {
      const vatString = vatNumber.toString();
      const vatFirst = vatString.slice(0, 2);
      const vatLast = vatString.slice(2, 12);
      const isNumber = Number(vatLast);

      if (vatFirst === "SE" && isNaN(isNumber) === false) {
        console.log(typeof isNumber);
        console.log(isNumber);
        fetch(url, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            getCustomers();
          })
          .then(history.push("/customers"));
      } else {
        window.alert(
          "Invalid VATNR, have you included SE in the beginning followed by 10 digits?"
        );
      }
    } else {
      window.alert(
        "VATNR invalid, please enter a valid VATNR (start with SE, followed by 10 digits)"
      );
    }
  }

  return (
    <div>
      <>
        <NavBar />
      </>
      <h5>Create Customer</h5>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name:")}
        {renderInput("email", "Customer Email:")}
        {renderInput("organisationNr", "Organisation Number:")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number:", "tel")}
        {renderInput("reference", "Reference:")}
        {renderVatInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
}
