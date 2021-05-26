import "tailwindcss/tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Tilt from "react-tilt";

export const Repos = ({ repos }) => {
  return (
    <div className="pt-24 flex flex-row justify-center items-center lg:pb-8" id="repos">
      <div className="flex flex-col space-y-12">
        <p className="text-4xl text-center lg:text-6xl lg:self-start lg:text-left">
          Repos 😎
        </p>
        <div className="grid grid-cols-1 content-center justify-items-center gap-x-8 gap-y-8 lg:grid-cols-3 md:grid-cols-2">
          {repos.map((repo) => (
            <a href={repo.repoURL}>
              <Tilt options={{ max: 15, reverse: false, scale: 1.05 }}>
                <div className="flex flex-row justify-center items-center space-x-4">
                  <div
                    key={repo.name}
                    className="flex flex-col justify-start w-72 h-40 space-y-4 px-4 py-4 rounded-lg cursor-pointer"
                    style={{backgroundColor: "#303947"}}
                  >
                    <div className="flex flex-row justify-between">
                      <p className="text-md self-start text-blue-400 lg:text-xl">
                        {repo.repoName}
                      </p>
                      <div className="flex flex-row items-center">
                        <p>{repo.repoStars}</p>
                        <div className="pt-1 pl-1">
                          <FontAwesomeIcon
                            icon={faMedal}
                            className="text-yellow-400"
                            style={{fontSize: 16 + "px"}}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 lg:text-lg">{repo.repoDesc}</p>
                  </div>
                </div>
              </Tilt>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
