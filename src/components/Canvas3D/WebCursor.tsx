import React, { useEffect, useRef } from 'react';
import { soundFX } from '../../utils/sound';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
}

interface WebStrand {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  currentProgress: number;
  branches: { x: number; y: number }[];
  life: number;
  color: string;
}

interface WebCursorProps {
  enabled?: boolean;
}

export const WebCursor: React.FC<WebCursorProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const strandsRef = useRef<WebStrand[]>([]);
  const mouseRef = useRef({ x: -100, y: -100, lastX: -100, lastY: -100 });
  const isTouchRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    // Detect touch-only mobile devices to disable mouse cursor overhead
    if ('ontouchstart' in window && window.innerWidth < 768) {
      isTouchRef.current = true;
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Add trailing points for elastic web strand
      if (Math.hypot(e.clientX - mouseRef.current.lastX, e.clientY - mouseRef.current.lastY) > 5) {
        pointsRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          age: 0
        });
      }

      // Limit trailing points
      if (pointsRef.current.length > 24) {
        pointsRef.current.shift();
      }
    };

    const onClick = (e: MouseEvent) => {
      soundFX.playWebShoot();

      // Launch 3-4 spider web strands radiating towards screen anchors or elements
      const targetCount = 3;
      const angleStep = (Math.PI * 2) / targetCount;
      const baseAngle = Math.random() * Math.PI;

      for (let i = 0; i < targetCount; i++) {
        const angle = baseAngle + i * angleStep + (Math.random() - 0.5) * 0.4;
        const dist = 70 + Math.random() * 110;
        const targetX = e.clientX + Math.cos(angle) * dist;
        const targetY = e.clientY + Math.sin(angle) * dist;

        // Sub-branches
        const branches = [];
        const numBranches = 2;
        for (let b = 0; b < numBranches; b++) {
          const bAngle = angle + (b % 2 === 0 ? 0.35 : -0.35);
          branches.push({
            x: e.clientX + Math.cos(bAngle) * (dist * 0.65),
            y: e.clientY + Math.sin(bAngle) * (dist * 0.65)
          });
        }

        strandsRef.current.push({
          startX: e.clientX,
          startY: e.clientY,
          targetX,
          targetY,
          currentProgress: 0,
          branches,
          life: 1.0,
          color: Math.random() > 0.4 ? '#ff1f2d' : '#00d4ff'
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onClick, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle web strands from clicks
      for (let i = strandsRef.current.length - 1; i >= 0; i--) {
        const s = strandsRef.current[i];
        s.currentProgress = Math.min(1, s.currentProgress + 0.18);
        s.life -= 0.025;

        if (s.life <= 0) {
          strandsRef.current.splice(i, 1);
          continue;
        }

        const currX = s.startX + (s.targetX - s.startX) * s.currentProgress;
        const currY = s.startY + (s.targetY - s.startY) * s.currentProgress;

        ctx.save();
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1.4 * s.life;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = Math.max(0, s.life * 0.85);

        // Main line
        ctx.beginPath();
        ctx.moveTo(s.startX, s.startY);
        // Slight elastic curve
        const midX = (s.startX + currX) / 2 + Math.sin(s.life * 10) * 3;
        const midY = (s.startY + currY) / 2 + Math.cos(s.life * 10) * 3;
        ctx.quadraticCurveTo(midX, midY, currX, currY);
        ctx.stroke();

        // Branches
        if (s.currentProgress > 0.5) {
          s.branches.forEach((br) => {
            ctx.beginPath();
            ctx.moveTo((s.startX + currX) / 2, (s.startY + currY) / 2);
            ctx.lineTo(br.x, br.y);
            ctx.stroke();
          });
        }
        ctx.restore();
      }

      // Draw trailing silky spider silk between recent mouse positions
      const pts = pointsRef.current;
      for (let i = 0; i < pts.length; i++) {
        pts[i].age += 1;
        pts[i].x += pts[i].vx;
        pts[i].y += pts[i].vy;
      }

      // Remove old points
      pointsRef.current = pts.filter((p) => p.age < 20);

      if (pointsRef.current.length > 2) {
        ctx.save();
        ctx.strokeStyle = '#00d4ff';
        ctx.lineWidth = 1.2;
        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 6;
        ctx.globalAlpha = 0.35;

        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        for (let i = 1; i < pointsRef.current.length; i++) {
          const xc = (pointsRef.current[i].x + pointsRef.current[i - 1].x) / 2;
          const yc = (pointsRef.current[i].y + pointsRef.current[i - 1].y) / 2;
          ctx.quadraticCurveTo(pointsRef.current[i - 1].x, pointsRef.current[i - 1].y, xc, yc);
        }
        ctx.stroke();
        ctx.restore();
      }

      // Draw glowing Spider reticle cursor
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        ctx.save();
        ctx.strokeStyle = '#ff1f2d';
        ctx.lineWidth = 1.2;
        ctx.shadowColor = '#ff1f2d';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 4, 0, Math.PI * 2);
        ctx.stroke();

        // Crosshairs
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)';
        ctx.beginPath();
        ctx.moveTo(mouseRef.current.x - 8, mouseRef.current.y);
        ctx.lineTo(mouseRef.current.x - 3, mouseRef.current.y);
        ctx.moveTo(mouseRef.current.x + 3, mouseRef.current.y);
        ctx.lineTo(mouseRef.current.x + 8, mouseRef.current.y);
        ctx.moveTo(mouseRef.current.x, mouseRef.current.y - 8);
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y - 3);
        ctx.moveTo(mouseRef.current.x, mouseRef.current.y + 3);
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y + 8);
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onClick);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
      style={{ display: isTouchRef.current ? 'none' : 'block' }}
    />
  );
};
