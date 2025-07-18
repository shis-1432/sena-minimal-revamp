import { useEffect, useState } from 'react';

const CursorBubble = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input, textarea, select')) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input, textarea, select')) {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out ${
        isHovered ? 'scale-150' : 'scale-100'
      } ${isClicking ? 'scale-75' : ''}`}
      style={{
        left: position.x - 12,
        top: position.y - 12,
        transform: `translate(-50%, -50%)`,
      }}
    >
      <div
        className={`w-6 h-6 rounded-full transition-all duration-300 ${
          isHovered 
            ? 'bg-primary border-2 border-primary-foreground' 
            : 'bg-foreground/20 border border-foreground/40'
        }`}
      />
      <div
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isHovered ? 'animate-ping bg-primary/30' : ''
        }`}
      />
    </div>
  );
};

export default CursorBubble;