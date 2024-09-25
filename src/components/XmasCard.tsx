import { useState, type FC } from "react";

interface Props {
  id: number;
  content: string;
}

const XmasCard: FC<Props> = ({ id, content }) => {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);
  const handleClick = () => {
    setTrigger(true);
    setTimeout(() => {
      setFlipped(!flipped);
    }, 300);
    setTimeout(() => {
      setTrigger(false);
    }, 450)
  }

  return (
    <div
    className={`${trigger && "animate-flip"} relative w-1/5 h-40 border-2 border-accent rounded-lg shadow-lg hover:-translate-y-3 ease-linear duration-100 cursor-pointer overflow-hidden`}
    onClick={handleClick}
    >
      {/* Front Card */}
      <div className={`${flipped ? "hidden" : ""} font-bold w-full h-full bg-gradient-to-br from-burgundy to-white flex justify-center items-center`}>
        {id}
      </div>
      {/* Back Card */}
      <div className={`${flipped ? "" : "hidden"} absolute top-0 font-bold w-full h-full flex justify-center items-center`}>
        {content}
      </div>
    </div>
  );
};

export default XmasCard;