import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

class Footer extends React.Component {
    render() {
        return(
        <Container style={{width: "100%", padding: 0, position: "relative", height: "30px"}}>
            <Toolbar style={{position: "absolute", top: 0, width: "100%", height: "30px", padding:0,}}>
                <Typography variant="body2" align="center" style={{fontSize: "10px", width: "33%", color: "blue"}}>Que és Trak</Typography>
                <Typography variant="body2" align="center" style={{fontSize: "10px", width: "33%", color: "blue"}}>Términos y condiciones</Typography>
                <Typography variant="body2" align="center" style={{fontSize: "10px", width: "33%", color: "blue"}}>© 2019 Gistia</Typography>
            </Toolbar>
        </Container>)
    }
  }

  export default Footer;
