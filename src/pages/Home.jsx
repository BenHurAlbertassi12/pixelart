import React from "react";
import Paleta from "../components/Paleta";
import PixelArt from "../components/PixelArt";

function Home() {
        return (
          <div>
            <head>
              <title>Paleta de Cores</title>
            </head>
                <body>
                    <header>
                        <h1>Paleta de Cores</h1>
                        <Paleta />
                    </header>
                    <section>
                        <PixelArt />
                    </section>
                </body>
            <footer>Pé</footer>
          </div>
        );
    
    
}
export default Home;