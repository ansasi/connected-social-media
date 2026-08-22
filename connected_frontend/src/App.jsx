import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";

const App = () => (
  <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="login" element={<Login />} />
  </Routes>
);

export default App;
