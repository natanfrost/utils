import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Card } from './components/Card/index.tsx';
import { Container } from './components/Container/index.tsx';
import { Header } from './components/Header/index.tsx';
import { router } from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
