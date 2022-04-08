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
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";
import AuthContext, { AuthProvider } from "./context/AuthContext";


function App() {
  const [user, token] = useAuth();
  
  async function getRoles(){
    let userRole = await axios.get('http://127.0.0.1:8000/api/users/owner/', {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    if(userRole.user_id === user.id){
      return (
        <Route path="/ownerhome" element={<PrivateRoute> <OwnerHome /></PrivateRoute>}/>
      )
    }
  }
  

  async function getVetRoles(){
    let userRole = await axios.get('http://127.0.0.1:8000/api/users/vet', {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    if(userRole.user_id === user.id){
      return (
        <Route path="/vethome" element={<PrivateRoute> <VetHome /></PrivateRoute>}/>
        )
    }
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/ownerhome"/>
        <Route path="/vethome"/>
        <Route path="/ownerregister" element={<OwnerRegisterPage />} />
        <Route path="/vetregister" element={<VetRegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
