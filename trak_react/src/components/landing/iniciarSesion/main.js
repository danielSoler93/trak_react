import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';



const stylesInicarSesion = theme => ({
 

  margin_top: {
    marginTop: "10px",
  },
  h6: {
    fontFamily: "Tahoma",
    fontWeight: 600,
  },

  button_iniciar_sesion: {
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
            <Grid container spacing={3}  className={classes.margin_top}>
              <Grid item xs={5}>
                <Button variant="contained" color="primary" size="small" className={classes.button_iniciar_sesion}>Cliente</Button>
              </Grid>
              <Grid item xs={5}>
                <Button variant="contained" color="primary" size="small" className={classes.button_iniciar_sesion}>Administrador</Button>
              </Grid>
            </Grid>
            </div>
            )
    }
  }

  export default withStyles(stylesInicarSesion)(IniciarSesion)