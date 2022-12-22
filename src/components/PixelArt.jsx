import React from "react";
// import { useRef, createElement } from 'react';

import '../css/pixelArtPaleta.css';


function PixelArt() {
  // let corDoFundo = React.useRef('.color');
    
  // corDoFundo[0].setAttribute("style", backgroundColor 'black');
  // corDoFundo[1].setAttribute("style", "background-color:red;");
  // corDoFundo[2].style.backgroundColor = 'green';
  // corDoFundo[3].style.backgroundColor = 'blue';
  // corDoFundo[4].style.backgroundColor = 'aliceblue';
  // corDoFundo[5].style.backgroundColor = 'yellow';
  // corDoFundo[6].style.backgroundColor = 'ff00ff';
  // corDoFundo[7].style.backgroundColor = '#00ffff';
  // corDoFundo[8].style.backgroundColor = '#ff0080';
  // corDoFundo[9].style.backgroundColor = 'ff8040';
  // corDoFundo[10].style.backgroundColor = '#c804000';
  // corDoFundo[11].style.backgroundColor = '#c008080';
  // corDoFundo[12].style.backgroundColor = '#800000';
  // corDoFundo[13].style.backgroundColor = '#800080';
  // corDoFundo[14].style.backgroundColor = '#8080ff';
  // corDoFundo[15].style.backgroundColor = 'darkgrey';

  const quadro25x25 = () => {
     for (let index = 0; index < 25; index += 1) {
       const divPixel = React.createElement('div', {
         className: 'pixel',
       });
       return divPixel;
     }
  };
    
console.log('teste', quadro25x25());
    
  return (
    <div>
      <div id='pixel-board'>
        {quadro25x25()}
      </div>
      ;
    </div>
  );
    

}
export default PixelArt;