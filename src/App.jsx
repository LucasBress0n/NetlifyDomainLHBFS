import { useEffect, useState } from "react";
import "./App.css";
import { HomeView } from "./Views/HomeViewFolder/HomeView";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>App!</h1>
      <HomeView />
    </div>
  );
}

export default App;
