import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%' }} />
  </StrictMode>
);
