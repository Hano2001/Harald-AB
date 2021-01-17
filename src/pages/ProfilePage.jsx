import React, { useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import { ContextInfo } from "../contexts/ContextInfo";
import {Heading,Div1,Div2,Div3,Div4,P,P2,P3,LeftEye,RightEye,EyeDiv} from "../components/StyledProfilePage"

export default function ProfilePage({ token }) {
  const { profileData, setProfileData } = useContext(ContextInfo);

  function getProfile() {
    const url = "https://frebi.willandskill.eu/api/v1/me/";

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfileData(data));
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <NavBar />
      <Heading>User Details</Heading>
      <Div1>
        <P>FIRST NAME:</P>
        <EyeDiv>
          <LeftEye></LeftEye>
          <RightEye></RightEye>
        </EyeDiv>
        <P2> {profileData.firstName}</P2>
      </Div1>

      <Div2>
        <P>LAST NAME:</P>
        <EyeDiv>
          <LeftEye></LeftEye>
          <RightEye></RightEye>
        </EyeDiv>
        <P2>{profileData.lastName}</P2>
      </Div2>

      <Div3>
        <P>E-MAIL:</P>
        <EyeDiv>
          <LeftEye></LeftEye>
          <RightEye></RightEye>
        </EyeDiv>
        <P2>{profileData.email}</P2>
      </Div3>

      <Div4>
        <P>ID:</P>
        <EyeDiv>
          <LeftEye></LeftEye>
          <RightEye></RightEye>
        </EyeDiv>
        <P3>{profileData.id}</P3>
      </Div4>
    </div>
  );
}
