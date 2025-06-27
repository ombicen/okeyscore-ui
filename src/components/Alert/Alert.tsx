import React, { useState } from "react";

interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  onClose?: () => void;
  dismissible?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  children,
  variant = "info",
  title,
  onClose,
  dismissible = false,
  className = "",
  icon,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const variantStyles = {
    info: {
      container: "bg-blue-900",
      content: "bg-blue-600",
      icon: "text-blue-300",
      title: "text-blue-100",
      border: "border-blue-500/30",
    },
    success: {
      container: "bg-green-800",
      content: "bg-green-600",
      icon: "text-green-300",
      title: "text-green-100",
      border: "border-green-500/30",
    },
    warning: {
      container: "bg-amber-800",
      content: "bg-amber-600",
      icon: "text-amber-300",
      title: "text-amber-100",
      border: "border-amber-500/30",
    },
    danger: {
      container: "bg-red-800",
      content: "bg-red-600",
      icon: "text-red-300",
      title: "text-red-100",
      border: "border-red-500/30",
    },
  };

  const defaultIcons = {
    info: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    danger: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  const styles = variantStyles[variant];
  const displayIcon = icon || defaultIcons[variant];

  if (!isVisible) return null;

  return (
    <div
      className={`h-fit w-fit flex flex-col ${styles.container} pb-1 rounded-xl overflow-hidden relative ${className}`}
    >
      <div
        className={`${styles.content} rounded-xl shadow-lg text-white relative
        after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:shadow-[inset_0px_-2px_5px_-1px_#FFFFFF] after:rounded-xl after:mix-blend-overlay after:pointer-events-none
        before:content-[''] before:pointer-events-none before:absolute before:w-full before:h-full before:shadow-[inset_0px_25px_10px_-10px_rgba(255,255,255,0.4)] before:mix-blend-plus-lighter
        animate-in slide-in-from-top-2 duration-300`}
      >
        <div className="flex items-start p-4">
          {/* Icon with pulse animation for important alerts */}
          <div
            className={`flex-shrink-0 ${styles.icon} ${
              variant === "danger" ? "animate-pulse" : ""
            }`}
          >
            {displayIcon}
          </div>

          <div className="ml-3 flex-1">
            {title && (
              <h3
                className={`text-sm font-bold ${styles.title} text-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] mb-1`}
              >
                {title}
              </h3>
            )}
            <div className="text-sm text-white text-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]">
              {children}
            </div>
          </div>

          {/* Close button with hover effects */}
          {(dismissible || onClose) && (
            <div className="ml-auto pl-3">
              <button
                onClick={handleClose}
                className={`inline-flex ${styles.icon} hover:text-white focus:outline-none focus:text-white 
                  transition-all duration-200 hover:scale-110 active:scale-95`}
                aria-label="Close alert"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Progress bar for auto-dismiss (creative touch) */}
        {dismissible && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-xl overflow-hidden">
            <div
              className={`h-full ${styles.content} animate-pulse`}
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
