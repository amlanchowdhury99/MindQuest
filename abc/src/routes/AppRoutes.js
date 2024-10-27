// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/login/Login' // Adjust the path based on your structure
import HomePage from '../Pages/home/HomePage';
import ClassroomDetailsPage from '../Pages/classroomDetails/ClassroomDetailsPage';
import LibraryDetailsPage from '../Pages/library/LibraryDetailsPage';
import AboutUsPage from '../Pages/about/AboutUsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/classroom-details" element={<ClassroomDetailsPage />} />
      <Route path="/library-details" element={<LibraryDetailsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
};

export default AppRoutes;
