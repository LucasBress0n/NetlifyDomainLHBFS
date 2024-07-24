import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>App!</h1>
      <button
        onClick={() => {
          const copy = [...state];
          copy.push("Hello!");
          setState(copy);
        }}
      >
        Add Hello!
      </button>
      {state.map((sObj) => {
        return <p>{sObj}</p>;
      })}
    </div>
  );
}

export default App;
