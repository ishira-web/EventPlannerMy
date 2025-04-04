import React from 'react';

const IconTextBadge = ({
  icon,
  text,
  color = 'blue',
  size = 'md',
  rounded = 'full',
  iconPosition = 'left'
}) => {
  // color classes
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };
  
  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  return (
    <div>
      <span
        className={`inline-flex items-center ${colorClasses[color]} ${sizeClasses[size]} ${roundedClasses[rounded]}`}
      >
        {iconPosition === 'left' && (
          <span className="mr-1.5">{icon}</span>
        )}
        {text}
        {iconPosition === 'right' && (
          <span className="ml-1.5">{icon}</span>
        )}
      </span>
    </div>
  );
};

export default IconTextBadge;