import { useState } from 'react';
import { 
  Settings, 
  Launch
} from '@mui/icons-material';
import { MuiDrawerComponent } from './components/MuiDrawerComponent';
import { SilkDrawerComponent } from './components/SilkDrawerComponent';
import { BaseUiDrawerComponent } from './components/BaseUiDrawerComponent';
import { VaulDrawerComponent } from './components/VaulDrawerComponent';
import './App.css';

function App() {
  const [activeDrawer, setActiveDrawer] = useState<'mui' | 'silk' | 'baseui' | 'vaul' | null>(null);
  const [open, setOpen] = useState(false);
  const [complexity, setComplexity] = useState<'light' | 'medium' | 'heavy'>('medium');

  const handleOpen = (type: 'mui' | 'silk' | 'baseui' | 'vaul') => {
    setActiveDrawer(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Wait for exit transition to finish before unmounting to prevent visual jump
    setTimeout(() => {
      setActiveDrawer(null);
    }, 300);
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <div className="badge-gradient">UI Playground</div>
        <h1 className="app-title">React Bottom Sheet Arena</h1>
        <p className="app-subtitle">
          An interactive playground to manually test and inspect bottom-drawer components from Material UI, Silk, Base UI, and Vaul under various render payloads.
        </p>
      </header>

      {/* Main Panel */}
      <main style={{ maxWidth: 800, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <section className="panel">
          <h2 className="panel-title">
            <Settings sx={{ color: '#6366f1' }} /> Payload Configuration
          </h2>
          
          <div className="config-group">
            <div className="config-label">
              <span>Drawer Content Complexity</span>
              <span style={{ color: complexity === 'heavy' ? '#ef4444' : complexity === 'medium' ? '#fbbf24' : '#34d399', fontWeight: 700 }}>
                {complexity.toUpperCase()}
              </span>
            </div>
            <div className="complexity-selector">
              <button 
                className={`complexity-btn ${complexity === 'light' ? 'active light' : ''}`}
                onClick={() => setComplexity('light')}
              >
                Light (~10 nodes)
              </button>
              <button 
                className={`complexity-btn ${complexity === 'medium' ? 'active medium' : ''}`}
                onClick={() => setComplexity('medium')}
              >
                Medium (~80 nodes)
              </button>
              <button 
                className={`complexity-btn ${complexity === 'heavy' ? 'active heavy' : ''}`}
                onClick={() => setComplexity('heavy')}
              >
                Heavy Stress (800 nodes)
              </button>
            </div>
          </div>

          <div className="libraries-container">
            {/* MUI Card */}
            <div className="library-card">
              <div className="library-info">
                <div className="library-name">
                  <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#0288d1' }}></span>
                  Material UI SwipeableDrawer
                </div>
                <div className="library-meta">
                  <span className="meta-pill">Emotion JS</span>
                </div>
              </div>
              <button 
                className="action-btn" 
                style={{ background: 'linear-gradient(135deg, #0288d1 0%, #01579b 100%)', boxShadow: '0 4px 12px rgba(2, 136, 209, 0.25)' }}
                onClick={() => handleOpen('mui')}
              >
                <Launch fontSize="small" /> Open Sheet
              </button>
            </div>

            {/* Silk Card */}
            <div className="library-card">
              <div className="library-info">
                <div className="library-name">
                  <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#a855f7' }}></span>
                  Silk Sheet
                </div>
                <div className="library-meta">
                  <span className="meta-pill">CSS Layered</span>
                </div>
              </div>
              <button 
                className="action-btn" 
                style={{ background: 'linear-gradient(135deg, #a855f7 0%, #701a75 100%)', boxShadow: '0 4px 12px rgba(168, 85, 247, 0.25)' }}
                onClick={() => handleOpen('silk')}
              >
                <Launch fontSize="small" /> Open Sheet
              </button>
            </div>

            {/* Base UI Card */}
            <div className="library-card">
              <div className="library-info">
                <div className="library-name">
                  <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                  Base UI Drawer
                </div>
                <div className="library-meta">
                  <span className="meta-pill">Headless / CSS</span>
                </div>
              </div>
              <button
                className="action-btn"
                style={{ background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)' }}
                onClick={() => handleOpen('baseui')}
              >
                <Launch fontSize="small" /> Open Sheet
              </button>
            </div>

            {/* Vaul Card */}
            <div className="library-card">
              <div className="library-info">
                <div className="library-name">
                  <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f59e0b' }}></span>
                  Vaul Drawer
                </div>
                <div className="library-meta">
                  <span className="meta-pill">Radix / CSS</span>
                </div>
              </div>
              <button
                className="action-btn"
                style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.25)' }}
                onClick={() => handleOpen('vaul')}
              >
                <Launch fontSize="small" /> Open Sheet
              </button>
            </div>
          </div>
        </section>


      </main>

      {/* Active Drawers Portal Wrapper */}
      <MuiDrawerComponent
        open={activeDrawer === 'mui' && open}
        onOpen={() => {}}
        onClose={handleClose}
        complexity={complexity}
      />

      <SilkDrawerComponent
        open={activeDrawer === 'silk' && open}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            handleClose();
          }
        }}
        complexity={complexity}
      />

      <BaseUiDrawerComponent
        open={activeDrawer === 'baseui' && open}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            handleClose();
          }
        }}
        complexity={complexity}
      />

      <VaulDrawerComponent
        open={activeDrawer === 'vaul' && open}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            handleClose();
          }
        }}
        complexity={complexity}
      />
    </div>
  );
}

export default App;
