import {useState,useEffect} from "react";
import * as React from "react";
// import Parallaximg from '../../Parallaximg';
import bgimg from '../../assets/background.png';
// import bgimgg from '../../assets/backgroung-2.jpg';
import './Header.css';


// window.addEventListener('scroll', function() {
//     const parallax = document.querySelector('.parallax');
//     let scrollPosition = window.pageYOffset;

//     parallax.style.transform = `translateY(${scrollPosition * .5}px)`
// })

export default function PageHero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  return (
    <div>
       <section className="hero">
        <img
          src={bgimg}
          alt="test"
          className="parallax"
          style={{
            filter: `blur(0px)`,
            transform: `translateY(${offset * 0.5}px)`
          }}
        />
        {/* <div className="text-wrapper">
          <h1 className="headline">Parallax</h1>
          <h2 className="sub-headline">Scrolling effect</h2>
        </div> */}
      </section>
      {/* Make space to scroll  */}
      {/* <section className="overflow" /> */}
    </div>
  )
}

