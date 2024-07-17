import { createRoot } from 'react-dom/client';

import { AppProviders } from '@/providers/AppProviders';

import '@/root.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProviders />,
);
