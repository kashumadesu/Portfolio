// components/WaveBackground.jsx
import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let step = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height * 0.5;
      const linesCount = 18; // dense wireframe layers

      step += 0.012; // smooth animation speed

      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();

        // Tiered neon-purple opacity over dark bg-purple-950
        const alpha = (1 - i / linesCount) * 0.55 + 0.08;
        ctx.strokeStyle = `rgba(192, 132, 252, ${alpha})`; // Tailwind purple-400 equivalent
        ctx.lineWidth = 1.2;

        const offset = (i * Math.PI) / (linesCount * 1.2);

        for (let x = 0; x <= width; x += 4) {
          // Dynamic dual-harmonic wave calculations
          const wave1 = Math.sin(x * 0.0025 + step + offset) * 80;
          const wave2 = Math.cos(x * 0.005 - step * 0.7 + offset * 0.5) * 35;
          const dampening = Math.sin((x / width) * Math.PI); // softens waves at the left/right screen edges

          const y = centerY + (wave1 + wave2) * dampening;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}