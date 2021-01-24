import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import VerticalLogo from '../../landing/verticalLogo/main'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const stylesRightScreen = theme => ({
  max_width: {
    maxWidth: "100%",
  },
  right_container: {
    margin: "50px",
  },

  height_big: {
    maxWidth: "100% !important",
  },

  sans_serif: {
      fontWeight: 100,
      fontFamily: "sans-serif",
      fontSize: "30px",
  },
  card: {
    position: "relative",
    marginLeft: "7%",
    marginRight: "10%", 
    height: "100%",
    padding: 0, 
    textAlign: "center",
    margin: "auto",
    [theme.breakpoints.down('sm')]: {
      width: "50%",
      
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
          <div style={{height: "10%", minHeight: "50px"}}>
            <Typography variant="body2" className={classes.sans_serif}>Accede al panel administrador</Typography>
          </div>
          <div style={{height: "10%", minHeight: "50px", margin: "auto", width: "70%"}}>
            <Typography variant="body2">¿No tiene cuenta? <a href="">Solicite acceso</a> mediante tu fisioterapéutica o médico rehabilitador</Typography>
          </div>
          <div style={{height: "25%", minHeight: "150px"}}>
            <div style={{display: "block"}}>
              <TextField size="small" id="outlined-basic" label="Email" color="primary" margin="normal"  required="true" variant="outlined" style={{width: "70%"}}/>
              <TextField size="small" id="outlined-basic" label="Password" color="primary" variant="outlined" required="true" style={{width: "70%"}}/>
              <FormControlLabel
              control={<Checkbox
            //checked={state.checkedB}
            //onChange={handleChange}
            color="primary"
          />}
          label="Términos y condiciones"
          style={{width: "70%"}}/>
            </div>
          </div>
          <div style={{height: "10%", minHeight: "50px"}}>
            <Button variant="contained" color="primary" size="large">Acceder</Button>
          </div>
          <div style={{height: "10%", minHeight: "50px"}}>
            <Typography variant="body2"><a href="#">Olvidaste tu contraseña?</a></Typography>
          </div >
          <div>
          </div>
        </div>
          )
    }
  }

  export default  withStyles(stylesRightScreen)(RightScreen);
