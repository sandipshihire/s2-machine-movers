import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/404') {
    return <NotFound />;
  }

  return <Home />;
}
