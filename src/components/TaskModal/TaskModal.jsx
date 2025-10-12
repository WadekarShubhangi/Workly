import { useContext, useState } from "react";
import WorklyContext from "../../contexts/worklyContext";

const TaskModal = ({ onClose }) => {
  const {
    addTask,
    setAddTask,
    teamData,
    setTeamData,
    createTask,
    taskHandleChange,
    projectData,
    taskData,
    ownersData,
    refetchOwners,
  } = useContext(WorklyContext);
  const [multiOwners, setMultiOwners] = useState([]);

  console.log("Team Data:", teamData);
console.log("Owners Data:", ownersData);
  console.log("Project Data:", projectData);
  return (
    <>
      {/* Modal */}
      <div className="modal show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Create New Task | Create Moodboard
              </h5>
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
                  <label htmlFor="project" className="col-form-label">
                    Select Project:
                  </label>
                  <select
                    name="project"
                    id="project"
                    className="form-select"
                    value={addTask.project}
                    onChange={taskHandleChange}
                  >
                    <option>Dropdown</option>
                    {projectData?.projects &&
                      projectData.projects.map((project) => (
                        <option key={project._id} value={project._id}>
                          {project.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="task-name" className="col-form-label">
                    Task Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="task-name"
                    name="name"
                    placeholder="Enter Task Name"
                    value={addTask.name}
                    onChange={taskHandleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="team" className="col-form-label">
                    Select Team:
                  </label>
                  <select
                    name="team"
                    id="team"
                    className="form-select"
                    value={addTask.team}
                    onChange={taskHandleChange}
                  >
                    <option>Dropdown</option>
                    {teamData?.teams &&
                      teamData?.teams?.map((team) => (
                        <option key={team._id} value={team._id}>
                          {team.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group mb-3 ">
                  {/* <div>
                    <label htmlFor="dueDate" className="col-form-label">
                      Select Due Date:
                    </label>
                    <input
                      type="date"
                      placeholder="Select Date"
                      id="dueDate" name="dueDate"
                      className="form-control"
                      value={addTask.dueDate || ""}
                      onChange={taskHandleChange}
                    />
                  </div> */}

                  <div className="form-group mb-3">
                    <label htmlFor="owners" className="col-form-label">
                      Select Owners:
                    </label>
                    {/* <input type="text" /> */}
                    <select
                      name="owners"
                      id="owners"
                      className="form-select"
                      value={addTask.owners || []}
                      onChange={taskHandleChange}
                    >
                      <option>Dropdown</option>
                      {ownersData &&
                        ownersData?.map((owner) => (
                          <option key={owner._id} value={owner._id} >
                            {owner.name} 
                          </option>
                        ))}
                    </select>
                   
                  </div>
                  {/* <div>
                    <label htmlFor="estimateTime" className="col-form-label">
                      Estimated Time:
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Time in Days"
                      id="estimateTime"
                      name="timeToComplete"
                      className="form-control"
                      value={addTask.timeToComplete || ""}
                      onChange={taskHandleChange}
                    />
                  </div> */}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={createTask}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  );
};

export default TaskModal;
