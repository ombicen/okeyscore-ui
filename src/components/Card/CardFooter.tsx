import React from "react";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = "", ...props }) => (
  <div className={`px-6 pt-2 pb-6 text-sm text-gray-800 text-shadow-[1px_1px_0px_rgba(255,255,255,0.5)] ${className}`} {...props}>{children}</div>
);

export default CardFooter;
