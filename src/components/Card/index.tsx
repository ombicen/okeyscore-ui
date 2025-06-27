import React from "react";
import CardHeader from "./CardHeader";
import CardMain from "./CardMain";
import CardFooter from "./CardFooter";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div className="h-fit w-fit flex flex-col bg-blue-700 pb-1 rounded-2xl ">
    <div className={`bg-blue-600 rounded-2xl shadow-lg text-white relative

     after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:shadow-[inset_0px_-2px_5px_-1px_#FFFFFF] after:rounded-2xl after:mix-blend-overlay after:pointer-events-none
     before:content-[''] before:pointer-events-none before:absolute before:w-full before:h-full before:shadow-[inset_0px_25px_10px_-10px_rgba(255,255,255,0.4)] before:mix-blend-plus-lighter
       ${className}`} {...props}>
      {children} 
    </div>
    </div>
  );
};

export { CardHeader, CardMain, CardFooter };
export default Card;
