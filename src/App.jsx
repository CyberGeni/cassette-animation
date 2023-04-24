import "./App.css";
import { useState } from "react";
import brownSelector from "./assets/brown-selector.png";
import greenSelector from "./assets/green-selector.png";
import purpleSelector from "./assets/purple-selector.png";

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
        className={`min-h-screen min-w-screen ${
          theme === "purple"
            ? "gif-bg"
            : theme === "green"
            ? "bg-[#073222]"
            : theme === "brown"
            ? "bg-[#77321C]"
            : ""
        }`}
      >
        <section></section>
        <div
          onClick={changeTheme}
          className={`px-5 pr-2.5 py-2.5 w-fit bg-[#0d0d0d]/20 border-[3px] border-white/[0.08] rounded-full flex items-center justify-between space-x-3 backdrop-blur-sm`}
        >
          <span className="text-md text-white tracking-wide font-['Inter']">COLOR</span>
          <div
            className={`px-2 pr-1.5 text-2xl w-fit rounded-full flex items-center space-x-1 ${
              theme === "purple"
                ? "bg-[#F9D4FF]"
                : theme === "green"
                ? "bg-[#88FFD4]"
                : theme === "brown"
                ? "bg-[#FFDCD9]"
                : ""
            }`}
          >
            <span className="uppercase font-['Tropical_Asian_DEMO'] text-[#0D041D]">
              {theme}
            </span>
            <img
            className="relative z-10 w-6 h-6"
              src={
                theme === "purple"
                  ? purpleSelector
                  : theme === "green"
                  ? greenSelector
                  : theme === "brown"
                  ? brownSelector
                  : ""
              }
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
