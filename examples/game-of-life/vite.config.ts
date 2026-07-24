import { defineConfig } from 'vite';

export default defineConfig({
    base: '/examples/game-of-life/',
    build: {
        target: 'esnext',
    },
});
