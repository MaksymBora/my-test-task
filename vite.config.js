import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  // base: '/my-test-task/',
  base: './',
  build: {
    outDir: './dist',
    commonjsOptions: {
      transformMixedEsModules: true,
      // include: [/linked-dep/, /node_modules/],
    },
  },
});
