import React from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
  return (
    <span className="tooltip-wrapper">
      <span className="tooltip-text">{text}</span>
      {children}
    </span>
  );
};

export default Tooltip;
