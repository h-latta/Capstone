import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

import OwnerHome from "../pages/OwnerHome/OwnerHome";
import VetHome from "../pages/VetHome/VetHome"
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";

const AuthContext = createContext();

export default AuthContext;

function setUserObject(user) {
  if (!user) {
    return null;
  }
  return {
    username: user.username,
    id: user.user_id,
    first_name: user.first_name,
  };
}

export const AuthProvider = ({ children }) => {
  const BASE_URL = "http://127.0.0.1:8000/api/auth";
  const userToken = JSON.parse(localStorage.getItem("token"));
  const decodedUser = userToken ? jwtDecode(userToken) : null;
  const [token, setToken] = useState(userToken);
  const [user, setUser] = useState(setUserObject(decodedUser));
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (registerData) => {
    try {
      let finalData = {
        username: registerData.username,
        password: registerData.password,
        email: registerData.email,
        first_name: registerData.firstName,
        last_name: registerData.lastName,
        role: registerData.role
      };
      let response = await axios.post(`${BASE_URL}/register/`, finalData);
      if (response.status === 201) {
        console.log("Successful registration! Log in to access token");
        setIsServerError(false);
        navigate("/login");
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  const loginUser = async (loginData) => {
    try {
      let response = await axios.post(`${BASE_URL}/login/`, loginData);
      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data.access));
        setToken(JSON.parse(localStorage.getItem("token")));
        let loggedInUser = jwtDecode(response.data.access);
        setUser(setUserObject(loggedInUser));
        setIsServerError(false);
        let userRole = await axios.get('http://127.0.0.1:8000/api/auth/', {
        headers: {
          Authorization: "Bearer " + token,
        },
        })
      if(userRole.role === user.role){
        navigate (
          <Route path="/ownerhome" element={<PrivateRoute> <OwnerHome /></PrivateRoute>}/>
        )
      }
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error.toJSON());
      setIsServerError(true);
      navigate("/register");
    }
  };

  const logoutUser = () => {
    if (user) {
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
      navigate("/login");
    }
  };

  const contextData = {
    user,
    token,
    loginUser,
    logoutUser,
    registerUser,
    isServerError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
