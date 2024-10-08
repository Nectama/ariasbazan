
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Cursos.css';

function CursosMenu({ courseType, setselectedCourseType }) {

  const handleCourseTypeChange = (event) => {
    setselectedCourseType(event.target.value);
  };


  return (
    <div className="sortMenu">
      <ul>
        <li>
          <button style={{ fontWeight: courseType === 'tradicionales' ? 'bold' : 'normal' }} value="tradicionales" onClick={handleCourseTypeChange}>
            Tradicionales
          </button>
        </li>
        <li>
          <button style={{ fontWeight: courseType === 'online' ? 'bold' : 'normal' }} value="online" onClick={handleCourseTypeChange}>
            Online
          </button>
        </li>
        <li>
          <button style={{ fontWeight: courseType === 'fashion' ? 'bold' : 'normal' }} value="fashion" onClick={handleCourseTypeChange}>
            Moda
          </button>
        </li>
        <li>
          <button style={{ fontWeight: courseType === 'advanced' ? 'bold' : 'normal' }} value="advanced" onClick={handleCourseTypeChange}>
            Avanzado
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CursosMenu;
