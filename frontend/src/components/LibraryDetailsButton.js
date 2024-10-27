import React, { useState } from 'react';

const LibraryDetailsButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button>Library Details</button>
      {showDropdown && (
        <div>
          <p>Items to return: 3</p>
        </div>
      )}
    </div>
  );
};

export default LibraryDetailsButton;
