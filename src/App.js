import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, useHistory } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CustomersPage from "./pages/CustomersPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import CustomerUpdatePage from "./pages/CustomerUpdatePage";
import { ContextInfo } from "./contexts/ContextInfo";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import {Div,Heading} from "./components/StyledApp"

function App() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [customerList, setCustomerList] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [token, setToken] = useState(localStorage.getItem("HARALDAB"));

  const contextValues = {
    loginData,
    setLoginData,
    customerList,
    setCustomerList,
    profileData,
    setProfileData,
  };

  useEffect(() => {
    if (token) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  }, [token]);

  return (
    <Div className="Container">
      <Heading>HARALD AB</Heading>

      <ContextInfo.Provider value={contextValues}>
        <Switch>
          <Route path="/home">
            <HomePage token={token} />
          </Route>
          <Route path="/login">
            <LoginPage
              onLogin={(token) => {
                setToken(token);
              }}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage token={token} />
          </Route>

          <Route path="/customers/create">
            <CustomerCreatePage token={token} />
          </Route>
          <Route path="/customers/:id/edit" component={CustomerUpdatePage} />
          <Route path="/customers/:id" component={CustomerDetailPage} />
          <Route path="/customers">
            <CustomersPage />
          </Route>
        </Switch>
      </ContextInfo.Provider>
    </Div>
  );
}

export default App;
