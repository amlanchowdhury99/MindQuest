import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ClassroomDetailsButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button>Classroom Details</button>
      {showDropdown && (
        <div>
          <p>Upcoming Lecture</p>
          <Link to="/classroom-details">
            <button>Go to Classroom</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ClassroomDetailsButton;
