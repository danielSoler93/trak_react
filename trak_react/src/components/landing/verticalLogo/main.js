import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../../images/logo.png'
import Grid from '@material-ui/core/Grid';



const styles_logo = theme => ({
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
    }  
  });

class VerticalLogo extends React.Component {

    render() {
        const { classes } = this.props;

        return(
          <Grid item xs={4} className={classes.height_big}> 
            <Avatar alt="Trak logo" src={logo} variant="square" className={classes.logo_image} style={{ marginTop: "30%"}}/>
            <Typography variant="h3" component="h2" align="center" className={classes.logo_text}>TRAK</Typography>
          </Grid> 
          )
    }
  }

  export default  withStyles(styles_logo)(VerticalLogo);
