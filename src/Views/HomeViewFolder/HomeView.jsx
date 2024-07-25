import { useState } from "react";

export const HomeView = () => {
  const [hello, setHello] = useState([]);

  return (
    <main>
      <button
        onClick={() => {
          const copy = [...hello];
          copy.push("Hello! 12");
          setHello(copy);
        }}
      >
        Add Hello!
      </button>
      {hello.map((sObj) => {
        return <p>{sObj}</p>;
      })}
    </main>
  );
};
