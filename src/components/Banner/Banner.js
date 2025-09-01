import React from 'react';

export function Banner({children, className}) {
  return (
        <div className={`banner ${className}`}>
          <p>
            {children}
          </p>
        </div>
      )}

export default Banner;


