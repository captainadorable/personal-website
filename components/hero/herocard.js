import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tilt from "react-tilt";

const avatarURL = "https://avatars.githubusercontent.com/u/66172845";

export const HeroCard = ({ status, statusColor, spotify }) => {
  return (
    <div className="flex flex-col space-x-0 lg:space-x-8 self-center lg:flex-row">
      <div className="flex flex-col">
        <Tilt options={{ reverse: false, scale: 1.05 }} className="self-center">
          <img
            className="rounded-full image-disable self-center lg:self-start"
            src={avatarURL}
            alt="Avatar"
            width="200"
            height="200"
          />
        </Tilt>
        <div className="pt-4 flex flex-row items-center justify-center space-x-2 pb-8">
          <Tippy
            content={
              status == "dnd"
                ? "Do Not Disturb"
                : status[0].toUpperCase() + status.substring(1)
            }
          >
            <div>
              <FontAwesomeIcon
                className=""
                icon={faCircle}
                style={{ color: statusColor }}
              />
            </div>
          </Tippy>
          <Tippy
            content={
              spotify
                ? `${spotify.song} by ${spotify.artist}`
                : status[0].toUpperCase() + status.substring(1)
            }
          >
            <div>
              <p className="text-gray">
                {spotify
                  ? "Listening to Spotify"
                  : status == "dnd"
                  ? "Do Not Disturb"
                  : status[0].toUpperCase() + status.substring(1)}
              </p>
            </div>
          </Tippy>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="text-2xl text-center lg:text-left lg:text-4xl">
          Tahir Yusuf ESER
        </div>
        <div className="px-4 text-md w-96 text-gray-300 text-center lg:text-left lg:text-lg lg:px-0">
          Hello, I'm Yusuf. I have started coding about{" "}
          {new Date().getFullYear() - 2018} years ago. I'm interested in{" "}
          <Tippy content="Click me!">
            <a href="https://www.python.org">
              <span className="text-yellow-200 cursor-pointer">Python</span>
            </a>
          </Tippy>
          ,{" "}
          <Tippy content="Click me!">
            <a href="https://www.javascript.com/">
              <span className="text-red-300 cursor-pointer">JavaScript</span>
            </a>
          </Tippy>
          ,{" "}
          <Tippy content="Click me!">
            <a href="https://tr.wikipedia.org/wiki/C_Sharp">
              <span className="text-indigo-300 cursor-pointer">C#</span>
            </a>
          </Tippy>
        </div>
        <div className="px-4 text-md w-96 text-gray-300 text-center lg:text-left lg:text-lg lg:px-0">
          I usually work on different projects. Sometimes I make games with{" "}
          <span className="text-green-300">unity</span> or{" "}
          <span className="text-yellow-200">pygame</span>, sometimes I make a{" "}
          <span className="text-red-300">website</span>!
        </div>
      </div>
    </div>
  );
};
