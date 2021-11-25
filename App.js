import "./App.css";
import Component1 from "./components/component1/component1";
import Component2 from "./components/component2/component2";
import Component3 from "./components/component3/component3";
import Component4 from "./components/component4/component4";
import LifecycleReact from "./components/lifecycle-react/lifecycle-react";
import AtheleteDetails from "./components/atheleteDetails/atheleteDetails";

function App() {
  return (
    <>
      <div className="App">
        <h1>React class</h1>
      </div>
      {/* <Component1 className="comp1" />
      <Component2 className="comp2" />
      <Component3 className="comp3" />
      <Component4 className="comp4" /> */}

      {/* <LifecycleReact /> */}
      <AtheleteDetails />
    </>
  );
}

export default App;
