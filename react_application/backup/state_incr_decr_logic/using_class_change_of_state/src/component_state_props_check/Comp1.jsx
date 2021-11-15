import React from "react";
class Comp1 extends React.Component{
        state={
            qty:0,
        }
        qt=0;
        change=()=>{
            this.setState({qty:this.state.qty+1})
        }
        changedec=()=>{
            if(this.state.qty!==0){
                this.setState({qty:this.state.qty-1})
            }
            
        }
    render(){
        return(<>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                                <h1>{this.state.qty}</h1>
                        </div>
                        <div className="card-body">
                                <button name="incr" className="btn btn-danger" onClick={this.change}>+</button>
                                <button neme="decr" className="btn btn-success" onClick={this.changedec}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>)
    }
}
export default Comp1;