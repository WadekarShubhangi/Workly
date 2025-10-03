import { NavLink } from "react-router-dom";
import "./SidebarNav.css";
import { useContext } from "react";
import WorklyContext from "../../contexts/worklyContext";
const SidebarNav = () => {
  const { setCloseSideBar } = useContext(WorklyContext);
  return (
    <section className="sidebar">
      <div className="sidebar-content">
        <h4 className="brand">Workly</h4>
        <NavLink
          to="/"
          className="nav-link"
          onClick={() => setCloseSideBar(false)}
        ><i class="bi bi-grid-1x2 me-2"></i>
          Dashboard
        </NavLink>

        <NavLink
          to="/allProject"
          className="nav-link"
          onClick={() => setCloseSideBar(false)}
        ><i class="bi bi-grid-3x3-gap me-2"></i>
          Project
        </NavLink>

        <NavLink
          to="/allTeam"
          className="nav-link"
          onClick={() => setCloseSideBar(false)}
        ><i class="bi bi-people me-2"></i>
          Team
        </NavLink>

        <NavLink
          to="/reports"
          className="nav-link"
          onClick={() => setCloseSideBar(false)}
        ><i class="bi bi-bar-chart me-2"></i>
          Reports
        </NavLink>

        <NavLink
          to="/allTask"
          className="nav-link"
          onClick={() => setCloseSideBar(false)}
        ><i class="bi bi-person-workspace me-2"></i>
          Task
        </NavLink>
      </div>
    </section>
  );
};

export default SidebarNav;
