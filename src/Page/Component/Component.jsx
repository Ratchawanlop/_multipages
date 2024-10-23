import './Component.css'

import Add from "../../Components/Add/Add";
import Counter from "../../Components/Counter/Counter";
import Timer from "../../Components/Timer/Timer";
import Temperatures from "../../Components/Temperatures/Temperatures";
function Component() {

    return (
        
      <div className="main-container">
        <h1>
          <span className="main-title">REACT COMPONENTS</span>
        </h1>
        <div>
          <div className="All-Grid">
            
            <div className="CounterTime-grid">
              <Counter name={"Counter"} value={0} />
              <Timer name={"Timer"} />
            </div>
            <div className="Add-grid">
              <Add name={"ADD"} aValue={0} bValue={0} />
            </div>
          </div>
  
          <span className="Temperatures-Flex">
            <Temperatures name={"Temperatures"} initCelsius={0} />
          </span>
        </div>
      </div>
    );
  }

export default Component;