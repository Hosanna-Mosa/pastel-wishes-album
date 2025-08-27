import { useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MagicalPhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const MagicalPhotoFrame = ({ src, alt, className = "", size = 'md' }: MagicalPhotoFrameProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48', 
    lg: 'w-64 h-80'
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className={`magical-frame-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <Card className={`relative ${sizeClasses[size]} overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105`}>
        <CardContent className="p-0 h-full relative">
          {/* Magical overlay */}
          <div 
            className={`absolute inset-0 z-10 transition-opacity duration-700 ${
              isRevealed ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255,255,255,0.1) 0%, 
                rgba(320, 65%, 85%, 0.3) 30%, 
                rgba(320, 65%, 85%, 0.8) 100%)`
            }}
          />
          
          {/* Photo */}
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              filter: isRevealed ? 'none' : 'blur(2px) brightness(1.2)',
            }}
          />
          
          {/* Floating icons */}
          <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}>
            <Heart 
              className="absolute top-4 right-4 w-6 h-6 text-primary animate-heartbeat" 
              style={{ animationDelay: '0.2s' }}
            />
            <Star 
              className="absolute bottom-4 left-4 w-5 h-5 text-gold animate-sparkle"
              style={{ animationDelay: '0.8s' }}
            />
            <Sparkles 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-lavender animate-sparkle"
              style={{ animationDelay: '1.2s' }}
            />
          </div>
          
          {/* Magical glow effect */}
          <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}>
            <div 
              className="absolute w-32 h-32 rounded-full"
              style={{
                left: `${mousePosition.x}%`,
                top: `${mousePosition.y}%`,
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(320, 85%, 85%, 0.4) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Magical particles */}
      {isRevealed && (
        <div className="magical-particles">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--delay': `${i * 0.3}s`,
                '--angle': `${i * 60}deg`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      <style>{`
        .magical-frame-container {
          position: relative;
        }
        
        .magical-particles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: hsl(320, 65%, 75%);
          border-radius: 50%;
          animation: particle-float 2s ease-out var(--delay) infinite;
          transform-origin: center;
        }
        
        @keyframes particle-float {
          0% {
            opacity: 0;
            transform: rotate(var(--angle)) translateX(0) scale(0);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--angle)) translateX(60px) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--angle)) translateX(120px) scale(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MagicalPhotoFrame;