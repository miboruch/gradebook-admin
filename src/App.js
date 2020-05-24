import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SEO from './components/SEO';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import GlobalStyle from './style/GlobalStyle';
import { fetchCourses, fetchUniversities } from './actions/mainActions';
import AccountsPage from './pages/AccountsPage';

function App({ fetchUniversities, fetchCourses }) {
  useEffect(() => {
    fetchUniversities();
    fetchCourses();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/accounts'} component={AccountsPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUniversities: () => dispatch(fetchUniversities()),
    fetchCourses: () => dispatch(fetchCourses())
  };
};

export default connect(null, mapDispatchToProps)(App);
