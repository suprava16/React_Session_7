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
import FetchData from "./API/FetchData"
import Post_api from "./API/Post_api"
import Fetch from "./API/Axios/Fetch"
import Post_method from "./API/Axios/Post_method"
import UseEffect_method from "./LifeCycle/UseEffect_method"
import Design from "./Materialui/Design"
import BootstrapDesign from "./Materialui/BootstrapDesign"
import ReactRouter from "./Routing/ReactRouter"
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
        {/* <Main/> */}
        {/* <FetchData/> */}
        {/* <Post_api/> */}
        {/* <Fetch/> */}
        {/* <Post_method/> */}
        {/* <UseEffect_method/> */}
        {/* <Design/> */}
        {/* <BootstrapDesign/> */}
        <ReactRouter/>
      </div>

    )
  }
}
export default App

