import React from "react";
class Comp2 extends React.Component{
    state={
        qty:this.props.qty,
    }
    change=()=>{
        this.setState({qty:this.props.qty+1})
    }
    changedec=()=>{
        this.setState({qty:this.props.qty-1})
    }
    render(){
        return(<>
        <h1>{JSON.stringify(this.props)}</h1>
        <button onClick={this.change}>+</button>
        <button onClick={this.changedec}>-</button>
            <h1>{this.props.qty}</h1>
            <h1>{this.state.qty}</h1>
        </>)
    }
}
export default Comp2;