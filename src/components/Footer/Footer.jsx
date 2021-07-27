import React from "react";
import './Footer.css';
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer-start">
      <div>
      <footer data-component="footer">
      <div className="container-fluid feature" align="left">
        <div className="row">
          <div className="col-sm-3 footer-logo-box">
            <img src={logo} alt="logo"/>
          </div>
          <div className="col-sm-3">
            <ul>
                  <li><h4>About Charis</h4></li>
                  <li><a href='!#'>GET TO KNOW US</a></li>
                  <li><a href='!#'>Privay policy</a></li>
                  <li><a href='!#'>Refund policy</a></li>
                  <li><a href='!#'>Terms of service</a></li>
                  <li><a href='!#'>Shipping policy</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li><h4>The Gift Selection</h4></li>
              <li><a href="!#">Giveaway bags</a></li>
              <li><a href="!#">Multi-Utility bags</a></li>
              <li><a href='!#'>Beach bags</a></li>
              <li><a href='!#'>Special occasion gift bags</a></li>
              <li><a href='!#'>Women 'n' style</a></li>
              <li><a href='!#'>Kids</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li><h4>Contact Us</h4></li>
              <li className="footer-icon-box"><i className="fa fa-envelope fa-1x footer-icon fa-inverse" aria-hidden="true"></i><a href='mailto:abc@gmail.com'>abc@gmail.com</a></li>
              <li className="footer-icon-box"><i className="fa fa-phone fa-1x footer-icon fa-inverse" aria-hidden="true"></i><a href='tel:9876543210'>9876543210</a></li>
              <li className="footer-icon-box"><i className="fa fa-map-marker fa-1x footer-icon fa-inverse" aria-hidden="true"></i><a href='!#'>Chennai</a></li>
              <li className="footer-icon-box2">If you have any queries feel free to <a href="!#" className="btn btn-primary btn-sm active" role="button" aria-pressed="true">CONTACT US</a></li>
            </ul>
          </div>
        </div>

        <section className="footer-social-section flex-rw">
              <span className="footer-social-overlap footer-social-connect">
              CONNECT <span className="footer-social-small">with</span> US
              </span>
              <span className="footer-social-overlap footer-social-icons-wrapper">
              <a href="!#" target="_new" title="Facebook"><i className="fa fa-facebook"></i></a>
              <a href="https://instagram.com/charis_2u?utm_medium=copy_link" target="_new" title="Instagram"><i className="fa fa-instagram"></i></a>
              </span>
        </section>

<div className="row footer-copyright">

  <div className="col-sm-6 footer-copyright-text">
      <i className="fa fa-copyright" aria-hidden="true"></i> Charis 2021. All rights are reserved. <span className="small"> | </span> <a href="!#" rel="nofollow">Terms</a><span className="small"> | </span><a href="/privacy-policy.html"  rel="nofollow">Privacy</a>
  </div>

  <div className="col-sm-6 footer-copyright-text2">
      <i className="fa fa-pencil fa-1x fa-inverse" aria-hidden="true"></i> Powered by: <a href="https://www.tensketch.com/" target="_new">Tensketch</a>.
  </div>

</div>

</div>
      </footer>
      </div>
      );
    </div>
  );
}

export default Footer;
