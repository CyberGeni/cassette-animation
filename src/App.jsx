import "./App.css";
import { useState, useEffect } from "react";

import purpleSelector from "./assets/purple-selector.png";
import greenSelector from "./assets/green-selector.png";
import brownSelector from "./assets/brown-selector.png";

import purpleGrainy from "./assets/purple-grainy-bg.svg";
import greenGrainy from "./assets/green-grainy-bg.svg";
import brownGrainy from "./assets/brown-grainy-bg.svg";

import purpleScrew from "./assets/purple-screw.svg";
import greenScrew from "./assets/green-screw.svg";
import brownScrew from "./assets/brown-screw.svg";

import greenFlowerleft from "./assets/green-flower-left.png";
import greenFlowerRight from "./assets/green-flower-right.png";
import greenGif from "./assets/ducky.gif";

import brownFlower from "./assets/flower.gif";

import purpleRoller from "./assets/purple-rolling-thingy.png";
import greenRoller from "./assets/green-rolling-thingy.png";
import brownRoller from "./assets/brown-rolling-thingy.png";

import play from "./assets/play.svg";
import pause from "./assets/pause.svg";
import next from "./assets/next.svg";
import prev from "./assets/prev.svg";
import tune from "./assets/tune.svg";

function App() {
  const [theme, setTheme] = useState("purple");
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState(new Audio());

  function changeTheme() {
    if (theme === "purple") {
      setTheme("green");
    } else if (theme === "green") {
      setTheme("brown");
    } else {
      setTheme("purple");
    }
  }

  useEffect(() => {
    song.src = 'src/assets/unavailable.mp3';
    song.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      song.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);
  const handlePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };
  const playAudio = () => {
    song.play();
    setIsPlaying(true);
  };
  
  const pauseAudio = () => {
    song.pause();
    setIsPlaying(false);
  };
  // const client_id = "72e3fa1b9b6d4c07881e562e8b87a16d";
  // const client_secret = "e852d8ed23564036b8765071a9abf722";
  // // axios({
  //   method: 'post',
  //   url: 'https://accounts.spotify.com/api/token',
  //   params: {
  //     grant_type: 'client_credentials'
  //   },
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
  //   }
  // })
  // .then(response => {
  //   const access_token = response.data.access_token;
  //   console.log(access_token);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

  // useEffect(() => {
  //   fetch(
  //     `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=AJR&album=Ok+Orchestra&format=json`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.album.tracks.track);
  //       const song = data.album.tracks.track[1].url;
  //       console.log(song)
  //       setCurrentSong(song);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

 
  return (
    <>
      <main
        className={`relative overflow-hidden min-h-screen min-w-screen ${
          theme === "purple"
            ? "relative before:contents[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[-1]  before:bg-[url('./assets/shooting-stars.gif')] before:bg-cover before:bg-center before:hue-rotate-[70deg] before:saturate-[1.4] before:brightness-[0.8]"
            : theme === "green"
            ? "bg-[#073222]"
            : theme === "brown"
            ? "bg-[#77321C]"
            : ""
        }`}
      >
        <audio src={song} />
        {/* background */}
        <div>
          {theme === "green" ? (
            <div className="">
              <img
                className={`absolute w-72 bottom-5 -left-36`}
                src={greenFlowerleft}
                alt=""
              />
              <img
                className={`absolute w-48 -right-28 top-5 `}
                src={greenFlowerRight}
                alt=""
              />
              <div className="absolute flex justify-center items-center w-screen h-screen">
                <img
                  className={`absolute w-64 sm:w-72 md:w-80 lg:w-96 mb-96 md:mb-[30rem] hue-rotate-[114deg] saturate-[0.8] brightness-[1]`}
                  src={greenGif}
                  alt=""
                />
              </div>
            </div>
          ) : theme === "brown" ? (
            <div className="absolute flex justify-center items-center w-screen h-screen">
              <img
                className="absolute sm:w-[40rem] md:w-[45rem] lg:w-[50rem]"
                src={brownFlower}
                alt=""
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {/* cassette section*/}
        <section className="transition-all w-screen h-screen flex items-center justify-center">
          {/* main player */}
          <div
            className={`relative shadow-2xl p-1 transition-colors w-11/12 sm:w-5/6 max-w-lg lg:max-w-xl h-fit rounded-3xl bg-gradient-to-br ${
              theme === "purple"
                ? "from-[#D97FFF] to-[#5D177A]"
                : theme === "green"
                ? "from-[#D2EFF3] to-[#105B40]"
                : theme === "brown"
                ? "from-[#FFDCD9] to-[#6C2812]"
                : ""
            }`}
          >
            <div className="absolute top-0 left-0 w-[183%] sm:w-[184%] lg:w-[186%] h-full grid grid-cols-2 px-3 md:px-5 py-4  sm:py-5 md:pt-6 place-content-between ">
              <img
                className="w-5 h-5 object-cover"
                src={
                  theme === "purple"
                    ? purpleScrew
                    : theme === "green"
                    ? greenScrew
                    : theme === "brown"
                    ? brownScrew
                    : ""
                }
                alt=""
              />
              <img
                className="w-5 h-5 object-cover"
                src={
                  theme === "purple"
                    ? purpleScrew
                    : theme === "green"
                    ? greenScrew
                    : theme === "brown"
                    ? brownScrew
                    : ""
                }
                alt=""
              />
              <img
                className="w-5 h-5 object-cover"
                src={
                  theme === "purple"
                    ? purpleScrew
                    : theme === "green"
                    ? greenScrew
                    : theme === "brown"
                    ? brownScrew
                    : ""
                }
                alt=""
              />
              <img
                className="w-5 h-5 object-cover"
                src={
                  theme === "purple"
                    ? purpleScrew
                    : theme === "green"
                    ? greenScrew
                    : theme === "brown"
                    ? brownScrew
                    : ""
                }
                alt=""
              />
            </div>
            <div
              className={`w-full h-full p-[22px] sm:p-7 md:p-8 lg:p-9 bg-center bg-cover bg-no-repeat rounded-[22px] ${
                theme === "purple"
                  ? "bg-[#301660] bg-[url('./assets/purple-pattern-bg.svg')]"
                  : theme === "green"
                  ? "bg-[#125c41] bg-[url('./assets/green-pattern-bg.svg')]"
                  : theme === "brown"
                  ? "bg-[#541f0f] bg-[url('./assets/brown-pattern-bg.svg')]"
                  : ""
              }`}
            >
              {/* cassette screen */}
              <div className="space-y-1">
                <div className="relative ">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      theme === "purple"
                        ? purpleGrainy
                        : theme === "green"
                        ? greenGrainy
                        : theme === "brown"
                        ? brownGrainy
                        : ""
                    }
                    alt=""
                  />
                  <div className="absolute top-0 flex items-center justify-center h-full w-full z-50 ">
                    <h1 className="absolute top-1 md:top-1.5 lg:top-3 font-default text-4xl sm:text-5xl md:text-6xl">
                      TODAY&apos;S MIXTAPE
                    </h1>
                    {/* controls */}
                    <div
                      className={`border-2 border-black w-4/5 sm:w-[70%] flex justify-between p-1 sm:p-3 rounded-full ${
                        theme === "purple"
                          ? "bg-[#1D0C3C]"
                          : theme === "green"
                          ? "bg-[#156B4C]"
                          : theme === "brown"
                          ? "bg-[#541F0E]"
                          : ""
                      }`}
                    >
                      <img
                        className="w-[36px] sm:w-[46px]"
                        src={
                          theme === "purple"
                            ? purpleRoller
                            : theme === "green"
                            ? greenRoller
                            : theme === "brown"
                            ? brownRoller
                            : ""
                        }
                        alt=""
                      />
                      <img className="w-4" src={prev} alt="" />
                      <img onClick={handlePlay} className="w-4" src={isPlaying ? pause : play} alt="" />
                      <img className="w-4" src={next} alt="" />
                      <img
                        className="w-[36px] sm:w-[46px]"
                        src={
                          theme === "purple"
                            ? purpleRoller
                            : theme === "green"
                            ? greenRoller
                            : theme === "brown"
                            ? brownRoller
                            : ""
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="relative flex  justify-center bg-black rounded-full text-white text-center py-1.5 md:py-2">
                  <img
                    className="absolute w-4 md:w-5 top-2.5 left-4 bg-black"
                    src={tune}
                    alt=""
                  />
                  <span className="text-center">UNAVAILABLE - Davido ft. Musa Keys</span>
                  <img
                    className="absolute w-4 md:w-5 top-2.5 right-4 bg-black transform scale-x-[-1]"
                    src={tune}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* theme changer */}
        <div className="w-screen">
          <div
            className={`absolute h-fit bottom-16 right-0 left-0 mx-auto px-5 pr-2.5 py-2.5 w-fit bg-[#0d0d0d]/20 border-[3px] border-white/[0.08] rounded-full flex items-center justify-between space-x-3 backdrop-blur-sm`}
          >
            <span className="text-md text-white tracking-wide font-['Inter']">
              COLOR
            </span>
            <div
              onClick={changeTheme}
              className={`hover:cursor-pointer px-2 pr-1.5 text-2xl w-[87px] rounded-full flex items-center justify-between space-x-1 ${
                theme === "purple"
                  ? "bg-[#F9D4FF]"
                  : theme === "green"
                  ? "bg-[#88FFD4]"
                  : theme === "brown"
                  ? "bg-[#FFDCD9]"
                  : ""
              }`}
            >
              <span className="uppercase font-default text-[#0D041D] text-center">
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
        </div>
      </main>
    </>
  );
}

export default App;
