import React, { useRef, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Div, Heading, H6, ButtonDiv } from "../components/StyledCreateUpdate";
import { ContextInfo } from "../contexts/ContextInfo";
import { VatCheck } from "../utilities/Vat";

export default function CustomerUpdatePage(props) {
  const { setCustomerList } = useContext(ContextInfo);
  const customerId = props.match.params.id;
  const token = localStorage.getItem("HARALDAB");
  const [formData, setFormData] = useState({});
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
  const listUrl = "https://frebi.willandskill.eu/api/v1/customers/";
  const history = useHistory();
  const vatRef = useRef();

  useEffect(() => {
    getCustomerItem();
  }, []);

  function handleOnSubmit(e) {
    validVat(e);
  }

  function getCustomers() {
    fetch(listUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  function getCustomerItem() {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }

  function validVat(e) {
    e.preventDefault();
    const vatNumber = vatRef.current.value;
    const validVatCheck = VatCheck(vatNumber);

    if (validVatCheck === true) {
      fetch(url, {
        method: "PUT",
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

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          value={formData[name] || ""}
        />
      </Div>
    );
  }

  function renderInput(name, label, type) {
    return (
      <Div className="col-sm-4 m-2">
        <label>
          <H6>{label}</H6>
        </label>
        <input
          type={type || "text"}
          name={name}
          onChange={handleOnChange}
          value={formData[name] || ""}
        />
      </Div>
    );
  }

  return (
    <div>
      <>
        <NavBar />
      </>
      <Heading>Update Customer</Heading>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name:")}

        {renderInput("organisationNr", "Organisation Number:")}
        {renderInput("paymentTerm", "Payment Term", "number:")}
        {renderInput("phoneNumber", "Phone Number:", "tel")}
        {renderInput("reference", "Reference:")}
        {renderVatInput("vatNr", "Vat Number:")}
        {renderInput("email", "Customer Email:")}
        {renderInput("website", "Website", "url")}
        <ButtonDiv>
          <button className="btn-btn btn-block btn-success" type="submit">
            Update Customer
          </button>
        </ButtonDiv>
      </form>
    </div>
  );
}
