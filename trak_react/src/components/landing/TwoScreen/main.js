import React from 'react';
import { withStyles } from '@material-ui/styles';



const styleTwoScreen = theme => ({
  boxForm: {
      display: "flex",
      width: "100%",
      minHeight: "100%",
      height: "100%",
      padding: 0,
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        display: "block",
      },
  },

  left: {
    color: "#FFFFFF",
    width: props => props.widthLeft,
    backgroundSize: "cover",
    backgroundImage: "url({background})",
    overflow: "hidden",
    height: "100vh",
    [theme.breakpoints.down('sm')]: {
      width: "100% !important",
      height: "250px",
    },
  },

  right: {
    position: "relative",
    width: props => props.widthRight,
    overflow: "hidden",
    [theme.breakpoints.down('sm')]: {
      width: "100% !important",
      height: "100%",
    },

  }
  });

class TwoScreen extends React.Component {

    render() {
        const { classes } = this.props;
        return(
          <div className={classes.boxForm}>
            <div className={classes.left}>
              {this.props.leftScreen}
            </div>
            <div className={classes.right}>
                {this.props.rightScreen}
            </div>
          </div>
          )
    }
  }

  export default  withStyles(styleTwoScreen)(TwoScreen);
