import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";

const App = () => {
  // // Check if user is not logged in
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("user")) {
  //     console.log("User not logged in");
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
