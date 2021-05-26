import "tailwindcss/tailwind.css";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const socialMedia = [
    {
      title: "GitHub",
      icon: faGithub,
      url: "https://github.com/captainadorable",
    },
    {
      title: "CaptAdorable#2615",
      icon: faDiscord,
      url: "https://discord.gg/QxzfdtaPQk",
    },
    {
      title: "Instagram",
      icon: faInstagram,
      url: "https://www.instagram.com/captadorable_/",
    },
    {
      title: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/captadorables",
    },
    { title: "Email", icon: faEnvelope, url: "mailto:yusufeser446@gmail.com" },
  ];

  return (
    <div className="flex flex-col justify-center pb-16 space-y-8 lg:space-y-0 lg:flex-row">
      <div className="text-md text-gray-300 text-center px-8">
        <span className="text-white">&#169;</span> All rights reserved. Maded by{" "}
        <span className="text-yellow-200">Yusuf Eser</span> using{" "}
        <span className="text-indigo-300">Next.js</span> and{" "}
        <span className="text-purple-400">Tailwind.css</span>
      </div>
      <div className="flex flex-row self-center space-x-4 lg:pl-36">
        {socialMedia.map((item) => (
          <div key={item.title}>
            <a href={item.url} target="blank">
              <Tippy content={item.title}>
                <div>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
              </Tippy>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
