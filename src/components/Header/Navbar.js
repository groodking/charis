import "./Header.css";
import "./Search.css";
import React,{Component} from "react";
import logo from "../../assets/logo.png";
// import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import classnames from "classnames";


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  render(){
  return (
         <nav className={classnames("Navbar", "container",{
          "Navbar--hidden": !this.state.visible
        },
        {
          "Navbar--show": this.state.visible
        })}>
      <div className="logoimg"><a href="/charis"><img src={logo} alt="logo.png"/></a></div>
      <ul className="icons">
      <a href="/charis"><li className="iconss"><i className ="phones fa fa-mobile fa-lg" aria-hidden="true"></i></li></a>
      <a href="/charis"><li className="iconss"><i className=" logs fa fa-user fa-lg" aria-hidden="true"></i></li></a>
      <a className="cartlink" href="/charis"><li className="iconss"><i className=" cart fa fa-shopping-cart fa-lg" aria-hidden="true"><span>2</span></i></li></a>
      <li>
      <button className="navbar-toggler toggler-example ham iconss" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text">
    <i class="fa fa-bars" aria-hidden="true"></i></span></button>
      </li>
      </ul>
      <div className="collapse navbar-collapse secondary_navbar" id="navbarSupportedContent1" align="center">
          <ul className="navbar-nav mr-auto">
          <li className="secondary_items">Home</li>
          <li className="secondary_items"><Link to="/Product" className="buy_prod">Jute Bags</Link></li>
          <li className="secondary_items">Gifts</li>
          <li className="secondary_items">About Us</li>
          <li className="secondary_items">SignIn</li>
          {/* <li className="secondary_items sss" align="center">
          <div className="search" align="center">
              <input type="text" className="search__input" aria-label="search" placeholder="enter your search"/>
            <button className="search__submit" aria-label="submit search" align="center"><i className="fas fa-search"></i></button>
          </div>
          </li> */}
          </ul>
        </div>
      </nav>
  )
}
}