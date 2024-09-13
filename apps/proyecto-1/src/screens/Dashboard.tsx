import { PopupsProvider, usePopups } from '@monitoreo-inteligente/proyecto-2';
import { ComponentA, ComponentB } from '../components';
import { Button, Container, Grid, Grid2 } from '@mui/material'; 
export function Dashboard() {
  const { addPopup, closeAllPopups } = usePopups();

  const handleAddPopupA = () => {
    const id = `popup-a-${Date.now()}`;
    addPopup({
      id,
      title: `Popup A`,
      left: 100,
      top: 100,
      width: 250,
      height: 200,
      zIndex: Date.now(),
      component: <ComponentA/>
    });
  };

  const handleAddPopupB = () => {
    const id = `popup-b-${Date.now()}`;
    addPopup({
      id,
      title: `Popup B`,
      left: 300,
      top: 300,
      width: 200,
      height: 250,
      zIndex: Date.now(),
      component: <ComponentB/>
    });
  };
  const handleCloseAll = () => {
    closeAllPopups();
  };
  return (
    <Container>
      <div>
        <h1>Ronny Contreras</h1>
        <button onClick={handleCloseAll}>Cerrar todos</button>
      </div>

      <Grid2
        style={{ width: '700px', height: '700px', border: '1px solid black' }}
      >
        <PopupsProvider>
          <Button variant='contained' onClick={handleAddPopupA} style={{ margin: '10px' }}>
            Agregar Popup A
          </Button>
          <Button  variant='contained' onClick={handleAddPopupB} style={{ margin: '10px' }}>
            Agregar Popup B
          </Button>
        </PopupsProvider>
      </Grid2>
    </Container>
  );
}

export default Dashboard;
