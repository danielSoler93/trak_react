import './App.css';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import background from './images/background.jpg'
import logo from './images/logo.png'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100vh',
    width: "100%",
  },
  logo_image: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  logo_text: {
    width: theme.spacing(16),
    fontFamily: "Tahoma",
    fontWeight: 600,
  },
  logo: {
    position: "relative",
  },

  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Card>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <CardMedia
          style={{paddingTop: '100vh'}}
          image={background}
          /> 
        </Grid>
        <Grid item sm={6}>
          <CardContent>
          <Grid container direction={'column'} spacing={24}>
            <Grid item sm={6}> 
              <Avatar alt="Trak logo" src={logo} variant="square" className={classes.logo_image}/>
              <Typography variant="h3" component="h2" align="center" className={classes.logo_text}>Trak</Typography>
            </Grid> 
            <Grid item sm={6}> Paragraph</Grid>
            <Grid item sm={6}> Iniciar Sesion / Buttons</Grid>
            <Grid item sm={6}> Todavia no tienes cuenta</Grid>
            <Grid item sm={6}> Footer</Grid>
          </Grid>  
          </CardContent>
        </Grid>
      </Grid>
      </Card>
    </div>
  );
}

export default App;
