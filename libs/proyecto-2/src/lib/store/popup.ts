import { create } from 'zustand';

interface Popup {
  id: string;
  title: string;
  left: number;
  top: number;
  width: number;
  height: number;
  zIndex: number;
}

interface PopupStore {
  popups: { [id: string]: Popup };
  highestZIndex: number;
  addPopup: (popup: Popup) => void;
  setPopupPosition: (id: string, left: number, top: number) => void;
  bringPopupToFront: (id: string) => void;
  closePopup: (id: string) => void;
  closeAllPopups: () => void;
}

export const usePopupStore = create<PopupStore>((set) => ({
  popups: {},
  highestZIndex: 1,

  addPopup: (popup) =>
    set((state) => ({
      popups: {
        ...state.popups,
        [popup.id]: { ...popup, zIndex: state.highestZIndex },
      },
      highestZIndex: state.highestZIndex + 1,
    })),

  setPopupPosition: (id, left, top) =>
    set((state) => ({
      popups: {
        ...state.popups,
        [id]: { ...state.popups[id], left, top },
      },
    })),

  bringPopupToFront: (id: string) =>
    set((state) => ({
      popups: {
        ...state.popups,
        [id]: { ...state.popups[id], zIndex: state.highestZIndex }, 
      },
      highestZIndex: state.highestZIndex + 1, 
    })),

  closePopup: (id) =>
    set((state) => {
      const { [id]: _, ...remainingPopups } = state.popups;
      return { popups: remainingPopups };
    }),

  closeAllPopups: () =>
    set(() => ({
      popups: {},
      highestZIndex: 1,
    })),
}));
