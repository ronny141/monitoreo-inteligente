import React, { useState, useEffect, useCallback, RefObject } from 'react';

interface DraggableProps {
  onDragStart?: () => void;
  onDragEnd: (left: number, top: number) => void;
  dragHandle?: RefObject<HTMLElement>; 
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Draggable: React.FC<DraggableProps> = ({ onDragStart, onDragEnd, dragHandle, style, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ left: 0, top: 0 });
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (style?.left && style?.top) {
      setDragPosition({
        left: parseFloat((style.left || 0).toString()),
        top: parseFloat((style.top || 0).toString())
      });
    }
  }, [style?.left, style?.top]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragHandle?.current && !dragHandle.current.contains(e.target as Node)) {
      return; 
    }

    setIsDragging(true);
    setStartDrag({ x: e.clientX, y: e.clientY });

    if (onDragStart) {
      onDragStart();
    }

    e.preventDefault();
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - startDrag.x;
      const deltaY = e.clientY - startDrag.y;

      setDragPosition((prev) => ({
        left: prev.left + deltaX,
        top: prev.top + deltaY
      }));

      setStartDrag({ x: e.clientX, y: e.clientY });
    }
  }, [isDragging, startDrag]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      onDragEnd(dragPosition.left, dragPosition.top);
    }
  }, [isDragging, dragPosition, onDragEnd]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        ...style,
        left: `${dragPosition.left}px`,
        top: `${dragPosition.top}px`,
        position: 'absolute',
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : 'left 0.2s ease, top 0.2s ease'
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
