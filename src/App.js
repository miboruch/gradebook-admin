import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LandingPage from './pages/LandingPage';
import SEO from './components/SEO';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import GlobalStyle from './style/GlobalStyle';
import { fetchUniversities } from './actions/mainActions';

function App({ fetchUniversities }) {
  useEffect(() => {
    fetchUniversities();
  }, []);
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUniversities: () => dispatch(fetchUniversities())
  };
};

export default connect(null, mapDispatchToProps)(App);
