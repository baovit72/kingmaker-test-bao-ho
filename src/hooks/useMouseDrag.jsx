import { useRef } from 'react';
import { useEventListener } from './useEventListener';

export function useMouseDrag({ elementRef, onDrag, onMouseDown }) {
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);

  const handleMouseDown = (e) => {
    onMouseDown();
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      const deltaY = e.clientX - dragStartXRef.current;
      onDrag(deltaY);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  useEventListener('mousedown', handleMouseDown, elementRef);

  return { handleMouseDown };
}
