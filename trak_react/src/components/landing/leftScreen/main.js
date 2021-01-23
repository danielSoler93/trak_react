import React from 'react';
import { withStyles } from '@material-ui/styles';
import CardMedia from '@material-ui/core/CardMedia';
import background from '../../../images/background.jpg'

const stylesLeftScreen = theme => ({
  leftScreen: {
    height: "100%",
    background: "cover",
    filter: "brightness(70%)",
    backgroundSize: "cover",
    [theme.breakpoints.down('sm')]: {
      height: "240px",
    }
  },
  });

class leftScreen extends React.Component {

    render() {
        const { classes } = this.props;
        

        return(
          <CardMedia
        className={classes.leftScreen}
        image={background}
        />
          )
    }
  }

  export default  withStyles(stylesLeftScreen)(leftScreen);
