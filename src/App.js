import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import SEO from './components/SEO';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <SEO />
        <GlobalStyle />
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
