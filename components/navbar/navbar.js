import "tailwindcss/tailwind.css";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEllipsisV,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { NavigateButtons } from "./navigatebuttons";

export const Navbar = () => {
  const [navButtonsShow, setNavButtonsShow] = useState(true)
  const [sidebarOpen, sidebarOpenToggle] = useState(false);
  const [hash, setHash] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const navigation = [
    { link: "/#home", text: "Home" },
    { link: "/#about", text: "About" },
    { link: "/#repos", text: "Repos" },
    { link: "/#contact", text: "Contact" },
    { link: "/blog", text: "Blog" },
  ];

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

  useEffect(() => {
    setHash(window.location.pathname != '/' ? window.location.pathname : window.location.hash ? `/${window.location.hash}` : "#");

    setNavButtonsShow(window.location.pathname == '/' ? true : false)
    console.log()

  });

  return (
    <div>
      <div className={navButtonsShow ? 'visible' : 'hidden'}>
        <NavigateButtons />
      </div>
      <div className="flex justify-center pt-4 lg:pt-8" id="home">
        <div className="h-12 flex flex-row justify-center py-4 space-x-16 lg:hidden">
          <div className="text-lg">CaptAdorable</div>
          <div className="lg:hidden">
            <button
              onClick={() => sidebarOpenToggle(true)}
              className="focus:outline-none pl-24"
            >
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:justify-around lg:space-x-8">
          <div className="text-xl pr-64">CaptAdorable</div>
          {navigation.map((nav) => (
            <div key={nav.text}>
              <Link href={nav.link}>
                <span
                  className={
                    hash == nav.link
                      ? "cursor-pointer text-yellow-200"
                      : "cursor-pointer text-gray-300"
                  }
                >
                  {nav.text}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${sidebarOpen ? "relative z-50" : "hidden relative z-50"}}`}
        style={{ zIndex: 2 }}
      >
        <div className="w-4/6">
          <div
            onClick={() => sidebarOpenToggle(false)}
            className="fixed inset-0 bg-white dark:bg-gray-700 opacity-25"
          />
          <nav
            className="fixed top-0 left-0 bottom-0 flex flex-col items-center w-5/6 max-w-sm py-8 px-4"
            style={{ backgroundColor: "#181E2B" }}
          >
            <div className="flex flex-row justify-center space-x-36">
              <div className="text-lg self-center">CaptAdorable</div>
              <button onClick={() => sidebarOpenToggle(false)}>
                <FontAwesomeIcon icon={faTimesCircle} className="self-center" />
              </button>
            </div>
            <div className="flex flex-col justify-start self-start pt-12 pl-8 space-y-4">
              {navigation.map((nav) => (
                <div key={nav.text}>
                  <Link href={nav.link}>
                    <span
                      className={
                        hash == nav.link
                          ? "cursor-pointer text-white"
                          : "cursor-pointer text-gray-400"
                      }
                    >
                      {nav.text}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-row space-x-2 text-lg pt-96 pb-4">
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
            <div className="text-sm text-gray-300 text-center px-8">
              <span className="text-white">&#169;</span> All rights reserved.
              Maded by <span className="text-yellow-200">Yusuf Eser</span> using{" "}
              <span className="text-indigo-300">Next.js</span> and{" "}
              <span className="text-purple-400">Tailwind.css</span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
