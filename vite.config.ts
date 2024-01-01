import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svg from '@svgr/rollup';

export default defineConfig({
  plugins: [
    react(), tsconfigPaths(),
    svg({ 
      svgo: true,
      titleProp: true,
      ref: false,
      memo: false,
      dimensions: true,
      expandProps: 'end',
    })
  ]
});
