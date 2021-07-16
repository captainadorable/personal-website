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

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const submitMessage = (event) => {
    event.preventDefault();
    
    const username = event.target.elements.userName.value;
    const useremail = event.target.elements.userEmail.value;
    const usermessage = event.target.elements.userMessage.value;

    if (!username || !usermessage || !useremail) {
      return toast.error("Please complete all fields! ❌");
    }

    window.open(
      `mailto:yusufeser446@gmail.com?body=${encodeURIComponent(
        `Hello, I'm ${username} (${useremail})\n\n${usermessage}`
      )}`
    );
    toast.success("Thanks! Your message will be answered! 💜");
  };

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
    <div
      className="pb-24 pt-36 flex justify-center items-center content-center lg:pb-36"
      id="contact"
    >
      <div className="flex flex-col space-y-24 text-center lg:text-left lg:flex-row lg:space-y-0 lg:space-x-16">
        <div className="flex flex-col space-y-8">
          <div className="text-4xl text-center lg:text-6xl lg:text-left">
            Contact ☎️
          </div>
          <div className="text-lg text-gray-300 px-8 lg:text-xl lg:px-0">
            You can contact with me{" "}
            <span className="text-indigo-400">Discord</span>,{" "}
            <span className="text-pink-400">Instagram</span>,{" "}
            <span className="text-yellow-200">GitHub</span> or{" "}
            <span className="text-green-200">Email!</span>
          </div>
          <div className="flex flex-row space-x-8 text-4xl self-center lg:text-6xl">
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
        <form onSubmit={submitMessage}>
          <div className="flex flex-col space-y-4">
            <p className="text-2xl pb-4">Send me a message! 📧</p>
            <div className="flex flex-row space-x-2 self-center">
              <div className="flex flex-col">
                <input
                  name="userName"
                  type="text"
                  className="form-input rounded-xl text-black h-12 w-36 lg:w-48"
                  placeholder="Your name"
                ></input>
              </div>
              <div className="flex flex-col">
                <input
                  name="userEmail"
                  type="email"
                  className="form-input rounded-xl text-black h-12 w-36 lg:w-48"
                  placeholder="Your email"
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <textarea
                name="userMessage"
                className="form-textarea rounded-md self-center text-black h-24 w-72 lg:w-96"
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              className="rounded-2xl bg-purple-600 self-center text-white h-16 w-72 lg-w-96"
              style={{ fontFamily: "Roboto " }}
            >
              Send to me!
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
