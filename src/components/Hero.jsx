import React from 'react'
import  {useEffect, useRef} from "react"

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);
    return (
        <section id="hero">
            <div>
                <h1>Mackbook Pro</h1>
                <img src="/title.png" alt="Mackbook Title"/>
            </div>
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>
            <button>Buy</button>
            <p>From £1599 or £139/mo for 12 months</p>
        </section>
    )
}
export default Hero
