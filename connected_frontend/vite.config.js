import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'import.meta.env.VITE_GOOGLE_CLIENT_ID': JSON.stringify(
        env.VITE_GOOGLE_CLIENT_ID || env.REACT_APP_GOOGLE_API_TOKEN,
      ),
      'import.meta.env.VITE_SANITY_PROJECT_ID': JSON.stringify(
        env.VITE_SANITY_PROJECT_ID || env.REACT_APP_SANITY_PROJECT_ID,
      ),
      'import.meta.env.VITE_SANITY_TOKEN': JSON.stringify(
        env.VITE_SANITY_TOKEN || env.REACT_APP_SANITY_TOKEN,
      ),
    },
    build: {
      outDir: 'build',
    },
  };
});
