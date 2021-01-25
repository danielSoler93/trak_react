import React from "react"
import TwoScreen from '../components/landing/TwoScreen/main'
import LeftScreen from '../components/landing/leftScreen/main'
import RightScreen from '../components/login/rightScreen/main'


class AdminPage extends React.Component {

    render() {
        return(
            <TwoScreen leftScreen={<LeftScreen/>} 
            rightScreen={<RightScreen
            text={"Accede al panel administrador"}/>}
            widthLeft={"60%"}
            widthRight={"40%"} />
            )
    }
  }

  export default AdminPage