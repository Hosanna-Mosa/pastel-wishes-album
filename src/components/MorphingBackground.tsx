import { useEffect, useState } from 'react';

interface Blob {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
  speed: number;
  direction: number;
}

const MorphingBackground = () => {
  const [blobs, setBlobs] = useState<Blob[]>([]);

  useEffect(() => {
    const createBlobs = () => {
      const blobArray: Blob[] = [];
      for (let i = 0; i < 5; i++) {
        blobArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 200 + 100,
          hue: Math.random() * 60 + 300, // Pink to purple range
          speed: Math.random() * 0.5 + 0.2,
          direction: Math.random() * Math.PI * 2,
        });
      }
      setBlobs(blobArray);
    };

    createBlobs();

    const animateBlobs = () => {
      setBlobs(prev => prev.map(blob => {
        const newX = blob.x + Math.cos(blob.direction) * blob.speed;
        const newY = blob.y + Math.sin(blob.direction) * blob.speed;
        
        return {
          ...blob,
          direction: blob.direction + (Math.random() - 0.5) * 0.1,
          x: newX > 120 ? -20 : newX < -20 ? 120 : newX,
          y: newY > 120 ? -20 : newY < -20 ? 120 : newY,
        };
      }));
    };

    const interval = setInterval(animateBlobs, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full filter blur-3xl animate-pulse"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            background: `radial-gradient(circle, hsla(${blob.hue}, 60%, 75%, 0.4), hsla(${blob.hue}, 60%, 75%, 0.1))`,
            transform: `translate(-50%, -50%)`,
            animationName: `morph-${blob.id}`,
            animationDuration: `${15 + blob.id * 2}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
      
    </div>
  );
};

export default MorphingBackground;