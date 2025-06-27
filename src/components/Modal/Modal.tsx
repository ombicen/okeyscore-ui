import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  className = "",
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className={`relative w-full ${sizeClasses[size]} ${className}`}>
        <div className="h-fit w-fit flex flex-col bg-blue-700 pb-1 rounded-2xl overflow-hidden">
          <div
            className="bg-blue-600 rounded-2xl shadow-lg text-white relative
            after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:shadow-[inset_0px_-2px_5px_-1px_#FFFFFF] after:rounded-2xl after:mix-blend-overlay after:pointer-events-none
            before:content-[''] before:pointer-events-none before:absolute before:w-full before:h-full before:shadow-[inset_0px_25px_10px_-10px_rgba(255,255,255,0.4)] before:mix-blend-plus-lighter"
          >
            {/* Header */}
            {title && (
              <div className="px-6 pt-6 pb-2 text-lg font-bold border-b border-blue-500/30">
                {title}
              </div>
            )}

            {/* Content */}
            <div className="px-6 pt-4 pb-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
