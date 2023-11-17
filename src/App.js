// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header bg-dark ">
        <div className="row">
          <div className="brand my-1">
            <h1> eStore</h1>
          </div>
          <div className="inp-container  p-0 my-4 w-50 h-25 bg-white">
            <div className="dropdown m-0 p-0">
              <select className="select-btn w-100 p-0 m-0">
                <option> Men </option>
                <option> Womens </option>
                <option> Kids </option>
              </select>
            </div>
            <input className="form-control" placeholder="Search..." />
            <button>
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
