import "./App.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("purple");

  function changeTheme() {
    if (theme === "purple") {
      setTheme("green");
    } else if (theme === "green") {
      setTheme("brown");
    } else {
      setTheme("purple");
    }
  }

  return (
    <>
      <main
        className={`${
          theme === "purple"
            ? "bg-purple-700"
            : theme === "green"
            ? "bg-green-700"
            : theme === "brown"
            ? "bg-red-500"
            : ""
        }`}
      >
        <h1>Theme: {theme}</h1>
        <button onClick={changeTheme}>Change Theme</button>
      </main>
    </>
  );
}

export default App;
