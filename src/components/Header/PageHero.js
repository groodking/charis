import React from "react";
import Parallaximg from '../../Parallaximg';
import bgimg from '../../assets/background.png';
import './Header.css';

class PageHero extends React.Component {
  render() {
    return (
    <Parallaximg imgsrc={bgimg} height="100%" width="100%" opacity="0.5" className="back"> 
    <div className="w-full h-screen page-hero">
    </div>
    </Parallaximg> 
   
    );
  }
}

export default PageHero;