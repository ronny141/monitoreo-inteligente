import React, { useState, useCallback, useRef } from 'react';
import { useStore } from 'zustand';
import { usePopupStore } from '../../store/popup';
import Draggable from '../Draggable';

interface PopupProps {
  id: string;
}

const Popup: React.FC<PopupProps> = ({ id }) => {
  const { title, left, top, width, height, zIndex, component } = useStore(
    usePopupStore,
    (state) => state.popups[id]
  );

  const setPopupPosition = useStore(
    usePopupStore,
    (state) => state.setPopupPosition
  );
  const bringPopupToFront = useStore(
    usePopupStore,
    (state) => state.bringPopupToFront
  );
  const closePopup = useStore(usePopupStore, (state) => state.closePopup);
  console.log('Popup title: ', title, ' id: ', id);
  const [isDragging, setIsDragging] = useState(false);

  const titleRef = useRef<HTMLDivElement | null>(null);

  const handleDragStart = () => {
    setIsDragging(true);
    bringPopupToFront(id);
  };

  const handleDragEnd = useCallback(
    (newLeft: number, newTop: number) => {
      setIsDragging(false);
      setPopupPosition(id, newLeft, newTop);
    },
    [id, setPopupPosition]
  );

  const handleClick = () => {
    bringPopupToFront(id);
  };
  return (
    <Draggable
      style={{
        left,
        top,
        width,
        height,
        zIndex,
        position: 'absolute',
        backgroundColor: '#fff',
        border: isDragging ? '2px solid #F7E928' : '1px solid #ccc',
        boxShadow: isDragging
          ? '0 10px 20px rgba(0, 0, 0, 0.5)'
          : '0 4px 8px rgba(0, 0, 0, 0.2)',
        opacity: isDragging ? 0.9 : 1,
        transition: 'all 0.2s ease-in-out',
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragHandle={titleRef}
    >
      <div style={{ height: '100%' }}> 
        <div
          ref={titleRef}
          style={{
            padding: '10px',
            backgroundColor: '#f1f1f1',
            borderBottom: '1px solid #ddd',
            fontWeight: 'bold',
            cursor: 'move',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {title}
          <button onClick={() => closePopup(id)}>Cerrar</button>
        </div>
        <div
          style={{
            width: '100%',
            height: `calc(100% - 42px)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleClick}
        >
          {component}
        </div>
      </div>
    </Draggable>
  );
};

export default React.memo(Popup);
