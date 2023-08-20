'use client'

import React, { Component } from "react"
import Slider from "react-slick"
import Image from "next/image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type LazyLoadTypes = 'ondemand' | 'progressive'

export default class AutoPlay extends Component {
    state = {
        mediaType: "image",
        currentSlide: -1,
    }

    // handleSlideHover = (index: number) => {
    //     this.setState({
    //         currentSlide: index,
    //         mediaType: "video", // Change media type to video on hover
    //     })
    // }

    // handleSlideLeave = (index: number) => {
    //     this.setState({
    //         currentSlide: index - 1,
    //         mediaType: "image", // Reset media type to image on leave
    //     })
    // }
    render() {
        const { mediaType, currentSlide } = this.state

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
        }
        return (
            <div>
                <Slider {...settings}>
                    {Array.from({ length: 8 }, (_, index) => (
                        <div
                            key={index}
                            // onMouseEnter={() => this.handleSlideHover(index)}
                            // onMouseLeave={() => this.handleSlideLeave(index)}
                        >
                            {mediaType === "image" ? (
                                <Image
                                    src={`https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_img0${index + 1}.png`}
                                    alt={`Image ${index + 1}`}
                                    width={800}
                                    height={400}
                                />
                            ) : (
                                <video
                                    src={`https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie0${index + 1}.mp4`}
                                    width={800}
                                    height={400}
                                    autoPlay
                                    muted
                                    preload="none"
                                ></video>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}
