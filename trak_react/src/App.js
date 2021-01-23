import './App.css';
import React from 'react';
import TwoScreen from './components/landing/TwoScreen/main'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import LeftScreen from './components/landing/leftScreen/main'
import RightScreen from './components/landing/rightScreen/main'



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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  html: {
    minHeight: "100%",
  },

  body: {
    margin: 0,
    minHeight: "100%",
    padding: 0,
    height: "100vh",
    },
  
  card: {
    height: '100vh',
    width: "100%",
  },
  logo_image: {
    width: 124,
    height: theme.spacing(14),
  },
  logo_text: {
    width: theme.spacing(16),
    fontFamily: "Tahoma",
    fontWeight: 600,
  },
  logo: {
    position: "relative",
  },
  max_width: {
    maxWidth: "100%",
  },

  margin_top: {
    marginTop: "10px",
  },
  control: {
    padding: theme.spacing(2),
  },
  right_container: {
    margin: "50px",
  },
  h6: {
    fontFamily: "Tahoma",
    fontWeight: 600,
  },
  sans_serif: {
    fontFamily: '"Open Sans", sans-serif',
    size: "20px",
    lineHeight: 1.6,
    color: "grey",
  },
  button_iniciar_sesion: {
    padding: "5px",
    width: "140px",
  },

  footerElement: {
    width: "33%",
    fontFamily: "sans-serif",
    fontWeight: 100,
    color: "blue",
    textDecoration: "none"
  },

  footer: {
      fontSize: "10px",
      display: "flex",
      position: "absolute",
      bottom: "5px",
      left: "7%",
      width: "100%",
      marginTop: "10px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App" style={{minHeight: "100vh"}}>
      <ThemeProvider theme={outerTheme}>
        <TwoScreen leftScreen={<LeftScreen/>} 
          rightScreen={<RightScreen />}
          widthLeft={"60%"}
          widthRight={"40%"} />
      </ThemeProvider>
    </div>
  );
}

export default App;
