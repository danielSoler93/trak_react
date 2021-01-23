import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

class Footer extends React.Component {
    render() {
        return(
            <Toolbar style={{position: "absolute", bottom: "5px", width: "100%", padding:0, minHeight: 0}}>
                <Link href="https://www.trak.es" variant="body2" align="center" style={{fontSize: "10px", width: "33%", color: "blue"}}>Que és Trak</Link>
                <Link variant="body2" align="center" style={{fontSize: "10px", width: "33%", color: "blue"}}>Términos y condiciones</Link>
                <Link href="https://www.trak.es" variant="body2" align="center" style={{fontSize: "10px", width: "33%", color: "blue"}}>© 2019 Gistia</Link>
            </Toolbar>
        )
    }
  }

  export default Footer;
