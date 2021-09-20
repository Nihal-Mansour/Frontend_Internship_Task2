import React from 'react';
import cartData from "../data/cartData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />

const Payment = () =>{
    return(
        <div className="payment">
            <div id="upperSection">
            <div className="shippingInfo">
                <div>
                    <button id="login">LOGIN</button>
                    <button id="signup">SIGNUP</button>
                </div>
                <div id="shippingTitle">Shipping Information</div>
                <div id="shipInfo">
                    <div>
                        <input placeholder="Email"/>
                        <input placeholder="Address"/>
                    </div>
                    <div>
                        <input placeholder="First Name"/>
                        <input placeholder="City"/>
                    </div>
                    <div>
                        <input placeholder="Last Name"/>
                        <input placeholder="Postal Card / Zip"/>
                    </div>
                    <div>
                        <input placeholder="Phone Number"/>
                        <input placeholder="Country"/>
                    </div>
                </div>
            </div>
            <div className="paymentMethod">
                <div id="paymentOptions">
                    <div id="shippingTitle">Payment Method</div>
                    <div id="row">
                        <div id="methodImages"><img src={require("../assets/paypal.png").default} alt="image0"/></div>
                        <div id="methodImages"><img src={require("../assets/Visa.png").default} alt="image1"/></div>
                        <div id="methodImages"><img src={require("../assets/Mastercard.png").default} alt="image2"/></div>
                    </div>
                    <div id="row">
                        <div id="methodImages"><img src={require("../assets/Maestro.png").default} alt="image3"/></div>
                        <div id="methodImages"><img src={require("../assets/Discover.png").default} alt="image4"/></div>
                        <div id="methodImages"><img src={require("../assets/ideal.png").default} alt="image5"/></div>
                    </div>
                </div>
                <div id="deliveryOptions">
                <div id="shippingTitle">Delivery Method</div>
                <div id="row">
                        <div id="methodImages"><img src={require("../assets/inpost.png").default} alt="image6"/></div>
                        <div id="methodImages"><img src={require("../assets/DPD.png").default} alt="image7"/></div>
                </div>
                <div id="row">
                        <div id="methodImages"><img src={require("../assets/DHL.png").default} alt="image8"/></div>
                        <div id="methodImages"><img src={require("../assets/FedEx.png").default} alt="image9"/></div>
                </div>
                </div>
            </div>
            <div className="userCart">
                <div id="shippingTitle">Your Cart</div>
                <div id="userCartContent">
                {
                    cartData.map((item) => 
                    <div id="cartCard" key={item.id}>
                        <div>
                            <img src={item.image} alt="product_image" />
                        </div>
                        <div id="cardStyle">
                            <span id="cartTitleStyle">{item.title}</span>
                            <span id="code">{item.id}</span>
                        </div>
                        <div id="cartTitleStyle">{item.price}</div>
                    </div>
                    )
                }
                <div id="totalCost">
                <span id="cTitle">
                    Total Cost 
                </span>
                <span id="cNum">
                    $159.98
                </span>
                </div>
                <div id="moreInfo">
                    <img src={require("../assets/truck.png").default} alt="truck"/>
                    You are <span id="cNum">$30.02</span> away from free shipping!
                </div>
            </div>
            </div>
            </div>
            <div id="downSection">
            <div id="back">
                    <span>{leftArrow}</span>
                    <span>Back</span>
            </div>
            <div>
                <button id="backShopping">CONTINUE SHOPPING</button>
                <button id="proceedPayment">PROCEED TO PAYMENT</button>
            </div>
            </div>
        </div>
    );
}

export default Payment;