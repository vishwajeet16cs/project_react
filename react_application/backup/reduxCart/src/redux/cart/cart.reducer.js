import { INCR,DECR } from "./cart.action";
let InitialState ={
    name:"I-PHONE",
    Image:"https://rukminim1.flixcart.com/image/224/224/kgiaykw0/mobile/r/f/s/apple-iphone-11-mhde3hn-a-original-imafwqepzbrcagw3.jpeg?q=90",
    qty:0,
    price:120000,

}
let cartReducer=(state=InitialState,action)=>{
        console.log(action);
        switch(action.type){
            case INCR:
                return {...state,qty:state.qty+1}; 
            case DECR:
                return {...state,qty:state.qty-1};
            default :
                return state;
            }
}
export {cartReducer};