import SearchBox from "../../components/Searchbox/SearchBox";
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <>
      <SearchBox />
      <section className="my-5">
        <h2>Projects</h2>
         <div className="row">
          <div className="col-md-4">
            <div className="card card-elevated">
              <div className="card-body">
                <span class="badge bg-warning-subtle text-warning fw-bold fs-6">
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
            <div className="card card-elevated">
              <div className="card-body">
                <span class="badge bg-success-subtle text-success fw-bold fs-6">
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
          {/* card-elevated */}
          <div className="col-md-4">
            <div className="card card-elevated">
              <div className="card-body">
                <span class="badge bg-success-subtle text-success fw-bold fs-6">
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
      <section className="my-5">
        <h2>My Tasks</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-elevated">
              <div className="card-body">
                <span class="badge bg-warning-subtle text-warning fw-bold fs-6">
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
            <div className="card card-elevated">
              <div className="card-body">
                <span class="badge bg-success-subtle text-success fw-bold fs-6">
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
          {/* card-elevated */}
          <div className="col-md-4">
            <div className="card card-elevated">
              <div className="card-body">
                <span class="badge bg-success-subtle text-success fw-bold fs-6">
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
    </>
  );
};

export default Dashboard;
