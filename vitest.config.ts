import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    // Windows: tránh RPC timeout của worker thread bằng pool forks, chạy tuần tự.
    pool: 'forks',
    fileParallelism: false,
  },
});
