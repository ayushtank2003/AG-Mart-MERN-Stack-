// authContext.js
import { createContext, useState, useContext } from "react";
import { loginService, signupService } from "../../api/apiServices";
import { notify } from "../../utils/utils";

// Step 1: Create the context
export const AuthContext = createContext();

// Step 2: Create the provider component
const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );
  const [loggingIn, setLoggingIn] = useState(false);
  const [signingUp, setSigningUp] = useState(false);

  const signupHandler = async ({ username = "", email = "", password = "" }) => {
    setSigningUp(true);
    try {
      const response = await signupService(username, email, password);
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem("userInfo", JSON.stringify(response?.data?.createdUser));
        setToken(response?.data?.encodedToken);
        setUserInfo(response?.data?.createdUser);
        notify("success", "Signed Up Successfully!!");
      }
    } catch (err) {
      console.error(err);
      notify(
        "error",
        err?.response?.data?.errors
          ? err?.response?.data?.errors[0]
          : "Some Error Occurred!!"
      );
    } finally {
      setSigningUp(false);
    }
  };

  const loginHandler = async ({ email = "", password = "" }) => {
    setLoggingIn(true);
    try {
      const response = await loginService(email, password);
      console.log({ response });
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem("userInfo", JSON.stringify(response?.data?.foundUser));
        setToken(response?.data?.encodedToken);
        setUserInfo(response?.data?.foundUser);
        notify("success", "Logged In Successfully!!");
      }
    } catch (err) {
      console.error(err);
      notify(
        "error",
        err?.response?.data?.errors
          ? err?.response?.data?.errors[0]
          : "Some Error Occurred!!"
      );
    } finally {
      setLoggingIn(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken(null);
    setUserInfo(null);
    notify("info", "Logged out successfully!!");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userInfo,
        loggingIn,
        signingUp,
        loginHandler,
        signupHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Step 3: Export the provider and a custom hook for using the context
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};

export default AuthContextProvider;

