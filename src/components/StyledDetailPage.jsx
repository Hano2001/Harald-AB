import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 600px;
  justify-content: center;
  margin: 10px;
  padding: 30px;
  text-align: center;
`;
const H4 = styled.h4`
  color: white;
  font-weight: bold;
  text-shadow: 10px 10px 5px lime;
`;

const Table = styled.table`
//background: lime;
  width: 500px;
  height: 40px;
  //box-shadow: 10px 10px 5px green;

  tr{
      display: flex;
      justify-content: space-between;
  }
  td {
    font-size: 25px;
    color: white;
    width: 50%
    border: solid green;
    //background: lime;
    //margin: 15px;
    //height: 40px
    text-shadow: 10px 10px 5px green;
    
    font-weight: bold;
  }
`;

const DeleteButton = styled.button`
  float: left;
  font-weight: bold;
  margin-top: 50px;
`;

const EditButton = styled(DeleteButton)`
  float: right;
`;

export { Div, H4, Table, DeleteButton, EditButton };
