"use client";
import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  className?: string;
};

// A simple swipeable card stack for mobile screens
export function StackSwipeGallery({ images, className }: Props) {
  const [index, setIndex] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [hasShownTutorial, setHasShownTutorial] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const ordered = useMemo(() => images.slice(index).concat(images.slice(0, index)), [images, index]);

  // Show tutorial when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShownTutorial) {
            setShowTutorial(true);
            setHasShownTutorial(true);
            
            // Hide tutorial after 5 seconds
            const timer = setTimeout(() => {
              setShowTutorial(false);
            }, 5000);
            
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, [hasShownTutorial]);

  const swipeConfidenceThreshold = 80;
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offsetX = info.offset.x;
    if (Math.abs(offsetX) > swipeConfidenceThreshold) {
      // Any swipe (left or right) increases the index
      if (index < images.length - 1) {
        setIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div ref={componentRef} className={cn("relative h-[32rem] w-full max-w-lg mx-auto overflow-visible px-4 flex flex-col items-center", className)}>
      {/* Tutorial hint for new users */}
      {showTutorial && (
        <motion.div 
          className="absolute -top-20 left-0 right-0 mx-auto text-center z-20"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-2xl border-2 border-primary/30 inline-block max-w-sm">
            <p className="text-xl md:text-2xl font-bold animate-pulse text-center">
              ← Swipe right or left →
            </p>
            <p className="text-sm text-primary-foreground/80 mt-1 text-center">
              Navigate through memories
            </p>
          </div>
        </motion.div>
      )}
      
      {/* Scroll up hint when at last image */}
      {index === images.length - 1 && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-sm text-muted-foreground animate-pulse">
            ↑ Scroll up to see more memories
          </p>
        </div>
      )}
      
      <AnimatePresence initial={false} mode="popLayout">
        {ordered.slice(0, 3).map((src, i) => {
          const isTop = i === 0;
          const scale = 1 - i * 0.06;
          const translateY = i * 16; // px
          const zIndex = 10 - i;
          return (
            <motion.div
              key={`${src}-${i}-${index}`}
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex }}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: -translateY, scale }}
              exit={{ opacity: 0, y: -60, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <motion.img
                src={src}
                alt="memory"
                draggable={false}
                className="rounded-3xl shadow-2xl w-[90%] h-80 object-cover bg-card border-4 border-white/20"
                whileTap={{ scale: 0.98 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ cursor: isTop ? "grab" as const : "default" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  delay: 0.3 
                }}
                // Enhanced swipe animations
                whileDrag={{
                  scale: 1.08,
                  transition: { duration: 0.1 }
                }}
                dragTransition={{ 
                  bounceStiffness: 600, 
                  bounceDamping: 20 
                }}
                // Visual feedback during drag
                onDrag={(_, info) => {
                  if (isTop) {
                    const rotate = info.offset.x * 0.15; // Increased rotation for more visible effect
                    return { rotate };
                  }
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      <div className="absolute bottom-3 left-0 right-0 mx-auto flex items-center justify-center gap-1">
        {images.map((_, i) => {
          const active = i === index;
          return (
            <span 
              key={i} 
              className={cn("h-1.5 rounded-full transition-all duration-300", 
                active ? "w-6 bg-primary" : "w-2 bg-muted"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}


