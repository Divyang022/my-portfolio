"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#c770f0", "#ff6ec7", "#ffffff"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
            random: true,
          },
          size: {
            value: { min: 1.5, max: 4 },
            random: true,
          },
          links: {
            enable: true,
            distance: 120,
            color: "#c770f0",
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
