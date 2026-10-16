import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../utils/sound';
import {
  Sparkles,
  Zap,
  RotateCcw,
  Crosshair,
  Move,
  Flame,
  Layers,
  Database,
  Cpu,
  Code2
} from 'lucide-react';

interface PlaygroundNode {
  id: string;
  name: string;
  iconType: string;
  category: string;
  color: string;
  homeX: number; // Percentage 0-100
  homeY: number; // Percentage 0-100
  currentX: number; // Pixels
  currentY: number; // Pixels
  vx: number;
  vy: number;
  rotation: number;
  size: number;
  isPulled: boolean;
  isDragging: boolean;
  accent: string;
  details: string;
}

const INITIAL_NODES: Omit<PlaygroundNode, 'currentX' | 'currentY' | 'vx' | 'vy' | 'rotation' | 'isPulled' | 'isDragging'>[] = [
  {
    id: 'java-spring',
    name: 'Spring Boot 3.4',
    iconType: 'server',
    category: 'Backend',
    color: '#00d4ff',
    accent: 'rgba(0, 212, 255, 0.4)',
    homeX: 20,
    homeY: 26,
    size: 64,
    details: 'Powering AI Resume Analyzer backend with Spring AI & REST endpoints'
  },
  {
    id: 'pgvector',
    name: 'PGVector 1536D',
    iconType: 'database',
    category: 'Vector DB',
    color: '#ff1f2d',
    accent: 'rgba(255, 31, 45, 0.4)',
    homeX: 48,
    homeY: 18,
    size: 72,
    details: 'Dense vector similarity calculations for zero-hallucination semantic matching'
  },
  {
    id: 'react-vite',
    name: 'React 18 / Next.js',
    iconType: 'code',
    category: 'Frontend',
    color: '#00d4ff',
    accent: 'rgba(0, 212, 255, 0.4)',
    homeX: 78,
    homeY: 28,
    size: 66,
    details: 'Interactive UI components, dynamic HUD interfaces, and high-performance state'
  },
  {
    id: 'generative-ai',
    name: 'Grounded RAG / LLM',
    iconType: 'cpu',
    category: 'AI / ML',
    color: '#ff1f2d',
    accent: 'rgba(255, 31, 45, 0.4)',
    homeX: 25,
    homeY: 65,
    size: 70,
    details: 'Retrieval-augmented generation producing verified XYZ career roadmaps'
  },
  {
    id: 'spiderman-emblem',
    name: 'Spider-Web Core',
    iconType: 'flame',
    category: 'Signature',
    color: '#ff3344',
    accent: 'rgba(255, 51, 68, 0.5)',
    homeX: 52,
    homeY: 52,
    size: 80,
    details: 'Custom physics engine for web-slinging elastic pulls and spring mechanics'
  },
  {
    id: 'interview-tracker',
    name: '180-Day Tracker',
    iconType: 'layers',
    category: 'Full-Stack',
    color: '#00d4ff',
    accent: 'rgba(0, 212, 255, 0.4)',
    homeX: 80,
    homeY: 68,
    size: 64,
    details: '26 passing Vitest scenarios, timestamp study timer & Prisma transactions'
  }
];

