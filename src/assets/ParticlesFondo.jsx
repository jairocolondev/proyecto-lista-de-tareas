import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particlesjs-config";
import "../styles/";

const ParticlesFondo = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  const canvasStyle = {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "-1",
  };

  return (
    <>
      <Particles
        className="particles-fondo"
        style={canvasStyle}
        canvasClassName="container-canvas"
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
      />
    </>
  );
};

export default ParticlesFondo;
