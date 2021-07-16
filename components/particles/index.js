import { useState, useEffect } from "react"
import Particles from 'react-particles-js';

export const ParticleComponent = () => {
    const size = useWindowSize();  

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        window.addEventListener("resize", handleResize);
      
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

  return (
    <div>
        <Particles
            width={size.width}
            height={size.height}
            params={{
              "fpsLimit": "25",
              "particles": {
                  "number": {
                      "value": 120,
                      "density": {
                          "enable": false
                      }
                  },
                  "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                          "speed": 4,
                          "size_min": 0.3
                      }
                  },
                  "line_linked": {
                      "enable": false
                  },
                  "move": {
                      "random": true,
                      "speed": 1,
                      "direction": "top",
                      "out_mode": "out"
                  }
              },
              "interactivity": {
                  "onresize": {
                    enable: true,
                    density_auto: true,
                    density_area: 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                  },
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "bubble"
                      },
                      "onclick": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  },
                  "modes": {
                      "bubble": {
                          "distance": 250,
                          "duration": 2,
                          "size": 0,
                          "opacity": 0
                      },
                      "repulse": {
                          "distance": 400,
                          "duration": 4
                      }
                  }
              }
          }} />
    </div>
  );
};
