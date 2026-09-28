import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const base = process.env.VITE_BASE
    || (process.env.GITHUB_ACTIONS ? '/portfolio-saurav/' : '/');

export default defineConfig({
    plugins: [vue()],
    base,
    server: {
        port: 5173,
    },
});
