import React, { useEffect, useRef } from 'react';

const Drones: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', updateSize);
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    updateSize();

    class Drone {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      angle: number;
      orbitRadius: number;
      speed: number;

      constructor(color: string, offsetAngle: number) {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = 0;
        this.vy = 0;
        this.size = 4;
        this.color = color;
        this.angle = offsetAngle;
        this.orbitRadius = 60;
        this.speed = 0.08; 
      }

      update() {
        // Target position is around the mouse
        const targetX = mouseX + Math.cos(this.angle) * this.orbitRadius;
        const targetY = mouseY + Math.sin(this.angle) * this.orbitRadius;

        // Easing movement
        this.x += (targetX - this.x) * this.speed;
        this.y += (targetY - this.y) * this.speed;

        // Rotate orbit
        this.angle += 0.05;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Shadow in light mode is darker
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0,0,0,0.2)";
        ctx.fill();

        // Draw connection line to mouse
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(mouseX, mouseY);
        // Darker lines for light background
        ctx.strokeStyle = `rgba(0, 0, 0, 0.1)`; 
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw scan circle around drone
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 122, 255, 0.3)`;
        ctx.stroke();
      }
    }

    const drones: Drone[] = [
      new Drone('#111827', 0),       // Dark Grey
      new Drone('#007AFF', 2),       // Tech Blue
      new Drone('#7c3aed', 4)        // Purple
    ];

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drones.forEach(drone => {
        drone.update();
        drone.draw(ctx);
      });

      // Draw central mouse target
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 opacity-60"
    />
  );
};

export default Drones;