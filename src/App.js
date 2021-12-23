import React from "react"
import {Greet} from "./Greet"
import PropsPassing from "./ClassComponents/PropsPassing"
import ComponentA from "./ClassComponents/props/ComponentA"
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>hello</h1>
        <Greet /> */}
        {/* <PropsPassing name="suprava" age={27}/> */}

        <ComponentA/>
      </div>

    )
  }
}
export default App

