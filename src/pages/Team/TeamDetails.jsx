import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import WorklyContext from "../../contexts/worklyContext";
const TeamDetails = () => {
  const { teamId } = useParams();
  const { teamData, taskData } = useContext(WorklyContext);
  const selectedTeam = teamData?.teams?.find((team) => team._id === teamId);
  const selectedTask = taskData?.tasks?.filter(
    (task) => task.team._id === teamId
  );

  if (!selectedTeam) {
    return <p>Loading lead details...</p>;
  }

   const uniqueMembers = Array.from(
    new Map(
      selectedTask
        ?.flatMap((task) => task.owners || [])
        .map((owner) => [owner._id, owner])
    ).values()
  );
  return (
    <>
      <Link
        className="text-primary fw-semibold text-decoration-none"
        to={"/allTeam"}
      >
        <i className="bi bi-arrow-left-short"></i> Back to Teams
      </Link>
      <div class="card my-5">
        <h5 class="card-header">{selectedTeam.name}</h5>
        <div class="card-body">
          <p class="card-title text-secondary">{selectedTeam.description}</p>
          <h6 class="card-text text-secondary">Members</h6>
           <ul>
            {uniqueMembers && uniqueMembers.length > 0 ? (
              uniqueMembers.map((owner) => (
                <li key={owner._id}>{owner.name}</li>
              ))
            ) : (
              <li>No members assigned to this team.</li>
            )}
          </ul>
          <Link to={`/createTeam`} class="btn btn-primary">
            {" "}
            <i className="bi bi-plus-lg me-1"></i>Add Member
          </Link>
        </div>
      </div>
    </>
  );
};
export default TeamDetails;
