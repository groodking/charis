import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Parallaximg(props) {
    let contentStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
        color: "#ffffff",
        backgroundColor:'rgba(0,0,0,.4)'
        // WebkitFilter: 'blur(0px) saturate(10)'
    }
    return (
        <ParallaxBanner 
        layers={[{image: props.imgsrc , amount:0.6}]}
        style={{height: props.height,
                width: props.width,
                }}
        >
            <div style={contentStyle}>
                {props.children}
            </div>
        </ParallaxBanner>
    )
}
