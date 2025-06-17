import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/c-skills-todo-list/",
  build: {
    outDir: "docs"
  },
  plugins: [
    tailwindcss(),
  ],
})