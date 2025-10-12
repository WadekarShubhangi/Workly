import React, { useContext } from "react";
import { useNavigate , Link} from "react-router-dom";

import WorklyContext from "../../contexts/worklyContext";

const ProjectManagement = () => {
  const navigate = useNavigate();
  const { projectData } = useContext(WorklyContext);
  console.log(projectData);
  if (!projectData) return <p>Loading Projects...</p>;
  

  return (
    <section className="team-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-semibold">Projects</h2>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => navigate("/createProject")}
        >
          <i className="bi bi-plus-lg me-1"></i>New Project
        </button>
      </div>

      <div className="row">
        {projectData?.projects?.map((item) => (
          <Link key={item._id} className="col-md-4 col-12 d-flex my-3 text-decoration-none" to={`/projectDetails/${item._id}`}>
            <div className="card card-elevated flex-fill ">
              <div className="card-body">
                <h6 className="card-title">{item.name}</h6>
                <p className="card-text text-secondary fs-6">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectManagement;
