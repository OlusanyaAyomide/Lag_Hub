import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";

export default function BoardingLayout({children}:{children:React.ReactNode}){
    const {theme} = useTheme()
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, [theme]);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, [theme]);
    return (
        <>
                    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: theme==="light"?"#ffffff":"#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 0,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0000FF",
                    },
                    links: {
                        color: "#0000FF",
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },
                    
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.45,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000,
                        },
                        value: 200,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
        <div className="relative">
            {children}
        </div>
   
        </>

    );
};