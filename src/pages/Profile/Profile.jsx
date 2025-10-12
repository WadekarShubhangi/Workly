import { useContext } from "react";
import WorklyContext from "../../contexts/worklyContext";
const Profile = () => {
  const { profileData, profileLoading } = useContext(WorklyContext);
 if (profileLoading) return <p>Loading profile...</p>;
  return (
    <div className="">
      <h2>My Profile</h2>
      <div className="card my-4">
        <div className="card-header">{profileData.name}</div>
        <div className="card-body">
        <p className="card-text">
           {profileData._id}
          </p>
          <p className="card-text">
            {profileData.email}
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
