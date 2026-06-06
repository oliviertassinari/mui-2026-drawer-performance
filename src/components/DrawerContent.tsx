import React, { useMemo } from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Switch, 
  Avatar, 
  Typography, 
  Divider,
  Button
} from '@mui/material';
import {
  Settings,
  Share,
  Close,
  Person,
  Notifications,
  Security,
  Palette,
  Speed,
  Storage
} from '@mui/icons-material';

interface DrawerContentProps {
  complexity: 'light' | 'medium' | 'heavy';
  onClose: () => void;
}

export const DrawerContent: React.FC<DrawerContentProps> = ({ complexity, onClose }) => {
  // Generate heavy complexity list items
  const heavyItems = useMemo(() => {
    if (complexity !== 'heavy') return [];
    return Array.from({ length: 800 }).map((_, index) => {
      // Simulate some CPU scripting cost during rendering
      const mathValue = Math.sqrt(index) * Math.sin(index);
      return {
        id: index,
        title: `Heavy Item #${index + 1}`,
        description: `Calculated hash: ${mathValue.toFixed(4)} • DOM complexity level: 3`,
        category: index % 4 === 0 ? 'System' : index % 4 === 1 ? 'Network' : index % 4 === 2 ? 'Security' : 'Storage'
      };
    });
  }, [complexity]);

  if (complexity === 'light') {
    return (
      <div className="drawer-container light-mode-container" data-testid="drawer-content">
        <div className="drawer-header">
          <Typography variant="h6" className="drawer-title">
            Lightweight Sheet
          </Typography>
          <button onClick={onClose} className="drawer-close-btn" aria-label="Close">
            <Close />
          </button>
        </div>
        <div className="drawer-body">
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
            This is a simple bottom sheet rendering minimal DOM nodes. It is used to measure baseline mount latency and transition frame rates without heavy JS styling overhead.
          </Typography>
          <div className="light-spec-box">
            <div><strong>DOM Elements:</strong> ~10 nodes</div>
            <div><strong>Rendering Path:</strong> Native CSS</div>
          </div>
          <Button 
            variant="contained" 
            fullWidth 
            onClick={onClose}
            sx={{ 
              mt: 4, 
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              color: 'white',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Dismiss Sheet
          </Button>
        </div>
      </div>
    );
  }

  if (complexity === 'medium') {
    return (
      <div className="drawer-container" data-testid="drawer-content">
        <div className="drawer-header">
          <Typography variant="h6" className="drawer-title">
            Medium Sheet (Interactive Panel)
          </Typography>
          <button onClick={onClose} className="drawer-close-btn" aria-label="Close">
            <Close />
          </button>
        </div>
        <div className="drawer-body">
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 3 }}>
            Contains interactive controls, avatars, lists and triggers. Simulates a standard application settings pane or feature sheet.
          </Typography>

          <List sx={{ width: '100%', bgcolor: 'transparent', p: 0 }}>
            <ListItem sx={{ px: 0, py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Avatar sx={{ bgcolor: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}>
                  <Person fontSize="small" />
                </Avatar>
              </ListItemIcon>
              <ListItemText 
                primary={<span style={{ color: '#f3f4f6', fontWeight: 500, fontSize: '14px', display: 'block' }}>User Profile</span>}
                secondary={<span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', display: 'block', marginTop: '2px' }}>Configure login accounts & credentials</span>}
              />
            </ListItem>
            
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            <ListItem sx={{ px: 0, py: 1.5 }} secondaryAction={<Switch defaultChecked color="primary" />}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Avatar sx={{ bgcolor: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}>
                  <Notifications fontSize="small" />
                </Avatar>
              </ListItemIcon>
              <ListItemText 
                primary={<span style={{ color: '#f3f4f6', fontWeight: 500, fontSize: '14px', display: 'block' }}>Push Notifications</span>}
                secondary={<span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', display: 'block', marginTop: '2px' }}>Receive alerts for benchmark runs</span>}
              />
            </ListItem>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            <ListItem sx={{ px: 0, py: 1.5 }} secondaryAction={<Switch color="primary" />}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Avatar sx={{ bgcolor: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <Security fontSize="small" />
                </Avatar>
              </ListItemIcon>
              <ListItemText 
                primary={<span style={{ color: '#f3f4f6', fontWeight: 500, fontSize: '14px', display: 'block' }}>Developer Sandbox</span>}
                secondary={<span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', display: 'block', marginTop: '2px' }}>Enable local hardware acceleration logs</span>}
              />
            </ListItem>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            <ListItem sx={{ px: 0, py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Avatar sx={{ bgcolor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                  <Palette fontSize="small" />
                </Avatar>
              </ListItemIcon>
              <ListItemText 
                primary={<span style={{ color: '#f3f4f6', fontWeight: 500, fontSize: '14px', display: 'block' }}>Dynamic Theming</span>}
                secondary={<span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', display: 'block', marginTop: '2px' }}>Change canvas color based on GPU fps</span>}
              />
            </ListItem>
          </List>

          <Button 
            variant="outlined" 
            fullWidth 
            onClick={onClose}
            sx={{ 
              mt: 3, 
              color: 'rgba(255,255,255,0.8)',
              borderColor: 'rgba(255,255,255,0.15)',
              borderRadius: '8px',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.03)'
              }
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  // Heavy Complexity (800 items with math calculations)
  return (
    <div className="drawer-container heavy-mode-container" data-testid="drawer-content">
      <div className="drawer-header">
        <div>
          <Typography variant="h6" className="drawer-title" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Speed sx={{ color: '#ef4444' }} /> Heavy Stress Sheet
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            Rendering 800 items (Calculates math in render loops)
          </Typography>
        </div>
        <button onClick={onClose} className="drawer-close-btn" aria-label="Close">
          <Close />
        </button>
      </div>
      <div className="drawer-body heavy-body">
        <div className="heavy-warning-box">
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#f87171' }}>
            Warning: High CPU render stress enabled!
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(248, 113, 113, 0.8)' }}>
            This test highlights how DOM mount size and Javascript rendering time degrade UI animation frames.
          </Typography>
        </div>

        <div className="heavy-list-scroll">
          {heavyItems.map((item) => (
            <div key={item.id} className="heavy-item">
              <div className="heavy-item-icon-wrapper">
                {item.category === 'System' && <Settings fontSize="inherit" sx={{ color: '#6366f1' }} />}
                {item.category === 'Network' && <Share fontSize="inherit" sx={{ color: '#ec4899' }} />}
                {item.category === 'Security' && <Security fontSize="inherit" sx={{ color: '#10b981' }} />}
                {item.category === 'Storage' && <Storage fontSize="inherit" sx={{ color: '#f59e0b' }} />}
              </div>
              <div className="heavy-item-text">
                <div className="heavy-item-title">{item.title}</div>
                <div className="heavy-item-desc">{item.description}</div>
              </div>
              <div className="heavy-item-badge">{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
