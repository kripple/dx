import Box from '@mui/material/Box';

import '@/components/App.css';

// Put dynamic styles (the ones that change based on some variable) in the style prop, and put  static styles in the sx prop.

export function App() {
  return (
    <Box
      data-env={import.meta.env.MODE}
      data-testid="App"
      data-version={import.meta.env.APP_VERSION}
    ></Box>
  );
}
