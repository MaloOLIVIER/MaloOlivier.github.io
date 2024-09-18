import React from 'react';
import { Link, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import Homepage from './components/Homepage/Homepage';
import Resume from './components/Resume/Resume';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';
import getBlogTheme from './components/blog/theme/getBlogTheme';
import TemplateFrame from './components/blog/TemplateFrame';

export function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Resume">Resume</Link></li>
        <li><Link to="/Publications">Publications</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const blogTheme = createTheme(getBlogTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };
  return (
    <TemplateFrame
      toggleCustomTheme={toggleCustomTheme}
      showCustomTheme={showCustomTheme}
      mode={mode}
      toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={showCustomTheme ? blogTheme : defaultTheme}>
        <CssBaseline enableColorScheme />
        <div className="App">
          <header className="App-header">
            <BrowserRouter>
              <NavBar />

              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Publications" element={<Publications />} />
                <Route path="/Projects" element={<Outlet />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </BrowserRouter>

          </header >


        </div >
      </ThemeProvider>
    </TemplateFrame>

  );
}

export default App;
