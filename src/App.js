import logo from './logo.svg';
import './App.css';
import { Amplify } from "aws-amplify";
import amplifyconfig from './amplify-build-config.json';

Amplify.configure(amplifyconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Blog Incoming
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
