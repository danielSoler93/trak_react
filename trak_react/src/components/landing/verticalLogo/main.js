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
      [theme.breakpoints.down('sm')]: {
        margin: "auto",
      },
    },
    logo_text: {
      width: theme.spacing(16),
      fontFamily: "Tahoma",
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        margin: "auto",
      },
    },
    logo: {
      position: "relative",
    },

    center: {
      display: "block",
      margin: "auto",
    }
  });

class VerticalLogo extends React.Component {

    render() {
        const { classes } = this.props;

        return(
           <div>
            <Avatar alt="Trak logo" src={logo} variant="square" className={classes.logo_image} style={{margin: `${this.props.center}`}}/>
            <Typography variant="h3" component="h2" align="center" className={classes.logo_text} 
            style={{margin: `${this.props.center}`,
            fontFamily: `${this.props.fontFamily}`,
            fontWeight: `${this.props.fontWeight}`}}>TRAK</Typography>
            </div>
          )
    }
  }

  export default  withStyles(styles_logo)(VerticalLogo);
