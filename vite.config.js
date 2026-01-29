import { defineConfig } from 'vite';

export default defineConfig({
    base: '/splotnikov/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});
