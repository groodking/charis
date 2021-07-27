import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import Sliderfeature from './components/Featured/Sliderfeature';
import {ParallaxProvider} from 'react-scroll-parallax';
import PageHero from './components/Header/PageHero.js';
// import Parallaximg from './Parallaximg';
import Parallaxsection from './Parallaxsection';
// import bgimg from ".././src/assets/background.png";
// import img1 from ".././src/assets/img1.png";
// import bg2 from ".././src/assets/background-triangles.png";
import "./intro.css";

class Intro extends React.Component  {
      render(){
    return (
        <ParallaxProvider>
        <Header/>
        <PageHero/>
        <Product/>
        <Sliderfeature/>
        <Parallaxsection height="500px" className="abcd">
            <div align="center" className="aboutus">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,seddo eiusmod tempor incididunt ut laboreetdolore magna 
                aliqua.Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </Parallaxsection>
        <Footer/>
        </ParallaxProvider>
    )
}
}

export default Intro;