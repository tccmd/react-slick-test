'use client'

import { useState, useEffect } from 'react'
import './slider.css'

export default function CustomSlider() {

    const data = ['1', '2', '3']

    return (
        <div className="slideContainer">
            {data.map((item, index) => (
                <div key={index} className='slideItem'>
                    {item}
                </div>
            ))}
        </div>
    );
}
