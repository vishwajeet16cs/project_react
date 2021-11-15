import React from 'react';

class Quantity extends React.Component{
    state={
        qty:0,
    }
    incr=()=>{
        if(this.state.qty<10)
        this.setState({qty:this.state.qty+1})
        if(this.state.qty==10){
            alert("Maximum Limit Reached");
        }
    }
    decr=()=>{
        if(this.state.qty>0)
        this.setState({qty:this.state.qty-1})
    }
    render(){
        return<>
        <button onClick={this.incr}>+</button>
        <h4><button>{this.state.qty}</button></h4>
        <button onClick={this.decr}>-</button>
        </>
    }
}
 export default Quantity;