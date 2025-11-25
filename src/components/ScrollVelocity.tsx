'use client';

import React, { useEffect, useRef } from 'react';

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({ 
  texts, 
  velocity = 0.5,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!contentRef.current || texts.length === 0) return;

    const content = contentRef.current;
    let cleanup: (() => void) | null = null;

    // Wait for layout to calculate widths
    const timeoutId = setTimeout(() => {
      if (!content || content.children.length === 0) return;

      // Calculate total width of one set
      const oneSetWidth = Array.from(content.children)
        .slice(0, texts.length)
        .reduce((acc, child) => {
          const element = child as HTMLElement;
          const marginRight = parseInt(window.getComputedStyle(element).marginRight) || 0;
          return acc + element.offsetWidth + marginRight;
        }, 0);

      if (oneSetWidth === 0) return;

      // Handle scroll with velocity
      const handleScroll = () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          if (!content) return;

          const scrollY = window.scrollY || window.pageYOffset;
          const scrollPosition = scrollY * velocity;
          
          // Calculate position with seamless loop
          const loopPosition = scrollPosition % oneSetWidth;
          
          // Apply transform
          content.style.transform = `translateX(-${loopPosition}px)`;
        });
      };

      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Initial positioning
      handleScroll();

      // Store cleanup function
      cleanup = () => {
        window.removeEventListener('scroll', handleScroll);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      if (cleanup) {
        cleanup();
      }
    };
  }, [texts, velocity]);

  // Duplicate texts for seamless infinite scroll (3 sets)
  const duplicatedTexts = [...texts, ...texts, ...texts];

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden w-full ${className}`}
    >
      <div 
        ref={contentRef}
        className="inline-flex will-change-transform"
      >
        {duplicatedTexts.map((text, index) => (
          <span 
            key={index}
            className="inline-block whitespace-nowrap mr-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollVelocity;

