import SearchBox from "../../components/Searchbox/SearchBox";
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <>
      <SearchBox />
      <div className="my-4">
        <section className="mb-4">
        <h2 className="fw-bold mb-3">Projects</h2>
         <div className="row">
          <div className="col-md-4">
            <div className="card card-elevated mb-3">
              <div className="card-body">
                <span className="badge bg-warning-subtle text-warning project-status-badge">
                  Warning
                </span>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-elevated mb-3">
              <div className="card-body">
                <span className="badge bg-success-subtle text-success project-status-badge">
                  Warning
                </span>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="card card-elevated mb-3">
              <div className="card-body">
                <span className="badge bg-success-subtle text-success project-status-badge">
                  Warning
                </span>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section>
        <h2 className="fw-bold mb-3">My Tasks</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-elevated mb-3">
              <div className="card-body">
                <span className="badge bg-warning-subtle text-warning project-status-badge">
                  Warning
                </span>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-elevated mb-3">
              <div className="card-body">
                <span className="badge bg-success-subtle text-success project-status-badge">
                  Warning
                </span>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="card card-elevated mb-3">
              <div className="card-body">
                <span className="badge bg-success-subtle text-success project-status-badge">
                  Warning
                </span>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      
    </>
  );
};

export default Dashboard;
