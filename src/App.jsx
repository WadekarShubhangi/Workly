import "./App.css";
import LoginModel from "./components/LoginModel/LoginModel";
import SignupModel from "./components/SignupModel/SignupModel";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import SearchBox from "./components/Searchbox/SearchBox";
import { useContext } from "react";
import WorklyContext from "./contexts/worklyContext";
import { Outlet, Link } from "react-router-dom";

function App() {
  const { closeSideBar, setCloseSideBar } = useContext(WorklyContext);

  return (
    <div>
      <div className="d-flex layout">
        <aside className={`section-sidebar ${closeSideBar ? "open" : ""}`}>
          <SidebarNav />
        </aside>

        <section className="container my-3">
          <span className="sidebar-hamburger">
            <button
              className={`btn btn-light btn-sidebar ${
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
          <SearchBox />
          <Outlet />
          {/* Nested routes will render here */}
        </section>
      </div>
    </div>
  );
}

export default App;
