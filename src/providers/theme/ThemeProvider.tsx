// eslint-disable-next-line import/order
import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import { useCallback, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { ThemeContext } from '@/providers/theme/ThemeContext';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleMode = useCallback(
    () => setMode((current) => (current === 'light' ? 'dark' : 'light')),
    [],
  );

  const memo = useMemo(
    () => ({
      mode,
      theme,
      toggleMode,
    }),
    [mode, theme],
  );

  return (
    <ThemeContext.Provider value={memo}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
