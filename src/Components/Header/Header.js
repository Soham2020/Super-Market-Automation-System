import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { auth } from '../../firebase';
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header () {
    const [ { user }, dispatch ] = useStateValue();

    const handleAuthentication = () => {
        if(user)
            auth.signOut();
    }

    return (
        <div className="header">
            <img 
                className="header__logo"
                src="https://raw.githubusercontent.com/logo/amazon/f2c77b71bdf9987bf451f096d3462e0a3d4c1608/images/logo-black.svg"
            />
            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to='/'>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Logout</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                <div className="header__optionBasket">
                    <AddShoppingCartIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;