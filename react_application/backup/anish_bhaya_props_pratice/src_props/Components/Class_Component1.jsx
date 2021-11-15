import React from "react"
import Component2 from "./Class_component2";

class Component1 extends React.Component{
    name="Anish";
    roll="1ay12cv011";
    school="PSA";
    render(){
        return <>
        {/* <h1>hello</h1> */}
        <Component2 naam={this.name}/>
        
        </>
    }

}

export default Component1;
