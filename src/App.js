import logo from './logo.svg';
import './App.css';
import { Amplify } from "aws-amplify";
import Dashboard from './components/dashboard/Dashboard';
import LineCharts from './components/LineCharts';
import { Box } from '@mui/material';

Amplify.configure({
  "profile": "default",
  "envName": "amplify"
});

function App() {
  return (
    <Dashboard>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Blog Incoming
          </p>
          <Box sx={{ width: 400, height: 400 }}>
            <LineCharts />
          </Box>
        </header>
      </div>
    </Dashboard>
  );
}

export default App;
