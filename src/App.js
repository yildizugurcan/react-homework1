import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  async function getData(id) {
    const firstRequest = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log("first", firstRequest);
    console.log("data", firstRequest.data);
    // const test = firstRequest.data;
    const secondRequest = await axios(
      `https://jsonplaceholder.typicode.com/posts?id=${2}`
    );
    console.log("second", secondRequest);
    console.log("second11", secondRequest.data);
    firstRequest.data.posts = secondRequest.data;
    console.log("1111111", firstRequest);
    // console.log("test", test);
  }

  getData(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
