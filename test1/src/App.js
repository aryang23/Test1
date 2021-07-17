import React from "react";
import Search from "./Search";
import List from "./List";
import Navbar from "./navbar";
import DropDown from "./DropDown";

function App() {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <div className="row">
          <div className="col-2 p-4"><Search /></div>
          <div className="col-4 p-8"> <DropDown /></div>
        </div>
        
        
        <List />
      </React.Fragment>
      
    </div>
  );
}

export default App;
