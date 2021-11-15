import React from "react";
import Comp2 from "./comp2";
class Comp extends React.Component{
    obj={
        name:"vishwajeet",
        roll:129
    }
    check="raju";
    render(){
        
            return(<>
            
                <Comp2 namel={this.check} nameobj={this.obj}/>
                {/* <h1>h */}
            
            </>)
    }
}
export default Comp;