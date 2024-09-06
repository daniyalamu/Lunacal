import React from 'react';
import { Grid, Divider, GlobalStyles } from '@mui/material';
import Tabs from './Component/Tabs.jsx';
import Paragraph from './Component/Paragraph.jsx';
import Gallery from './Component/Gallery.jsx';

function App() {
  return (
    <>
      <GlobalStyles styles={{ body: { backgroundColor: '#1E1E1E', color: 'white', margin: 0, padding: 0 } }} />
      <div className="App" style={{ height: '100vh' }}>
        <header className="App-header">
          {/* Header content if needed */}
        </header>
        
        <Grid container spacing={2} style={{ height: '100%' }}>
          {/* Paragraph component on the left side taking up 50% */}
          <Grid item xs={6}>
            <div style={{ backgroundColor: '#616161', border: '1px solid #96BEE7', height: '94%', padding: '16px' }}>
              <Paragraph />
            </div>
          </Grid>

          {/* Right side split between Tabs and Gallery */}
          <Grid item xs={6}>
            <Grid container direction="column" style={{ height: '100%' }}>
              {/* Tabs component taking up 50% of the right side */}
              <Grid item style={{ height: '49%', backgroundColor: '#363C43', position: 'relative' }}>
                <Tabs />
              </Grid>
              
              {/* Divider with a gap between Tabs and Gallery */}
              <Grid item style={{ height: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Divider style={{ width: '80%', borderBottom: '1px solid white' }} />
              </Grid>

              {/* Gallery component taking up 50% of the right side */}
              <Grid item style={{ height: '49%', backgroundColor: '#363C43', position: 'relative' }}>
                <Gallery />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
