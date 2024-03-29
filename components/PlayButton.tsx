import { FaPlay } from "react-icons/fa";

interface PlayButtonProps {}

function PlayButton({}: PlayButtonProps) {
  return (
    <button
      className="
        trasition opacity-0 rounded-full flex items-center
        bg-green-500 p-4 drop-shadow-md translate translatee-y-1/4
        group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110
      "
    >
      <FaPlay className="text-black" />
    </button>
  );
}

export default PlayButton;
