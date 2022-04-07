// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import OwnerHome from "./pages/OwnerHome/OwnerHome";
import VetHome from "./pages/VetHome/VetHome"
import LoginPage from "./pages/LoginPage/LoginPage";
import OwnerRegisterPage from "./pages/OwnerRegister/OwnerRegisterPage";
import VetRegisterPage from "./pages/VetRegister/VetRegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/ownerhome" element={<PrivateRoute> <OwnerHome /></PrivateRoute>}/>
        <Route path="/vethome" element={<PrivateRoute> <VetHome /></PrivateRoute>}/>
        <Route path="/ownerregister" element={<OwnerRegisterPage />} />
        <Route path="/vetregister" element={<VetRegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
