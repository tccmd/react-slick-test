import React, { Component, useState } from "react"
import Slider from "react-slick"
import Image from "next/image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './slider.css'


export default function AutoPlay() {
        // const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)

        // const handleSlideEnter = (index: number) => {
        //     console.log('enter'+index)
        //     setIsMouseEnter(true)
        // }
    
        // const handleSlideLeave = () => {
        //     console.log('leave')
        //     setIsMouseEnter(false)
        // }

        const settings = {
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            speed: 2500,
            autoplaySpeed: 3500,
            cssEase: "linear",
            pauseOnHover: true,
            lazyLoad: 'ondemand' as const,
            centerPadding: '100px',
            onLazyLoad: ()=>{console.log('레이지 로드')},
            onSwipe: ()=>{console.log('swipe')},
            onInit: ()=>(console.log('Init')),
            onEdge: ()=>{console.log('onEdge')}
        }
        return (
            <div>
                <Slider {...settings}>
                    {Array.from({ length: 8 }, (_, index) => (
                        <div
                            key={index}
                            // onMouseEnter={() => handleSlideEnter(index)}
                            // onMouseLeave={() => handleSlideLeave()}
                        >
                            
                                <Image
                                    src={`https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_img0${index + 1}.png`}
                                    alt={`Image ${index + 1}`}
                                    width={800}
                                    height={400}
                                    className="slick_Image"
                                />
                            
                                <video
                                    src={`https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie0${index + 1}.mp4`}
                                    width={800}
                                    height={400}
                                    autoPlay
                                    muted
                                    preload="none"
                                    className="slick_video"
                                ></video>
                           
                        </div>
                    ))}
                </Slider>
                <button onClick={()=>{}}></button>
            </div>
        )
}

