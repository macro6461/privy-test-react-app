import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@solana/web3.js'],
      output: {
        format: 'commonjs',
        globals: {
          '@solana/web3.js': '@solana/web3.js'
        }
      }
    }
  }
})
