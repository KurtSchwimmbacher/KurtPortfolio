'use client';

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [activeCells, setActiveCells] = useState<Set<number>>(new Set());
  const [rippledCells, setRippledCells] = useState<Set<number>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [gridZIndex, setGridZIndex] = useState(20); // Start above content
  const gridSize = 10; // 10x10 grid
  const maxActive = 4;
  const animationDuration = 800; // milliseconds
  const blueHoldDuration = 4000; // How long to stay blue before reverting

  // Calculate distance from center for ripple effect
  const getDistanceFromCenter = (index: number): number => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const centerRow = (gridSize - 1) / 2;
    const centerCol = (gridSize - 1) / 2;
    return Math.sqrt(
      Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
    );
  };

  // Initial ripple effect on page load
  useEffect(() => {
    if (!isInitialLoad) return;

    const totalCells = gridSize * gridSize;
    const cellsWithDistance = Array.from({ length: totalCells }, (_, index) => ({
      index,
      distance: getDistanceFromCenter(index)
    }));

    // Sort by distance from center (farthest first, so center flips last)
    cellsWithDistance.sort((a, b) => b.distance - a.distance);
    const maxDistance = Math.max(...cellsWithDistance.map(c => c.distance));

    // Trigger ripple animation for each cell based on distance
    // Center cells flip last to avoid gap
    cellsWithDistance.forEach(({ index, distance }) => {
      // Ensure center cells (distance 0) get maximum delay
      // Add small buffer to ensure center stays blue longest
      const normalizedDistance = distance === 0 ? 0.01 : distance; // Prevent division issues
      const delay = ((maxDistance - normalizedDistance) / maxDistance) * 1500; // Total ripple duration ~1.5s
      
      setTimeout(() => {
        setRippledCells(prev => {
          const updated = new Set(prev);
          updated.add(index);
          return updated;
        });
      }, Math.max(0, delay));
    });

    // After ripple completes, move grid behind content, fade in content, and start normal animations
    setTimeout(() => {
      setGridZIndex(0);
      setShowContent(true);
      setIsInitialLoad(false);
    }, 1500 + animationDuration);
  }, [isInitialLoad, gridSize, animationDuration]);

  useEffect(() => {
    // Don't start random animations until initial load is complete
    if (isInitialLoad) return;

    const triggerRandomAnimation = () => {
      setActiveCells(prev => {
        // If we're at max active, wait
        if (prev.size >= maxActive) {
          return prev;
        }

        // Find a random cell that's not already active
        let newCell;
        let attempts = 0;
        do {
          newCell = Math.floor(Math.random() * (gridSize * gridSize));
          attempts++;
          // Safety check to avoid infinite loop
          if (attempts > 100) break;
        } while (prev.has(newCell) && prev.size < gridSize * gridSize);

        // If all cells are active, don't add more
        if (prev.size >= maxActive) {
          return prev;
        }

        const newActive = new Set(prev);
        newActive.add(newCell);

        // Remove after animation completes + hold duration
        setTimeout(() => {
          setActiveCells(current => {
            const updated = new Set(current);
            updated.delete(newCell);
            return updated;
          });
        }, animationDuration + blueHoldDuration);

        return newActive;
      });
    };

    // Initial trigger
    const initialDelay = setTimeout(() => {
      triggerRandomAnimation();
    }, 500);

    // Set up interval to trigger new animations
    const interval = setInterval(() => {
      triggerRandomAnimation();
    }, 1000 + Math.random() * 2000); // Random interval between 1-3 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [gridSize, maxActive, animationDuration, blueHoldDuration, isInitialLoad]);

  return (
    <div id="home" className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          perspective: '1000px',
          gap: '0',
          zIndex: gridZIndex,
          backgroundColor: '#1800f4' // Blue background to prevent white lines showing through
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => (
            <div
              key={index}
              className="relative"
              style={{
                transformStyle: 'preserve-3d',
                aspectRatio: '1 / 1',
                overflow: 'hidden', // Prevent any content from showing outside
              }}
            >
            <div
              className="absolute transition-transform duration-700 ease-in-out"
              style={{
                transformStyle: 'preserve-3d',
                top: '-1px',
                left: '-1px',
                right: '-1px',
                bottom: '-1px',
                transform: isInitialLoad 
                  ? (rippledCells.has(index) ? 'rotateY(0deg)' : 'rotateY(180deg)')
                  : (activeCells.has(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'),
              }}
            >
              {/* Front face (white) */}
              <div
                className="absolute inset-0 bg-[#f7f7f7]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              />
              {/* Back face (blue) */}
              <div
                className="absolute inset-0 bg-[#1800f4]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Hero Section */}
      <div 
        className="flex-1 flex flex-col justify-center px-8 relative z-10 transition-opacity duration-1000 ease-in-out"
        style={{
          opacity: showContent ? 1 : 0,
          pointerEvents: showContent ? 'auto' : 'none'
        }}
      >
        <h1 className="text-9xl md:text-[12rem] font-bold text-[#2e2e2e] mb-20 text-left">
          Kurt
        </h1>
        
        {/* Blue Divider Line */}
        <div className="w-full border-t-2 border-blue-600 mb-20"></div>
        
        {/* Content Below Divider */}
        <div className="w-full flex justify-between items-start">
          {/* Left - Selected Work */}
          <div className="text-lg text-[#2e2e2e] font-medium">
            Selected Work
          </div>
          
          {/* Center - Year */}
          <div className="text-lg text-[#2e2e2e] font-medium text-center flex-1">
            2024/2025
          </div>
          
          {/* Right - Description */}
          <div className="text-lg text-[#2e2e2e] text-right max-w-lg leading-relaxed">
            I'm Kurt, a recent UX and Development graduate based in Pretoria. I care about solving problems that are true to their causes and while I'm there, why not make it pretty too?
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
