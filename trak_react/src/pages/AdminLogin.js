import React from "react"
import TwoScreen from '../components/landing/TwoScreen/main'
import LeftScreen from '../components/landing/leftScreen/main'



class AdminPage extends React.Component {

    render() {
        return(
            <TwoScreen leftScreen={<LeftScreen/>} 
            rightScreen={<div></div>}
            widthLeft={"60%"}
            widthRight={"40%"} />
            )
    }
  }

  export default AdminPage