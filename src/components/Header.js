import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket)
  return (
    <>
      <nav className="header">
        {/* Logo On The Left -> img */}

        <Link to="/">
          <img
            className="header-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Logo"
          />
        </Link>

        {/* Search Box */}
        <div className="header-search">
          <input type="text" className="header-searchInput" />
          <Search className="header-searchIcon" />
        </div>

        {/* Links  */}
        <div className="header-nav">
          <Link to="/login" className="header-link">
            <div className="header-option">
              <span className="header-optionLineOne">hey, Avi</span>
              <span className="header-optionLineTwo">sign in</span>
            </div>
          </Link>
          <Link to="/" className="header-link">
            <div className="header-option">
              <span className="header-optionLineOne">Returns </span>
              <span className="header-optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header-link">
            <div className="header-option">
              <span className="header-optionLineOne">Your</span>
              <span className="header-optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header-link">
            <div className="header-optionBasket">
              <ShoppingBasket />
              <span className="header-optionLineTwo header-basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
        {/* Basket Icons With Numbers  */}
      </nav>
    </>
  );
}

export default Header;
