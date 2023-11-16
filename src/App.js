// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <div className="header bg-dark "> */}
      <div className="row">
        <div className="brand my-1">
          <div>
            <h1> eStore</h1>
            <div className="inp-container p-0 my-4 w-50 h-25 bg-pink">
              <div className="form-control">
                <button>
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
