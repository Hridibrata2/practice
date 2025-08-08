import React, { useState } from 'react';
import './DropDown.css';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    alert(`Selected option: ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        Select
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item" onClick={() => handleSelect('Option 1')}>
            Option 1
          </li>
          <li className="dropdown-item" onClick={() => handleSelect('Option 2')}>
            Option 2
          </li>
          <li className="dropdown-item" onClick={() => handleSelect('Option 3')}>
            Option 3
          </li>
          <li className="dropdown-item" onClick={() => handleSelect('Option 4')}>
            Option 4
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;