import React, { useRef, useEffect } from 'react';

interface DotGridProps {
    dotSize?: number;
    dotSpacing?: number;
    dotColor?: string;
    rectWidth?: number;
    rectHeight?: number;
    className?: string;
}

const DotGrid: React.FC<DotGridProps> = ({
    dotSize = 2,
    dotSpacing = 30,
    dotColor = 'rgba(0, 82, 204, 0.3)',
    rectWidth = 200,
    rectHeight = 200,
    className = ''
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: -1000, y: -1000 });
    const animationFrameId = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.scale(dpr, dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mousePos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            mousePos.current = { x: -1000, y: -1000 };
        };

        const drawDots = () => {
            const rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            const cols = Math.ceil(rect.width / dotSpacing);
            const rows = Math.ceil(rect.height / dotSpacing);

            const { x: mouseX, y: mouseY } = mousePos.current;

            // Define rectangle boundaries
            const rectLeft = mouseX - rectWidth / 2;
            const rectRight = mouseX + rectWidth / 2;
            const rectTop = mouseY - rectHeight / 2;
            const rectBottom = mouseY + rectHeight / 2;

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = i * dotSpacing;
                    const y = j * dotSpacing;

                    // Check if dot is within the rectangle
                    const isInRect =
                        x >= rectLeft &&
                        x <= rectRight &&
                        y >= rectTop &&
                        y <= rectBottom;

                    // Calculate distance from mouse for smooth fade
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Base opacity
                    let opacity = 0.3;

                    if (isInRect) {
                        // Dots inside rectangle are more visible
                        opacity = 0.8;
                    } else {
                        // Fade based on distance from rectangle
                        const fadeDistance = 150;
                        const distanceFromRect = Math.max(0, distance - rectWidth / 2);
                        opacity = Math.max(0.15, 0.3 - (distanceFromRect / fadeDistance) * 0.2);
                    }

                    ctx.fillStyle = dotColor.replace(/[\d.]+\)$/g, `${opacity})`);
                    ctx.beginPath();
                    ctx.arc(x, y, dotSize, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId.current = requestAnimationFrame(drawDots);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        drawDots();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [dotSize, dotSpacing, dotColor, rectWidth, rectHeight]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default DotGrid;
