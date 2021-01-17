import React from "react";
import styled from "styled-components";

const Item = styled.h5`
  font-family: fantasy;
  background: white;
  margin-top: 15px;
  background: lime;
  border: solid green;
  font-size: 1.5em;
  color: black;
  width: 500px;
  text-align: center;
  box-shadow: 10px 10px 5px green;
  :hover {
    box-shadow: 10px 10px 5px purple;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: start;
`;
const Heading = styled.h3`
  font-family: fantasy;
  text-shadow: -1px 0 lime, 0 1px lime, 1px 0 lime, 0 -1px lime;
`;
export { Item, Div, Heading };
