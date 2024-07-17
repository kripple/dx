import * as childProcess from 'child_process';
// import dns from 'dns';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
// import type { ManualChunksOption } from 'rollup';
// import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

// dns.setDefaultResultOrder('verbatim');

const gitHash = childProcess
  .execSync('git rev-parse HEAD')
  .toString()
  .trimEnd();
const gitBranch = childProcess
  .execSync('git branch --show-current')
  .toString()
  .trimEnd();

// let simpleCount = 0;
// const manualChunks: ManualChunksOption = (id) => {
//   if (id.includes('node_modules')) {
//     if (id.includes('@mui')) {
//       return 'mui';
//     } else if (id.includes('@emotion')) {
//       return 'emotion';
//     }
//     // console.warn('Missing chunk for node module ', id);
//     return 'node-modules';
//   }

//   if (id.includes('react-components')) {
//     return `react-components-${simpleCount++}`;
//   }
//   // console.log('No chunk specified for ', id);
// };

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks,
  //     },
  //   },
  //   sourcemap: true,
  // },
  clearScreen: false,
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(gitHash),
    'import.meta.env.GIT_BRANCH': JSON.stringify(gitBranch),
  },
  plugins: [
    react(),
    // visualizer({
    //   template: 'treemap',
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  // test: {
  //   environment: 'happy-dom',
  //   setupFiles: './src/test/setup.ts',
  //   threads: false,
  // },
});
