import React from "react"
import {Greet} from "./Greet"
import PropsPassing from "./ClassComponents/PropsPassing"
import ComponentA from "./ClassComponents/props/ComponentA"
import StateVariable from "./ClassComponents/state/StateVariable"
import SetStateMethod from "./ClassComponents/state/SetStateMethod"
import OnChangeEvent from "./ClassComponents/state/OnChangeEvent"
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>hello</h1>
        <Greet /> */}
        {/* <PropsPassing name="suprava" age={27}/> */}

        {/* <ComponentA/> */}
        {/* <StateVariable/> */}
        {/* <SetStateMethod/> */}
        <OnChangeEvent/>
      </div>

    )
  }
}
export default App

