import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import OTP from "./Component/Login/OTP";
import KYCForm from "./Component/KYC/Kycform";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} /> 
        <Route path="/kycForm" element={<KYCForm />} /> 

      </Routes>
    </>
  );
}

export default App;
