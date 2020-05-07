import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import SEO from './components/SEO';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <SEO />
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
