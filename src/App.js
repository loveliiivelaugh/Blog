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
      </header>
    </div>
  );
}

export default App;
