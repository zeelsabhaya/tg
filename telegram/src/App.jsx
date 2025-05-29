import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import OTP from "./Component/Login/OTP";
import KYCForm from "./Component/KYC/Kycform";
import LoginAdmin from "./pages/LoginAdmin";

import Layout from "./Adminpanel/Layout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import AddPlanForm from "./pages/AddPlans";
import ProtectedRoute from "./Adminpanel/ProtectedRoute";
import { ToastContainer } from "react-toastify";

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

        <Route
          path="/loginAdmin"
          element={
            localStorage.getItem("auth") === "true" ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <LoginAdmin />
            )
          }
        />

        {/* Protected admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="addplans" element={<AddPlanForm />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/loginAdmin" replace />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