export const WebPlayground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [nodes, setNodes] = useState<PlaygroundNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<PlaygroundNode | null>(null);
  const [activeWebs, setActiveWebs] = useState<{ startX: number; startY: number; targetX: number; targetY: number; life: number; color: string }[]>([]);
  const [interactionMode, setInteractionMode] = useState<'sling' | 'drag'>('sling');

  const draggedNodeId = useRef<string | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);

  // Initialize node pixel positions once container is measured
  useEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    const initialized: PlaygroundNode[] = INITIAL_NODES.map((n) => ({
      ...n,
      currentX: (n.homeX / 100) * width,
      currentY: (n.homeY / 100) * height,
      vx: 0,
      vy: 0,
      rotation: 0,
      isPulled: false,
      isDragging: false
    }));

    setNodes(initialized);
  }, []);

  // Physics animation loop: Hooke's Spring Law + Inertia Damping
  const updatePhysics = useCallback(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.isDragging) return node;

        const homePixelX = (node.homeX / 100) * width;
        const homePixelY = (node.homeY / 100) * height;

        // Spring force towards anchor point
        const k = 0.045; // Spring stiffness
        const damping = 0.86; // Air resistance / friction

        const fx = (homePixelX - node.currentX) * k;
        const fy = (homePixelY - node.currentY) * k;

        // Add subtle floating pendulum harmonic drift
        const harmonic = Math.sin(Date.now() * 0.002 + node.homeX) * 0.15;

        const newVx = (node.vx + fx) * damping + harmonic;
        const newVy = (node.vy + fy) * damping;

        const newX = node.currentX + newVx;
        const newY = node.currentY + newVy;

        // Rotational inertia
        const newRot = (newVx * 0.6) % 360;

        return {
          ...node,
          currentX: newX,
          currentY: newY,
          vx: Math.abs(newVx) < 0.01 ? 0 : newVx,
          vy: Math.abs(newVy) < 0.01 ? 0 : newVy,
          rotation: newRot
        };
      })
    );
  }, []);

  // Run physics frame updates
  useEffect(() => {
    const loop = () => {
      updatePhysics();
      animFrameId.current = requestAnimationFrame(loop);
    };
    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [updatePhysics]);

  // Render elastic spider web threads connecting to nodes & between anchors
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    // Draw background spider web matrix connecting nodes to their anchor points
    nodes.forEach((node) => {
      const homeX = (node.homeX / 100) * width;
      const homeY = (node.homeY / 100) * height;

      // Draw anchor point pulse
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.arc(homeX, homeY, 6, 0, Math.PI * 2);
      ctx.stroke();

      // Draw elastic web tether
      ctx.strokeStyle = node.isDragging || node.isPulled ? node.color : 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = node.isDragging ? 2.5 : 1.2;
      ctx.setLineDash([]);
      ctx.shadowColor = node.color;
      ctx.shadowBlur = node.isDragging ? 12 : 3;

      ctx.beginPath();
      ctx.moveTo(homeX, homeY);

      // Spring curve depending on displacement
      const midX = (homeX + node.currentX) / 2 + (node.vy * 4);
      const midY = (homeY + node.currentY) / 2 - (node.vx * 4);
      ctx.quadraticCurveTo(midX, midY, node.currentX, node.currentY);
      ctx.stroke();
      ctx.restore();
    });

    // Draw active web shot strands
    activeWebs.forEach((web) => {
      ctx.save();
      ctx.strokeStyle = web.color;
      ctx.lineWidth = 2.2 * web.life;
      ctx.shadowColor = web.color;
      ctx.shadowBlur = 15;
      ctx.globalAlpha = web.life;

      ctx.beginPath();
      ctx.moveTo(web.startX, web.startY);
      ctx.lineTo(web.targetX, web.targetY);
      ctx.stroke();

      // Web particle splats on contact
      ctx.fillStyle = web.color;
      for (let i = 0; i < 4; i++) {
        const pAngle = Math.random() * Math.PI * 2;
        const pDist = Math.random() * 12;
        ctx.fillRect(
          web.targetX + Math.cos(pAngle) * pDist,
          web.targetY + Math.sin(pAngle) * pDist,
          2,
          2
        );
      }
      ctx.restore();
    });
  }, [nodes, activeWebs]);

  // Click on a node to web-sling pull it towards cursor with spring recoil
  const handleNodeClick = (node: PlaygroundNode, e: React.MouseEvent) => {
    if (node.isDragging) return;

    soundFX.playWebShoot();
    setSelectedNode(node);

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Create animated web line from click to object
    setActiveWebs((prev) => [
      ...prev,
      {
        startX: clickX,
        startY: clickY,
        targetX: node.currentX,
        targetY: node.currentY,
        life: 1.0,
        color: node.color
      }
    ]);

    // Apply impulse pull towards click
    const dx = clickX - node.currentX;
    const dy = clickY - node.currentY;
    const dist = Math.hypot(dx, dy) || 1;

    const pullStrength = 14;
    const impulseVx = (dx / dist) * pullStrength;
    const impulseVy = (dy / dist) * pullStrength;

    setNodes((prev) =>
      prev.map((n) =>
        n.id === node.id
          ? {
              ...n,
              vx: impulseVx,
              vy: impulseVy,
              isPulled: true
            }
          : n
      )
    );

    setTimeout(() => {
      soundFX.playSpringRebound();
      setNodes((prev) =>
        prev.map((n) => (n.id === node.id ? { ...n, isPulled: false } : n))
      );
      setActiveWebs([]);
    }, 450);
  };

  // Dragging support (desktop mouse + mobile touch)
  const handleMouseDown = (node: PlaygroundNode, clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    draggedNodeId.current = node.id;
    dragOffset.current = {
      x: clientX - rect.left - node.currentX,
      y: clientY - rect.top - node.currentY
    };

    soundFX.playClick();
    setSelectedNode(node);

    setNodes((prev) =>
      prev.map((n) => (n.id === node.id ? { ...n, isDragging: true, vx: 0, vy: 0 } : n))
    );
  };

  const handleMouseMove = (clientX: number, clientY: number) => {
    if (!draggedNodeId.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const targetX = clientX - rect.left - dragOffset.current.x;
    const targetY = clientY - rect.top - dragOffset.current.y;

    setNodes((prev) =>
      prev.map((n) => {
        if (n.id === draggedNodeId.current) {
          // Calculate throw velocity from displacement
          const vx = (targetX - n.currentX) * 0.7;
          const vy = (targetY - n.currentY) * 0.7;
          return {
            ...n,
            currentX: targetX,
            currentY: targetY,
            vx,
            vy
          };
        }
        return n;
      })
    );
  };

  const handleMouseUp = () => {
    if (!draggedNodeId.current) return;
    soundFX.playSpringRebound();
    const id = draggedNodeId.current;
    draggedNodeId.current = null;

    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isDragging: false } : n))
    );
  };

  // Reset all objects to their home coordinates
  const handleResetPositions = () => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    soundFX.playWebShoot();

    setNodes((prev) =>
      prev.map((n) => ({
        ...n,
        currentX: (n.homeX / 100) * width,
        currentY: (n.homeY / 100) * height,
        vx: 0,
        vy: 0,
        isDragging: false,
        isPulled: false
      }))
    );
  };

  // Render node icon helper
  const renderIcon = (type: string, color: string) => {
    switch (type) {
      case 'server':
        return <Zap className="w-6 h-6" style={{ color }} />;
      case 'database':
        return <Database className="w-6 h-6" style={{ color }} />;
      case 'code':
        return <Code2 className="w-6 h-6" style={{ color }} />;
      case 'cpu':
        return <Cpu className="w-6 h-6" style={{ color }} />;
      case 'flame':
        return <Flame className="w-7 h-7" style={{ color }} />;
      default:
        return <Layers className="w-6 h-6" style={{ color }} />;
    }
  };

  return (
    <section id="playground" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-950/70 text-red-400 border border-red-500/30 mb-3">
              <Crosshair className="w-3.5 h-3.5 text-red-400 animate-spin" />
              <span>SIGNATURE INTERACTION · 3D PHYSICS LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400">Web-Slinging</span> Lab
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Test the physics engine! <strong className="text-cyan-400">Click any element to fire a web strand</strong> and pull it with elastic spring tension, or <strong className="text-red-400">click &amp; drag to throw</strong> objects with natural momentum.
            </p>
          </div>

          {/* Interactive controls */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="inline-flex rounded-xl bg-slate-900/90 p-1 border border-slate-800">
              <button
                onClick={() => {
                  setInteractionMode('sling');
                  soundFX.playClick();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  interactionMode === 'sling'
                    ? 'bg-red-600 text-white shadow-spider-red'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Crosshair className="w-3.5 h-3.5" />
                <span>Web Sling (Pull)</span>
              </button>
              <button
                onClick={() => {
                  setInteractionMode('drag');
                  soundFX.playClick();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  interactionMode === 'drag'
                    ? 'bg-cyan-600 text-white shadow-spider-blue'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Move className="w-3.5 h-3.5" />
                <span>Drag &amp; Throw</span>
              </button>
            </div>

            <button
              onClick={handleResetPositions}
              title="Reset all objects to original anchors"
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Anchors</span>
            </button>
          </div>
        </div>

        {/* Physics Canvas & Playground Container */}
        <div
          ref={containerRef}
          onMouseMove={(e) => handleMouseMove(e.clientX, e.clientY)}
          onMouseUp={handleMouseUp}
          onTouchMove={(e) => {
            if (e.touches.length > 0) {
              handleMouseMove(e.touches[0].clientX, e.touches[0].clientY);
            }
          }}
          onTouchEnd={handleMouseUp}
          className="relative w-full h-[520px] sm:h-[580px] rounded-2xl overflow-hidden border border-slate-800 bg-[#040816] web-grid-pattern shadow-2xl select-none"
        >
          {/* Subtle radar circle guides */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[300px] h-[300px] rounded-full border border-cyan-500 radar-ring" />
            <div className="w-[480px] h-[480px] rounded-full border border-red-500 radar-ring" style={{ animationDelay: '2s' }} />
          </div>

          {/* Canvas for elastic web cords */}
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

          {/* Interactive Floating Objects */}
          {nodes.map((node) => {
            const isHovered = selectedNode?.id === node.id;
            return (
              <div
                key={node.id}
                style={{
                  transform: `translate3d(${node.currentX - node.size / 2}px, ${node.currentY - node.size / 2}px, 0) rotate(${node.rotation}deg)`,
                  width: `${node.size}px`,
                  height: `${node.size}px`
                }}
                onClick={(e) => handleNodeClick(node, e)}
                onMouseDown={(e) => handleMouseDown(node, e.clientX, e.clientY)}
                onTouchStart={(e) => {
                  if (e.touches.length > 0) {
                    handleMouseDown(node, e.touches[0].clientX, e.touches[0].clientY);
                  }
                }}
                className={`absolute z-20 cursor-grab active:cursor-grabbing flex flex-col items-center justify-center rounded-2xl p-2.5 transition-shadow duration-200 ${
                  node.isDragging ? 'ring-2 ring-cyan-400 shadow-spider-blue scale-110' : ''
                }`}
              >
                {/* Visual Glassmorphic Glowing Orb */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center spider-glass border backdrop-blur-md relative overflow-hidden transition-transform group-hover:scale-105"
                  style={{
                    borderColor: node.color,
                    boxShadow: isHovered
                      ? `0 0 24px ${node.accent}`
                      : `0 4px 18px rgba(0, 0, 0, 0.4)`
                  }}
                >
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-40 blur-md pointer-events-none" style={{ backgroundColor: node.color }} />
                  {renderIcon(node.iconType, node.color)}
                </div>

                {/* Readable Title & Category Label Pill */}
                <div
                  className="mt-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono tracking-wide text-slate-200 bg-slate-950/95 border border-slate-700/80 pointer-events-none whitespace-nowrap shadow-lg flex items-center gap-1.5"
                  style={{ borderColor: `${node.color}66` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
                  <span className="font-semibold text-white">{node.name}</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-[9px] text-slate-400">{node.category}</span>
                </div>
              </div>
            );
          })}

          {/* Interactive Inspection HUD Drawer */}
          <AnimatePresence>
            {selectedNode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-30 p-4 rounded-xl spider-glass border border-slate-700/80 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: selectedNode.color }} />
                    <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                      {selectedNode.name}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {selectedNode.category}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedNode.details}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Status: Active Simulation</span>
                  <span className="text-cyan-400">Velocity: {Math.round(Math.hypot(selectedNode.vx, selectedNode.vy))} px/s</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Hint */}
          <div className="absolute top-4 right-4 pointer-events-none hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Click to sling web · Drag to throw</span>
          </div>
        </div>
      </div>
    </section>
  );
};
