import "tailwindcss/tailwind.css";
import Tilt from "react-tilt";

const gifURL =
  "https://cdn.discordapp.com/attachments/797797010689753120/846078328296177664/final-min.gif";

export const HeroGif = () => {
  return (
    <div className="">
      <Tilt options={{ max: 15, reverse: false, scale: 1.05 }}>
        <img
          className="rounded-2xl image-disable"
          src={gifURL}
          alt="Avatar"
          width="500"
          height="500"
          loading="lazy"
        />
      </Tilt>
    </div>
  );
};
