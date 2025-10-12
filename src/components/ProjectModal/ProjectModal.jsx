import { useContext } from "react";
import WorklyContext from "../../contexts/worklyContext";

const ProjectModal = ({ onClose }) => {
  const { addProject, setAddProject, createProject, projectHandleChange } = useContext(WorklyContext);
  return (
    <>
      {/* Modal */}
      <div className="modal show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Project</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="project-name" className="col-form-label">
                    Project Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="project-name" value={addProject.name} onChange={projectHandleChange} name="name"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="project-desc" className="col-form-label">
                    Description:
                  </label>
                  <textarea className="form-control" id="project-desc" value={addProject.description}
                    onChange={projectHandleChange} name="description"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={createProject}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
      ></div>
    </>
  );
};

export default ProjectModal;
