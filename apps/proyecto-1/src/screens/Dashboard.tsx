import { PopupsProvider, usePopups } from '@monitoreo-inteligente/proyecto-2';
import { ComponentA, ComponentB } from '../components';
import { Button, Container, Grid2 } from '@mui/material';
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
      component: <ComponentA />,
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
      component: <ComponentB />,
    });
  };
  const handleCloseAll = () => {
    closeAllPopups();
  };
  return (
    <Container>
      <Grid2
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          padding: '10px',
        }}
      >
        <h1 style={{ margin: 0 }}>Ronny Contreras</h1>
        <Button variant="contained" onClick={handleCloseAll}>
          Cerrar todos
        </Button>
      </Grid2>

      <Grid2
        style={{ 
          padding: '10px', 
          width: '100%', 
          height: 'calc(100vh - 100px)', 
          border: '1px solid black',
          overflow: 'hidden', 
        }}
      >
        <PopupsProvider>
          <Button
            variant="contained"
            onClick={handleAddPopupA}
            style={{ margin: '10px' }}
          >
            Agregar Popup A
          </Button>
          <Button
            variant="contained"
            onClick={handleAddPopupB}
            style={{ margin: '10px' }}
          >
            Agregar Popup B
          </Button>
        </PopupsProvider>
      </Grid2>
    </Container>
  );
}

export default Dashboard;
