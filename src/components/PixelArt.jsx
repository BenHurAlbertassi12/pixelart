import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useRef, createElement } from 'react';


export default function PixelArt() {
    const corDoFundo = useRef('.color');
    // const corDoFundo = document.querySelectorAll('.color');


  corDoFundo[0].style.backgroundColor = 'black';
  corDoFundo[1].style.backgroundColor = 'red';
  corDoFundo[2].style.backgroundColor = 'green';
  corDoFundo[3].style.backgroundColor = 'blue';
  corDoFundo[4].style.backgroundColor = "aliceblue";
  corDoFundo[5].style.backgroundColor = "yellow";
  corDoFundo[6].style.backgroundColor = "ff00ff";
  corDoFundo[7].style.backgroundColor = "c00ffff";
  corDoFundo[8].style.backgroundColor = "cff0080";
  corDoFundo[9].style.backgroundColor = "ff8040";
  corDoFundo[10].style.backgroundColor = "c804000";
  corDoFundo[11].style.backgroundColor = "c008080";
  corDoFundo[12].style.backgroundColor = "c800000";
  corDoFundo[13].style.backgroundColor = 'c800080';
  corDoFundo[14].style.backgroundColor = 'c8080ff';
  corDoFundo[15].style.backgroundColor = "darkgrey";
    
    const quadro25x25 = () => {
        for (let index = 0; index < 25; index++) {
            const divPixel = createElement('div', {className: 'pixel'});
            return divPixel
        }
    }

    
  return (
    <div>
      {quadro25x25()}
    </div>
  );
}