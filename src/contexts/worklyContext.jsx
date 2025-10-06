import { useState } from "react";
import { createContext } from "react";
// import useFetch from "../useFetch";
const WorklyContext = createContext();
export default WorklyContext;

export function WorklyProvider({ children }) {
  const [closeSideBar, setCloseSideBar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [token, setToken] = useState();

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

   const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });


  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://workly-backend.vercel.app/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
    console.log(response)
    const data = await response.json();
    if(data){
   localStorage.setItem("adminToken", data.token);
    console.log("login Complete", data, "\n", data.token);
   setLoginData({
         
          email: "",
          password: "",
        });
      
   window.location.reload()
   
    }
 
  };

  const loginHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupUser = async (e) => {
    e.preventDefault();

    fetch("https://workly-backend.vercel.app/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => {
        res.json();
      })

      .then(() => {
        console.log("User added successfully!");

        setSignupData({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.error("Error adding User:", err);
      });
  };

  // const {
  //   data: projectData,
  //   loading: projectLoading,
  //   error: projectError,
  //   refetch: projectRefetch,
  // } = useFetch("https://workly-backend.vercel.app/projects", token);

  const signupHandleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const logout = () => {
   
  localStorage.removeItem("adminToken");
  setToken(null);                      
  console.log("User logged out!");

  window.location.reload()

  }
  // console.log(projectData, projectError, projectLoading, projectRefetch);

  return (
    <WorklyContext.Provider
      value={{
        closeSideBar,
        setCloseSideBar,
        showPassword,
        setShowPassword,
        loginUser,
        signupUser,
        
        token,
        setToken,
       
        signupData,
        signupHandleChange, loginHandleChange, loginData, logout
      }}
    >
      {children}
    </WorklyContext.Provider>
  );
}
