import { useMouseDrag } from '@/hooks/useMouseDrag';
import { useRef } from 'react';
import style from 'styled-components';
const StyledSliderWrapper = style.div`
  position: relative;
  white-space: nowrap;
  overflow:auto;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  } 
  user-select: none;
`;

export function SliderWrapper({ ...props }) {
  const scrollContainerRef = useRef(null);
  const scrollLeftStart = useRef(0);

  useMouseDrag({
    elementRef: scrollContainerRef,
    onDrag: (deltaX) => {
      scrollContainerRef.current.scrollLeft = scrollLeftStart.current - deltaX;
    },
    onMouseDown: () => {
      scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
    },
  });

  return <StyledSliderWrapper ref={scrollContainerRef} {...props} />;
}
