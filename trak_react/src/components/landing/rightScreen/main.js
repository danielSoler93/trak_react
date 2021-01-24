import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import IniciarSesion from '../iniciarSesion/main';
import VerticalLogo from '../verticalLogo/main'
import Footer from '../Footer/main'


const stylesRightScreen = theme => ({
  max_width: {
    maxWidth: "100%",
  },
  right_container: {
    margin: "50px",
    minHeight: "600px"
  },
  sans_serif: {
    fontFamily: '"Open Sans", sans-serif',
    size: "20px",
    lineHeight: 1.6,
    color: "grey",
  },

  buttons_container: {
    maxWidth: "100%",

  },

  card: {
    position: "relative",
    marginLeft: "7%",
    marginRight: "10%", 
    height: "100%",
    padding: 0, 
    textAlign: "justify",
    [theme.breakpoints.down('sm')]: {
      width: "50%",
      margin: "0 auto",
      textAlign: "center",
    }
  }
  });

class RightScreen extends React.Component {

    render() {
        const { classes } = this.props;
        

        return(
          <div className={classes.card}>
              <div style={{height: "10%"}}></div>
              <div style={{height: "30%", minHeight: "200px"}}>
                  < VerticalLogo/>
              </div>
              <div style={{height: "20%", minHeight: "150px"}}>
                <Typography variant="body2" className={classes.sans_serif}>Accede a la plataforma de rehabilitación Trak. Si eres fisioterapeuta
            o médico accede como administrador, si eres la persona que va a realizar
            los ejercicios accede como paciente</Typography>
              </div>
              <div style={{height: "20%", minHeight: "150px"}}>
                <IniciarSesion />
              </div>
              <div style={{height: "20%", minHeight: "150px"}}>
                <Typography variant="body2">¿Todavia no tienes cuenta? Solicita tu versión de prueba <a href="mailto:dani@trak.es?cc=carlos@trak.es &subject=Password olvidado&body=Hola Trak! Soy el usuario: {tu_dni} y he olvidado el password. Saludos!">aquí</a></Typography>
              </div >
              <div>
                <Footer/> 
              </div>
            </div>
          )
    }
  }

  export default  withStyles(stylesRightScreen)(RightScreen);
