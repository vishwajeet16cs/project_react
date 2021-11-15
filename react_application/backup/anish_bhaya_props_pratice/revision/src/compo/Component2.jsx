import React from 'raect';
import Anish from 'Component1';

class Manish extends React.Component{
    render(props){
        return<>
        <Anish {props.obj.name}/>
        </>
    }
}