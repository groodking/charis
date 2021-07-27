import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import img1 from "../../assets/img1.png";
import img8 from "../../assets/img 8.png";
import img10 from "../../assets/img 10.png";
import img9 from "../../assets/img 9.png";
import Tilt from 'react-vanilla-tilt';

export default function Product() {
    return (
        <div>
            <div className="container">
                <div className="row">
                <Tilt className="tilt" options={{Speed:1000, max:1000, reverse:true, scale:100}}>
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 abc">
                    
                        <div className="card" align="center">
                            <Link to="/Product/ProductPage" className="productlink">
                                <div className="imgBx">
                                    <img src= {img1} alt=""/>
                                </div>
                                <div className="contextBx">
                                    <h3 className="prod_name">Women & Style Jute bags</h3>
                                    <h4 className="price">Rs 499/- </h4>
                                    <h6 className="original_price">Rs 950/-</h6>
                                </div>
                            </Link>
                            <div className="Icons-section">
                                <div className="row">
                                    <div className="col-sm-6 col-6 cart">
                                        <Link to="/Product/Added" className="productlink">
                                            <i className="fa fa-cart-plus fa-2x"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-sm-6 col-6 heart">
                                        <Link to="/Product/Favourite" className="productlink">
                                        <i className="fa fa-heart fa-2x"></i> 
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Tilt>
                    <Tilt className="tilt">
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 abc">
                        <div className="card" align="center">
                            <Link to="/Product/ProductPage" className="productlink">
                                <div className="imgBx">
                                    <img src= {img8} alt=""/>
                                </div>
                                <div className="contextBx">
                                    <h3 className="prod_name">Women & Style Jute bags</h3>
                                    <h4 className="price">Rs 499/- </h4>
                                    <h6 className="original_price">Rs 950/-</h6>
                                </div>
                            </Link>
                            <div className="Icons-section">
                                <div className="row">
                                    <div className="col-sm-6 col-6 cart">
                                        <Link to="/Product/Added" className="productlink">
                                            <i className="fa fa-cart-plus fa-2x"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-sm-6 col-6 heart">
                                        <Link to="/Product/Favourite" className="productlink">
                                        <i className="fa fa-heart fa-2x"></i> 
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Tilt>
                    <Tilt className="tilt">
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 abc">
                        <div className="card" align="center">
                            <Link to="/Product/ProductPage" className="productlink">
                                <div className="imgBx">
                                    <img src= {img9} alt=""/>
                                </div>
                                <div className="contextBx">
                                    <h3 className="prod_name">Women & Style Jute bags</h3>
                                    <h4 className="price">Rs 499/- </h4>
                                    <h6 className="original_price">Rs 950/-</h6>
                                </div>
                            </Link>
                            <div className="Icons-section">
                                <div className="row">
                                    <div className="col-sm-6 col-6 cart">
                                        <Link to="/Product/Added" className="productlink">
                                            <i className="fa fa-cart-plus fa-2x"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-sm-6 col-6 heart">
                                        <Link to="/Product/Favourite" className="productlink">
                                        <i className="fa fa-heart fa-2x"></i> 
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Tilt>
                    <Tilt className="tilt">
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 abc">
                        <div className="card" align="center">
                            <Link to="/Product/ProductPage" className="productlink">
                                <div className="imgBx">
                                    <img src= {img10} alt=""/>
                                </div>
                                <div className="contextBx">
                                    <h3 className="prod_name">Women & Style Jute bags</h3>
                                    <h4 className="price">Rs 499/- </h4>
                                    <h6 className="original_price">Rs 950/-</h6>
                                </div>
                            </Link>
                            <div className="Icons-section">
                                <div className="row">
                                    <div className="col-sm-6 col-6 cart">
                                        <Link to="/Product/Added" className="productlink">
                                            <i className="fa fa-cart-plus fa-2x"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-sm-6 col-6 heart">
                                        <Link to="/Product/Favourite" className="productlink">
                                        <i className="fa fa-heart fa-2x"></i> 
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Tilt>
                    <Tilt className="tilt">
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 abc">
                        <div className="card" align="center">
                            <Link to="/Product/ProductPage" className="productlink">
                                <div className="imgBx">
                                    <img src= {img10} alt=""/>
                                </div>
                                <div className="contextBx">
                                    <h3 className="prod_name">Women & Style Jute bags</h3>
                                    <h4 className="price">Rs 499/- </h4>
                                    <h6 className="original_price">Rs 950/-</h6>
                                </div>
                            </Link>
                            <div className="Icons-section">
                                <div className="row">
                                    <div className="col-sm-6 col-6 cart">
                                        <Link to="/Product/Added" className="productlink">
                                            <i className="fa fa-cart-plus fa-2x"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-sm-6 col-6 heart">
                                        <Link to="/Product/Favourite" className="productlink">
                                        <i className="fa fa-heart fa-2x"></i> 
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Tilt>
                    <Tilt className="tilt">
                    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 abc">
                        <div className="card" align="center">
                            <Link to="/Product/ProductPage" className="productlink">
                                <div className="imgBx">
                                    <img src= {img10} alt=""/>
                                </div>
                                <div className="contextBx">
                                    <h3 className="prod_name">Women & Style Jute bags</h3>
                                    <h4 className="price">Rs 499/- </h4>
                                    <h6 className="original_price">Rs 950/-</h6>
                                </div>
                            </Link>
                            <div className="Icons-section">
                                <div className="row">
                                    <div className="col-sm-6 col-6 cart">
                                        <Link to="/Product/Added" className="productlink">
                                            <i className="fa fa-cart-plus fa-2x"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-sm-6 col-6 heart">
                                        <Link to="/Product/Favourite" className="productlink">
                                        <i className="fa fa-heart fa-2x"></i> 
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Tilt>
                </div>
            </div>
        </div>
        
    );
}
