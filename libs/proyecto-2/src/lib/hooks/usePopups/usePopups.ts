import { usePopupStore } from "../../store/popup";

export const usePopups = () => {
  const addPopup = usePopupStore((state) => state.addPopup);
  const closePopup = usePopupStore((state) => state.closePopup);
  const closeAllPopups = usePopupStore((state) => state.closeAllPopups);

  return {
    addPopup,
    closePopup,
    closeAllPopups,
  };
};

export default usePopups;