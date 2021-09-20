import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const searchIcon = <FontAwesomeIcon icon={faSearch} />
const userIcon = <FontAwesomeIcon icon={faUser} />
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const Nav = () => {
    return(
        <div className="nav">
            <div className="leftSection">
                <span id="letterE">E-</span>Shop
            </div>
            <div className="middleSection">
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
            </div>
            <div className="rightSection">
                <ul>
                    <li>{searchIcon}</li>
                    <li>{cartIcon}</li>
                    <li>{userIcon}</li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;