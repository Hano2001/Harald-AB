import React, {useContext } from "react";
import CustomerItem from "../components/CustomerItem";
import NavBar from "../components/NavBar";
import { ContextInfo } from "../contexts/ContextInfo";
import {Heading} from "../components/StyledCustomers";



;
export default function CustomersPage() {
  const { customerList } = useContext(ContextInfo);

  return (
    <div>
      <>
        <NavBar />
      </>

      <Heading>Customer List</Heading>
      {customerList.map((item, index) => {
        return <CustomerItem key={item.id} customerData={item} />;
      })}
    </div>
  );
}
