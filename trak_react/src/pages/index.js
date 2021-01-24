import React from 'react';
import TwoScreen from '../components/landing/TwoScreen/main'
import LeftScreen from '../components/landing/leftScreen/main'
import RightScreen from '../components/landing/rightScreen/main'



class LandingPage extends React.Component {

    render() {
        return(
            <TwoScreen leftScreen={<LeftScreen/>} 
            rightScreen={<RightScreen />}
            widthLeft={"60%"}
            widthRight={"40%"} />
            )
    }
  }

  export default LandingPage