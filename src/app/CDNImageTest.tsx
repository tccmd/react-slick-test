'use client'

import Image from "next/image"
import { useState } from "react";
import { datas } from './datas'


export default function CDNImageTest() {
    const [videoStates, setVideoStates] = useState(Array(8).fill(false)); // 비디오 보이기/숨기기 상태 배열

    const toggleVideo = (index: number) => {
        const newVideoStates = [...videoStates];
        newVideoStates[index] = !newVideoStates[index];
        setVideoStates(newVideoStates);
    };

    return (
        <div>
            {
                Array.from({ length: 8 }, (_, index) => (
                    <div key={index} onClick={() => toggleVideo(index)}>
                        {videoStates[index] ? (
                            <video
                                src={`https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie0${index + 1}.mp4`}
                                width={800}
                                preload="auto"
                                autoPlay
                                muted
                                controls
                            ></video>
                        ) : (
                            <Image
                                src={`https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_img0${index + 1}.png`}
                                alt={`Image ${index + 1}`}
                                width={800}
                                height={400}
                            />
                        )}
                    </div>
                )) // Arrayfrom
                // datas.map((data) => (
                //     <div key={data.id}>
                //             {data.contents.map((content, idx) => (
                //                 <div key={idx}>
                //                     <video
                //                         src={content.mp4}
                //                         width={800}
                //                         autoPlay
                //                         muted
                //                         preload="auto"
                //                     />
                //                 </div>
                //             ))}
                //     </div>
                // ))
            }
        </div>
    )
}