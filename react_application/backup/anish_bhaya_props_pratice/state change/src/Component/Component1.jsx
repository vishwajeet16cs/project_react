import React from 'react';
import Hey from './Component2'

class Hello extends React.Component{
obj={
    name: "Anish",
    roll: 121,
    college:"AIT",
}
state={
    qty:0,
}
change=()=>{
    if(this.state.qty<10){
        this.setState({qty: this.state.qty+1})
    }
    if(this.state.qty===10)
    {
        alert("maximum limit");
    }
    
    
}

decr=()=>{
    if(this.state.qty>0)
    this.setState({qty: this.state.qty-1})
}

    render(){
        return<>
        <button onClick={this.decr}>-</button>     
        <h6>{this.state.qty}</h6>
        <button onClick={this.change}>+</button> 
        <Hey box={this.obj}/>
        </>
    
    }
}

export default Hello;