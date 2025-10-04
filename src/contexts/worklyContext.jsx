import { useState } from "react";
import { createContext } from "react";
const WorklyContext = createContext();
export default WorklyContext;

export function WorklyProvider({ children }) {
  const [closeSideBar, setCloseSideBar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const loginUser = (e) => {
     e.preventDefault();
    console.log("login");
  };

  const signupUser = (e) => {
    e.preventDefault();
    console.log("signup")
  }

  return (
    <WorklyContext.Provider
      value={{
        closeSideBar,
        setCloseSideBar,
        showPassword,
        setShowPassword,
        loginUser, signupUser
      }}
    >
      {children}
    </WorklyContext.Provider>
  );
}
