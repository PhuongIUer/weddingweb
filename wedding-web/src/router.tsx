import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/WelcomePage'
import Home from './pages/Home';

// Define your route paths as constants for better maintainability
export const ROUTE_PATHS = {
  WELCOME: '/',
  HOME: '/home',
} as const;

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATHS.WELCOME} element={<Welcome />} />
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        
        {/* Add a 404 route for unmatched paths */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;