import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const CONTAINER_VARIANTS: Record<string, string> = {
  primary: 'bg-blue-900',
  secondary: 'bg-purple-900',
  success: 'bg-lime-800', // less saturated lime, not white
  warning: 'bg-orange-800', // less saturated orange, not white
  danger: 'bg-red-800', // less saturated red, not white
};

const VARIANT_STYLES: Record<string, string> = {
  primary: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#60a5fa,_#2563eb)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#3b82f6,_#1e40af)]`,
  secondary: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#a78bfa,_#7c3aed)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#8b5cf6,_#6d28d9)]`,
  success: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#d9f99d,_#9cd510)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#7cb305,_#65a30d)]`,
  warning: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#fdba74,_#ea580c)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#f59e42,_#c2410c)]`,
  danger: `bg-[radial-gradient(circle_80px_at_80%_-10%,_#f87171,_#dc2626)] hover:bg-[radial-gradient(circle_80px_at_80%_-10%,_#e11d48,_#991b1b)]`,
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  icon,
  fullWidth = false,
  disabled,
  variant = 'primary',
  ...props
}) => {
  return (
    <div className={`${CONTAINER_VARIANTS[variant]} w-fit rounded-xl relative h-fit shadow-[0px_5px_8px_-2px_rgba(0,0,0,0.9)]`}>
      <button
        className={`flex justify-center items-center px-8 py-4 rounded-xl 
        shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_2px_2px_rgba(0,0,0,0.1)] 
        text-white font-bold text-shadow-[2px_2px_0_#000]
        mb-2/3 hover:translate-y-1 transition-all relative bottom-2 hover:bottom-1
        after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:shadow-[inset_0_-1px_7px_-1px_#FFF] after:rounded-xl after:mix-blend-soft-light
        ${VARIANT_STYLES[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled && !loading ? 'opacity-100 cursor-not-allowed' : ''}
        ${loading ? 'brightness-100' : ''}`}
        disabled={disabled || loading}
        {...props}
      >
        <span className={loading ? 'opacity-100 flex flex-row items-center' : ''}>
          {loading ? (
            <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
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
