import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "small" | "medium" | "large";
}

const CONTAINER_VARIANTS: Record<string, string> = {
  default: "bg-gray-950",
  primary: "bg-blue-900",
  secondary: "bg-purple-900",
  success: "bg-green-800", // better green instead of lime
  warning: "bg-amber-800", // more yellow-orange instead of orange
  danger: "bg-red-800", // less saturated red, not white
};

const VARIANT_STYLES: Record<string, string> = {
  default: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#4b5563,_#1f2937)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#374151,_#111827)]`,
  primary: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#60a5fa,_#2563eb)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#3b82f6,_#1e40af)]`,
  secondary: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#a78bfa,_#7c3aed)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#8b5cf6,_#6d28d9)]`,
  success: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#4ade80,_#16a34a)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#22c55e,_#15803d)]`,
  warning: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#fbbf24,_#d97706)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#f59e0b,_#b45309)]`,
  danger: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#f87171,_#dc2626)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#e11d48,_#991b1b)]`,
};

const SIZE_STYLES: Record<string, string> = {
  small: "px-8 py-3 text-xs bottom-1 rounded-md",
  medium: "px-8 py-4 text-base bottom-2 rounded-xl",
  large: "px-12 py-6 text-lg bottom-2 rounded-xl",
};

const ICON_SIZES: Record<string, string> = {
  small: "h-4 w-4",
  medium: "h-5 w-5",
  large: "h-6 w-6",
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  icon,
  fullWidth = false,
  disabled,
  variant = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <div
      className={`${CONTAINER_VARIANTS[variant]} w-fit rounded-xl relative h-fit shadow-[0px_5px_8px_-2px_rgba(0,0,0,0.9)]`}
    >
      <button
        className={`flex justify-center items-center  
        shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_2px_2px_rgba(0,0,0,0.1)] 
        text-white font-bold text-shadow-[2px_2px_0_#000]
         hover:translate-y-1 transition-all relative  hover:bottom-1
        after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:shadow-[inset_0_-1px_7px_-1px_#FFF] after:rounded-xl after:mix-blend-soft-light
        ${VARIANT_STYLES[variant]}
        ${SIZE_STYLES[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled && !loading ? "opacity-100 cursor-not-allowed" : ""}
        ${loading ? "brightness-100" : ""}`}
        disabled={disabled || loading}
        {...props}
      >
        <span
          className={loading ? "opacity-100 flex flex-row items-center" : ""}
        >
          {loading ? (
            <svg
              className={`animate-spin mr-2 ${ICON_SIZES[size]} text-white`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : icon ? (
            <span className="mr-2">{icon}</span>
          ) : null}
          {children}
        </span>
      </button>
    </div>
  );
};

export default Button;
