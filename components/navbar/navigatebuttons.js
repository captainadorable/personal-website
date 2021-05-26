import "tailwindcss/tailwind.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

export const NavigateButtons = () => {
  
  const [btn1Hover, btn1HoverToggle] = useState(true);
  const [btn2Hover, btn2HoverToggle] = useState(true);
  const [btn3Hover, btn3HoverToggle] = useState(true);
  const [btn4Hover, btn4HoverToggle] = useState(true);

  const navigationButtons = [
    {
      style: { top: 400 + "px", color: "#FDE68A" },
      class: `invisible lg:right-10 lg:visible`,
      hover: btn1Hover,
      hoverToggle: btn1HoverToggle,
      link: "#home",
    },
    {
      style: { top: 440 + "px", color: "#6EDA85" },
      class: `invisible lg:right-10 lg:visible`,
      hover: btn2Hover,
      hoverToggle: btn2HoverToggle,
      link: "#about",
    },
    {
      style: { top: 480 + "px", color: "#C1434B" },
      class: `invisible lg:right-10 lg:visible`,
      hover: btn3Hover,
      hoverToggle: btn3HoverToggle,
      link: "#repos",
    },
    {
      style: { top: 520 + "px", color: "#4F86BF" },
      class: `invisible lg:right-10 lg:visible`,
      hover: btn4Hover,
      hoverToggle: btn4HoverToggle,
      link: "#contact",
    },
  ];

  return (
    <div>
      {navigationButtons.map((button) => (
        <motion.div
          animate={{ fontSize: button.hover ? 20 + "px" : 25 + "px" }}
          onMouseEnter={() => button.hoverToggle(false)}
          onMouseLeave={() => button.hoverToggle(true)}
        >
          <Link href={button.link}>
            <FontAwesomeIcon
              id="navigationButtons"
              icon={faCircle}
              style={button.style}
              className={`cursor-pointer ${button.class}`}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
