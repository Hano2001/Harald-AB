import React from "react";
import { Link } from "react-router-dom";
import { Item, Div } from "./StyledCustomers";

export default function CustomerItem({ customerData }) {
  return (
    <Div>
      <Link to={`customers/${customerData.id}`}>
        <Item>{customerData.name}</Item>
      </Link>
    </Div>
  );
}
