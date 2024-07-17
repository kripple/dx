import type { Theme as MuiTheme } from '@mui/material/styles/createTheme';
import { createContext, useContext } from 'react';

type Theme = {
  mode: 'dark' | 'light';
  theme: MuiTheme;
  toggleMode: () => void;
};

export const ThemeContext = createContext<Theme | undefined>(undefined);

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('useThemeContext must be called within a ThemeProvider');
  }

  return context;
};

export const useTheme = () => {
  const { theme } = useThemeContext();
  return theme;
};

export const useThemeColors = () => {
  const theme = useTheme();

  const {
    primary,
    secondary,
    success,
    info,
    warning,
    error,
    common,
    background,
  } = theme.palette;

  return {
    primary: primary.main,
    secondary: secondary.main,
    success: success.main,
    info: info.main,
    warning: warning.main,
    error: error.main,
    white: common.white,
    black: common.black,
    background: background.default,
  } as const;
};

export const useToggleMode = () => {
  const { toggleMode } = useThemeContext();
  return toggleMode;
};

export const useIsDarkMode = () => {
  const { mode } = useThemeContext();
  return mode === 'dark';
};

export const useIsLightMode = () => {
  const { mode } = useThemeContext();
  return mode === 'light';
};
