import "./Header.css";
import "./Search.css";
import React from "react";
import logo from "../../assets/logo.png";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useScroll } from "../../useScroll";

 export default function Navbar() {
  const { y, x, scrollDirection } = useScroll(); 

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.3s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.3",
      transform: "translateY(-100%)"
    }
  }


  return (
    <div className="navbar-wrapper">
         <div className="Navbar navbar-transition" style={scrollDirection === "down" ?  styles.hidden: styles.active }>
      <img src={logo} alt="logo.png" className="logoimg"/>
        <Button className="phones" color="inherit">
          <PhoneAndroidIcon />
        </Button>
        <Button className="logs" color="inherit">
          <PersonIcon />
        </Button>
        <Button className="cart" color="primary">
          <ShoppingCartIcon />
          <span> - 2</span>
        </Button>
        <button className="navbar-toggler toggler-example ham" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
        className="fas fa-bars fa-1x"></i></span></button>
          <div className="collapse navbar-collapse secondary_navbar" id="navbarSupportedContent1" align="center">
          <ul className="navbar-nav mr-auto">
          <li className="secondary_items">Home</li>
          <li className="secondary_items"><Link to="/Product" className="buy_prod">Jute Bags</Link></li>
          <li className="secondary_items">Gifts</li>
          <li className="secondary_items">About Us</li>
          <li className="secondary_items">SignIn</li>
          <div className="search" align="center">
              <input type="text" className="search__input" aria-label="search" placeholder="enter your search"/>
            <button className="search__submit" aria-label="submit search" align="center"><i className="fas fa-search"></i></button>
          </div>
          </ul>
         </div>
      </div>
    </div>
  )
}
