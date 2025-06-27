import React from "react";

interface CardMainProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardMain: React.FC<CardMainProps> = ({ children, className = "", ...props }) => (
  <div className={`px-6 pt-4 pb-2 ${className}`} {...props}>{children}</div>
);

export default CardMain;
