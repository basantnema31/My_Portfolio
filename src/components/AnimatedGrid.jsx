import React, { useEffect, useRef } from 'react';

// This component replicates the "animated block movie" effect from the original site.
// It draws a grid and elegantly fades in/out blocks to create a dynamic background.
export const AnimatedGrid = ({ darkMode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Grid config
        const size = 40;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Resize handler
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        let offset = 0;
        // 0.3 pixels per frame at 60fps = 18 pixels per second. By explicitly multiplying by deltaTime, 
        // the grid moves at exactly 18 pixels per sec even if scrolling drops the frame rate to 30fps!
        const speedPerMs = 18 / 1000; 

        // Initial time
        let lastTime = performance.now();

        // Render loop
        const render = (currentTime) => {
            const deltaTime = currentTime - lastTime;
            lastTime = currentTime;

            offset = (offset + speedPerMs * deltaTime) % size;

            ctx.clearRect(0, 0, width, height);

            // Read prop instead of forcefully dragging down layout calculations via document.classList!
            const themeColor = darkMode
                ? 'rgba(255, 255, 255, '
                : 'rgba(15, 23, 42, ';

            ctx.strokeStyle = `${themeColor}0.08)`;
            ctx.lineWidth = 1;

            // MASSIVE CANVAS CPU OPTIMIZATION: Combine drawing instructions into one batched paint layer instead of 60 separate strokes!
            ctx.beginPath();
            
            // Draw verticals
            for (let x = offset - size; x <= width + size; x += size) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            
            // Draw horizontals
            for (let y = offset - size; y <= height + size; y += size) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            
            ctx.stroke();

            animationFrameId = requestAnimationFrame(render);
        };

        // Bootstrap the very first frame with a valid timestamp
        render(performance.now());

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[0]"
        />
    );
};
