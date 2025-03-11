import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0', // Allows access from any IP
//     port: 5173, // Ensure this matches your Ngrok tunnel port
//     strictPort: true, // Ensures Vite doesn't switch to another port
//     allowedHosts: ['.ngrok-free.app'], // Allows all Ngrok subdomains
//   },
// });
