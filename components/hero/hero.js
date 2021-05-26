import "tailwindcss/tailwind.css";
import { HeroCard } from "./herocard";
import { HeroGif } from "./herogif";

export const Hero = ({ status, statusColor, spotify }) => {
  return (
    <div className="pt-24 flex flex-col justify-center items-center content-center space-x-16 space-y-16 lg:flex-row lg:pt48">
      <div className="self-center">
        <HeroCard status={status} statusColor={statusColor} spotify={spotify} />
      </div>
      <div className="self-center pr-12">
        <HeroGif />
      </div>
    </div>
  );
};
