import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import connectedVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const { name, sub: googleId, picture: imageUrl } = jwtDecode(response.credential);
    const profile = { name, googleId, imageUrl };

    localStorage.setItem("user", JSON.stringify(profile));
    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={connectedVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div>
            <img src={logo} alt="logo" width="200px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={() => console.error("Google sign-in failed")}
              shape="pill"
              text="signin_with"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
