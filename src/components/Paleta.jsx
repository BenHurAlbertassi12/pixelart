import React from "react";
import PixelColor from '../image/PixelColor.png';
import '../css/paleta.css';

export default function Paleta() {
    return (
      <div>
        <img className='color selected' id='black' src={PixelColor} alt='' />
        <img className='color' id='red' src={PixelColor} alt='' />
        <img className='color' id='green' src={PixelColor} alt='' />
        <img className='color' id='blue' src={PixelColor} alt='' />
        <img className='color' id='aliceblue' src={PixelColor} alt='' />
        <img className='color' id='yellow' src={PixelColor} alt='' />
        <img className='color' id='cff00ff' src={PixelColor} alt='' />
        <img className='color' id='c00ffff' src={PixelColor} alt='' />

        <br />

        <img className='color' id='ff0080' src={PixelColor} alt='' />
        <img className='color' id='ff8040' src={PixelColor} alt='' />
        <img className='color' id='c804000' src={PixelColor} alt='' />
        <img className='color' id='c008080' src={PixelColor} alt='' />
        <img className='color' id='c800000' src={PixelColor} alt='' />
        <img className='color' id='c800080' src={PixelColor} alt='' />
        <img className='color' id='c8080ff' src={PixelColor} alt='' />
        <img className='color' id='darkgrey' src={PixelColor} alt='' />
      </div>
    );
}