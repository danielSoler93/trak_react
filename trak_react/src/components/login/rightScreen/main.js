import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import VerticalLogo from '../../landing/verticalLogo/main'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import { withRouter } from 'react-router';
import URLS from '../../../pages/pages'



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
      width: "70%",
      margin: "auto",
      
    }
  }
  });

class RightScreen extends React.Component {

    constructor(props) {
      super(props);
      this.valueCheckBox = false;
      this.color_forget = "";
      this.state = { "dni": '', "password": '', "conditions": false };
    }

    checkTerminosyAccede() {
      if(this.valueCheckBox == false) {
        { alert('Accepta los términos y condiciones') }
      }
    } 

    setEmail(event) {
        this.state.dni = event;
    }

    setPassword(event) {
      this.state.password = event;
  }

    handleChange() {
      if(this.valueCheckBox == false) {
        this.valueCheckBox = true;
      } else {
        this.valueCheckBox = false;
      }
      this.state.conditions = this.valueCheckBox;
    }

    handleSubmit(event) {
      console.log(this.valueCheckBox)
      if (this.valueCheckBox == false) {
        return false
      }
      console.log(this.state);
      axios.post('http://127.0.0.1:8000/client/', this.state)
      .then(res => {
        console.log(res.data)
        if(res.data.response == false) {
          this.color_forget = "red"
          this.props.history.push(URLS.clientLoginURL);
        } else {
          this.color_forget = ""
          console.log(URLS.adminLogin)
          this.props.history.push(URLS.adminLoginURL); 
        }
      })
      .catch(error => {console.log(error)})
      event.preventDefault()
    }


    render() {
        const { classes } = this.props;
        console.log(this.color_forget)

        return(
          <div className={classes.card}>
          <div style={{height: "10%"}}></div>
          <div style={{height: "25%", minHeight: "150px"}}>
              < VerticalLogo center={"auto"}
              fontFamily={"sans-serif"} 
              fontWeight={"100"}/>
          </div>
          <div style={{height: "15%", minHeight: "50px"}}>
            <Typography variant="body2" className={classes.sans_serif}>{this.props.text}</Typography>
          </div>
          <div style={{height: "10%", minHeight: "50px", margin: "auto", width: "70%"}}>
            <Typography variant="body2">¿No tiene cuenta? <a href="https://www.trak.es/">Solicite acceso</a> mediante tu fisioterapéutica o médico rehabilitador</Typography>
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div style={{height: "25%", minHeight: "150px"}}>
              <div style={{display: "block"}}>
                <TextField 
                size="small" 
                name="dni"
                onChange={e => this.setEmail(e.target.value)}
                id="outlined-basic" label="Email" color="primary" margin="normal"  required={true} variant="outlined" style={{width: "70%"}}/>
                <TextField 
                size="small" 
                name="password"
                onChange={e => this.setPassword(e.target.value)}
                type="password" id="outlined-basic" label="Password" color="primary" variant="outlined" required={true} style={{width: "70%"}}/>
                <FormControlLabel
                control={<Checkbox
              //checked={state.checkedB}
              onChange={() => this.handleChange()}
              color="primary"
              name="conditions"
            />}
            label="Términos y condiciones"
            style={{width: "70%"}}/>
              </div>
            </div>
            <div style={{height: "10%", minHeight: "50px"}}>
              <Button type="submit" onClick={() => this.checkTerminosyAccede() } 
              variant="contained" 
              color="primary" 
              size="large">Acceder</Button>
            </div>
          </form>
          <div style={{height: "10%", minHeight: "50px"}}>
            <Typography variant="body2"><a style={{color: this.color_forget}} href="#">Olvidaste tu contraseña?</a></Typography>
          </div >
          <div>
          </div>
        </div>
          )
    }
  }

  export default  withRouter(withStyles(stylesRightScreen)(RightScreen));
