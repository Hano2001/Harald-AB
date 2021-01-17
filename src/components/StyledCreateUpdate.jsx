import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  background: lime;

  height: 40px;
  box-shadow: 10px 10px 5px green;
  justify-content: space-between;
  min-length: 500px;
  max-length: 600px;
`;

const Heading = styled.h3`
  font-family: fantasy;
  text-shadow: -1px 0 lime, 0 1px lime, 1px 0 lime, 0 -1px lime;
`;
const H6 = styled.h6`
  font-family: fantasy;
`;

const Button = styled.button`
  font-weight: bold;
`;

const ButtonDiv = styled.div`
  width: 700px;
  margin-left: -25px;
  padding: 30px;
`;

export { Div, Heading, H6, ButtonDiv, Button };
