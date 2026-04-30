import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import qrcode from 'qrcode-terminal';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        {
            name: 'display-qr',
            configureServer(server) {
                const url = `http://localhost:8000`; // Alamat project kamu
                console.log('\nScan QR Code ini untuk membuka di HP:');
                qrcode.generate(url, { small: true });
            }
        }
    ],
});