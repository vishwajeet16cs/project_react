import React from "react";
import Comp2 from './Comp2'
class Comp1 extends React.Component{
        state={
            qty:0,
        }
        qt=0;
        change=()=>{
            this.setState({qty:this.state.qty+1})
        }
        changedec=()=>{
            this.setState({qty:this.state.qty-1})
        }
    render(){
        return(<>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                                <h1>{this.state.qty}</h1>
                        </div>
                        <div className="card-body">
                                <button onClick={this.change}>+</button>
                                <button onClick={this.changedec}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1>at comp1={this.qt}</h1>
        <Comp2 qty={this.qt}/>
        <h1>hello</h1></>)
    }
}
export default Comp1;