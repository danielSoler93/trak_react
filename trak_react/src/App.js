import './App.css';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import background from './images/background.jpg'
import logo from './images/logo.png'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';



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
    width: "80%",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={outerTheme}>
      <Card style={{ height: "100vh", overflow: "scroll"}}>
      <Grid container spacing={0} style={{ height: "100%"}}>
        <Grid item md={7} sm={0}>
          <CardMedia
          style={{ height: "100%", filter: "brightness(70%)"}}
          image={background}
          /> 
        </Grid>
        <Grid item md={5} sm={12}>
          <CardContent style={{ height: "100%", marginTop: "60px", marginLeft: "7%", marginRight: "10%", padding: 0}}>
          <Grid container direction={'column'} spacing={24} style={{ height: "100%" }}>
            <Grid item xs={4} className={classes.height_big}> 
              <Avatar alt="Trak logo" src={logo} variant="square" className={classes.logo_image}/>
              <Typography variant="h3" component="h2" align="center" className={classes.logo_text}>TRAK</Typography>
            </Grid> 
            <Grid item xs={2} className={classes.max_width}>
              <Typography variant="body2" align="justify" className={classes.sans_serif}>Accede a la plataforma de rehabilitación Trak. Si eres fisioterapeuta
			o médico accede como administrador, si eres la persona que va a realizar
			los ejercicios accede como paciente</Typography>
            </Grid>
            <Grid item xs={3} className={classes.max_width}>
              <Typography variant="h6" className={classes.h6}>Iniciar Sesion</Typography>
              <Grid container spacing={3}  className={classes.margin_top}>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" size="small" className={classes.button_iniciar_sesion}>Cliente</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" size="small" className={classes.button_iniciar_sesion}>Administrador</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} className={classes.max_width}> 
              <Typography variant="body2">¿Todavia no tienes cuenta? Solicita tu versión de prueba <a href="mailto:dani@trak.es?cc=carlos@trak.es &subject=Password olvidado&body=Hola Trak! Soy el usuario: {tu_dni} y he olvidado el password. Saludos!">aquí</a></Typography>
        </Grid>
            <Grid item xs={1} className={classes.max_width}> Footer</Grid>
          </Grid>  
          </CardContent>
        </Grid>
      </Grid>
      </Card>
      </ThemeProvider>
    </div>
  );
}

export default App;
