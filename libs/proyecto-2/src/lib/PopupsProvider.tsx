import React from 'react';
import { usePopupStore } from './store/popup';
import { Popup } from './components';

type Props = {
  children: React.ReactNode; 
}
const PopupsProvider: React.FC<Props> = ({children}:Props) => {
  const { popups } = usePopupStore();
  
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {children}
      {/* Renderizar los popups */}
      {Object.keys(popups).map((id) => (
        <Popup key={id} id={id} />
      ))}
    </div>
  );
};

export default PopupsProvider;