import React, { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
  Div,
  Heading,
  H6,
  ButtonDiv,
  Button,
} from "../components/StyledCreateUpdate";
import { ContextInfo } from "../contexts/ContextInfo";
import { VatCheck } from "../utilities/Vat";

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
        <input
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

        <input type={type || "text"} name={name} onChange={handleOnChange} />
      </Div>
    );
  }

  function validVat(e) {
    e.preventDefault();
    const vatNumber = vatRef.current.value;
    const validVatCheck = VatCheck(vatNumber);

    if (validVatCheck === true) {
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
  }

  return (
    <div>
      <>
        <NavBar />
      </>
      <Heading>Create Customer</Heading>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name:")}
        {renderInput("email", "Customer Email:")}
        {renderInput("organisationNr", "Organisation Number:")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number:", "tel")}
        {renderInput("reference", "Reference:")}
        {renderVatInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <ButtonDiv>
          <Button className="btn-btn btn-block btn-success" type="submit">
            Create Customer
          </Button>
        </ButtonDiv>
      </form>
    </div>
  );
}
