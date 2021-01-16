import React, { useEffect, useContext } from "react";
import CustomerItem from "../components/CustomerItem";
import NavBar from "../components/NavBar";
import { ContextInfo } from "../contexts/ContextInfo";
import styled from "styled-components";

const Heading = styled.h3`
  font-family: fantasy;
  background: orange;
  color: purple;
`;

const Div = styled.div`
  text-align: center;
`;
export default function CustomersPage() {
  const { customerList } = useContext(ContextInfo);

  return (
    <Div>
      <>
        <NavBar />
      </>

      <Heading>Customer List</Heading>
      {customerList.map((item, index) => {
        return <CustomerItem key={item.id} customerData={item} />;
      })}
    </Div>
  );
}
