import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


export default {
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0
    port: parseInt(process.env.PORT) || 5173, // Use Render's PORT or default to 5173
  },
};