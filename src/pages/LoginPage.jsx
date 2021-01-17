import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContextInfo } from "../contexts/ContextInfo";
import { Div, Input, Button } from "../components/StyledLoginPage";

export default function LoginPage({ onLogin }) {
  const { loginData, setLoginData } = useContext(ContextInfo);
  const history = useHistory();

  function handleOnChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payLoad = {
      email: loginData.email,
      password: loginData.password,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        onLogin(data.token);
        localStorage.setItem("HARALDAB", data.token);
      })
      .then(() => {
        history.push("/home");
      });
  }

  return (
    <Div>
      <form onSubmit={handleOnSubmit}>
        <label>Email:</label>
        <Input
          name="email"
          value={loginData.email}
          onChange={handleOnChange}
          type="text"
        />
        <label>Password:</label>
        <Input
          name="password"
          value={loginData.password}
          onChange={handleOnChange}
          type="password"
        />
        <Button className="btn-danger" type="submit">
          Login
        </Button>
      </form>
    </Div>
  );
}
