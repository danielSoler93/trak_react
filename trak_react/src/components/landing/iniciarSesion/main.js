import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import URLS from '../../../pages/pages'


console.log(URLS)

const stylesInicarSesion = theme => ({
 

  margin_top: {
    marginTop: "10px",
    margin: "auto",
    textAlign: "center",
    width: "100%",
  },
  h6: {
    fontFamily: "Tahoma",
    fontWeight: 600,
    fontSize: "25px"
  },

  link: {
    textDecoration: "none",
  },

  button_iniciar_sesion1: {
    marginTop: "2%",
    padding: "5px",
    width: "140px",
    marginRight: "30px",
    [theme.breakpoints.down('xs')]: {
      marginRight: 0, 
    }
  },

  button_iniciar_sesion2: {
    marginTop: "2%",
    padding: "5px",
    width: "140px",
  },

});


class IniciarSesion extends React.Component {

    render() {

        const { classes } = this.props;
        return(
            <div>
            <Typography variant="h6" className={classes.h6}>Iniciar Sesion</Typography>
                <div class="flexbox">
                  <Link to={URLS.clientLoginURL} className={classes.link}><Button href="/clientLogin"
                  variant="contained" color="primary" size="small" className={classes.button_iniciar_sesion1}>Cliente</Button></Link>
                  <Link to={URLS.adminLoginURL} className={classes.link}><Button variant="contained" color="primary" size="small" className={classes.button_iniciar_sesion2}>Administrador</Button></Link>
                </div>
            </div>
            )
    }
  }

  export default withStyles(stylesInicarSesion)(IniciarSesion)