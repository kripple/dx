// eslint-disable-next-line import/order
import { ThemeProvider } from '@/providers/theme/ThemeProvider';

// eslint-disable-next-line import/order
import { App } from '@/components/App';

export function AppProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
