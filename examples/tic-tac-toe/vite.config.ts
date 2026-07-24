import { defineConfig } from 'vite';

export default defineConfig({
    base: '/examples/tic-tac-toe/',
    build: {
        target: 'esnext',
    },
});
