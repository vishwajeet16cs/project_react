import React from 'react';
import Manish from './Component2';

class Anish extends React.Component{
    obj={
        name:"Anish",
        Roll:121,
        College:"AIT",
    }

    render(){
        return<>
        <Manish details={this.obj}/>
        </>
    }
}

export default Anish;
