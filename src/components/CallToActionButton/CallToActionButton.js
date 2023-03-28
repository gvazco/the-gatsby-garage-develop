import { Link } from 'gatsby';
import React from 'react';

export const CallToActionButton = ({
  label,
  destination,
  fullWidth,
  isActive,
}) => {
  return (
    <Link
      to={destination}
      className={`${isActive ? 'cursor-default bg-yellow-400' : ''} ${
        fullWidth ? 'block' : 'inline-block'
      } cursor-pointer rounded-sm bg-yellow-500 py-2 px-4 text-center font-bold uppercase !text-black no-underline transition-colors hover:bg-yellow-400`}
    >
      {label}
    </Link>
  );
};
