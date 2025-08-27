import { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
}

const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const colors = ['hsl(320, 65%, 85%)', 'hsl(260, 60%, 85%)', 'hsl(45, 85%, 85%)', 'hsl(0, 0%, 95%)'];
    
    const balloonElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 20 + 30
    }));
    
    setBalloons(balloonElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-balloon"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: '12s',
          }}
        >
          <div
            className="rounded-full shadow-lg"
            style={{
              backgroundColor: balloon.color,
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.2}px`,
              boxShadow: 'inset -5px -5px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
          <div 
            className="mx-auto mt-1 bg-muted"
            style={{
              width: '2px',
              height: '40px',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;