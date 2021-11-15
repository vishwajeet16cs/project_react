import React from 'react';
import CartMobile from './CartMobile';
import {Provider} from "react-redux";
import {store} from './redux/store' 
class App extends React.Component{
  render(){
	  
    return(<>
    <Provider store={store}>
    <CartMobile/>
    </Provider>
     
      
    </>);
  }
}

export default App;
