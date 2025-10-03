import { useState } from "react";
import { createContext } from "react";
const WorklyContext = createContext();
export default WorklyContext;

export function WorklyProvider({ children }) {
 const [closeSideBar, setCloseSideBar] = useState(false);

  return (
    <WorklyContext.Provider
      value={{closeSideBar, setCloseSideBar}}
    >
      {children}
    </WorklyContext.Provider>
  );
}