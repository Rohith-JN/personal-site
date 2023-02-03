import Topbar from './components/Topbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.scss';
import React, { useEffect } from 'react';
import Projects2 from './pages/Projects2';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };
  window.addEventListener('load', handleLoading);

  useEffect(() => {
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  return (
      <div>
          <div className="app">
            <Topbar />
            <div className="parts">
              <Home />
              <About />
              <Projects2 />
              <Contact />
            </div>
          </div>
      </div>
  );
}