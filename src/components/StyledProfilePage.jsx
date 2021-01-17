import React from "react";
import styled from "styled-components";

const Heading = styled.h3`
  font-family: fantasy;
  text-shadow: -1px 0 lime, 0 1px lime, 1px 0 lime, 0 -1px lime;
`;
const Div1 = styled.div`
  background: rgb(53, 112, 250);
  color: black;
  width: 650px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border: solid rgb(6, 213, 54) 4px;
  margin: 15px;

  p {
    background: white;
    padding: 2px;
    color: black;
    font-family: fantasy;
  }
`;

const Div2 = styled(Div1)`
  background: rgb(255, 123, 0);
`;
const Div3 = styled(Div1)`
  background: Red;
`;
const Div4 = styled(Div1)`
  background: purple;
`;

const P = styled.p`
  float: left;
`;
const P2 = styled.p`
  float: right;
  margin-top: -30px;
  margin-left: 100px;
`;

const P3 = styled(P2)`
  margin-left: 100px;
`;

const LeftEye = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border: solid rgba(255, 255, 255, 0.89) 7px;
  border-radius: 100%;
  height: 29px;
  width: 20px;
  float: left;
`;
const RightEye = styled(LeftEye)`
  float: right;
`;

const EyeDiv = styled.div`
  width: 75px;
  margin-left: 40%;
  margin-right: 40%;
`;

export {
  Heading,
  Div1,
  Div2,
  Div3,
  Div4,
  P,
  P2,
  P3,
  LeftEye,
  RightEye,
  EyeDiv,
};
