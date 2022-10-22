import { rmSync } from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-electron-plugin'
import wasmPack from 'vite-plugin-wasm-pack'
import { customStart } from 'vite-electron-plugin/plugin'
import renderer from 'vite-plugin-electron-renderer'
import { debounce } from './electron/helper'
import pkg from './package.json'

rmSync('dist-electron', { recursive: true, force: true })

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    vue(),
    // VitePluginFonts({
    //   custom: {
    //     preload: true,
    //     prefetch: true,
    //     families: [
    //       { name: 'OpenSans', src: './src/assets/fonts/Open_Sans*.woff2' },
    //       { name: 'Roboto', src: './src/assets/fonts/Roboto*.woff2', },
    //       { name: 'Poppins', src: './src/assets/fonts/Poppins*.woff2' },
    //       { name: 'Mulish', src: './src/assets/fonts/Mulish*.woff2' }
    //     ]
    //   },
    // }),
    electron({
      include: ['electron'],
      transformOptions: {
        sourcemap: !!process.env.VSCODE_DEBUG,
      },
      // Will start Electron via VSCode Debug
      plugins: process.env.VSCODE_DEBUG
        ? [customStart(debounce(() => console.log(/* For `.vscode/.debug.script.mjs` */ '[startup] Electron App')))]
        : undefined,
    }),
    // Use Node.js API in the Renderer-process
    renderer({
      nodeIntegration: true,
    }),
    // wasm pack
    wasmPack(['.\\hades']),
  ],
  server: process.env.VSCODE_DEBUG
    ? (() => {
        const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
        return {
          host: url.hostname,
          port: +url.port,
        }
      })()
    : undefined,
  clearScreen: false,
})
