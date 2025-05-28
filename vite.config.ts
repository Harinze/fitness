

import tailwindcss from '@tailwindcss/vite';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';


const nodePolyfillsFix = (): Plugin => {
  return {
    ...nodePolyfills(),
    resolveId(source: string) {
      const m = /^vite-plugin-node-polyfills\/shims\/(buffer|global|process)$/.exec(source);
      if (m) {
        return `node_modules/vite-plugin-node-polyfills/shims/${m[1]}/dist/index.cjs`;
      }
    },
  };
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfillsFix(),
  ],
  define: {
    'process.env': {}, // for libraries expecting process.env
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer',
    },
  },
});
