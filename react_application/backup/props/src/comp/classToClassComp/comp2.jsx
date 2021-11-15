import React from 'react';
class Comp2 extends React.Component{
    render(){
        
            return(<>
            <h1>{JSON.stringify(this.props.nameobj)}</h1>
            <h1>name={this.props.namel}</h1>
            <h1>obj name={this.props.nameobj.name}</h1>
            <h1>{JSON.stringify(this.props.namel)}</h1>
            </>)
    }
}
export default Comp2;