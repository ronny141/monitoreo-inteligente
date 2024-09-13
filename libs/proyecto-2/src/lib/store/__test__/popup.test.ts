import { act } from 'react';
import { usePopupStore } from '../popup';

describe('usePopupStore', () => {
  test('should add a popup', () => {
    const { addPopup } = usePopupStore.getState();

    const newPopup = {
      id: 'popup1',
      title: 'Test Popup',
      left: 100,
      top: 100,
      width: 300,
      height: 200,
      zIndex: 1,
    };

    act(() => {
      addPopup(newPopup);
    });

    const addedPopup = usePopupStore.getState().popups['popup1'];

    expect(addedPopup).toBeTruthy();
    expect(addedPopup).toMatchObject(newPopup);
  });

  test('should close a popup', () => {
    const { addPopup, closePopup } = usePopupStore.getState();

    const newPopup = {
      id: 'popup1',
      title: 'Test Popup',
      left: 100,
      top: 100,
      width: 300,
      height: 200,
      zIndex: 1,
    };

    act(() => {
      addPopup(newPopup);
      closePopup('popup1');
    });

    expect(usePopupStore.getState().popups['popup1']).toBeUndefined();
  });

  test('should close all popups', () => {
    const { addPopup, closeAllPopups } = usePopupStore.getState();

    const popup1 = {
      id: 'popup1',
      title: 'Popup 1',
      left: 100,
      top: 100,
      width: 300,
      height: 200,
      zIndex: 1,
    };

    const popup2 = {
      id: 'popup2',
      title: 'Popup 2',
      left: 200,
      top: 200,
      width: 300,
      height: 200,
      zIndex: 2,
    };

    act(() => {
      addPopup(popup1);
      addPopup(popup2);
      closeAllPopups();
    });

    expect(usePopupStore.getState().popups).toEqual({});
  });
});