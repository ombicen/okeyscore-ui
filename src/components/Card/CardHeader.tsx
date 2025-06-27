import React from "react";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "", ...props }) => (
  <div className={`px-6 pt-6 pb-2 text-lg font-bold ${className}`} {...props}>{children}</div>
);

export default CardHeader;
