import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectPage } from './pages/ProjectPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { AnimatedGrid } from './components/AnimatedGrid'

function ScrollToTop() {
  const { pathname, state } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    // Disable native browser jumping globally to prevent conflict with our manual React Routing
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (prevPath.current !== pathname) {
        prevPath.current = pathname;
        // Skip scroll to top on path change IF it brought a specific scrollTo target
        if (state && state.scrollTo) return;
        window.scrollTo(0, 0);
    }
  }, [pathname, state]);
  return null;
}

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return true; // Default to dark as it was the default previously
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-background transition-colors duration-300 relative">
            {/* Premium Background System */}
            <AnimatedGrid darkMode={darkMode} />
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />
                <div className="relative z-10 w-full text-gray-900 dark:text-gray-100">
                    <Routes>
                        <Route path="/" element={<Home darkMode={darkMode} />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/projects/:id" element={<ProjectPage darkMode={darkMode} />} />
                        <Route path="/activities" element={<ActivitiesPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
