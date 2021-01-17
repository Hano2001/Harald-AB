import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/ShellPattern.jpg";

const Nav = styled.nav`
  //background-color:rgba(255, 21, 0, 0.68);
  background-image: url(${img});
  border-radius: 5%;
  width: auto;
`;
const Button = styled.button`
  color: white;
  background-color: black;
  font-weight: bold;
  margin: 5px;
  font-family: "cursive";
  border-radius: 5px;
  :hover {
    background-image:linear-gradient(rgb(6, 204, 6), blue);
  }
`;
const Button2 = styled(Button)`
  :hover {
    
    background-image:linear-gradient(rgb(6, 204, 6), purple);
    
  }
`;
const Button3 = styled(Button)`
  :hover {
    background-image:linear-gradient(rgb(6, 204, 6), red);
    
  }
`;

const Button4 = styled(Button)`
  :hover {
    background-image:linear-gradient(rgb(6, 204, 6), orange);
  }
`;

// const ButtonSecondary=styled (Button) `
// background: yellow;
// `
export default function NavBar() {
  return (
    <div>
      <div className="row-md-4 m-2">
        <Nav>
          <ul className="nav">
            <Link to="/customers">
              <Button>
                <li type="button" className="nav-link ml-2">
                  Customers
                </li>
              </Button>
            </Link>
            <Link to="/customers/create">
              <Button2>
                <li type="button" className="nav-link ml-2">
                  Customer Creation
                </li>
              </Button2>
            </Link>
            <Link to="/profile">
              <Button3>
                <li type="button" className="nav-link ml-2">
                  My Profile
                </li>
              </Button3>
            </Link>
            <Link to="/login">
              <Button4>
                <li type="button" className="nav-link ml-2">
                  Log out
                </li>
              </Button4>
            </Link>
          </ul>
        </Nav>
      </div>
    </div>
  );
}
