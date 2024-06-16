import React, { useState } from 'react';

interface MonoButtonProps {
  label: string;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

const MonoButton: React.FC<MonoButtonProps> = ({ 
  label, 
  onClick, 
  onMouseEnter, 
  onMouseLeave, 
  onFocus, 
  onBlur,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`py-2 px-6 rounded-xl bg-[#5A60FF] text-sm ${className}`}
    >
      {label}
    </button>
  );
};

export default MonoButton;
