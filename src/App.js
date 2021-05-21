import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Navbar from './components/Navbar';
import DrinkDetails from './pages/DrinkDetails';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


// creating a custom mui theme
const theme = createMuiTheme({ 
  palette: {
    primary: {
      main:'#5995da'
    },
    secondary: {
      main: '#BA462D'
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 300, 
    fontWeightRegular: 400, 
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
  }
})

function App() {

return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/drink/:id" component={DrinkDetails} />
            <Route path='*' component={Error} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
