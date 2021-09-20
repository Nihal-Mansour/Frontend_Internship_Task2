import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const truckIcon = <FontAwesomeIcon icon={faTruck} />
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const InnerNav = () => {
    const [name , setName] = useState("Shopping Cart");
    const changeTitle = (pageName) => {
        setName(pageName);
        var cart = document.getElementById("cart");
        var shipping = document.getElementById("shipping");
        if(pageName === "Shopping Cart"){
            cart.style.backgroundColor = "#FBB03B";
            cart.style.color = "white";
            shipping.style.backgroundColor = "white";
            shipping.style.color = "#FBB03B";
        }else{
            shipping.style.backgroundColor = "#FBB03B";
            shipping.style.color = "white";
            cart.style.backgroundColor = "white";
            cart.style.color = "#FBB03B";
        }
    }
    return(
        <div className="innerNav">
            <div id="title">{name}</div>
            <div id="options">
                <ul>
                    <Link to="/"><li id="cart" style={{backgroundColor: "#FBB03B", color: "white" }} onClick={() =>changeTitle("Shopping Cart")}>{cartIcon}</li></Link>
                    <div id="line"></div>
                    <Link to="/shipping"><li id="shipping" onClick={() => changeTitle("Shipping and Payment")}>{truckIcon}</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default InnerNav;