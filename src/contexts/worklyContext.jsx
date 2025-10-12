import { useState } from "react";
import { createContext } from "react";
import useFetch from "../useFetch";
// import { set } from "mongoose";
const WorklyContext = createContext();
export default WorklyContext;

export function WorklyProvider({ children }) {
  const [closeSideBar, setCloseSideBar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("adminToken") || null
  );
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [addProject, setAddProject] = useState({
    name: "",
    description: "",
  });
  const [addTask, setAddTask] = useState({
    name: "",
    project: "",
    team: "",
    owners: [],
    tags: [],
    timeToComplete: "",
    status: "To Do",
  });

 
    const { data: projectData, refetch: refetchProjects } = useFetch(
    token ? "https://workly-backend.vercel.app/projects" : null,
    token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  );
 
  
 
 const { data: taskData, refetch: refetchTasks } = useFetch(
    token ? "https://workly-backend.vercel.app/tasks" : null,
    token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  );


  const { data: teamData, refetch: refetchTeams } = useFetch(
    token ? "https://workly-backend.vercel.app/teams" : null,
    token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  );

  

  const { data: ownersData, refetch: refetchOwners } = useFetch(
    token ? "https://workly-backend.vercel.app/auth/signup" : null,
    token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  );

  const {
    data: profileData,
    loading: profileLoading,
    refetch: refetchProfile,
  } = useFetch(
    token ? "https://workly-backend.vercel.app/auth/me" : null,
    token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  );

  const loginUser = async (e, navigate) => {
    e.preventDefault();
    console.log("loginData:", loginData);
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

    const data = await response.json();
    if (data && data.token) {
      localStorage.setItem("adminToken", data.token);
      setToken(data.token);
      setLoginData({ email: "", password: "" });
      refetchProjects();
      refetchTeams();
      refetchTasks();
      refetchProfile();
      navigate("/dashboard");
    } else {
      console.error("Login failed:", data);
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

    window.location.reload();
  };

  const projectHandleChange = (e) => {
    const { name, value } = e.target;
    setAddProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createProject = async (e) => {
    e.preventDefault();
    console.log("addProject:", addProject);
    const response = await fetch("https://workly-backend.vercel.app/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addProject),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Project created:", data);
      setAddProject({ name: "", description: "" });
      await refetchProjects();
      setShowProjectModal(false);
    } else {
      console.error("Project creation failed:", data.message || data);
      alert(data.message || "Project creation failed!");
    }
  };

  const taskHandleChange = (e) => {
    const { name, value, multiple, selectedOptions } = e.target;
    const newValue = multiple
      ? Array.from(selectedOptions, (opt) => opt.value)
      : value;
    setAddTask((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const createTask = async (e) => {
    e.preventDefault();
    console.log("addTask:", addTask);
    const response = await fetch("https://workly-backend.vercel.app/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addTask),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Task created:", data);
      setAddTask({
        name: "",
        project: "",
        team: "",
        owners: [],
        tags: [],
        timeToComplete: "",
        status: "",
      });
      await refetchTasks();
      setShowTaskModal(false);
    } else {
      console.error("Task creation failed:", data.message || data);
      alert(data.message || "Task creation failed!");
    }
  };

  function getRandomProjects(count) {
    if (!projectData || !projectData.projects) return [];
    const shuffled = [...projectData.projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  function getRandomTasks(count) {
    if (!taskData || !taskData.tasks) return [];
    const shuffled = [...taskData.tasks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

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
        signupHandleChange,
        loginHandleChange,
        loginData,
        logout,

        projectData,
        profileLoading,

        teamData,
        taskData,
        profileData,
        getRandomProjects,
        getRandomTasks,

        showProjectModal,
        setShowProjectModal,

        addProject,
        setAddProject,
        createProject,
        projectHandleChange,

        setShowTaskModal,
        showTaskModal,
        addTask,
        setAddTask,
        createTask,
        taskHandleChange,

        ownersData,
        refetchOwners,
      }}
    >
      {children}
    </WorklyContext.Provider>
  );
}
