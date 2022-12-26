function quadroDesenhoPixel() {
  let quadroDPixels = document.getElementById("pixel-board");

  for (let index = 0; index < 25; index += 1) {
    let divisDoPixel = document.createElement("div");
    divisDoPixel.className = "pixel";
    quadroDPixels.appendChild(divisDoPixel);
  }
}
quadroDesenhoPixel();

function coloredPixels() {
  let color7 = document.getElementById("color-palette");
  function setarNovaCor(event) {
    let selectedColor = document.getElementsByClassName("selected")[0];
    selectedColor.classList.remove("selected");
    let otherColor = event.target;
    otherColor.classList.add("selected");
  }

  color7.addEventListener("click", setarNovaCor);
}
coloredPixels();

function pintarPixels() {
  let quadroPixels = document.getElementById("pixel-board");
  quadroPixels.addEventListener("mouseup", function (event) {
    let selectedColor = document.querySelectorAll(".selected")
    event.target.style.background = selectedColor[0].id;
  });
}
pintarPixels();

function limparPixels(buttonName) {
  let cleanButton = document.querySelector("p");
  let newButton = document.createElement("button");
  newButton.id = "clear-board";
  newButton.innerHTML = buttonName;
  cleanButton.appendChild(newButton);

  newButton.addEventListener("click", function () {
    let pixelsPintados = document.querySelectorAll(".pixel");
    for (let index = 0; index < pixelsPintados.length; index += 1) {
      pixelsPintados[index].style.background = "white";
    }
  });
}
limparPixels("Limpar");
