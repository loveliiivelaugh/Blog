import { Amplify } from "aws-amplify";

import Blog from './components/blog/Blog';

import './App.css';

Amplify.configure({
  "profile": "default",
  "envName": "amplify"
});

function App() {
  return <Blog />
}

export default App;
