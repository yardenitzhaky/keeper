import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import { resolve } from 'path'

   export default defineConfig({
     plugins: [react()],
     build: {
       minify: 'terser',
       sourcemap: false,
       rollupOptions: {
         input: {
           main: resolve(__dirname, 'index.html'),
         },
       },
     },
     server: {
       historyApiFallback: true,
     },
     publicDir: 'public',
   })