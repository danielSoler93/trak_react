import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import URLS from './pages/pages'

//components
import LandingPage from './pages/index'
import ClientPage from './pages/clientLogin'
import AdminPage from './pages/AdminLogin'
import AdminMainPage from './pages/adminMainPage'
import clientMainPage from './pages/clientMainPage'


const outerTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#3b5998',
      main: '#3b5998',
      dark: '#3b5998',
      contrastText: 'white',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{minHeight: "100vh"}}>
      <ThemeProvider theme={outerTheme}>
        <Switch>
          <Route exact path={"/"} component={LandingPage}></Route>
          <Route path={URLS.clientLoginURL} component={ClientPage}></Route>
          <Route path={URLS.adminLoginURL} component={AdminPage}></Route>
          <Route path={URLS.adminMainPage} component={AdminMainPage}></Route>
          <Route path={URLS.clientMainPage} component={clientMainPage}></Route>
        </Switch>
      </ThemeProvider>
    </div>
    </BrowserRouter>
  );
}

export default App
