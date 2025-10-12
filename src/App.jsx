import "./App.css";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import { useContext, useEffect } from "react";
import WorklyContext from "./contexts/worklyContext";
import { Outlet } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard";
import { useNavigate, useLocation } from "react-router-dom";
import worklyLogo from "./assets/worklyLogo.jpeg";

function App() {
  const { setToken } = useContext(WorklyContext);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("adminToken");
  //   if (!storedToken) {
  //     navigate("/login");
  //     setToken(null)
  //   } else {
  //     if (location.pathname === "/") {
  //       navigate("/dashboard");
  //     }else{
  //       navigate(location)
  //     }
  //     setToken(storedToken)
  //   }
  // }, [navigate, setToken]);

  useEffect(() => {
  const storedToken = localStorage.getItem("adminToken");
  if (!storedToken) {
   if (location.pathname !== "/signup" && location.pathname !== "/login") {
      navigate("/login");
      setToken(null);
    }
  } else {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
    setToken(storedToken);
  }
}, [navigate, setToken, location.pathname]);

  const { closeSideBar, setCloseSideBar } = useContext(WorklyContext);

  return (
    <div>
      <div className="d-flex layout">
        <aside className={`section-sidebar ${closeSideBar ? "open" : ""}`}>
          <SidebarNav />
        </aside>

        <section className="container mx-4">
          <div className="my-3 d-flex justify-content-between align-items-center">
            <span className="sidebar-hamburger">
              <button
                className={`btn btn-light btn-sidebar mx-4 ${
                  closeSideBar ? "open" : ""
                }`}
                onClick={() => setCloseSideBar(!closeSideBar)}
              >
                {closeSideBar ? (
                  <i className="bi bi-x"></i>
                ) : (
                  <i className="bi bi-list"></i>
                )}
              </button>
            </span>
            <img
              className="d-block d-md-none"
              height={30}
              width={30}
              src={worklyLogo}
              alt="workly logo"
            />
          </div>
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default App;
