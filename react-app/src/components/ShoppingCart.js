import React from 'react';
import cartData from "../data/cartData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const closeIcon = <FontAwesomeIcon icon={faTimes} />
const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />

const ShoppingCart = () => {
    return(
        <div className="ShoppingCart">
            <div id="tableSection">
            <table>
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.map((item) => 
                        <tr key={item.id}>
                            <td id="firstCol">
                                <div>
                                    <img src={item.image} alt="product_image" />
                                </div>
                                <div id="titleSection">
                                    <span>{item.title}</span>
                                    <span id="code">{item.id}</span>
                                </div>
                            </td>
                            <td>{item.color}</td>
                            <td>{item.size}</td>
                            <td> 
                            <div id="amountButton">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            </td>
                            <td>{item.price}</td>
                            <td>{closeIcon}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            <div className="bottomSection">
                <div id="goBackShopping">
                    <span>{leftArrow}</span>
                    <span>Continue Shopping</span>
                </div>
                <div id="checkOut">
                    <input placeholder="Promo Code"/>
                    <span id="costTitle">Total Cost</span>
                    <span id="cost">$159.98</span>
                    <button id="checkoutButton">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;