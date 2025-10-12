import { useContext } from "react";
import SearchBox from "../../components/Searchbox/SearchBox";
import "./Dashboard.css";
import WorklyContext from "../../contexts/worklyContext";
import { useNavigate, Link } from "react-router-dom";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import TaskModal from "../../components/TaskModal/TaskModal";
const Dashboard = () => {
  const {
    projectData,
    taskData,
    getRandomProjects,
    getRandomTasks,
    showProjectModal,
    setShowProjectModal,
    setShowTaskModal,
    showTaskModal,
  } = useContext(WorklyContext);
  const navigate = useNavigate();
  console.log(showProjectModal);

  return (
    <>
       {showProjectModal && (
        <ProjectModal onClose={() => setShowProjectModal(false)} />
      )}

       {showTaskModal && (
        <TaskModal onClose={() => setShowTaskModal(false)} />
      )}
      {!showProjectModal && (
        <div>
          <SearchBox />
          <div className="my-4">
            <section className="mb-4">
              <div className="d-flex justify-content-between align-items-center my-4">
                <h2 className="fw-semibold">Projects</h2>
                <div>
                  <Link
                    type="button"
                    className="btn btn-link btn-sm me-2 text-decoration-none"
                    to={`/allProject`}
                  >
                    See all projects<i className="bi bi-arrow-right-short"></i>
                  </Link>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    onClick={() => setShowProjectModal(true)}
                  >
                    <i className="bi bi-plus-lg me-1"></i>Add Projects
                  </button>
                </div>
              </div>
              <div className="row">
                {getRandomProjects(3).map((item) => (
                  <div key={item._id} className="col-md-4 d-flex">
                    <div className="card card-elevated mb-3 flex-fill">
                      <div className="card-body">
                        <span className="badge bg-warning-subtle text-warning project-status-badge">
                          Warning
                        </span>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <div className="d-flex justify-content-between align-items-center my-4">
                <h2 className="fw-semibold">My Tasks</h2>
                <div>
                  <Link
                    type="button"
                    className="btn btn-link btn-sm me-2 text-decoration-none"
                    to={`/allTask`}
                  >
                    See all tasks <i className="bi bi-arrow-right-short"></i>
                  </Link>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setShowTaskModal(true)}
                  >
                    <i className="bi bi-plus-lg me-1"></i>Add Task
                  </button>
                </div>
              </div>

              <div className="row">
                {getRandomTasks(3).map((item) => (
                  <div key={item._id} className="col-md-4 d-flex">
                    <div className="card card-elevated mb-3 flex-fill">
                      <div className="card-body">
                        <span
                          className={`badge project-status-badge ${
                            item.status === "To Do"
                              ? "bg-info-subtle text-info"
                              : item.status === "In Progress"
                              ? "bg-warning-subtle text-warning"
                              : item.status === "Completed"
                              ? "bg-success-subtle text-success"
                              : item.status === "Blocked"
                              ? "bg-danger-subtle text-danger"
                              : "bg-secondary-subtle text-secondary"
                          }`}
                        >
                          {item.status}
                        </span>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="text-secondary mb-1">Due on: </p>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
