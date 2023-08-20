import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particlesConfig";

export const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <div className="absolute -z-50">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
    </div>
  );
};
