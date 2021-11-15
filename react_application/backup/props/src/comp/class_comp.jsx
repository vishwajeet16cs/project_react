import React from 'react';
import Component1 from './Func_comp';


class Component extends React.Component{
 obj={
    namef:"Anish",
    roll:"111",
    college:"PSA",
}
    render(){
        return (<>
        {/* <h1>{JSON.stringify(this.obj)}</h1> */}
        {/* <h1>name={this.obj.name}</h1> */}
        <Component1 x={this.obj}/>
    
    </>)
    }
}


export default Component;