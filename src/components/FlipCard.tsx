import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

const FlipCard = ({ frontContent, backContent, className = "" }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card-container ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <Card className="h-full card-gradient magical-shadow cursor-pointer transition-all duration-300 hover:magical-glow">
            <CardContent className="h-full">
              {frontContent}
            </CardContent>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="h-full card-gradient magical-shadow cursor-pointer transition-all duration-300 hover:magical-glow">
            <CardContent className="h-full">
              {backContent}
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        .flip-card-container {
          perspective: 1000px;
          height: 300px;
        }
        
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlipCard;