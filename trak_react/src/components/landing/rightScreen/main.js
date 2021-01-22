import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import IniciarSesion from '../iniciarSesion/main';
import VerticalLogo from '../verticalLogo/main'
import Footer from '../Footer/main'


const stylesRightScreen = theme => ({
  max_width: {
    maxWidth: "100%",
  },
  right_container: {
    margin: "50px",
  },
  sans_serif: {
    fontFamily: '"Open Sans", sans-serif',
    size: "20px",
    lineHeight: 1.6,
    color: "grey",
  },
  });

class RightScreen extends React.Component {

    render() {
        const { classes } = this.props;

        return(
          <Grid container direction={'column'} spacing={0} style={{ height: "100%" }}>
              < VerticalLogo/>
              <Grid item xs={1} className={classes.max_width} style={{marginTop: "5%"}}>
                <Typography variant="body2" align="justify" className={classes.sans_serif}>Accede a la plataforma de rehabilitación Trak. Si eres fisioterapeuta
        o médico accede como administrador, si eres la persona que va a realizar
        los ejercicios accede como paciente</Typography>
              </Grid>
              <Grid item xs={1} className={classes.max_width} style={{marginTop: "5%"}}>
                <IniciarSesion />
              </Grid>
              <Grid item xs={1} className={classes.max_width} style={{marginTop: "15%"}}> 
                <Typography variant="body2">¿Todavia no tienes cuenta? Solicita tu versión de prueba <a href="mailto:dani@trak.es?cc=carlos@trak.es &subject=Password olvidado&body=Hola Trak! Soy el usuario: {tu_dni} y he olvidado el password. Saludos!">aquí</a></Typography>
              </Grid>
              <Grid item style={{height: "30px"}}>
                <Footer/>
              </Grid>
            </Grid>  
          )
    }
  }

  export default  withStyles(stylesRightScreen)(RightScreen);
