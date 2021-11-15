import React,{useState} from 'react';

import {useDispatch,useSelector} from "react-redux";
import { incrAction,dectAction } from './redux/cart/cart.action';
const CartMobile =()=>{
    let dispatch =useDispatch();
    let product= useSelector((state)=>{
        return state.cart;
    });
    
    return(<>
    <h1>hel{JSON.stringify(product)}</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                  <table class="table table-dark">
                      <thead>
                          <tr>
                              <th>NAME</th>
                              <th>IPHONE</th>
                              <th>QTY</th>
                              <th>PRICE</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>{product.name}</td>
                              <td><img src={product.Image} alt="" /></td>
                              <td></td>
                              <td></td>
                          </tr>
                      </tbody>
                  </table>
                </div>
            </div>
        </div>
    
    </>)
}
export default CartMobile;