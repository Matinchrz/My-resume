import { ReactNode } from "react";

interface CardProps {
  link: string;
  img: ReactNode;
  title: string;
  des: ReactNode;
  disabled: boolean;
}

const Card: React.FC<CardProps> = ({ link, title, des, img, disabled }) => {
  return (
    <div className="flex flex-col gap-y-2 h-[90%] rounded-xl w-[30%] justify-between items-center bg-white bg-opacity-60 p-4 py-5 my-8 min-w-[200px] min-h-[330px] max-h-[350px] shadow-2xl">
      <div
        className={`${
          disabled === true ? "pointer-events-none w-full" : "w-full"
        }`}
      >
        <a
          href={link}
          className="flex h-full w-full justify-center items-start "
          target="_blank"
        >
          {img}
        </a>
      </div>
      <h3 className="w-full font-bold">{title}</h3>
      {des}
    </div>
  );
};
export default Card;
