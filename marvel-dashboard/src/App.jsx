import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  return (
    <div className="App">
      <h1>Boilerplate</h1>
    </div>
  );
}

export default App;
