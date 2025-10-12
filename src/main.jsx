import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// import './index.css'
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WorklyProvider } from "./contexts/worklyContext.jsx";

import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Profile from "./pages/Profile/Profile.jsx";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ProjectManagement from "./pages/Project/ProjectManagement.jsx";
import ProjectDetails from "./pages/Project/ProjectDetails.jsx";

import Report from "./pages/Report/ReportManagement.jsx";

import TaskManagement from "./pages/Task/TaskManagement.jsx";
import TaskDetails from "./pages/Task/TaskDetails.jsx";

import TeamManagement from "./pages/Team/TeamManagement.jsx";
import TeamDetails from "./pages/Team/TeamDetails.jsx";
import AddTeamMember from "./pages/Team/AddTeamMember.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Login
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "profile", element: <Profile /> },

      // Projects
      { path: "dashboard", element: <Dashboard /> },
      { path: "allProject", element: <ProjectManagement /> },
      { path: "projectDetails/:projectId", element: <ProjectDetails /> },

      // Reports
      { path: "reports", element: <Report /> },

      // Tasks
      { path: "allTask", element: <TaskManagement /> },
      { path: "taskDetails/:taskId", element: <TaskDetails /> },

      // Teams
      { path: "allTeam", element: <TeamManagement /> },
      { path: "teamDetails/:teamId", element: <TeamDetails /> },
      { path: "addTeamMember", element: <AddTeamMember /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WorklyProvider>
      <RouterProvider router={router} />
    </WorklyProvider>
  </StrictMode>
);
