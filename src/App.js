import React from "react"
import {Greet} from "./Greet"
import PropsPassing from "./ClassComponents/PropsPassing"
import ComponentA from "./ClassComponents/props/ComponentA"
import StateVariable from "./ClassComponents/state/StateVariable"
import SetStateMethod from "./ClassComponents/state/SetStateMethod"
import OnChangeEvent from "./ClassComponents/state/OnChangeEvent"
import AddData from "./ClassComponents/state/AddData"
import ArrayData from "./ClassComponents/Array/ArrayData"
import ArrayObject from "./ClassComponents/Array/ArrayObject"
import Welcome from "./FunctionalComponents/Welcome"
import FunctionalProps from "./FunctionalComponents/FunctionalProps"
import FunctionaState from "./FunctionalComponents/FunctionaState"
import ChangeEvent from "./FunctionalComponents/ChangeEvent"
import Conditionalrendering from "./ConditionalRendering/Conditionalrendering"
import Main from "./LifeCycle/Main"
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
        {/* <OnChangeEvent/> */}
        {/* <AddData/> */}
        {/* <ArrayData/> */}
        {/* <ArrayObject/> */}
        {/* <Welcome/> */}
        {/* <FunctionalProps  name="Gita" roll={200} email="gita@gmail.com" /> */}
        {/* <FunctionaState/> */}
        {/* <ChangeEvent/> */}
        {/* <Conditionalrendering/> */}
        <Main/>
      </div>

    )
  }
}
export default App

