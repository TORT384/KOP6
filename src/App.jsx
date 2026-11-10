import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer';
import CountryDetailsPage from './pages/CountryDetailsPage';
import { useDashboardStore } from './store/useDashboardStore';
import './ui/tokens/theme.css';

export default function App() {
  const theme = useDashboardStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
        <Route path="/country/:code" element={<CountryDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}