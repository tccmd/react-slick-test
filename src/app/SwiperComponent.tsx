'use client'

import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { useSwiper, Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'

// Import Swiper styles
// import 'swiper/css/lazy'
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

export default function SwiperComponent() {
  const swiper = useSwiper()
  const swiperSlide = useSwiperSlide();


  useEffect(()=>{
    swiper
  })

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log('slide change')}
        modules={[Autoplay, Pagination]}
        className=""
        onTouchStart={() => { console.log('onTouchStart') }}
        onTouchMove={() => { console.log('onTouchMove') }}
        noSwiping
      >
        <SwiperSlide>
          <video controls muted src="https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie01.mp4" preload='none' />
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div>Current slide is {isActive ? 'active' : 'not active'}</div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          3
        </SwiperSlide>
        <SwiperSlide>
          4
        </SwiperSlide>
      </Swiper>
      <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
      {/* <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p> */}
    </>
  )
}
