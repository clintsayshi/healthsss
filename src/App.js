import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/*-------------------------------------------------------------*/
import Home from "./pages";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import PatientSelfPage from "./components/PatientSelfPage";

function App() {
  return (
    <>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/patient" element={<PatientSelfPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
