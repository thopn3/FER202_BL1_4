import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col">
          Header content
        </div>
      </div>

      {/* Main */}
      <div className="row">
        <div className="col-sm-2">Left</div>
        <div className="col-sm-10">
          <div className="container-fluid">
            <div className="row">
              <div className="col">Right Header</div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-3">
                <div className="card" style={{width:"100%"}}>
                  <img src="..." className="card-img-top" alt="product 1"/>
                  <div className="card-body">
                    <h3 className="card-title">Product 1</h3>
                    <div className="card-text">Short product description</div>
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card" style={{width:"100%"}}>
                  <img src="..." className="card-img-top" alt="product 1"/>
                  <div className="card-body">
                    <h3 className="card-title">Product 1</h3>
                    <div className="card-text">Short product description</div>
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card" style={{width:"100%"}}>
                  <img src="..." className="card-img-top" alt="product 1"/>
                  <div className="card-body">
                    <h3 className="card-title">Product 1</h3>
                    <div className="card-text">Short product description</div>
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card" style={{width:"100%"}}>
                  <img src="..." className="card-img-top" alt="product 1"/>
                  <div className="card-body">
                    <h3 className="card-title">Product 1</h3>
                    <div className="card-text">Short product description</div>
                    <a href="#" className="btn btn-success">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="row">
        <div className="col-md-4">
          Column 1
        </div>
        <div className="col-md-4">
          Column 2
        </div>
        <div className="col-md-4">
          Column 3
        </div>
      </div>
    </div>
  );
}

export default App;
