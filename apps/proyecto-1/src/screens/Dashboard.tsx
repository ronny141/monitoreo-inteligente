import { PopupsProvider, usePopups } from '@monitoreo-inteligente/proyecto-2';
export function Dashboard() {
  const { addPopup, closeAllPopups } = usePopups();

  const handleAddPopupA = () => {
    const id = `popup-a-${Date.now()}`;
    addPopup({
      id,
      title: `Popup A`,
      left: 100,
      top: 100,
      width: 300,
      height: 200,
      zIndex: Date.now(),
    });
  };

  const handleAddPopupB = () => {
    const id = `popup-b-${Date.now()}`;
    addPopup({
      id,
      title: `Popup B`,
      left: 300,
      top: 300,
      width: 400,
      height: 250,
      zIndex: Date.now(),
    });
  };
  const handleCloseAll = () => {
    closeAllPopups();
  };
  return (
    <div>
      <div>
        <h1>Ronny Contreras</h1>
        <button onClick={handleCloseAll}>Cerrar todos</button>
      </div>

      <div
        style={{ width: '700px', height: '700px', border: '1px solid black' }}
      >
        <PopupsProvider>
          <button onClick={handleAddPopupA} style={{ margin: '10px' }}>
            Agregar Popup A
          </button>
          <button onClick={handleAddPopupB} style={{ margin: '10px' }}>
            Agregar Popup B
          </button>
        </PopupsProvider>
      </div>
    </div>
  );
}

export default Dashboard;
