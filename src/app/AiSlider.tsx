'use client'

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import styles from '@/app/style.module.css'; // 실제 경로에 맞게 수정하세요

interface VideoSlideProps {
  src: string;
  visible: boolean;
}

const VideoSlide: React.FC<VideoSlideProps> = ({ src, visible }) => (
  <video src={src} width={400} autoPlay loop muted style={{ display: visible ? 'block' : 'none' }} />
);

interface SlideShowProps {
  videos: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({ videos }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const totalSlides: number = videos.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      ref={slideContainerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.slideContainer}
    >
      {videos.map((video, index) => (
        <VideoSlide key={index} src={video} visible={index === currentSlide} />
      ))}
    </div>
  );
};

const CustomSlider: React.FC = () => {
  const videos: string[] = [
    'https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie01.mp4',
    'https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie02.mp4',
    'https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie03.mp4'
  ];

  return (
    <>
      <SlideShow videos={videos} />
    </>
  );
};

export default CustomSlider;























// import { useState, useRef, useEffect } from 'react';
// import styles from '@/app/style.module.css';

// const videos: string[] = [
//     'https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie01.mp4',
//     'https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie02.mp4',
//     'https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie03.mp4'
//   ];

// interface VideoSlideProps {
//   src: string;
// }

// const VideoSlide: React.FC<VideoSlideProps> = ({ src }) => (
//     <video src={src} autoPlay loop muted width={400}/>
//   );

// const AiSlider: React.FC = () => {

//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const slideContainerRef = useRef<HTMLDivElement>(null);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // 3초마다 슬라이드 변경

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div ref={slideContainerRef} className={styles.slide_container}>
//         {videos.map((video, index) => (
//           <div key={index} className={styles.slide_item}>
//             <VideoSlide src={video}/>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default AiSlider;
