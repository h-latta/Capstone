// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import OwnerHome from "./pages/OwnerHome/OwnerHome";
import VetHome from "./pages/VetHome/VetHome"
import LoginPage from "./pages/LoginPage/LoginPage";
import OwnerRegisterPage from "./pages/OwnerRegister/OwnerRegisterPage";
import VetRegisterPage from "./pages/VetRegister/VetRegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";
import AuthContext, { AuthProvider } from "./context/AuthContext";


function App() {
  
  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/ownerhome" element={<PrivateRoute> <OwnerHome /></PrivateRoute>}/>
        <Route path="/vethome" element={<PrivateRoute> <VetHome /></PrivateRoute>}/>
        <Route path="/ownerregister" element={<OwnerRegisterPage />} />
        <Route path="/vetregister" element={<VetRegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
