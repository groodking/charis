import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import CategorySlider from './components/Featured/CategorySlider';
import About from './components/About Us/About.js';
// import {ParallaxProvider} from 'react-scroll-parallax';
// import PageHero from './components/Header/PageHero.js';
// import Parallaximg from './Parallaximg';
// import Parallaxsection from './Parallaxsection';
// import bgimg from ".././src/assets/background.png";
// import img1 from ".././src/assets/img1.png";
// import bg2 from ".././src/assets/background-triangles.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./intro.css";

class Intro extends React.Component  {
      render(){
    return (
        // <ParallaxProvider>
        <div>
        <Header/>
        {/* <div className="container"> */}
        {/* <div> */}
            <CategorySlider/>
            <Product/> 
            <About/> 
            <Footer/> 
            {/* <div className="test4"></div> */}
        {/* </div> */}
        {/* <div className="test1"></div>
        <div className="test2"></div>
        <div className="test3"></div>
        <div className="test4"></div>
        <div className="test4"></div> */}
        {/* </div> */}
        {/* <div className="test4"></div> */}
        
        {/* <PageHero/> */}
        {/* <Product/> */}
        {/* <div height="500px" className="abcd "> */}
        {/* <About/> */}
        {/* </div> */}
        {/* <Footer/> */}
        </div>
        // </ParallaxProvider>
    )
}
}

export default Intro;