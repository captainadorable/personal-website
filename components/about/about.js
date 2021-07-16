import "tailwindcss/tailwind.css";
import Tilt from "react-tilt";
import pythonico from "../../icons/python.svg";
import cssico from "../../icons/css.svg";
import htmlico from "../../icons/html.svg";
import jsico from "../../icons/js.svg";
import unityico from "../../icons/unity.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const aboutText = (
  <div>
    Hello! My name is Yusuf. I was born in{" "}
    <span className="text-indigo-300">Konya</span> and I'm{" "}
    <span className="text-green-200">{new Date().getFullYear() - 2006}</span>{" "}
    years old. I am studying at{" "}
    <span className="text-yellow-300">Sakarya Cevat Ayhan Fen Lisesi</span>.
    <br />
    <br />
    I've been interested in computer since my childhood. I love most computer
    games, but I usually play VALORANT, CSGO. I started coding about{" "}
    {new Date().getFullYear() - 2018} years ago. First I started with{" "}
    <span className="text-yellow-200">Python</span> to learn basics. After a
    while python started to feel boring. And I switched to{" "}
    <span className="text-red-300">JavaScript</span> to make{" "}
    <span className="text-pink-400">Discord Bots</span>. After that I switched{" "}
    <span className="text-green-400">Unity</span> for make games. And now I make
    websites.
    <br />
    <br />
    BTW I am playing guitar. 😎
  </div>
);

export const About = () => {
  const Icons = [
    { ico: pythonico, key: "Python" },
    { ico: cssico, key: "Css" },
    { ico: htmlico, key: "Html" },
    { ico: jsico, key: "Js" },
    { ico: unityico, key: "Unity" },
  ];

  return (
    <div>
      <div
        className="pt-36 flex flex-col justify-center items-center lg:pb-36 lg:pt-48"
        id="about"
      >
        <div className="flex flex-col space-y-8 text-center lg:w-1/2 lg:text-left">
          <div className="text-4xl text-center lg:text-6xl lg:text-left">
            About Me 📖
          </div>
          <div className="text-md text-gray-300 text-center font-sans px-8 lg:text-lg lg:text-left lg:px-0">
            {aboutText}
          </div>
        </div>
        <div className="pt-24 flex flex-col justify-start space-y-4 lg:w-1/2 lg:pt-36">
          <div className="text-4xl self-start lg:text-6xl">My Interests 🔬</div>
        </div>
        <div className="pt-12 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {Icons.map((icon) => (
            <Tilt options={{ max: 15, reverse: false, scale: 1.05 }}>
              <Tippy
                content={icon.key}
                arrow={true}
                duration={0}
                delay={[100, 0]}
                placement="bottom"
              >
                <div
                  key={icon.key}
                  className="flex flex-col justify-evenly items-center w-24 h-24"
                >
                  <img
                    className="image-disable"
                    src={icon.ico}
                    width="100"
                    height="100"
                  ></img>
                </div>
              </Tippy>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};
