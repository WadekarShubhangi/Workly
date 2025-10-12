import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Team.css";
import WorklyContext from "../../contexts/worklyContext";

const TeamManagement = () => {
  const navigate = useNavigate();
  const { teamData, taskData } = useContext(WorklyContext);
  // if (!teamData || taskData) return <p>Loading Team Data....</p>
  return (
    <section className="team-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-semibold">Teams</h4>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => navigate("/createTeam")}
        >
          <i className="bi bi-plus-lg me-1"></i>New Team
        </button>
      </div>

      <div className="row">
        {teamData?.teams?.map((team) => {
          const teamMembers =
            taskData?.tasks
              ?.filter((task) => task.team._id === team._id)
              .flatMap((task) => task.owners) || [];

          const uniqueMembers = teamMembers.filter(
            (member, index, self) =>
              index === self.findIndex((m) => m._id === member._id)
          );

          return (
            <Link key={team._id} className="col-md-4 col-12 d-flex my-3 text-decoration-none" to={`/teamDetails/${team._id}`}>
              <div className="card card-elevated flex-fill">
                <div className="card-body">
                  <h6 className="card-title">{team.name}</h6>
                  <div className="avatars">
                    {uniqueMembers.slice(0, 3).map((member, index) => (
                      <div key={index} className="avatar">
                        {member.name ? member.name[0].toUpperCase() : "?"}
                      </div>
                    ))}
                    {uniqueMembers.length > 3 && (
                      <div className="avatar extra">
                        +{uniqueMembers.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TeamManagement;
