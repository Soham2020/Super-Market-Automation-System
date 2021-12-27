import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { auth } from '../../firebase';
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header () {
    const [ { cart, user }, dispatch ] = useStateValue();

    const handleAuthentication = () => {
        if(user)
            auth.signOut();
    }

    return (
        <div className="header">
            <img 
                className="header__logo"
                src="https://github.com/jcpandi/snapdeal/blob/master/img/freeze/snapdeallogo.png?raw=true"
            />
            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Logout</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                <div className="header__optionBasket">
                    <Link to='/cart'><AddShoppingCartIcon /></Link>
                    <span className="header__optionLineTwo header__basketCount">{ cart.length }</span>
                </div>
            </div>
        </div>
    )
}

export default Header;