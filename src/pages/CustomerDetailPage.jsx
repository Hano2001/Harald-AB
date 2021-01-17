import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ContextInfo } from "../contexts/ContextInfo";
import {
  Div,
  H4,
  Table,
  DeleteButton,
  EditButton,
} from "../components/StyledDetailPage";

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id;
  const { setCustomerList } = useContext(ContextInfo);
  const token = localStorage.getItem("HARALDAB");
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
  const listUrl = `https://frebi.willandskill.eu/api/v1/customers/`;
  //const token = localStorage.getItem("INDIEUPPGIFT");
  const [customerItem, setCustomerItem] = useState({});
  const history = useHistory();

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

  function getCustomerDetails() {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerItem(data));
  }

  function customerEdit() {
    history.push(`/customers/${customerId}/edit`);
  }

  function customerDelete() {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(getCustomers())
      .then(history.push("/customers"));
  }

  useEffect(() => {
    getCustomerDetails();
  }, []);

  function TableReturn() {
    const details = [
      { name: "Organisation Number:", item: customerItem.organisationNr },
      { name: "Payment Term:", item: customerItem.paymentTerm },
      { name: "Phone Number:", item: customerItem.phoneNumber },
      { name: "Reference:", item: customerItem.reference },
      { name: "VAT Number:", item: customerItem.vatNr },
      { name: "E-Mail:", item: customerItem.email },
    ];

    return details.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.item}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <>
        <NavBar />
      </>
      {customerItem ? (
        <Div>
          <H4>{customerItem.name}</H4>
          <Table>
            <tbody>
              <TableReturn />
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
          <DeleteButton
            className="btn-btn btn-block btn-danger"
            onClick={customerDelete}
          >
            DELETE
          </DeleteButton>
          <EditButton
            onClick={customerEdit}
            className="btn-btn btn-block btn-warning"
          >
            UPDATE
          </EditButton>
        </Div>
      ) : (
        <span>Laddar...</span>
      )}
    </div>
  );
}
