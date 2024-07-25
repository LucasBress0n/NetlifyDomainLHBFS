import { useState } from "react";

export const HomeView = () => {
  const [hello, setHello] = useState([]);

  return (
    <main>
      <button
        onClick={() => {
          const copy = [...hello];
          copy.push("Hello!");
          setHello(copy);
        }}
      >
        Add Hello!
      </button>
      {state.map((sObj) => {
        return <p>{sObj}</p>;
      })}
    </main>
  );
};
