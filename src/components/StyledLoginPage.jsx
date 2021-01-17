import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 300px;
  width: 400px;
  text-align: center;
  margin-top: 100px;
  margin-left: 40%;
  margin-right: 40%;
  border: solid lime 5px;
  border-radius: 10%;
  color: white;
  font-weight: bold;
  background-image: linear-gradient(purple, black);
  label {
    border: solid lime;
    border-radius: 10px;
    background-image: linear-gradient(red, black);
    margin-top: 10px;
    padding: 5px;
  }
`;

const Input = styled.input`
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-top: 40px;
`;

export { Div, Input, Button };
